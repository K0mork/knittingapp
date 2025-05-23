'use client';

import React, { useState, useCallback } from 'react';
import ChartGrid from '@/components/chart/ChartGrid';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Minus, ZoomIn, ZoomOut, Undo, Redo } from 'lucide-react';
import { useChartStateWithHistory, ChartState } from '@/hooks/useChartStateWithHistory';
import { useSelectedSymbol } from '@/context/SelectedSymbolContext';
import { ERASER_SYMBOL_ID } from '@/lib/symbols'; // 消しゴムIDをインポート

// グリッドを初期化する関数
const initializeGrid = (rows: number, cols: number): ChartState['grid'] => {
  return Array(rows).fill(null).map(() => Array(cols).fill(null));
};

const initialRows = 10;
const initialCols = 10;

export default function Home() {
  const {
    state: chartState,
    setState: setChartState,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useChartStateWithHistory({
    rows: initialRows,
    cols: initialCols,
    grid: initializeGrid(initialRows, initialCols),
  });

  const { selectedSymbol } = useSelectedSymbol();
  // const [showGridLines, setShowGridLines] = useState<boolean>(true); // 削除
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // --- 状態更新関数 ---
  const updateGridSize = useCallback((newRows: number, newCols: number) => {
    setChartState(prevState => {
      const oldGrid = prevState.grid;
      const oldRows = prevState.rows;
      const oldCols = prevState.cols;

      // 新しいグリッドを作成し、null で初期化
      const newGrid: ChartState['grid'] = Array(newRows).fill(null).map(() => Array(newCols).fill(null));

      // 既存のグリッドデータを新しいグリッドにコピー
      for (let r = 0; r < Math.min(oldRows, newRows); r++) {
        for (let c = 0; c < Math.min(oldCols, newCols); c++) {
          newGrid[r][c] = oldGrid[r][c];
        }
      }

      return {
        rows: newRows,
        cols: newCols,
        grid: newGrid,
      };
    });
  }, [setChartState]);

  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      updateGridSize(value, chartState.cols);
    }
  };

  const handleColsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      updateGridSize(chartState.rows, value);
    }
  };

  // const addRow = () => updateGridSize(chartState.rows + 1, chartState.cols); // 削除
  const removeRow = () => updateGridSize(Math.max(1, chartState.rows - 1), chartState.cols);
  // const addCol = () => updateGridSize(chartState.rows, chartState.cols + 1); // 削除
  const removeCol = () => updateGridSize(chartState.rows, Math.max(1, chartState.cols - 1));

  // --- 方向指定での行/列追加 ---
  const addRowTop = useCallback(() => {
    setChartState(prevState => {
      const newGrid = [Array(prevState.cols).fill(null), ...prevState.grid];
      return { ...prevState, rows: prevState.rows + 1, grid: newGrid };
    });
  }, [setChartState]);

  const addRowBottom = useCallback(() => {
    setChartState(prevState => {
      const newGrid = [...prevState.grid, Array(prevState.cols).fill(null)];
      return { ...prevState, rows: prevState.rows + 1, grid: newGrid };
    });
  }, [setChartState]);

  const addColLeft = useCallback(() => {
    setChartState(prevState => {
      const newGrid = prevState.grid.map(row => [null, ...row]);
      return { ...prevState, cols: prevState.cols + 1, grid: newGrid };
    });
  }, [setChartState]);

  const addColRight = useCallback(() => {
    setChartState(prevState => {
      const newGrid = prevState.grid.map(row => [...row, null]);
      return { ...prevState, cols: prevState.cols + 1, grid: newGrid };
    });
  }, [setChartState]);

  // セルクリック時の処理 (記号配置/削除)
  const handleCellClick = useCallback((rowIndex: number, colIndex: number) => {
    if (!selectedSymbol) return;

    setChartState(prevState => {
      const newGrid = prevState.grid.map(row => [...row]);
      const currentCell = newGrid[rowIndex][colIndex];

      if (selectedSymbol.id === ERASER_SYMBOL_ID) {
        // 消しゴムが選択されている場合はセルを null にする
        newGrid[rowIndex][colIndex] = null;
      } else {
        // 通常の記号の場合、同じ記号なら削除、そうでなければ配置
        newGrid[rowIndex][colIndex] =
          currentCell?.id === selectedSymbol.id ? null : selectedSymbol;
      }
      return { ...prevState, grid: newGrid };
    });
  }, [selectedSymbol, setChartState]);

  // --- ズーム関連 ---
  const ZOOM_STEP = 0.1;
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 2.0;
  const zoomIn = () => setZoomLevel((prev) => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  const zoomOut = () => setZoomLevel((prev) => Math.max(MIN_ZOOM, prev - ZOOM_STEP));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">編み図エディタ</h1>

      {/* 操作フォーム */}
      <div className="flex flex-wrap gap-4 mb-4 items-end">
        {/* 行設定 */}
        <div className="flex items-end gap-1">
          <div>
            <Label htmlFor="rowsInput">行数</Label>
            <Input
              id="rowsInput"
              type="number"
              value={chartState.rows}
              onChange={handleRowsChange}
              min="1"
              className="w-20"
            />
          </div>
          {/* <Button variant="outline" size="icon" onClick={addRow} aria-label="行を追加"> */}
          {/*  <Plus className="h-4 w-4" /> */}
          {/* </Button> */}
          <Button variant="outline" size="icon" onClick={removeRow} aria-label="行を削除" disabled={chartState.rows <= 1}>
            <Minus className="h-4 w-4" />
          </Button>
        </div>

        {/* 列設定 */}
        <div className="flex items-end gap-1">
          <div>
            <Label htmlFor="colsInput">列数</Label>
            <Input
              id="colsInput"
              type="number"
              value={chartState.cols}
              onChange={handleColsChange}
              min="1"
              className="w-20"
            />
          </div>
          {/* <Button variant="outline" size="icon" onClick={addCol} aria-label="列を追加"> */}
          {/*  <Plus className="h-4 w-4" /> */}
          {/* </Button> */}
          <Button variant="outline" size="icon" onClick={removeCol} aria-label="列を削除" disabled={chartState.cols <= 1}>
            <Minus className="h-4 w-4" />
          </Button>
        </div>

        {/* 方向指定での追加ボタン */}
        <div className="flex items-end gap-1">
          <Button variant="outline" onClick={addRowTop}>上に追加</Button>
          <Button variant="outline" onClick={addRowBottom}>下に追加</Button>
          <Button variant="outline" onClick={addColLeft}>左に追加</Button>
          <Button variant="outline" onClick={addColRight}>右に追加</Button>
        </div>

        {/* グリッド線表示設定 (削除) */}
        {/* <div className="flex items-center space-x-2"> */}
        {/*   <Checkbox */}
        {/*     id="showGridLines" */}
        {/*     checked={showGridLines} */}
        {/*     onCheckedChange={(checked) => setShowGridLines(Boolean(checked))} */}
        {/*   /> */}
        {/*   <Label htmlFor="showGridLines">グリッド線を表示</Label> */}
        {/* </div> */}

        {/* 拡大/縮小設定 */}
        <div className="flex items-end gap-1">
          <Button variant="outline" size="icon" onClick={zoomIn} aria-label="拡大" disabled={zoomLevel >= MAX_ZOOM}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={zoomOut} aria-label="縮小" disabled={zoomLevel <= MIN_ZOOM}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm ml-2">{(zoomLevel * 100).toFixed(0)}%</span>
        </div>

        {/* Undo/Redo ボタン */}
        <div className="flex items-end gap-1">
          <Button variant="outline" size="icon" onClick={undo} aria-label="元に戻す" disabled={!canUndo}>
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={redo} aria-label="やり直し" disabled={!canRedo}>
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* グリッド表示エリア */}
      <div className="flex justify-center items-start overflow-auto">
        <div
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}
          className="transition-transform duration-100 ease-linear"
        >
          <ChartGrid
            gridData={chartState.grid}
            // showGridLines={showGridLines} // 削除
            onCellClick={handleCellClick}
          />
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useSelectedSymbol, SymbolData } from '@/context/SelectedSymbolContext'; // Context フックと型をインポート

interface ChartGridProps {
  rows?: number;
  cols?: number;
}

const ChartGrid: React.FC<ChartGridProps> = ({ rows = 10, cols = 10 }) => {
  const { selectedSymbol } = useSelectedSymbol(); // 選択中の記号を取得
  const [chartData, setChartData] = useState<(SymbolData | null)[][]>([]);

  // rows または cols が変更されたときに chartData を初期化
  useEffect(() => {
    setChartData(Array(rows).fill(null).map(() => Array(cols).fill(null)));
  }, [rows, cols]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (!selectedSymbol) return; // 記号が選択されていなければ何もしない

    // chartData のコピーを作成して更新
    const newChartData = chartData.map(row => [...row]);
    // すでに同じ記号がある場合は削除、なければ配置
    newChartData[rowIndex][colIndex] =
      newChartData[rowIndex][colIndex]?.id === selectedSymbol.id ? null : selectedSymbol;
    setChartData(newChartData);

    console.log(
      `Symbol ${selectedSymbol.label} placed at: row ${rowIndex}, col ${colIndex}`
    );
  };

  // グリッドがまだ初期化されていない場合は何も表示しない
  if (chartData.length === 0) {
    return null;
  }

  return (
    <div className="inline-block border border-gray-300 bg-white"> {/* 背景色を追加 */}
      {chartData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cellSymbol, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                'w-8 h-10 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 text-xs', // text-xs を追加
                // セルに記号がある場合のスタイル
                cellSymbol ? 'font-bold' : '',
                // 選択中の記号と同じ記号が配置されている場合の強調表示 (オプション)
                // selectedSymbol && cellSymbol?.id === selectedSymbol.id ? 'bg-blue-100' : ''
              )}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              role="gridcell"
              aria-label={`Row ${rowIndex + 1}, Column ${colIndex + 1}${cellSymbol ? `, Symbol ${cellSymbol.label}` : ''}`}
            >
              {/* 記号のラベルを表示 (将来的に SVG などに置き換え) */}
              {cellSymbol?.label.substring(0, 3)} {/* ラベルを短縮表示 */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChartGrid;
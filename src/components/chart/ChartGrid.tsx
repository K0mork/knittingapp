'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SymbolData } from '@/context/SelectedSymbolContext';
import SymbolRenderer from './SymbolRenderer';

interface ChartGridProps {
  gridData: (SymbolData | null)[][];
  // showGridLines?: boolean; // 削除
  onCellClick: (rowIndex: number, colIndex: number) => void;
}

// 定数をクラス名として定義
const CELL_WIDTH_CLASS = 'w-8 md:w-12'; // PC:32px, モバイル:48px
const CELL_HEIGHT_CLASS = 'h-10 md:h-12'; // PC:40px, モバイル:48px
const ROW_NUMBER_WIDTH_CLASS = 'w-6'; // 24px
const COL_NUMBER_HEIGHT_CLASS = 'h-6'; // 24px
const ROW_NUMBER_MARGIN_LEFT_CLASS = 'ml-6'; // 左マージン用クラス (w-6に対応)

const ChartGrid: React.FC<ChartGridProps> = ({
  gridData,
  // showGridLines = true, // 削除
  onCellClick,
}) => {
  if (!gridData || gridData.length === 0 || gridData[0].length === 0) {
    return <div className="text-center text-muted-foreground p-4">グリッドデータがありません</div>;
  }

  const rows = gridData.length;
  const cols = gridData[0].length;

  return (
    <div className="inline-flex flex-col">
      {/* 列番号 (右から左へ) */}
      <div className={cn("flex", ROW_NUMBER_MARGIN_LEFT_CLASS)}> {/* 行番号分の左マージン */}
        {Array.from({ length: cols }).map((_, colIndex) => (
          <div
            key={`col-num-${colIndex}`}
            className={cn(
              CELL_WIDTH_CLASS,
              COL_NUMBER_HEIGHT_CLASS,
              'flex items-center justify-center text-center text-xs text-muted-foreground' // text-center を追加
            )}
          >
            {cols - colIndex}
          </div>
        ))}
      </div>

      {/* 行番号とグリッド本体 */}
      <div className="flex">
        {/* 行番号 (下から上へ) */}
        <div className="flex flex-col">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={`row-num-${rowIndex}`}
              className={cn(
                ROW_NUMBER_WIDTH_CLASS,
                CELL_HEIGHT_CLASS,
                'flex items-center justify-center text-xs text-muted-foreground'
              )}
            >
              {rows - rowIndex}
            </div>
          ))}
        </div>

        {/* グリッド本体 */}
        <div className={cn(
          "inline-block bg-white",
          "border border-gray-300" // 常にボーダーを表示
        )}>
          {gridData.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((cellSymbol, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(
                    CELL_WIDTH_CLASS,
                    CELL_HEIGHT_CLASS,
                    'flex items-center justify-center cursor-pointer hover:bg-gray-100 text-xs',
                    'border border-gray-200', // 常にボーダーを表示
                    // !showGridLines && 'm-[0.5px]', // 削除
                    cellSymbol ? 'font-bold' : '',
                  )}
                  onClick={() => onCellClick(rowIndex, colIndex)}
                  role="gridcell"
                  aria-label={`Row ${rows - rowIndex}, Column ${cols - colIndex}${cellSymbol ? `, Symbol ${cellSymbol.label}` : ''}`} // aria-labelも更新
                >
                  {cellSymbol && <SymbolRenderer symbol={cellSymbol} className="w-6 md:w-10 h-6 md:h-10" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartGrid;
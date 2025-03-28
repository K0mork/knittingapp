'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SymbolData } from '@/context/SelectedSymbolContext'; // SymbolData 型のみインポート

interface ChartGridProps {
  gridData: (SymbolData | null)[][]; // グリッドデータを直接受け取る
  showGridLines?: boolean;
  onCellClick: (rowIndex: number, colIndex: number) => void; // セルクリック時のコールバック関数
}

const ChartGrid: React.FC<ChartGridProps> = ({
  gridData,
  showGridLines = true,
  onCellClick, // props から受け取る
}) => {

  // グリッドデータが空または不正な場合は何も表示しない
  if (!gridData || gridData.length === 0 || gridData[0].length === 0) {
    return <div className="text-center text-muted-foreground p-4">グリッドデータがありません</div>;
  }

  const rows = gridData.length;
  const cols = gridData[0].length;

  return (
    <div className={cn(
      "inline-block bg-white",
      showGridLines && "border border-gray-300"
    )}>
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cellSymbol, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                'w-8 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 text-xs',
                showGridLines && 'border border-gray-200',
                !showGridLines && 'm-[0.5px]',
                cellSymbol ? 'font-bold' : '',
              )}
              // 親コンポーネントから渡された onCellClick を呼び出す
              onClick={() => onCellClick(rowIndex, colIndex)}
              role="gridcell"
              aria-label={`Row ${rowIndex + 1}, Column ${colIndex + 1}${cellSymbol ? `, Symbol ${cellSymbol.label}` : ''}`}
            >
              {cellSymbol?.label.substring(0, 3)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChartGrid;
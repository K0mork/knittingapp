'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useSelectedSymbol, SymbolData } from '@/context/SelectedSymbolContext';

interface ChartGridProps {
  rows?: number;
  cols?: number;
  showGridLines?: boolean; // グリッド線表示状態を受け取るプロパティを追加
}

const ChartGrid: React.FC<ChartGridProps> = ({
  rows = 10,
  cols = 10,
  showGridLines = true, // デフォルトは表示する
}) => {
  const { selectedSymbol } = useSelectedSymbol();
  const [chartData, setChartData] = useState<(SymbolData | null)[][]>([]);

  useEffect(() => {
    setChartData(Array(rows).fill(null).map(() => Array(cols).fill(null)));
  }, [rows, cols]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (!selectedSymbol) return;

    const newChartData = chartData.map(row => [...row]);
    newChartData[rowIndex][colIndex] =
      newChartData[rowIndex][colIndex]?.id === selectedSymbol.id ? null : selectedSymbol;
    setChartData(newChartData);

    console.log(
      `Symbol ${selectedSymbol.label} placed at: row ${rowIndex}, col ${colIndex}`
    );
  };

  if (chartData.length === 0) {
    return null;
  }

  return (
    // グリッド線が表示されている場合のみ外枠を表示
    <div className={cn(
      "inline-block bg-white",
      showGridLines && "border border-gray-300"
    )}>
      {chartData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cellSymbol, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                'w-8 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 text-xs',
                // グリッド線が表示されている場合のみセルごとの境界線を表示
                showGridLines && 'border border-gray-200',
                // グリッド線非表示の場合、隣接セルとの間にわずかなスペースを追加して区別しやすくする（オプション）
                !showGridLines && 'm-[0.5px]',
                cellSymbol ? 'font-bold' : '',
              )}
              onClick={() => handleCellClick(rowIndex, colIndex)}
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
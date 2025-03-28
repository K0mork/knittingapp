'use client'; // クリックイベントを扱うため Client Component とする

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ChartGridProps {
  rows?: number;
  cols?: number;
}

const ChartGrid: React.FC<ChartGridProps> = ({ rows = 10, cols = 10 }) => {
  // 将来的に記号データを保持するための状態（今は未使用）
  const [chartData, setChartData] = useState<string[][]>(
    Array(rows).fill(Array(cols).fill(''))
  );

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    console.log(`Cell clicked: row ${rowIndex}, col ${colIndex}`);
    // TODO: Implement symbol placement logic
  };

  return (
    <div className="inline-block border border-gray-300">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                'w-8 h-10 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100',
                // TODO: Add styles for selected cell, symbols, etc.
              )}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              // アクセシビリティ向上のため、役割とラベルを追加
              role="gridcell"
              aria-label={`Row ${rowIndex + 1}, Column ${colIndex + 1}`}
            >
              {/* TODO: Display symbol based on chartData */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChartGrid;
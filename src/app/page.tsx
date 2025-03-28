'use client'; // 状態管理のため Client Component とする

import React, { useState } from 'react';
import ChartGrid from '@/components/chart/ChartGrid';
import { Input } from '@/components/ui/input'; // Input をインポート
import { Label } from '@/components/ui/label'; // Label をインポート

export default function Home() {
  // 行数と列数の状態を管理
  const [rows, setRows] = useState<number>(10);
  const [cols, setCols] = useState<number>(10);

  // Input の変更をハンドルする関数
  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) { // 正の整数のみ受け付ける
      setRows(value);
    }
  };

  const handleColsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) { // 正の整数のみ受け付ける
      setCols(value);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">編み図エディタ</h1>

      {/* グリッドサイズ設定フォーム */}
      <div className="flex gap-4 mb-4 items-end">
        <div>
          <Label htmlFor="rowsInput">行数</Label>
          <Input
            id="rowsInput"
            type="number"
            value={rows}
            onChange={handleRowsChange}
            min="1" // 最小値を設定
            className="w-20"
          />
        </div>
        <div>
          <Label htmlFor="colsInput">列数</Label>
          <Input
            id="colsInput"
            type="number"
            value={cols}
            onChange={handleColsChange}
            min="1" // 最小値を設定
            className="w-20"
          />
        </div>
      </div>

      <div className="flex justify-center items-start">
        {/* ChartGrid に行数と列数を props として渡す */}
        <ChartGrid key={`${rows}-${cols}`} rows={rows} cols={cols} />
        {/* key を変更することで、サイズ変更時にコンポーネントを再マウントさせる */}
      </div>
    </div>
  );
}

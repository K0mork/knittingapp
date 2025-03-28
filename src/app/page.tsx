'use client';

import React, { useState } from 'react';
import ChartGrid from '@/components/chart/ChartGrid';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button'; // Button をインポート
import { Plus, Minus } from 'lucide-react'; // アイコンをインポート

export default function Home() {
  const [rows, setRows] = useState<number>(10);
  const [cols, setCols] = useState<number>(10);

  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setRows(value);
    }
  };

  const handleColsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCols(value);
    }
  };

  // 行を追加する関数
  const addRow = () => setRows((prev) => prev + 1);
  // 行を削除する関数 (1行未満にはしない)
  const removeRow = () => setRows((prev) => Math.max(1, prev - 1));
  // 列を追加する関数
  const addCol = () => setCols((prev) => prev + 1);
  // 列を削除する関数 (1列未満にはしない)
  const removeCol = () => setCols((prev) => Math.max(1, prev - 1));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">編み図エディタ</h1>

      {/* グリッドサイズ設定 & 操作フォーム */}
      <div className="flex flex-wrap gap-4 mb-4 items-end">
        {/* 行設定 */}
        <div className="flex items-end gap-1">
          <div>
            <Label htmlFor="rowsInput">行数</Label>
            <Input
              id="rowsInput"
              type="number"
              value={rows}
              onChange={handleRowsChange}
              min="1"
              className="w-20"
            />
          </div>
          <Button variant="outline" size="icon" onClick={addRow} aria-label="行を追加">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={removeRow} aria-label="行を削除" disabled={rows <= 1}>
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
              value={cols}
              onChange={handleColsChange}
              min="1"
              className="w-20"
            />
          </div>
          <Button variant="outline" size="icon" onClick={addCol} aria-label="列を追加">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={removeCol} aria-label="列を削除" disabled={cols <= 1}>
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-start overflow-auto"> {/* スクロール可能にする */}
        {/* key を変更することで、サイズ変更時にコンポーネントを再マウントさせる */}
        <ChartGrid key={`${rows}-${cols}`} rows={rows} cols={cols} />
      </div>
    </div>
  );
}

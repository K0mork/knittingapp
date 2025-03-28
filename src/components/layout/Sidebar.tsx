'use client'; // Context を利用するため Client Component とする

import React from 'react';
import { useSelectedSymbol } from '@/context/SelectedSymbolContext';
import { defaultSymbols } from '@/lib/symbols';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Button をインポート

const Sidebar = () => {
  const { selectedSymbol, setSelectedSymbol } = useSelectedSymbol();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 border-r">
      <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
        <h3 className="mb-4 text-lg font-semibold tracking-tight px-4">
          記号パレット
        </h3>
        <div className="flex flex-col space-y-1 px-4">
          {defaultSymbols.map((symbol) => (
            <Button
              key={symbol.id}
              variant={selectedSymbol?.id === symbol.id ? 'secondary' : 'ghost'} // 選択状態に応じてスタイルを変更
              className="w-full justify-start"
              onClick={() => setSelectedSymbol(symbol)}
            >
              {/* TODO: Display symbol SVG if available */}
              {symbol.label}
            </Button>
          ))}
        </div>
        {/* TODO: Add custom symbol creation UI */}
      </div>
    </aside>
  );
};

export default Sidebar;
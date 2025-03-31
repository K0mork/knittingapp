'use client';

import React, { useState } from 'react';
import { defaultSymbols } from '@/lib/symbols';
import { useSelectedSymbol } from '@/context/SelectedSymbolContext';
import { cn } from '@/lib/utils';
import SymbolRenderer from './SymbolRenderer';

const MobileSymbolPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedSymbol } = useSelectedSymbol();

  return (
    <div className="fixed bottom-4 right-4 md:hidden z-50">
      {/* フローティングボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-16 rounded-full bg-primary text-white shadow-lg flex items-center justify-center text-3xl"
      >
        {isOpen ? '×' : '☰'}
      </button>

      {/* 記号パレット */}
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-lg max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-4 gap-2">
            {defaultSymbols.map((symbol) => (
              <button
                key={symbol.id}
                onClick={() => {
                  setSelectedSymbol(symbol);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-12 h-12 flex items-center justify-center',
                  'rounded border border-gray-200 hover:bg-gray-100'
                )}
              >
                <SymbolRenderer symbol={symbol} className="w-8 h-8" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSymbolPalette;
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SymbolData } from '@/context/SelectedSymbolContext';

interface SymbolRendererProps {
  symbol: SymbolData | null;
  className?: string;
}

const SymbolRenderer: React.FC<SymbolRendererProps> = ({ symbol, className }) => {
  if (!symbol) return null;

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <img 
        src={symbol.svgPath} 
        alt={symbol.label}
        className="w-full h-full object-contain"
        draggable="false"
      />
    </div>
  );
};

export default SymbolRenderer;
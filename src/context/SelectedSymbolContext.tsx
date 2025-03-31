'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// 仮の記号データ型 (将来的に拡張)
export interface SymbolData {
  id: string;
  label: string; // 表示用ラベル
  width: number; // マス数（横）
  height: number; // マス数（縦）
  svgPath: string; // SVGファイルのパス
}

// Context の型定義
interface SelectedSymbolContextType {
  selectedSymbol: SymbolData | null;
  setSelectedSymbol: (symbol: SymbolData | null) => void;
}

// Context の作成 (初期値は null)
const SelectedSymbolContext = createContext<SelectedSymbolContextType | undefined>(undefined);

// Context Provider コンポーネント
interface SelectedSymbolProviderProps {
  children: ReactNode;
}

export const SelectedSymbolProvider: React.FC<SelectedSymbolProviderProps> = ({ children }) => {
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolData | null>(null);

  return (
    <SelectedSymbolContext.Provider value={{ selectedSymbol, setSelectedSymbol }}>
      {children}
    </SelectedSymbolContext.Provider>
  );
};

// Context を利用するためのカスタムフック
export const useSelectedSymbol = (): SelectedSymbolContextType => {
  const context = useContext(SelectedSymbolContext);
  if (context === undefined) {
    throw new Error('useSelectedSymbol must be used within a SelectedSymbolProvider');
  }
  return context;
};
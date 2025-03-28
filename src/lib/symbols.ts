import { SymbolData } from '@/context/SelectedSymbolContext';

// 消しゴムを表す特別なID
export const ERASER_SYMBOL_ID = 'eraser';

// 仮の記号データ (将来的に拡張・外部から取得など)
export const defaultSymbols: SymbolData[] = [
  // 消しゴムツールを追加
  { id: ERASER_SYMBOL_ID, label: '消しゴム' },
  { id: 'k', label: '表目 (K)' },
  { id: 'p', label: '裏目 (P)' },
  { id: 'yo', label: 'かけ目 (YO)' },
  { id: 'k2tog', label: '右上2目一度 (K2tog)' },
  { id: 'ssk', label: '左上2目一度 (SSK)' },
  // TODO: Add more symbols including SVG data
];
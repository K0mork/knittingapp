import { SymbolData } from '@/context/SelectedSymbolContext';

// 消しゴムを表す特別なID
export const ERASER_SYMBOL_ID = 'eraser';

// 編み図記号データ
export const defaultSymbols: SymbolData[] = [
  // 消しゴムツール
  // Note: 消しゴムは特殊なツールであり、SVGパスやサイズは持たない想定。
  // 必要に応じて width/height/svgPath をダミー値で埋めるか、型定義を見直す。
  // ここでは label のみを持つオブジェクトとしておくが、エラーになる可能性がある。
  // TODO: 消しゴムの扱いを再検討する。一旦 width/height/svgPath を 1/1/空 で設定。
  { id: ERASER_SYMBOL_ID, label: '消去', width: 1, height: 1, svgPath: 'src/lib/symbols/erase.svg' }, // erase.svg を使う

  // 表編み目 (knit)
  // docs/stitchSymbolGuide.md によると、1x1, 2x1, 1x2 のサイズがある。
  // まずは基本の 1x1 を定義する。複数サイズ対応は別途検討。
  { id: 'knit', label: '表編み目', width: 1, height: 1, svgPath: 'src/lib/symbols/knit.svg' },

  // TODO: 他の記号を追加していく
  // { id: 'p', label: '裏目 (P)' },
  // { id: 'yo', label: 'かけ目 (YO)' },
  // { id: 'k2tog', label: '右上2目一度 (K2tog)' },
  // { id: 'ssk', label: '左上2目一度 (SSK)' },
];
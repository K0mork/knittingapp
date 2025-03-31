import { SymbolData } from '@/context/SelectedSymbolContext';

// 消しゴムを表す特別なID
export const ERASER_SYMBOL_ID = 'eraser';

// 編み図記号データ
export const defaultSymbols: SymbolData[] = [
  // 消しゴムツール
  // 消去ツール (erase)
  // docs/stitchSymbolGuide.md の消去記号仕様に基づき1x1で定義
  { id: ERASER_SYMBOL_ID, label: '消去', width: 1, height: 1, svgPath: 'src/lib/symbols/erase.svg' },

  // 表編み目 (knit)
  // docs/stitchSymbolGuide.md によると、1x1, 2x1, 1x2 のサイズがある。
  // まずは基本の 1x1 を定義する。複数サイズ対応は別途検討。
  { id: 'knit', label: '表編み目', width: 1, height: 1, svgPath: 'src/lib/symbols/knit.svg' },

  // 裏編み目 (purl)
  // docs/stitchSymbolGuide.md によると、1x1, 2x1, 1x2 のサイズがある。
  // まずは基本の 1x1 を定義する。複数サイズ対応は別途検討。
  { id: 'purl', label: '裏編み目', width: 1, height: 1, svgPath: 'src/lib/symbols/purl.svg' },

  // TODO: 他の記号を追加していく
  // { id: 'yo', label: 'かけ目 (YO)' },
  // { id: 'k2tog', label: '右上2目一度 (K2tog)' },
  // { id: 'ssk', label: '左上2目一度 (SSK)' },
];
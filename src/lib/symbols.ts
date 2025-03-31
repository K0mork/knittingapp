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

  // 糸をかける (yo)
  { id: 'yo', label: '糸をかける (YO)', width: 1, height: 1, svgPath: 'src/lib/symbols/yo.svg' },

  // 左上3目交差 (left_up_three_one)
  { id: 'left_up_three_one', label: '左上3目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/left_up_three_one.svg' },

  // 左上2目交差 (left_up_two_cross)
  { id: 'left_up_two_cross', label: '左上2目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/left_up_two_cross.svg' },

  // 左上2目1目交差 (left_up_two_one)
  { id: 'left_up_two_one', label: '左上2目1目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/left_up_two_one.svg' },

  // 中央上3目交差 (middle_up_three_one)
  { id: 'middle_up_three_one', label: '中央上3目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/middle_up_three_one.svg' },

  // 裏編み左上2目1目交差 (purl_left_up_two_one)
  { id: 'purl_left_up_two_one', label: '裏編み左上2目1目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/purl_left_up_two_one.svg' },

  // 右上3目交差 (right_up_three_one)
  { id: 'right_up_three_one', label: '右上3目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/right_up_three_one.svg' },

  // 右上2目交差 (right_up_two_cross)
  { id: 'right_up_two_cross', label: '右上2目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/right_up_two_cross.svg' },

  // 右上2目1目交差 (right_up_two_one)
  { id: 'right_up_two_one', label: '右上2目1目交差', width: 1, height: 1, svgPath: 'src/lib/symbols/right_up_two_one.svg' },

  // すべり目 (slip_stitch)
  { id: 'slip_stitch', label: 'すべり目', width: 1, height: 1, svgPath: 'src/lib/symbols/slip_stitch.svg' },

  // ねじり目 (twist_stitch)
  { id: 'twist_stitch', label: 'ねじり目', width: 1, height: 1, svgPath: 'src/lib/symbols/twist_stitch.svg' },

  // 裏ねじり目 (purl_twist_stitch)
  { id: 'purl_twist_stitch', label: '裏ねじり目', width: 1, height: 1, svgPath: 'src/lib/symbols/purl_twist_stitch.svg' },
];
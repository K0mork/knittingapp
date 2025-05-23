# 棒針用編み図作成アプリ 仕様書

## 1. 概要

### 1.1 プロジェクト目的
棒針編みの編み図を簡単に作成・編集・共有できるWebアプリケーションを開発する。既存アプリの問題点を解決し、初心者から上級者まで幅広いユーザーに対応した使いやすいインターフェースを提供する。

### 1.2 対象ユーザー
- 棒針編みの初心者〜上級者
- オリジナルの編み図を作成したい編み物愛好家
- 編み図を共有したい編み物講師やデザイナー

### 1.3 主な特徴
- 直感的で使いやすいインターフェース
- 棒針編み特有の記号を豊富に提供
- 柔軟な編集機能
- 複数のデバイスに対応したレスポンシブデザイン
- 作成した編み図の保存・エクスポート・共有機能

## 2. 機能要件

### 2.1 基本機能

#### 2.1.1 編み図作成基本機能
- **グリッド表示**: 編み図の基本となるマス目グリッドの表示
- **グリッドサイズ設定**: 行数・列数の自由な設定
- **記号配置**: ドラッグ＆ドロップまたはクリックで記号を配置
- **記号削除**: 配置した記号の削除
- **行/列の追加・削除**: 編み図の行や列を簡単に追加・削除
- **グリッド線の表示/非表示**: 必要に応じてグリッド線の表示・非表示を切り替え

#### 2.1.2 編集機能
- **記号ライブラリ**: 棒針編みで使用される標準的な記号のライブラリ
  - 表目・裏目の基本記号
  - 増し目・減らし目の記号
  - ケーブル編みなどの模様編みの記号
  - その他特殊記号（拡張可能）
- **カスタム記号**: ユーザーが独自の記号を作成・保存できる機能
- **拡大/縮小表示**: 編み図の一部や全体を拡大・縮小できる機能（拡大状態の保持）
- **範囲選択**: 複数のマスを一度に選択して編集できる機能
- **コピー&ペースト**: パターンの一部をコピーして別の場所に貼り付けられる機能
- **元に戻す/やり直し**: 操作の取り消しとやり直し
- **パターンの繰り返し**: 同じパターンを繰り返し使用できる機能

#### 2.1.3 保存と共有
- **プロジェクト保存**: 作成した編み図をプロジェクトとして保存
- **自動保存**: 編集内容の自動保存機能
- **エクスポート機能**: PDF、PNG、JPG形式でのエクスポート
- **共有機能**: リンク生成、SNS、メールでの共有
- **印刷機能**: 編み図の印刷に最適化された出力

## 3. 非機能要件

### 3.1 ユーザーインターフェース
- **直感的な操作**: 初心者でも使いやすいインターフェース
- **レスポンシブデザイン**: PC、タブレット、スマートフォンなど様々なデバイスサイズに対応
- **ダークモード**: 目の疲れを軽減するダークモードの提供
- **アクセシビリティ対応**: 様々なユーザーが利用できるアクセシビリティへの配慮

### 3.2 パフォーマンス
- **応答性**: ユーザー操作に対する素早い応答
- **軽量性**: 複雑な編み図でも快適に動作する最適化
- **オフライン対応**: 基本機能はオフラインでも利用可能

### 3.3 セキュリティ
- **データ保護**: ユーザーデータの安全な保存と管理
- **プライバシー保護**: ユーザーのプライバシーを尊重した設計

### 3.4 多言語対応
- **日本語**: 基本言語として日本語に完全対応
- **英語**: 将来的な拡張として英語対応も視野に入れる

## 4. 技術スタック

### 4.1 フロントエンド
- **フレームワーク**: Next.js（React）
- **スタイリング**: Tailwind CSS
- **状態管理**: React Context API または Redux
- **UI コンポーネント**: shadcn/ui
- **アイコン**: Lucide icons

### 4.2 バックエンド
- **サーバー**: Next.js API Routes
- **データベース**: Cloudflare D1（SQLite）
- **認証**: JWT認証

### 4.3 デプロイ
- **ホスティング**: Cloudflare Pages
- **CI/CD**: GitHub Actions

## 5. 画面設計

### 5.1 メイン画面
- 編み図作成・編集のメインインターフェース
- グリッド表示エリア
- 記号パレット
- ツールバー（保存、エクスポート、設定など）

### 5.2 プロジェクト管理画面
- 保存したプロジェクトの一覧表示
- プロジェクトの作成、編集、削除

### 5.3 設定画面
- アプリケーション設定
- ユーザープロフィール設定
- 表示設定（テーマ、言語など）

### 5.4 ヘルプ・チュートリアル画面
- 使い方ガイド
- チュートリアル
- よくある質問

## 6. 開発計画

### 6.1 フェーズ1: 基本機能実装
- 編み図作成の基本機能
- 記号ライブラリ
- 基本的な編集機能
- プロジェクト保存機能

### 6.2 フェーズ2: 拡張機能実装
- 高度な編集機能
- エクスポート・共有機能
- ユーザー管理機能

### 6.3 フェーズ3: 最適化と追加機能
- パフォーマンス最適化
- 補助機能の追加
- コミュニティ機能

## 7. 制約事項と考慮点

### 7.1 技術的制約
- ブラウザの互換性への対応
- モバイルデバイスでの操作性の確保

### 7.2 ユーザビリティ考慮点
- 初心者にも使いやすいインターフェース設計
- 上級者向けの高度な機能のバランス

### 7.3 将来的な拡張性
- かぎ針編みなど他の編み物技法への対応
- API提供による外部サービスとの連携
- 記号ライブラリの更新


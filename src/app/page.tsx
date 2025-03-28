import ChartGrid from '@/components/chart/ChartGrid'; // ChartGrid をインポート

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">編み図エディタ</h1>
      <div className="flex justify-center items-start"> {/* 中央揃え */}
        <ChartGrid /> {/* ChartGrid コンポーネントを表示 */}
      </div>
      {/* TODO: Add controls for grid size, etc. */}
    </div>
  );
}

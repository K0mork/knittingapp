import { useState, useCallback } from 'react';
import { SymbolData } from '@/context/SelectedSymbolContext';

// グリッドの状態を表す型
export interface ChartState {
  rows: number;
  cols: number;
  grid: (SymbolData | null)[][];
}

// 状態履歴を管理するカスタムフック
export const useChartStateWithHistory = (initialState: ChartState) => {
  const [history, setHistory] = useState<ChartState[]>([initialState]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const currentState = history[currentIndex];

  // 新しい状態を履歴に追加する関数
  const setState = useCallback((newState: ChartState | ((prevState: ChartState) => ChartState)) => {
    const resolvedState = typeof newState === 'function' ? newState(currentState) : newState;

    // 現在の状態と同じなら何もしない
    if (JSON.stringify(resolvedState) === JSON.stringify(currentState)) {
      return;
    }

    // 現在のインデックス以降の履歴を削除
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(resolvedState);

    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  }, [history, currentIndex, currentState]);

  // Undo 機能
  const undo = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  // Redo 機能
  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, history.length]);

  // Undo/Redo が可能かどうかのフラグ
  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  return {
    state: currentState,
    setState,
    undo,
    redo,
    canUndo,
    canRedo,
  };
};
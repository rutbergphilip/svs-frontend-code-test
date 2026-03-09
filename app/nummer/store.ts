import { create } from 'zustand';
import { GameState, Row } from './types';
import { shuffle } from './utils';
import { TOTAL_NUMBERS, MAX_NUMBERS, MAX_ROWS } from './constants';

function createRow(): Row {
  return { id: crypto.randomUUID(), numbers: [] };
}

function sortedNumbers(numbers: Row['numbers']): Row['numbers'] {
  return [...numbers].sort((a, b) => a.num - b.num);
}

const initialRow = createRow();

export function getActiveRow(state: GameState): Row | undefined {
  return state.rows.find((r) => r.id === state.activeRowId);
}

export const useGameStore = create<GameState>((set) => ({
  rows: [initialRow],
  activeRowId: initialRow.id,
  correctNumbers: null,
  graded: false,

  toggleNumber: (num) => {
    set((state) => {
      const activeRow = getActiveRow(state);
      if (!activeRow) return state;

      const { numbers } = activeRow;
      const existing = numbers.find((n) => n.num === num);

      let updatedNumbers;
      if (existing) {
        updatedNumbers = numbers.filter((n) => n.num !== num);
      } else {
        if (numbers.length >= MAX_NUMBERS) return state;
        updatedNumbers = sortedNumbers([...numbers, { num, isManual: true }]);
      }

      return {
        rows: state.rows.map((row) =>
          row.id === state.activeRowId
            ? { ...row, numbers: updatedNumbers }
            : row,
        ),
      };
    });
  },

  randomizeRemaining: () => {
    set((state) => {
      const activeRow = getActiveRow(state);
      if (!activeRow) return state;

      const manualNumbers = activeRow.numbers.filter((n) => n.isManual);
      if (manualNumbers.length >= MAX_NUMBERS) return state;

      const manualNums = manualNumbers.map((n) => n.num);
      const available = Array.from(
        { length: TOTAL_NUMBERS },
        (_, i) => i + 1,
      ).filter((num) => !manualNums.includes(num));

      // Först shufflar vi alla siffror
      const shuffled = shuffle(available);
      // Sedan tar vi första siffrorna i listan (så många vi behöver)
      const randomized = shuffled
        .slice(0, MAX_NUMBERS - manualNumbers.length)
        .map((num) => ({ num, isManual: false }));

      return {
        rows: state.rows.map((row) =>
          row.id === state.activeRowId
            ? { ...row, numbers: sortedNumbers([...manualNumbers, ...randomized]) }
            : row,
        ),
      };
    });
  },

  addRow: () => {
    set((state) => {
      if (state.rows.length >= MAX_ROWS) return state;
      const newRow = createRow();
      return {
        rows: [...state.rows, newRow],
        activeRowId: newRow.id,
      };
    });
  },

  setActiveRow: (id) => {
    set({ activeRowId: id });
  },

  removeRow: (id) => {
    set((state) => {
      if (state.rows.length <= 1) return state;

      const filtered = state.rows.filter((r) => r.id !== id);
      return {
        rows: filtered,
        activeRowId:
          state.activeRowId === id ? filtered[0].id : state.activeRowId,
      };
    });
  },

  gradeRows: async () => {
    const res = await fetch('/api/grade-row');
    if (!res.ok) throw new Error('Kunde inte hämta rättning');
    const data = await res.json();
    set((state) => ({
      rows: state.rows.filter((row) => row.numbers.length === MAX_NUMBERS),
      correctNumbers: data.numbers,
      graded: true,
    }));
  },

  reset: () => {
    const newRow = createRow();
    set({
      rows: [newRow],
      activeRowId: newRow.id,
      correctNumbers: null,
      graded: false,
    });
  },
}));

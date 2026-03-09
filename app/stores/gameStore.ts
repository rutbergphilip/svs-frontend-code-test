import { create } from 'zustand';
import { GameState, Row } from '../types/game';
import { shuffle } from '../utils/game';

const TOTAL_NUMBERS = 50;
const MAX_NUMBERS = 10;
const MAX_ROWS = 5;

function createRow(): Row {
  return { id: crypto.randomUUID(), numbers: [] };
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
        updatedNumbers = [...numbers, { num, isManual: true }];
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
            ? { ...row, numbers: [...manualNumbers, ...randomized] }
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
    set({ correctNumbers: data.numbers, graded: true });
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

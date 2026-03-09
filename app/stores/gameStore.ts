import { create } from 'zustand';
import { GameState, Row } from '../types/game';

const MAX_NUMBERS = 10;
const MAX_ROWS = 5;

function createRow(): Row {
  return { id: crypto.randomUUID(), numbers: [] };
}

const initialRow = createRow();

export const useGameStore = create<GameState>((set) => ({
  rows: [initialRow],
  activeRowId: initialRow.id,
  correctNumbers: null,
  graded: false,

  toggleNumber: (num) => {
    set((state) => {
      const activeRow = state.rows.find((r) => r.id === state.activeRowId);
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
    // TODO
  },

  activeRowIsFull: () => ({}),

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
    // TODO
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

export type NumberEntry = {
  num: number;
  isManual: boolean;
};

export type Row = {
  id: string;
  numbers: NumberEntry[];
};

export type GameState = {
  rows: Row[];
  activeRowId: string;

  correctNumbers: number[] | null;
  graded: boolean;

  toggleNumber: (n: number) => void;
  randomizeRemaining: () => void;
  addRow: () => void;
  setActiveRow: (id: string) => void;
  removeRow: (id: string) => void;
  gradeRows: () => Promise<void>;
  reset: () => void;
};

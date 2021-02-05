/**
 * Data type
 */
export type KeyboardNote = {
  note: string;
  color: string;
};

/**
 * Note Context (store) holds state & functions
 */
export interface NoteContextProps  {
  keyboardNotes: KeyboardNote[];
  setKeyboardNotes: (keyboardNotes: KeyboardNote[]) => void;
  playNote: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

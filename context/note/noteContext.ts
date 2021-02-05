import { createContext } from 'react';
import { KeyboardNote, NoteContextProps } from './types';

const ininitial = {
  keyboardNotes: [] as KeyboardNote[],
  setKeyboardNotes: () => null,
  playNote: () => null
};

const noteContext = createContext<NoteContextProps>(ininitial)

export default noteContext
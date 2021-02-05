import { createContext, useState } from 'react'
import { octame4Notes } from '../data/keyboardNotes'
import { KeyboardNote } from '../data/keyboardNotes'

// noteContext
export interface NoteContextProps  {
  keyboardNotes: KeyboardNote[];
  setKeyboardNotes: (keyboardNotes: KeyboardNote[]) => void;
  playNote: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ininitial = {
  keyboardNotes: [] as KeyboardNote[],
  setKeyboardNotes: () => null,
  playNote: () => null
};

export const noteContext = createContext<NoteContextProps>(ininitial)
// end of noteContext

// NoteState
interface Props {
  children: React.ReactNode;
}

export const NoteState: React.FC<Props> = ({ children }) => {
  const [keyboardNotes, setKeyboardNotes] = useState<KeyboardNote[]>(octame4Notes)

  const playNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value)
    const audio = new Audio(`sounds/piano_${ event.currentTarget.value }.mp3`)
    audio.play()
  }

  return (
    <noteContext.Provider value={{ keyboardNotes, setKeyboardNotes, playNote}} >
      {children}
    </noteContext.Provider>
  )
}

export default NoteState
// end of NoteState
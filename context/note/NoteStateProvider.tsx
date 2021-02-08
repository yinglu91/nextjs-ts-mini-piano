import { useState } from 'react'
import noteContext from './noteContext'
import { KeyboardNote } from './types'
import { octame4Notes } from '../../data/keyboardNotes'

interface Props {
  children: React.ReactNode;
}

const NoteStateProvider: React.FC<Props> = ({ children }) => {
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

export default NoteStateProvider

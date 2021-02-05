import  { useContext } from 'react';
import styled from 'styled-components'
import Note from './Note'
import { NoteContextProps, noteContext } from '../context/NoteContext';
import { KeyboardNote } from '../data/keyboardNotes'

const Octave: React.FC = () => {
  const {keyboardNotes} = useContext<NoteContextProps>(noteContext);

  return (
    <Wrapper>
      <div>
        {keyboardNotes.map((element: KeyboardNote) => (
          <Note key={element.note} note={element.note} color={element.color} />
          ))}
        </div>
      </Wrapper>
  )
}

export default Octave

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
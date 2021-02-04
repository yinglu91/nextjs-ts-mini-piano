import styled from 'styled-components'
import { KeyboardNote } from '../data/keyboardNotes'
import Note from './Note'

interface OctaveProps {
  notes: KeyboardNote[];
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Octave: React.FC<OctaveProps> = ({ notes, handleClick }) => {
  return (
    <Wrapper>
      <div>
        {notes.map((element: KeyboardNote) => (
          <Note key={element.note} note={element.note} color={element.color} handleClick={handleClick} />
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
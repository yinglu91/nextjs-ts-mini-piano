import  { useContext } from 'react';
import { NoteContextProps } from '../../context/note/types';
import noteContext from '../../context/note/noteContext';
import styled from 'styled-components'

interface NoteProps {
  note: string;
  color: string;
}

const Note: React.FC<NoteProps> = ({ note, color}) => {
  const { playNote } = useContext<NoteContextProps>(noteContext);
  
  return (
    <>
      {color === 'white' ?
        <White value={note} onClick={playNote} /> : <Black value={note} onClick={playNote} />}
    </>
  )
}

export default Note

const Black = styled.button`
  width: 40px;
  height: 130px;
  background: black;
  border: solid black 1px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;

const White = styled.button`
  width: 60px;
  height: 200px;
  background: white;
  border: solid black 1px;
  box-shadow: 2px 5px;
  margin: 1px;
  margin-left: '-20px';
  box-sizing: border-box;

  :active {
    background: #eee;
  }
`;
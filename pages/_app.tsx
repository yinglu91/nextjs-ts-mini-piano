import type { AppProps } from 'next/app'
import NoteState from '../context/note/NoteState'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NoteState>
      <Component {...pageProps} />
    </NoteState>
  )
}

export default MyApp


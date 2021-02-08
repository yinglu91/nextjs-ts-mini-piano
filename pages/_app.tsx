import type { AppProps } from 'next/app'
import NoteStateProvider from '../context/note/NoteStateProvider'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NoteStateProvider>
      <Component {...pageProps} />
    </NoteStateProvider>
  )
}

export default MyApp


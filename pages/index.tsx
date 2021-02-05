import Head from 'next/head'
import Octave from '../components/Octave'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(event.currentTarget.value)
  //   const audio = new Audio(`sounds/piano_${ event.currentTarget.value }.mp3`)
  //   audio.play()
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Mini Piano Keyboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <div>
        <Octave />
      </div>
    </div>
  );
};

export default Home;

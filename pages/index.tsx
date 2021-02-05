import Head from 'next/head'
import Octave from '../components/home/Octave'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
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

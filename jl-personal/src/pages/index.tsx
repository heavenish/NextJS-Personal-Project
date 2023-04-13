import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Slider from '../components/Slider/Slider';
import styles from '../styles//Main.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jungro Lee</title>
        <meta
          name="description"
          content="Personal website created and designed by Jungro Lee, assisted by ChatGPT"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className={styles.welcomeSection}>
  <img
    src="/convo.JPG"
    alt="main" 
    className={`${styles.image} ${styles.image1}`}
  />
  <img
    src="/pets1.JPG"
    alt="Pets"
    className={`${styles.image} ${styles.image2}`}
  />
  <img
    src="/dining2.JPG"
    alt="Dining"
    className={`${styles.image} ${styles.image3}`}
  />
  <img 
  
    src="/snowboard.JPG"
    alt="snowboard" 
    className={`${styles.image} ${styles.image4}`}
  />
  <img
    src="/hiking-spring.JPG"
    alt="Hiking"
    className={`${styles.image} ${styles.image5}`}
  />
  <img
    src="/selfie.JPG"
    alt="Selfie"
    className={`${styles.image} ${styles.image6}`}
  />
  <img
    src="/volunteer.JPG"
    alt="Volunteer"
    className={`${styles.image} ${styles.image7}`}
  />
  <h1 className={styles.welcomeHeadline}>Welcome</h1>
  <p className={styles.introText}>
  "Hi there! I'm Jungro, a passionate software engineer with a deep
  interest in full-stack development, artificial intelligence, and
  innovative technology. I enjoy solving complex problems and creating
  intuitive, efficient, and user-friendly applications. My goal is to
  positively impact the lives of others through my work. Feel free to
  explore my website and learn more about my projects and experiences. -ChatGPT"
  <br />
  <span className={styles.author}>-Jungro Lee</span>
</p>
</div>
      <div className={styles.sliderSection} id="slider">
        <Slider />
      </div>
    </Layout>
  );
}

import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Slider from '../components/Slider/Slider';
import styles from '../styles//Main.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
        <Image
          src="/convo.JPG"
          alt="main"
          width={350}
          height={233}
          className={`${styles.image} ${styles.image1}`}
        />
        <Image
          src="/pets.JPG"
          alt="Pets"
          width={550}
          height={250}
          className={`${styles.image} ${styles.image2}`}
        />
        <Image
          src="/dining.JPG"
          alt="Dining"
          width={250}
          height={167}
          className={`${styles.image} ${styles.image3}`}
        />
        <Image
          src="/snowboard.JPG"
          alt="snowboard"
          width={250}
          height={167}
          className={`${styles.image} ${styles.image4}`}
        />
        <Image
          src="/hiking-spring.JPG"
          alt="Hiking"
          width={250}
          height={167}
          className={`${styles.image} ${styles.image5}`}
        />
        <Image
          src="/selfie.JPG"
          alt="Selfie"
          width={400}
          height={267}
          className={`${styles.image} ${styles.image6}`}
        />
        <Image
          src="/volunteer.JPG"
          alt="Volunteer"
          width={250}
          height={167}
          className={`${styles.image} ${styles.image7}`}
        />
        <h1 className={styles.welcomeHeadline}>Welcome</h1>
        <p className={styles.introText}>
          &ldquo;Hi there! I&rsquo;m Jungro, a passionate software engineer with
          a deep interest in full-stack development, artificial intelligence,
          and innovative technology. I enjoy solving complex problems and
          creating intuitive, efficient, and user-friendly applications. This
          website was built from the ground up using{' '}
          <Link href="https://nextjs.org/" target="_blank">
            <span className={styles.link} rel="noopener noreferrer">
              Next.js
            </span>
          </Link>
          , showcasing my skills and dedication to creating modern and
          high-performance web applications. My goal is to positively impact the
          lives of others through my work. Feel free to explore my website and
          learn more about my projects and experiences. -ChatGPT&rdquo;
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

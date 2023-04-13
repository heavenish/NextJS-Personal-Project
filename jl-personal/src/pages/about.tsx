import React from 'react';
import styles from '../styles/About.module.scss';
import Layout from '@/components/Layout/Layout';

const About = () => {
    const openResume = () => {
        window.open('/Lee.Jungro-Resume.pdf', '_blank');
      };
      

  return (
    <Layout>
      <div className={styles.about}>
        <h1>About Me</h1>
        <p>
        Hey there, I'm a software developer who's passionate about creating innovative solutions with attention to detail. I love exploring and learning new technologies and figuring out how to apply them in real-world situations.
        </p>
        <p>
        I started my software development journey as a self-taught programmer, experimenting with different projects and programming languages. As I gained experience, I've focused on modern frontend development languages like JavaScript, TypeScript, and Next.js, while also expanding my knowledge of backend systems and databases.
        </p>
        <p>
        When I'm not coding, I enjoy a good bike ride or golf game, and I also like to volunteer and participate in community events that have a positive impact. Through my experiences, I've learned the importance of teamwork, communication, and empathy, which I strive to apply in every aspect of my life.
        </p>
        <p>
          This website serves as a platform for me to showcase my projects and share my passion for software development. I'm always eager to learn from others and collaborate on exciting projects, so please don't hesitate to <a href="/contact">reach out</a> if you'd like to connect.
        </p>
        <button onClick={openResume}>View Resume</button>
      </div>
    </Layout>
  );
};

export default About;
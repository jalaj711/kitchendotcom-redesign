import React from 'react';
import Image from '../../assets/Rectangle213.jpg';
import styles from './styles.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.abt}>About Us</h1>
      <div className={styles.ourvision}>
        <div className={styles.paracontainer}>
          <h2 className={styles.vsn}>OUR VISION</h2>

          <p>
            <b>Our</b> vision is to be a reputable, sustainable, and desirable
            premier modular kitchen service provider of the global marketplace
            providing state-of-the-art innovative designs and superior quality
            finishing. We aim to be able to give our best services in each city.
            We seek to provide such services which make kitchen chores a
            hassle-free task. We are a one-stop solution to all your needs for a
            modular kitchen with all the updated features.
          </p>
        </div>
        <div className={styles.img1}>
            <img src={Image.src}>

            </img>
        </div>
      </div>
    </div>
  );
}

export default About;

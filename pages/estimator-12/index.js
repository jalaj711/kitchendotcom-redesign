import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
const Estimator12 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <DoodleDots className={styles.dots} />
        <h1 className={styles.head1}>Kitchen Price Estimate Steps</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.head2}>
          <h2 className={styles.mod}>
            What kind of modular kitchen package would you prefer?
          </h2>
        </div>
        <div className={styles.row1}>
          <div className={styles.div1}>
            <div className={styles.ess}>
              <h3>Essentials</h3>
            </div>
            <p>
              A range that has the basic unit and accessories necessary for a
              comfortable modular kitchen.
            </p>
          </div>
          <div className={styles.div2}>
            <h3>Premium</h3>

            <p>
              An exquisite kitchen with sleek fixtures, hardware, cabinets 
              fittings for an elegant and smooth cooking experiences.
            </p>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.div1}>
            <div className={styles.ess}>
              <h3>Luxe</h3>
            </div>
            <p>
              Lixurious dream kitchen that’s a fine blend of aesthetics and high
              functionality complete with swanky units and accessories.
            </p>
          </div>
          <div className={styles.div2}>
            <h3>Build your own package</h3>

            <p>
              Select materials, finishes, accessories and more of your choices
              from a range of collections for your kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimator12;

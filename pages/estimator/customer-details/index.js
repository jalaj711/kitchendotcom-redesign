import React from "react";
import styles from "./styles.module.scss";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Image from "../../../assets/estimator/estimator-7-main.png";
import LoginImage from "../../../assets/estimator/7.png";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";



const Estimater2 = () => {
  const router=useRouter()
  const handleClick = () => {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    if (name && number && email) {
      FetchFromApi.post(URLs.ESTIMATOR_7, {
        name,number,email,
      }).then((res) => {
        if (res.status == 200) {
          return res.json().then((res) => {
            if (res.success) {
              // router.push(res.next);
            }
          });
        }
      });
    } else {
      alert("Please select one option");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Step 3</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.imageWithSquare}>
              <img src={Image.src} />
            </div>
            <div className={styles.rightBar}>
              <div className={styles.rightBarTitle}>
                <h2>Please enter your details to get the details</h2>
                <img src={LoginImage.src} />
              </div>
              <div className={styles.dataForm}>
                <div>
                  <div>Your full name:</div>
                  <Input type="text" id="name" />
                </div>
                <div>
                  <div>Your phone number:</div>
                  <Input type="text" id="number" />
                </div>
                <div>
                  <div>Your email id:</div>
                  <Input type="text" id="email" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }} className={styles.buttons}>
          <Button style={{ float: "left" }} secondary onClick={router.back}>
            Previous
          </Button>
          <Button style={{ float: "right" }} onClick={handleClick}>
            Next
          </Button>
        </div>
        </div>
      </div>
      <TwoSquaresTopRight className={styles.square1} />
      <TwoSquaresBottomLeft className={styles.square2} />
    </div>
  );
};

export default Estimater2;

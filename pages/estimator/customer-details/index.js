import React from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Image from "../../../assets/estimator/estimator-7-main.webp";
import LoginImage from "../../../assets/estimator/7.webp";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimater2 = () => {
  const router = useRouter();
  const handleClick = () => {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;

    if (name && phone && email) {
      FetchFromApi.post(URLs.ESTIMATOR_7, {
        name,
        phone,
        email,
        location
      }).then((res) => {
        if (res.status == 200) {
          return res.json().then((res) => {
            if (res.success) {
              router.push(res.next);
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
                <div>
                  <div>Your location:</div>

                  <select name="locations" id="location" className={styles.selectLocation}>
                    {[
                      "Varanasi",
                      "Chandauli",
                      "Mirzapur",
                      "Sonbhadra",
                      "Ayodhya",
                      "Prayagraj",
                      "Lucknow",
                      "Bhadohi",
                      "Gorakhpur",
                      "Ghazipur",
                      "Azamgarh",
                      "Kanpur",
                      "Jaunpur",
                      "Other",
                    ].map((elem, index) => (
                      <option key={index} value={elem}>
                        {elem}
                      </option>
                    ))}
                  </select>
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
    </div>
  );
};

export default Estimater2;

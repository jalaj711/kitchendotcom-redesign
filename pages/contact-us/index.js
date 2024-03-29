/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InternetIcon from "../../assets/Internet.svg";
import PhoneIcon from "../../assets/Phone.svg";
import SecuredLetterIcon from "../../assets/Secured-Letter.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import WhatsAppIcon from "../../assets/WhatsApp.svg";
import Background from "../../assets/contact-us-top.webp";
import Image from "next/image";
import NavBar from "../../components/NavBar/NavBar";
import ContactUsImage from "../../assets/contact-us.webp";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import FetchFromApi from "../../utils/fetchFromApi";
import URLs from "../../utils/urls";
import Link from "next/link";

export default function ContactUs() {
  const [data, setData] = useState({
    first_name: null,
    last_name: null,
    email: null,
    city: null,
    message: null,
    phone: null,
  });

  const handleClick = (evt) => {
    evt.preventDefault();
    if (data.first_name && data.phone && data.city && data.message) {
      if(typeof(Number(data.phone)) === NaN || data.phone.length != 10){
        alert("Please enter a valid phone number of 10 digits");
        return;
      }
      FetchFromApi.post(URLs.CONTACT_US, data).then((res) => {
        if (res.status == 200) {
          return res.json().then((res) => {
            if (res.success) {
              alert("Your message has been submitted succesfully!");
              // router.push(res.next);
            }
          });
        }
      });
    } else {
      alert("Please fill out the required fields");
    }
  };
  return (
    <>
      <NavBar />
      <div className={styles.top}>
        <img src={Background.src} className={styles.bg} alt="bg" id="page-bg" />
        <div className={styles.title}>
          <h1>Get in touch!</h1>
          <p>
            Have an inquiry or some feedback for us? <br />
            Fill out the form below to contact our team.
          </p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.container}>
            <div className={styles.form}>
              <h2>Send a Message</h2>
              <form>
                <div>
                  <Input
                    placeholder="Your First Name*"
                    onChange={(evt) =>
                      setData({ ...data, first_name: evt.target.value })
                    }
                    value={data.first_name}
                    required
                  />
                  <Input
                    placeholder="Your Last Name"
                    style={{ marginLeft: "12px" }}
                    onChange={(evt) =>
                      setData({ ...data, last_name: evt.target.value })
                    }
                    value={data.last_name}
                  />
                </div>
                <Input
                  placeholder="Your Phone Number*"
                  onChange={(evt) =>
                    setData({ ...data, phone: evt.target.value })
                  }
                  value={data.phone}
                  type="tel"
                  required
                />
                <Input
                  placeholder="Your Email Address"
                  onChange={(evt) =>
                    setData({ ...data, email: evt.target.value })
                  }
                  value={data.email}
                  type="email"
                />
                <Input
                  placeholder="Your Location*"
                  onChange={(evt) =>
                    setData({ ...data, city: evt.target.value })
                  }
                  value={data.city}
                  required
                />
                <Input
                  placeholder="How can we help?*"
                  onChange={(evt) =>
                    setData({ ...data, message: evt.target.value })
                  }
                  value={data.message}
                  required
                />
                <Button onClick={handleClick}>Submit</Button>
              </form>
            </div>
            <div className={styles.details}>
              <div>
                <h2>Contact Info</h2>
                <div>
                  <Link href="tel:093052 81003">
                    <span>
                      <Image src={PhoneIcon} width={48} alt="phone" />{" "}
                      093052 81003
                    </span>
                  </Link>
                  <Link href="mailto:info@kitchendotcom.in">
                    <span>
                      <Image src={SecuredLetterIcon} width={48} alt="email" />{" "}
                      info@kitchendotcom.in
                    </span>
                  </Link>
                  <Link href="/">
                    <span>
                      <Image src={InternetIcon} width={48} alt="website" />{" "}
                      kitchendotcom.in
                    </span>
                  </Link>
                  <div style={{ display: "inline" }} className={styles.social}>
                    <Image
                      src={FacebookIcon}
                      width={48}
                      alt="facebook"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/kitchendotcom.in",
                          "_blank"
                        )
                      }
                    />
                    <Image
                      src={InstagramIcon}
                      width={48}
                      alt="Instagram"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/kitchendotcom.in/",
                          "_blank"
                        )
                      }
                    />
                    {/* <Image src={TwitterIcon} width={48} alt="Twitter" /> */}
                    <Image
                      src={WhatsAppIcon}
                      width={48}
                      alt="WhatsApp"
                      onClick={() =>
                        window.open("https://wa.me/09305281003", "_blank")
                      }
                    />
                  </div>
                </div>
              </div>
              <img
                src={ContactUsImage.src}
                alt="team"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import PrimaryImage from "../../../assets/estimator/38.webp";
import NavBar from "../../../components/NavBar/NavBar"
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import Footer from "../../../components/Footer/Footer"
import { useRouter } from "next/router";

const Estimater2 = () => {
  const router = useRouter()
  const [active, setActive] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    FetchFromApi.get(URLs.ESTIMATOR_SUMMARY).then((res) => {
      if (res.status === 200) {
        res.json().then((res) => {
          setData({
            price: res.data.price,
            summary: {
              Shape: res.data.shape,
              Size: res.data.size,
              Loft: res.data.loft,
              Type: res.data.type,
              Material: res.data.material,
              Finish: res.data.finish,
              Accessories: res.data.accessories,
            },
          });
        });
      }
    });
  }, []);
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.top}>
        <img src={PrimaryImage.src} className={styles.bg} alt="bg" id="page-bg" />
      </div>
      <div className={styles.wrapper}>
        <h1>Summary</h1>
        <h2>You are done and so are we!</h2>
        {data ? (
          <>
            <h4>Your estimated modular kitchen cost:</h4>
            <div className={styles.startsFrom}>Starts from: ₹{data.price}</div>
            <div className={styles.summaryHolder}>
              {active && (
                <table>
                  {Object.keys(data.summary).map((elem, index) => (
                    <tr key={index}>
                      <td style={{ textAlign: "left" }}>{elem}</td>
                      <td style={{ textAlign: "right", fontWeight: 400 }}>
                        {data.summary[elem]}
                      </td>
                    </tr>
                  ))}
                </table>
              )}
            </div>
            <div
              className={styles.showSummary}
              onClick={() => setActive(!active)}
            >
              {active ? <>Hide Summary &#x25B2;</> : <>Show Summary &#x25BC;</>}
            </div>
            <div className={styles.downloadfiles} onClick={() => router.push('/backend/summary-download')}>Download Summary PDF</div>
          </>
        ) : (
          <h4>Loading...</h4>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Estimater2;

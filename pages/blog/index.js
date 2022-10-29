import React from "react";
import styles from "./styles.module.scss";
import image1 from "../../assets/blog1.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import image2 from "../../assets/blog2.png";
import Button from "../../components/Button/Button";
import URLs from "../../utils/urls";
import fetchFromApi from "../../utils/fetchFromApi";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function BlogAndNews() {
  const [data, setData] = useState({ loaded: false });

  useEffect(() => {
    fetchFromApi.get(URLs.BLOGS_AND_NEWS).then((res) => {
      if (res.status == 200) {
        res.json().then((result) => {
          var a = {
            loaded: true,
            blogs: [],
          };
          result.blogs.map((elem) =>
            a.blogs.push({
              ...elem,
              content: elem.content.slice(0, 250),
              image: "/media/" + elem.image,
            })
          );
          a.primary = a.blogs[0];
          a.blogs = a.blogs.slice(1, -1);
          setData(a);
        });
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.top}>
        <img src={image1.src} className={styles.bg} alt="bg" />
        <div className={styles.title}>
          <h1>Blog</h1>
        </div>
      </div>
      <div className={styles.container}>
        {data.loaded ? (
          <>
            <div className={styles.primary}>
              <img className={styles.image2} src={data.primary.image} />
              <div className={styles.primaryContent}>
                <div>
                  <span className={styles.blogWriter}>
                    {data.primary.author}
                  </span>
                  <span className={styles.blogDate}>{data.primary.date}</span>
                </div>
                <h2 className={styles.blogTitle}>{data.primary.title}</h2>
                <p className={styles.blogContent}>
                  <ReactMarkdown>{data.primary.content}</ReactMarkdown>
                </p>
                <Button>Read More</Button>
              </div>
            </div>
            <div className={styles.blogsAndNews}>
              <div className={styles.blogs}>
                {data.blogs.map((elem, index) => (
                  <div className={styles.blogCard} key={index}>
                    <img className={styles.image2} src={elem.image} />
                    <div className={styles.blogCardContent}>
                      <div>
                        <span className={styles.blogWriter}>{elem.author}</span>
                        <span className={styles.blogDate}>{elem.date}</span>
                      </div>
                      <h2 className={styles.blogTitle}>{elem.title}</h2>
                      <div className={styles.blogContent}>
                        <ReactMarkdown>{elem.content}</ReactMarkdown>
                      </div>
                      <Button>Read More</Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.news}>
                <div className={styles.box}>
                  <h2>News</h2>
                  <i style={{ color: "#ccc" }}>News section coming soon</i>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>Loading...</>
        )}
        <Footer />
      </div>
    </>
  );
}

export default BlogAndNews;

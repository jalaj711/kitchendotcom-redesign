import React from "react";
import styles from "./styles2.module.scss";
import image1 from "../../assets/blog-page.png";
import ShareIcon from "../../assets/share.svg";
import LikeIcon from "../../assets/like.svg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import URLs from "../../utils/urls";
import fetchFromApi from "../../utils/fetchFromApi";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import rehypeRaw from "rehype-raw";
import { format, parseISO } from "date-fns"

function BlogAndNews() {
  const [data, setData] = useState({ loaded: false });
  const router = useRouter();
  const like = () => {
    fetchFromApi.get(URLs.BLOG_LIKE + router.query.id).then((res) => {
      if (res.status == 200) {
        res.json().then((result) => {
          setData({
            ...data,
            liked: true,
            blog: { ...data.blog, likes: result.n_likes },
          });
        });
      }
    });
  };
  const postComment = () => {
    const email = document.getElementById("author-email").value;
    const content = document.getElementById("author-content").value;
    if (email && content) {
      fetchFromApi
        .post(URLs.BLOG_COMMENT + router.query.id, {
          content,
          email,
        })
        .then((res) => {
          if (res.status == 200) {
            res.json().then((result) => {
              setData({
                ...data,
                comments: result.n_comments,
              });
            });
          }
        });
    } else {
      alert("Please enter your email and your content!");
    }
  };
  useEffect(() => {
    console.log(router.query.id);
    fetchFromApi.get(URLs.BLOG + router.query.id + "/").then((res) => {
      if (res.status == 200) {
        res.json().then((result) => {
          setData({ ...result, loaded: true });
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
          <div className={styles.blog}>
            <h2 className={styles.blogTitle}>{data.blog.title}</h2>
            <div>
              <span className={styles.blogWriter}>{data.blog.author}</span>
              <span className={styles.blogDate}>{format(parseISO(data.blog.date), "dd MMM yy")}</span>
            </div>
            <img className={styles.image2} src={"/media/" + data.blog.image} />
            <div className={styles.blogCardContent}>
              <div className={styles.blogContent}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {data.blog.content}
                </ReactMarkdown>
              </div>
            </div>
            <div className={styles.controls}>
              <span
                src={LikeIcon.src}
                onClick={like}
                style={{
                  background: data.liked ? "#f44336" : "#000",
                  maskImage: "url(" + LikeIcon.src + ")",
                }}
              />
              ({data.blog.likes})
              <img src={ShareIcon.src} />
            </div>
            <div className={styles.comments}>
              <h3>Comments</h3>
              <div className={styles.commentsWrapper}>
                {data.comments ? (
                  <>
                    {data.comments.map((elem) => (
                      <div key={elem.id} className={styles.comment}>
                        <div className={styles.comment_title}>
                          <div className={styles.comment_author}>
                            {elem.mail}
                          </div>
                          <div className={styles.comment_time}>
                            {format(parseISO(elem.timestamp), "dd MMM yy hh:mm")}
                          </div>
                        </div>
                        <div className={styles.comment_content}>
                          {elem.comment}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <i>No comments yet</i>
                )}
              </div>
              <div className={styles.add_comment}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="author-email"
                />
                <input
                  type="text"
                  placeholder="Add your comment"
                  id="author-content"
                />
                <button className={styles.submit} onClick={postComment}>
                  POST
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>Loading...</>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BlogAndNews;

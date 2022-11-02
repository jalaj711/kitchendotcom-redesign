import React from "react";
import styles from "./styles2.module.scss";
import image1 from "../../assets/blog1.png";
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
              <span className={styles.blogDate}>{data.blog.date}</span>
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
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>

                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>
                    Nice blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice
                    blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice
                    blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice
                    blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice
                    blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice blog!Nice
                    blog!Nice blog!Nice blog!Nice blog!Nice blog!
                  </div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.comment_title}>
                    <div className={styles.comment_author}>abcd@abcd.com</div>
                    <div className={styles.comment_time}>
                      21 Jun 2020, 00:30
                    </div>
                  </div>
                  <div className={styles.comment_content}>Nice blog!</div>
                </div>
              </div>
              <div className={styles.add_comment}>
                <input type="email" placeholder="Enter your email" />
                <input type="text" placeholder="Add your comment" />
                <button className={styles.submit}>POST</button>
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

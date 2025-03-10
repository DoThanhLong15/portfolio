import style from "./style/BlogDetailPage.module.css";

import moment from "moment";
import ReactMarkdown from "react-markdown";

import { useLocation } from "react-router-dom";

import ReturnButton from "components/others/ReturnButton";
import TitleSession from "components/others/TitleSession";

const BlogDetailPage = () => {
  const location = useLocation();
  const blog = location.state.blog;

  return (
    <>
      <TitleSession title="Blog detail" />

      <div className={style.blogDetail}>
        <ReturnButton history="/blog" />

        <div className={style.blogTitle}>{blog.title}</div>
        <div className={style.blogContent}>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
        <div className={style.blogAuthorArea}>
          Created at {moment(blog.date).fromNow()} by{" "}
          <span className={style.blogAuthor}>{blog.author}</span>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;

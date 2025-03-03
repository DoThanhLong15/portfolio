import moment from "moment";
import style from "./style/SmallBlogItem.module.css";

import { useNavigate } from "react-router-dom";

const SmallBlogItem = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.slug}`, { state: { blog: blog } });
  };

  return (
    <>
      <div className={style.smallBlogItem} onClick={handleClick}>
        <h3 className={style.blogTitle}>
          {blog.title}
          <span className={style.blogDate}>
            ({moment(blog.date).fromNow()})
          </span>
        </h3>
        <div className={style.blogContent}>
          <p className={style.blogDescription}>{blog.description}</p>
          <div className={style.blogTags}>
            {blog?.tags &&
              blog.tags.map((tag, index) => (
                <div className={style.blogTag} key={index}>
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallBlogItem;

import { useState } from "react";

import TitleSession from "../../components/others/TitleSession";
import PageDescription from "../../components/others/PageDescription";
import SmallBlogItem from "../../components/blog/SmallBlogItem";

import data from "./data/data";

const BlogListPage = () => {
  const [description] = useState(data.pageDescription);
  const [blogs, setBlogs] = useState(data.blogs);

  console.log(data);

  return (
    <>
      <TitleSession title="Blog" />

      <PageDescription description={description} />

      {blogs && blogs.map((blogItem) => <SmallBlogItem blog={blogItem} key={blogItem.id} />)}
    </>
  );
};

export default BlogListPage;

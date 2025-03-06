import data from "./../../data/blogs.json";

import { BLOGS_PER_PAGE } from "./../../config/pagination";
import { useState } from "react";

// components
import BlogPaginator from "../../components/blog/BlogPaginator";
import PageDescription from "../../components/others/PageDescription";
import TitleSession from "../../components/others/TitleSession";

const BlogListPage = () => {
  const [description] = useState(data.pageDescription);
  const [blogs] = useState(data.blogs);

  return (
    <>
      <TitleSession title="Blog"/>

      <PageDescription description={description} />

      <BlogPaginator blogs={blogs} itemsPerPage={BLOGS_PER_PAGE} />
    </>
  );
};

export default BlogListPage;

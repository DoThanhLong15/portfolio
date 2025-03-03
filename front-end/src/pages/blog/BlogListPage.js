import { useState } from "react";

import BlogPaginator from "../../components/blog/BlogPaginator";
import PageDescription from "../../components/others/PageDescription";
import TitleSession from "../../components/others/TitleSession";

import data from "./data/data";

const BlogListPage = () => {
  const [description] = useState(data.pageDescription);
  const [blogs] = useState(data.blogs);
  const [blogPerPage] = useState(5);

  return (
    <>
      <TitleSession title="Blog"/>

      <PageDescription description={description} />

      <BlogPaginator blogs={blogs} itemsPerPage={blogPerPage} />
    </>
  );
};

export default BlogListPage;

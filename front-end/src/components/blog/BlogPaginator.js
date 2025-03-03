import { useState } from "react";

import Paginator from "../others/Paginator";
import SmallBlogItem from "./SmallBlogItem";

const BlogPaginator = ({ blogs, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {currentBlogs && currentBlogs.map((blog) => <SmallBlogItem blog={blog} key={blog.id} />)}

      <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default BlogPaginator;
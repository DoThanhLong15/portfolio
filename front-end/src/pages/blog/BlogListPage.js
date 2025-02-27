import { useState } from "react";

import TitleSession from "../../components/others/TitleSession";
import PageDescription from "../../components/others/PageDescription";

import data from "./data/data";

const BlogListPage = () => {
  const [description] = useState(data.pageDescription);

  console.log(data);

  return (
    <>
      <TitleSession title="Blog" />

      <PageDescription description={description} />
    </>
  );
};

export default BlogListPage;

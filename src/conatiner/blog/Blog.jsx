import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog1, blog2 } from "./imports";

export default function Blog() {
  return (
    <div className="gpt_blog section__margin">
      <div className="blog_heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt_blog_container">
        <div className="gpt_blog_groupA article_paddingg">
          <Article date="16.02.2023" imgUrl={blog1} />
        </div>
        <div className="gpt_blog_groupB">
          <div className="article_padding">
            <Article date="16.02.2023" imgUrl={blog1} />
          </div>
          <div className="article_padding">
            <Article date="16.02.2023" imgUrl={blog2} />
          </div>
          <div className="article_padding">
            <Article date="16.02.2023" imgUrl={blog2} />
          </div>
          <div className="article_padding">
            <Article date="16.02.2023" imgUrl={blog2} />
          </div>
        </div>
      </div>
    </div>
  );
}

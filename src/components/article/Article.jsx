import React from "react";
import "./article.css";
// import imgUrl from ''

export default function Article({ imgUrl, date }) {
  return (
    <div className="gpt_article">
      <div className="gpt_Artcle_image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt_article_content">
        <div>
          <p>{date}</p>
          <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
        </div>
        <div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
}

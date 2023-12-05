import React from "react";
import moment from "moment";

interface IArticle {
  id: number;
  title: string;
  date: Date;
  length: number;
  snippet: string;
  key: number;
}

export const Article = ({ title, snippet, date, length }: IArticle) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("dddd Do, YYYY")}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

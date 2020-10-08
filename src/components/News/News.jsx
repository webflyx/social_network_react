import React from "react";
import Post from "../Profile/MyPosts/Post/Post";
import s from "./News.module.css";

function NewsNew(props) {
  return <div>News - {props.news}</div>;
}

function News() {
  let newsData = [
    { id: 1, newsOne: "news 1" },
    { id: 2, newsOne: "news 2" },
    { id: 3, newsOne: "news 3" },
  ];

  let test = newsData.map((n) => <NewsNew news={n.newsOne} />);

  return <div>{test}</div>;
}

export default News;

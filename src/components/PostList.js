import React from "react";
import './PostList.css'

export default function PostList(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img className="list-photo" src={props.url} alt={props.title} />
    </div>
  );
}

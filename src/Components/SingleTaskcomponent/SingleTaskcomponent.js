import React from "react";
import "./singletask.css";

const SingleTaskcomponent = ({ key, title, tag, userId, status, priority }) => {
  return (
    <div>
      <div className="Tasks">
        <p>{key}</p>
        <h3>{title}</h3>
        <span>... Feature Request</span>
      </div>
    </div>
  );
};

export default SingleTaskcomponent;


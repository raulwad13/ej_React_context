import React from "react";

const Card = ({ props}) => {
  console.log(props);
  return (
    <>
      <article>
        <h1>WELCOME</h1>
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
        <h3>{props.age}</h3>
        <img src={props.url} alt="" width="200px"/>
      </article>
    </>
  );
};

export default Card;

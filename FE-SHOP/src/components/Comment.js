/** @format */
import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Comment = ({ src, name, content, starts }) => {
  const tempStarts = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {starts >= index + 1 ? (
          <BsStarFill></BsStarFill>
        ) : starts >= number ? (
          <BsStarHalf></BsStarHalf>
        ) : (
          <BsStar></BsStar>
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div class="containercomment">
        <h4 className="font-bold">{name}</h4>
        <img src={src} alt="src" />
        <div className="flex w-12 mt-2">{tempStarts}</div>
        <p>{content}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h4 {
    margin-bottom: 0;
  }
  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
    grid-column: 1;
    margin-left: 0.2rem;
    margin-bottom: 1rem;
    grid-row: 1 / span 3;
    align-self: center;
  }
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  .holdstart {
    margin-top: 10px;
  }
  .containercomment {
    display: grid;
    grid-template-rows: auto auto auto;
    align-content: end;
    grid-template-columns: 100px 800px;
    align-self: start;
  }
`;

export default Comment;

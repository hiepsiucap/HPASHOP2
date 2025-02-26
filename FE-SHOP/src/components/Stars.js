/** @format */

import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ starts, reviews }) => {
  console.log(starts, reviews);
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
  console.log(tempStarts);
  return (
    <Wrapper>
      <div className="flex">{tempStarts}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;

/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import useLocalState from "../utils/LocalState";
const CommentSection = ({ productid }) => {
  const {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
  } = useLocalState();

  console.log(productid);
  const [thereviews, Initialreviews] = useState([]);
  const [values, changeValues] = useState({
    rating: 0,
    comment: "",
  });
  const onChangeHandler = (e) => {
    changeValues((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(values);
    const { rating, comment } = values;
    const postbody = { rating, comment, product: productid };
    console.log(postbody);
    const data = await fetch("http://localhost:4000/api/v1/reviews/", {
      method: "POST",
      withCredntials: true,
      credentials: "include",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postbody),
    });
    if (data.ok) {
      const msg = await data.json();
      console.log(msg);
      await fetchReview();
      showAlert({ text: msg.msg, type: "sucess" });
    } else if (!data.ok) {
      const msg = await data.json();
      showAlert({ text: msg.msg });
    }
    setLoading(false);
  };
  const fetchReview = async () => {
    const response = await fetch(
      `http://localhost:4000/api/v1/reviews/${productid}`,
      {
        method: "GET",
        withCredntials: true,
        credentials: "include",
      }
    );
    if (response.ok) {
      const result = await response.json();
      Initialreviews([...result.reviews]);
    }
  };
  useEffect(() => {
    fetchReview();
  }, []);
  let lastdata = <h3>No Comment</h3>;
  if (thereviews.length > 0) {
    lastdata = thereviews.map((review) => {
      return (
        <Comment
          src={review.user.avatar.url}
          name={review.user.name}
          content={review.comment}
          starts={review.rating}
          key={review.id}
        ></Comment>
      );
    });
  }
  return (
    <Wrapper>
      <div className="listofcontent">
        <h3>Comment</h3>
        {lastdata}
        <h4 className="Feedbackh3">Viết đánh giá của bạn</h4>
        {alert.show ? (
          <p className={alert.type === "danger" ? "failed" : "success"}>
            {alert.text}
          </p>
        ) : null}
        <form className="formcomment" onSubmit={onSubmitHandler}>
          <div className="input-form">
            <label for="rating">Số Sao</label>
            <select
              type="number"
              id="rating"
              name="rating"
              onChange={onChangeHandler}
              value={values.rating}
            >
              <option>Chọn số sao</option>
              <option value={1}>1 </option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="input-form">
            <label for="comment">Comment</label>
            <textarea
              rows="8"
              cols="60"
              name="comment"
              id="comment"
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <button className="submit-comment" type="submit">
            {!loading ? "Bình luận" : "Loading"}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;

      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }
    .input-form textarea {
      font-size: 1rem;
    }
    .success {
      text-align: center;
      color: green;
      font-weight: bold;
      text-transform: uppercase;
    }
    .failed {
      text-align: center;
      color: red;
      font-weight: bold;
      text-transform: uppercase;
    }

    .input-form input {
      height: 25;
    }

    .submit-comment {
      color: var(--clr-grey-1);
      letter-spacing: var(--spacing);
      background: var(--clr-primary-10);
      display: flex;
      font-weight: bold;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      border-radius: 4px;
      width: 128px;
      align-items: center;
      margin-top: 2.5rem;
      align-self: center;
    }
    .Feedbackh3 {
      text-align: center;
    }
    .formcomment {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .input-form {
      display: flex;
      flex-direction: column;
    }
    .input-form label {
      font-weight: 500;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 32px;
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    select,
    textarea {
      border: 1px solid black;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export default CommentSection;

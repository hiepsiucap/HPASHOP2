/** @format */

import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt=""></img>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
          <p>
            Chào mừng bạn đến với Hưng Phú An! Chúng tôi bắt đầu với niềm đam mê
            sâu sắc về nghệ thuật và sự sáng tạo trong việc tạo ra không gian
            sống đẹp và thoải mái. Hưng Phú An không chỉ là nơi mua sắm, mà là
            ngôi nhà của những ý tưởng độc đáo và sản phẩm nội thất chất lượng
            cao. Tận hưởng sự sáng tạo và chất lượng, chúng tôi cam kết mang đến
            cho bạn không chỉ sản phẩm mà còn là trải nghiệm tuyệt vời. Hãy cùng
            nhau xây dựng câu chuyện đẹp qua từng sản phẩm! Chân thành, [Hưng
            Phú An]
          </p>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../assets/content1/img/collov-home-design-4_jQL4JCS98-unsplash.jpg";
import logo1 from "../assets/content1/img/logos/techcrunch.png";
import logo2 from "../assets/content1/img/logos/forbes.png";
import logo3 from "../assets/content1/img/logos/business-insider.png";
import logo4 from "../assets/content1/img/logos/usa-today.png";
import logo5 from "../assets/content1/img/logos/the-new-york-times.png";
import duan1 from "../assets/content1/img/michael-oxendine-GHCVUtBECuY-unsplash.jpg";
import duan2 from "../assets/content1/img/roberto-nickson-rEJxpBskj3Q-unsplash.jpg";
import duan3 from "../assets/content1/img/minh-pham-xlzlHu-Z9J8-unsplash.jpg";
const constructionPage = () => {
  return (
    <Wrapper>
      <body>
        <div class="background">
          <section class="container">
            <div class="text-section">
              <h1 class="text-hero">
                DỰ ÁN
                <br></br>
                NỔI BẬT
              </h1>
            </div>
          </section>
        </div>
        <section class="listcompany">
          <h3 class="primary-header">KHÁCH HÀNG VÀ ĐỐI TÁC</h3>
          <div class="logos">
            <img src={logo1} alt="Tech Crunch Logo" />
            <img src={logo5} alt="Tech Crunch Logo" />
            <img src={logo3} alt="Tech Crunch Logo" />
            <img src={logo2} alt="Tech Crunch Logo" />
            <img src={logo4} alt="Tech Crunch Logo" />
          </div>
          <h3 class="ctnb">CÔNG TRÌNH NỔI BẬT</h3>
          <section class="duan">
            <img class="imageduan" src={duan1} alt="ngay" />
            <div class="text-duan">
              <h1>PHONG CÁCH CỔ ĐIỂN</h1>
              <h4>NTK:Nguyễn Hồng Hiệp</h4>
              <p>
                Kiệt tác nghệ thuật nội thất, kết hợp sáng tạo và văn hóa trong
                mỗi chi tiết của dự ánhất liệu cao cấp được kết hợp một cách
                khéo léo, với sự chọn lựa cẩn thận từ gỗ tự nhiên đến vật liệu
                hiện đại.
              </p>
            </div>
            <div class="text-duan">
              <h1>PHONG CÁCH HIỆN ĐẠI</h1>
              <h4>NTK:Nguyễn Hồng Hiệp</h4>
              <p>
                Kiệt tác nghệ thuật nội thất, kết hợp sáng tạo và văn hóa trong
                mỗi chi tiết của dự ánhất liệu cao cấp được kết hợp một cách
                khéo léo, với sự chọn lựa cẩn thận từ gỗ tự nhiên đến vật liệu
                hiện đại.
              </p>
            </div>
            <div class="imageduan2">
              <img class="imageduan" src={duan2} alt="ngay" />
            </div>
            <img class="imageduan" src={duan3} alt="ngay" />
            <div class="text-duan">
              <h1>PHONG CÁCH MINIMAL</h1>
              <h4>NTK:Nguyễn Hồng Hiệp</h4>
              <p>
                Kiệt tác nghệ thuật nội thấat, kết hợp sáng tạo và văn hóa trong
                mỗi chi tiết của dự ánhất liệu cao cấp được kết hợp một cách
                khéo léo, với sự chọn lựa cẩn thận từ gỗ tự nhiên đến vật liệu
                hiện đại.
              </p>
            </div>
          </section>
        </section>
      </body>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 1300px;
    margin: 0 auto;
    height: 800px;
    display: flex;
    align-items: center;
  }
  .background {
    background-image: url(${img});
    background-size: cover;
    background-position: center;
  }
  .text-section {
    width: 50%;
    height: 100%;
    transform: translateX();
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .listcompany {
    width: 1300px;
    margin: 0 auto;
    padding: 2rem;
  }
  .text-hero {
    color: rgb(255, 255, 255, 1);
    font-weight: 700;
    font-size: 6rem;
    line-height: 9rem;
    z-index: 100;
  }
  .listproject {
    margin-top: 6rem;
  }
  .primary-header {
    font-size: 1.8rem;
    margin-top: 3.2rem;
    text-align: center;
  }
  .duan {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }
  .duan h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .duan h4 {
    font-size: 1.2rem;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 2rem;
  }
  .duan p {
    font-size: 1.2rem;
  }
  .logos {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 10rem;
    margin-top: 3rem;
  }
  .imageduan {
    width: 90%;
  }
  .logos img {
    height: 2.5rem;
  }
  .imageduan2 {
  }
  .ctnb {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;

export default constructionPage;

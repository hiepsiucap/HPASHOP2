import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (<Wrapper>
    <div className='section-center'>
      <article className='header'>
        <h3>Cá nhân hoá <br/>thiết kế</h3>
        <p>
        Tại đây, chúng tôi tập trung vào việc cá nhân hóa không gian sống của bạn. Với sự linh hoạt về màu sắc, kiểu dáng và vật liệu, mỗi sản phẩm trở thành biểu tượng cá nhân hóa, thể hiện phong cách và đẳng cấp riêng của bạn. Khám phá ngay để tạo nên không gian sống độc đáo!
        </p>
      </article>
      <div className='services-center'>
        {
          services.map((service)=>{
            const{id,icon,title,text}= service;
            return <article key={id} className='service'>
              <span className='icon'>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          })
        }
      </div>
    </div>
  </Wrapper>)
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services

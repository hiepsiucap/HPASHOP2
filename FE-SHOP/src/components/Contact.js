import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return ( <Wrapper>
        <div className='section-center'>
          <h3>Tham gia ngay, nhận ngay giảm giá 20%</h3>
          <div className='content'>
            <p>Để không bỏ lỡ bất kỳ thông tin mới nào về xu hướng thiết kế, sản phẩm mới nhất, cũng như những ưu đãi đặc biệt, hãy nhập địa chỉ email của bạn vào ô dưới đây. Chúng tôi cam kết sẽ gửi đến bạn những thông tin hữu ích và thú vị liên quan đến không gian sống và trang trí nội thất.</p>
            <form  className='contact-form'>
              <input action type="email" className='form-input' placeholder='enter email'></input>
              <button type='submit' className='submit-btn'>Subscribe</button>
            </form>
          </div>
        </div>
  </Wrapper>)
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact

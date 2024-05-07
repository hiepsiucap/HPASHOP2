import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({increase,decrease,amount}) => {
  return <Wrapper className='amount-btsn'>
    <button type="button" className="amount-btn" onClick={decrease}>
      <FaMinus></FaMinus>
    </button>
    <h4 className='amount'>{amount}</h4>
     <button type="button" className="amount-btn" onClick={increase}>
      <FaPlus></FaPlus>
    </button>

  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h4 {
    margin-top: 6px;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h4 {
    margin-bottom: 6px;
  }
`

export default AmountButtons

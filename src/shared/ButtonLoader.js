import styled, { keyframes } from 'styled-components'

const sudo = keyframes`
  from {
    transform: translateY(-2px);
  }
  to {
    transform: translateY(2px);
  }
`

const ButtonLoader = styled.p`
  font-size: 16px;
  animation: ${ sudo } .85s linear infinite alternate;

  &:after {
    content: '⇣';
    right: 10px;
  }
`

export default ButtonLoader

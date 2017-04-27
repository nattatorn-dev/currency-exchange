import styled from 'styled-components'

const ButtonHighlight = styled.button`
  background-color: transparent;
  border: 0;
  color: ${ ( { color = '#a6a6a6' } ) => color };
  cursor: pointer;
  float: left;
  font-size: 1em;
  line-height: 30px;
  outline: none;
  padding: 8px 4px;
  text-align: center;
  text-transform: none;
  width: ${ ( { width = '50%' } ) => width };

  &:hover {
    color: ${ ( { hoverColor = '#444' } ) => hoverColor };
  }
`

export default ButtonHighlight

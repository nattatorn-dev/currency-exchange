import styled from 'styled-components'

const ButtonHighlight = styled.button`
  background-color: transparent;
  border: 0;
  color: ${ props => props.color || '#a6a6a6' };
  cursor: pointer;
  float: left;
  font-size: 1em;
  line-height: 30px;
  outline: none;
  padding: 8px 4px;
  text-align: center;
  text-transform: none;
  width: ${ props => props.width || '50%' };

  &:hover {
    color: ${ props => props.hoverColor || '#444' };
  }
`

export default ButtonHighlight

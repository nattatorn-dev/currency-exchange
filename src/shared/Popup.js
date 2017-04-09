import styled from 'styled-components'

const Popup = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.07);

  &:before {
    content: " ";
    display: table;
    line-height: 0;
  }
  
  &:after {
    clear: both;
    content: " ";
    display: table;
    line-height: 0;
  }
`

export default Popup

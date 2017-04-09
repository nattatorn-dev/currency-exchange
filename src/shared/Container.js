import styled from 'styled-components'

const Container = styled.div`
  /* Custom, iPhone Retina */
  @media only screen and (min-width : 320px) {
    margin-top: 5px;
    padding-bottom: 5%;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (min-width : 480px) {
    margin-top:: 5px;
    padding-bottom: 5%;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width : 768px) {
    margin: ${ props => props.margin || '8px 0 0 0' };
    padding: ${ props => props.padding || 0 };
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    margin: ${ props => props.margin || '8px 0 0 0' };
    padding: ${ props => props.padding || 0 };
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    margin: ${ props => props.margin || '8px 0 0 0' };
    padding: ${ props => props.padding || 0 };
  }
`

export default Container

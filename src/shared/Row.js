import styled from 'styled-components'

const Row = styled.div`
  /* Custom, iPhone Retina */
  @media only screen and (min-width : 320px) {
    margin: 0 10px;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (min-width : 480px) {
    margin: 0 10px;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width : 768px) {
    margin: ${ ( { margin = '0px' } ) => margin };
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    margin: ${ ( { margin = '0px' } ) => margin };
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    margin: ${ ( { margin = '0px' } ) => margin };
  }
`

export default Row

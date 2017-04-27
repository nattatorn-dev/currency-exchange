import styled  from 'styled-components'
import { url } from 'helpers'

const NumberImage = styled.div`
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${ props => url.number( props.number ) };
  height: ${ ( { size = '30px' } ) => size };
  margin: 0;
  width: ${ ( { size = '30px' } ) => size };
`

export default NumberImage

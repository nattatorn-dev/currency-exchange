import styled  from 'styled-components'
import { url } from 'helpers'

const NumberImage = styled.div`
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${ props => url.number( props.number ) };
  height: ${ props => props.size || '30px' };
  margin: 0;
  width:${ props => props.size || '30px' };
`

export default NumberImage

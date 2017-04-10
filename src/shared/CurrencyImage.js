import styled  from 'styled-components'
import { url } from 'helpers'

const CurrencyImage = styled.div`
  background-image: ${ props => url.currency( props.image ) };
  background-repeat: no-repeat;
  background-size: 145% 110%;
  border-radius: 150px;
  box-shadow: ${ props => `0 0 2px ${ props.theme.themes[ props.theme.theme ].shadowPrimary }` };
  height: ${ props => props.size || '50px' };
  width: ${ props => props.size || '50px' };
`

export default CurrencyImage

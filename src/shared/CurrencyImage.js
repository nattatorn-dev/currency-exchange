import styled  from 'styled-components'
import { url } from 'helpers'

const CurrencyImage = styled.div`
  background-image: ${ ( { image } ) => url.currency( image ) };
  background-repeat: no-repeat;
  background-size: 145% 110%;
  border-radius: 150px;
  box-shadow: ${ ( { theme: { themes, currentTheme } } ) => `0 0 2px ${ themes[ currentTheme ].shadowPrimary }` };
  height: ${ ( { size = '50px' } ) => size };
  width: ${ ( { size = '50px' } ) => size };
`

export default CurrencyImage

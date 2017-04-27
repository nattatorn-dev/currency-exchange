import styled  from 'styled-components'
import { url } from 'helpers'

const BankImage = styled.div`
  background-color: ${ ( { bank } ) => url.matchingBankColor( bank.toUpperCase() ) };
  background-image: ${ ( { bank } ) => url.matchingBankIcon( bank.toUpperCase() ) };
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${ ( { size = '30px' } ) => size };
  margin: 0;
  width:${ ( { size = '30px' } ) => size };
`

export default BankImage

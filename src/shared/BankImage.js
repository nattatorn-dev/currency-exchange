import styled from 'styled-components'
import { url } from 'helpers'

const BankImage = styled.div`
  background-color: ${ props => url.matchingBankColor( props.bank.toUpperCase() ) };
  background-image: ${ props => url.matchingBankIcon( props.bank.toUpperCase() ) };
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${ props => props.size || '30px' };
  margin: 0;
  width:${ props => props.size || '30px' };
`

export default BankImage

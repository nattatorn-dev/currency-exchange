import styled  from 'styled-components'
import { url } from 'helpers'

import BankImage from 'shared/BankImage'

const BankImageCircle = styled( BankImage )`
  border-radius: 150px;
  border: ${ props => `5px solid ${ url.matchingBankColor( props.bank.toUpperCase() ) }` };
  box-shadow: ${ props => `0 0 2px ${ props.theme.themes[ props.theme.theme ].shadowPrimary }` };
  margin: 0;
`

export default BankImageCircle

import styled    from 'styled-components'
import { url }   from 'helpers'

import BankImage from 'shared/BankImage'

const BankImageCircle = styled( BankImage )`
  border-radius: 150px;
  border: ${ ( { bank } ) => `5px solid ${ url.matchingBankColor( bank.toUpperCase() ) }` };
  box-shadow: ${ ( { theme: { themes, currentTheme } } ) => `0 0 2px ${ themes[ currentTheme ].shadowPrimary }` };
  margin: 0;
`

export default BankImageCircle

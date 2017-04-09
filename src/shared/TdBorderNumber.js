import styled from 'styled-components'

import TdBorder from 'shared/TdBorder'

const TdBorderNumber = styled( TdBorder )`
  color: ${ props => props.theme.themes[ props.theme.theme ].fontColorSecondary };
  font-size:  ${ props => props.theme.fontStyles[ props.theme.fontStyle ].fontNumberSize };
  letter-spacing: 0.5px;
  text-align: right;
  width: 33%;
`

export default TdBorderNumber

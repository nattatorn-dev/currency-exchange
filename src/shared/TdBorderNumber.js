import styled   from 'styled-components'

import TdBorder from 'shared/TdBorder'

const TdBorderNumber = styled( TdBorder )`
  color: ${ ( { theme: { themes, currentTheme } } ) => themes[ currentTheme ].fontColorSecondary };
  font-size:  ${ ( { theme: { fontStyles, currentFontStyle } } ) => fontStyles[ currentFontStyle ].fontNumberSize };
  letter-spacing: 0.5px;
  text-align: right;
  width: 33%;
`

export default TdBorderNumber

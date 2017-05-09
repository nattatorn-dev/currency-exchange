import styled           from 'styled-components'
import BackgroundEffect from './BackgroundEffect'

const SectionMain = styled( BackgroundEffect )`
  background: ${ ( { theme: { themes, currentTheme } } ) => themes[ currentTheme ].backgroundColorSecondary };
  border-radius: 8px 8px 0 0;
  border-top:  ${ ( { theme: { themes, currentTheme } } ) => `1px solid ${ themes[ currentTheme ].borderPrimary }` };
  font-size: ${ ( { theme: { fontStyles, currentFontStyle } } ) => fontStyles[ currentFontStyle ].fontSize };
  padding: 12px 8px;
`

export default SectionMain

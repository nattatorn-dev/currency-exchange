import styled from 'styled-components'

const SectionMain = styled.div`
  background: ${ ( { theme: { themes, currentTheme } } ) => themes[ currentTheme ].backgroundColorSecondary };
  border-radius: 8px 8px 0 0;
  border-top:  ${ ( { theme: { themes, currentTheme } } ) => `1px solid ${ themes[ currentTheme ].borderPrimary }` };
  font-size: ${ ( { theme: { fontStyles, currentFontStyle } } ) => fontStyles[ currentFontStyle ].borderPrimary };
  padding: 12px 8px;
`

export default SectionMain

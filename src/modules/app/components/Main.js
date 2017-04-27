import styled from 'styled-components'

const Main = styled.div`
  font-family: ${ ( { setting: { fontFamilies, currentFontFamily } } ) => fontFamilies[ currentFontFamily ].fontPrimary };
  font-size: ${ ( { setting: { fontStyles, currentFontStyle } } ) => fontStyles[ currentFontStyle ].fontSize };
  color: ${ ( { setting: { themes, currentTheme } } ) => themes[ currentTheme ].fontColorPrimary };
  background-color: ${ ( { setting: { themes, currentTheme } } ) => themes[ currentTheme ].backgroundColorPrimary };
`

export default Main

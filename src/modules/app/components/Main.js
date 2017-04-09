import styled from 'styled-components'

const Main = styled.div`
  font-family: ${ props => props.setting.fontFamilies[ props.setting.fontFamily ].fontPrimary || props.fontFamilies[ props.fontFamily ].fontPrimary };
  font-size: ${ props => props.setting.fontStyles[ props.setting.fontStyle ].fontSize || props.fontStyles[ props.fontStyle ].fontSize };
  color: ${ props => props.setting.themes[ props.setting.theme ].fontColorPrimary || props.themes[ props.theme ].fontColorPrimary };
  background-color: ${ props => props.setting.themes[ props.setting.theme ].backgroundColorPrimary || props.themes[ props.theme ].backgroundColorPrimary };
`

export default Main

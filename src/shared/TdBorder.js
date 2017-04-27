import styled from 'styled-components'

const TdBorder = styled.td`
  border-top: ${ ( { theme: { themes, currentTheme } } ) => `1px solid ${ themes[ currentTheme ].borderPrimary }` };
  color: ${ ( { theme: { themes, currentTheme } } ) => themes[ currentTheme ].fontColorBold };
  line-height: 1.42;
  padding: 8px;
  text-align: ${ ( { align = 'left' } ) => align };
  vertical-align: middle;
`

export default TdBorder

import styled from 'styled-components'

const TdBorder = styled.td`
  border-top: ${ props =>
  `1px solid ${ props.theme.themes[ props.theme.theme ].borderPrimary }` };
  color: ${ props => props.theme.themes[ props.theme.theme ].fontColorBold };
  line-height: 1.42;
  padding: 8px;
  text-align: ${ props => props.align || 'left' };
  vertical-align: middle;
`

export default TdBorder

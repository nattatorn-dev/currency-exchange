import styled from 'styled-components'

const SectionMain = styled.div`
  background: ${ props =>
  props.theme.themes[ props.theme.theme ].backgroundColorSecondary };
  border-radius: 8px 8px 0 0;
  border-top:  ${ props =>
  `1px solid ${ props.theme.themes[ props.theme.theme ].borderPrimary }` };
  font-size: ${ props =>
  props.theme.fontStyles[ props.theme.fontStyle ].borderPrimary };
  padding: 12px 8px;
`

export default SectionMain

import styled from 'styled-components'

const SectionDetail = styled.div`
  font-size: ${ props =>
  props.theme.fontStyles[ props.theme.fontStyle ].fontDetailSize };
`
export default SectionDetail

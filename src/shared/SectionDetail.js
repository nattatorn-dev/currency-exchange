import styled from 'styled-components'

const SectionDetail = styled.div`
  font-size: ${ ( { theme: { fontStyles, currentFontStyle } } ) => fontStyles[ currentFontStyle ].fontDetailSize };
`
export default SectionDetail

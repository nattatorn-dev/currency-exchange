import styled      from 'styled-components'
import NumberImage from 'shared/NumberImage'

const NumberImageCircle = styled( NumberImage )`
  background-color: white;
  border-radius: 150px;
  box-shadow: ${ props => `0 0 2px ${ props.theme.themes[ props.theme.theme ].shadowPrimary }` };
  color: ${ props => props.theme.themes[ props.theme.theme ].textPrimary };
  margin: -25px 0 0 18px;
`

export default NumberImageCircle

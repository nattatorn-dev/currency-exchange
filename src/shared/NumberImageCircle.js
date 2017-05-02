import styled      from 'styled-components'
import NumberImage from 'shared/NumberImage'

const NumberImageCircle = styled( NumberImage )`
  background-color: white;
  border-radius: 150px;
  box-shadow: ${ ( { theme: { themes, currentTheme } } ) => `0 0 2px ${ themes[ currentTheme ].shadowPrimary }` };
  color: ${ ( { theme: { themes, currentTheme } } ) => themes[ currentTheme ].textPrimary };
  margin: ${ ( { margin = '0px' } ) => margin };
`

export default NumberImageCircle

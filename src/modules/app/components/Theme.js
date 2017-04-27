import React             from 'react'
import { ThemeProvider } from 'styled-components'

Theme.propTypes = {
  children: React.PropTypes.object.isRequired,
  setting: React.PropTypes.object.isRequired,
}

function Theme ( {
  children,
  setting: {
    currentLayout,
    currentSortCurrenciesLists,
    currentSortBanksLists,
    currentDropdownCurrencies,
    currentNumberDigit,
    currentLang,
    langs,
    ...theme
  },
} ) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme

import { langs }        from './langs'
import { themes }       from './themes'
import { fontStyles }   from './fontStyles'
import { fontFamilies } from './fontFamilies'

export const setting = {
  currentLayout: 'BANK', // bank dill down, bank column
  currentSortCurrenciesLists: [ 'USD', 'GBP', 'EUR', 'JPY', 'CNY' ], // relate dropdowncurrencies
  currentSortBanksLists: [ 'KBANK' ],
  currentDropdownCurrencies: 'USD',
  currentNumberDigit: 5,
  currentLang: 'th',
  currentTheme: 'white',
  currentFontStyle: 'normal',
  currentFontFamily: 'arial',
  langs,
  themes,
  fontStyles,
  fontFamilies,
}

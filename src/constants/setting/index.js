import { langs }        from './langs'
import { themes }       from './themes'
import { fontStyles }   from './fontStyles'
import { fontFamilies } from './fontFamilies'

export const setting = {
  currentLayout: 'BANK', // bank, currency
  currentSortCurrencies: [ 'USD', 'GBP', 'EUR', 'JPY', 'CNY' ],
  currentSortBanks: [ 'SCB', 'KTB', 'BAY', 'GSB', 'KBANK', 'IBANK' ],
  currentDropdownCurrencies: 'USD',
  currentNumberDigit: 5, // 1000.19999
  currentLang: 'th', // th, en
  currentTheme: 'white', // white, night
  currentFontStyle: 'normal', // normal, medium
  currentFontFamily: 'arial', // arial, kanit, athiti
  langs,
  themes,
  fontStyles,
  fontFamilies,
}

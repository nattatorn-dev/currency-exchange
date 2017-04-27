import React               from 'react'

import { ButtonHighlight } from 'shared'

ButtonFontSetting.propTypes = {
  children: React.PropTypes.string.isRequired,
  fontFamily: React.PropTypes.string.isRequired,
  setting: React.PropTypes.object.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonFontSetting ( { children, fontFamily, setting, updateSetting } ) {
  const updateFont = () =>
    updateSetting( {
      ...setting,
      currentFontFamily: fontFamily,
    } )
  return (
    <ButtonHighlight
      key={`button-font-setting-${ fontFamily }`}
      color={'#a6a6a6'}
      hoverColor={'#444'}
      width={'33%'}
      onClick={updateFont}
    >
      {children}
    </ButtonHighlight>
  )
}

ButtonFontStyleSetting.propTypes = {
  children: React.PropTypes.string.isRequired,
  fontStyle: React.PropTypes.string.isRequired,
  setting: React.PropTypes.object.isRequired,
  style: React.PropTypes.object,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonFontStyleSetting ( {
  children,
  fontStyle,
  setting,
  style,
  updateSetting,
} ) {
  const updateFontSize = () =>
    updateSetting( {
      ...setting,
      currentFontStyle: fontStyle,
    } )
  return (
    <ButtonHighlight
      key={`button-fontstyle-setting-${ fontStyle }`}
      color={'#a6a6a6'}
      hoverColor={'#444'}
      onClick={updateFontSize}
    >
      <span style={style}>
        {children}
      </span>
    </ButtonHighlight>
  )
}

ButtonColorThemeSetting.propTypes = {
  children: React.PropTypes.string.isRequired,
  setting: React.PropTypes.object.isRequired,
  themeStyle: React.PropTypes.string.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonColorThemeSetting ( {
  children,
  setting,
  themeStyle,
  updateSetting,
} ) {
  const updateColorTheme = () =>
    updateSetting( {
      ...setting,
      currentTheme: themeStyle,
    } )
  return (
    <ButtonHighlight
      key={`button-theme-setting-${ themeStyle }`}
      color={'#a6a6a6'}
      hoverColor={'#444'}
      onClick={updateColorTheme}
    >
      {children}
    </ButtonHighlight>
  )
}

ButtonLangSetting.propTypes = {
  children: React.PropTypes.string.isRequired,
  lang: React.PropTypes.string.isRequired,
  setting: React.PropTypes.object.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonLangSetting ( { children, lang, setting, updateSetting } ) {
  const updateLang = () =>
    updateSetting( {
      ...setting,
      currentLang: lang,
    } )
  return (
    <ButtonHighlight
      key={`button-lang-setting-${ lang }`}
      color={'#a6a6a6'}
      hoverColor={'#444'}
      onClick={updateLang}
    >
      {children}
    </ButtonHighlight>
  )
}

export default {
  ButtonFontSetting: ButtonFontSetting,
  ButtonFontStyleSetting: ButtonFontStyleSetting,
  ButtonColorThemeSetting: ButtonColorThemeSetting,
  ButtonLangSetting: ButtonLangSetting,
}

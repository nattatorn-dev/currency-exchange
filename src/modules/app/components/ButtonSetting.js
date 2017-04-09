import React from 'react'
import { withTheme } from 'styled-components'

import { ButtonHighlight } from 'shared'

ButtonFontSetting.propTypes = {
  children: React.PropTypes.string.isRequired,
  fontFamily: React.PropTypes.string.isRequired,
  theme: React.PropTypes.object.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonFontSetting ( { children, theme, updateSetting, fontFamily } ) {
  const updateFont = () =>
    updateSetting( {
      ...theme,
      fontFamily,
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
  style: React.PropTypes.object,
  theme: React.PropTypes.object.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonFontStyleSetting (
  { children, style, theme, updateSetting, fontStyle },
) {
  const updateFontSize = () =>
    updateSetting( {
      ...theme,
      fontStyle,
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
  theme: React.PropTypes.object.isRequired,
  themeColor: React.PropTypes.string.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonColorThemeSetting (
  { children, theme, updateSetting, themeColor },
) {
  const updateColorTheme = () =>
    updateSetting( {
      ...theme,
      theme: themeColor,
    } )
  return (
    <ButtonHighlight
      key={`button-theme-setting-${ themeColor }`}
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
  theme: React.PropTypes.object.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function ButtonLangSetting ( { children, theme, updateSetting, lang } ) {
  const updateLang = () =>
    updateSetting( {
      ...theme,
      lang,
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
  ButtonFontSetting: withTheme( ButtonFontSetting ),
  ButtonFontStyleSetting: withTheme( ButtonFontStyleSetting ),
  ButtonColorThemeSetting: withTheme( ButtonColorThemeSetting ),
  ButtonLangSetting: withTheme( ButtonLangSetting ),
}

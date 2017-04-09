import React from 'react'

import {
  ButtonFontSetting,
  ButtonFontStyleSetting,
  ButtonColorThemeSetting,
  ButtonLangSetting,
} from './ButtonSetting'
import { Popup } from 'shared'

SettingOption.propTypes = {
  updateSetting: React.PropTypes.func.isRequired,
}

function SettingOption ( { updateSetting } ) {
  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      style={{
        minWidth: '160px',
        fontSize: '13px',
      }}
      onClick={handleClick}
    >
      <Popup>
        <ButtonFontStyleSetting
          updateSetting={updateSetting}
          fontStyle={'normal'}
          style={{ fontSize: '14px', verticalAlign: 'middle' }}
        >
          A
        </ButtonFontStyleSetting>
        <ButtonFontStyleSetting
          updateSetting={updateSetting}
          fontStyle={'medium'}
          style={{ fontSize: '20px', verticalAlign: 'middle' }}
        >
          A
        </ButtonFontStyleSetting>
      </Popup>
      <Popup>
        <ButtonColorThemeSetting
          updateSetting={updateSetting}
          themeColor={'white'}
        >
          White
        </ButtonColorThemeSetting>
        <ButtonColorThemeSetting
          updateSetting={updateSetting}
          themeColor={'night'}
        >
          Night
        </ButtonColorThemeSetting>
      </Popup>
      <Popup>
        <ButtonFontSetting updateSetting={updateSetting} fontFamily={'arial'}>
          Arial
        </ButtonFontSetting>
        <ButtonFontSetting updateSetting={updateSetting} fontFamily={'kanit'}>
          Kanit
        </ButtonFontSetting>
        <ButtonFontSetting updateSetting={updateSetting} fontFamily={'athiti'}>
          Athiti
        </ButtonFontSetting>
      </Popup>
      <div>
        <ButtonLangSetting updateSetting={updateSetting} lang={'th'}>
          TH
        </ButtonLangSetting>
        <ButtonLangSetting updateSetting={updateSetting} lang={'en'}>
          EN
        </ButtonLangSetting>
      </div>
    </div>
  )
}

export default SettingOption

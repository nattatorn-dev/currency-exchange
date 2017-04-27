import React                    from 'react'

import {
  ButtonFontSetting,
  ButtonFontStyleSetting,
  ButtonColorThemeSetting,
  ButtonLangSetting,
}                               from './ButtonSetting'
import { Popup }                from 'shared'

SettingOption.propTypes = {
  setting: React.PropTypes.object.isRequired,
  updateSetting: React.PropTypes.func.isRequired,
}

function SettingOption ( { setting, updateSetting } ) {
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
          fontStyle={'normal'}
          setting={setting}
          style={{ fontSize: '14px', verticalAlign: 'middle' }}
          updateSetting={updateSetting}
        >
          A
        </ButtonFontStyleSetting>
        <ButtonFontStyleSetting
          fontStyle={'medium'}
          setting={setting}
          style={{ fontSize: '20px', verticalAlign: 'middle' }}
          updateSetting={updateSetting}
        >
          A
        </ButtonFontStyleSetting>
      </Popup>
      <Popup>
        <ButtonColorThemeSetting
          setting={setting}
          themeStyle={'white'}
          updateSetting={updateSetting}
        >
          White
        </ButtonColorThemeSetting>
        <ButtonColorThemeSetting
          setting={setting}
          themeStyle={'night'}
          updateSetting={updateSetting}
        >
          Night
        </ButtonColorThemeSetting>
      </Popup>
      <Popup>
        <ButtonFontSetting
          fontFamily={'arial'}
          setting={setting}
          updateSetting={updateSetting}
        >
          Arial
        </ButtonFontSetting>
        <ButtonFontSetting
          fontFamily={'kanit'}
          setting={setting}
          updateSetting={updateSetting}
        >
          Kanit
        </ButtonFontSetting>
        <ButtonFontSetting
          fontFamily={'athiti'}
          setting={setting}
          updateSetting={updateSetting}
        >
          Athiti
        </ButtonFontSetting>
      </Popup>
      <div>
        <ButtonLangSetting
          lang={'th'}
          setting={setting}
          updateSetting={updateSetting}
        >
          TH
        </ButtonLangSetting>
        <ButtonLangSetting
          lang={'en'}
          setting={setting}
          updateSetting={updateSetting}
        >
          EN
        </ButtonLangSetting>
      </div>
    </div>
  )
}

export default SettingOption

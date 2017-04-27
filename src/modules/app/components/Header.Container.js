import React, { Component, PropTypes }          from 'react'
import HamburgerMenu                            from 'react-hamburger-menu'
import NumberInput                              from 'react-number-input'
import { url }                                  from 'helpers'

import SettingOption                            from './SettingOption'
import ArrowDropdown                            from './ArrowDropdown'
import DropdownCurrency                         from './DropdownCurrency.Container'
import { InputInterval, LinkImage, SpanSymbol } from '../../../shared'

const THB = [
  {
    label: 'THB',
    value: 'THB',
  },
]

export default class Header extends Component {
  componentWillReceiveProps ( nextProps ) {
    if (
      nextProps.value !== this.props.value ||
      nextProps.controller.dropdownMenuStyleOpen !==
        this.props.controller.dropdownMenuStyleOpen
    ) {
      // this.setInputValue( nextProps.value )
    }
  }

  getInputValue () {
    return this.refs.input.value
  }

  setInputValue ( val ) {
    this.refs.input.value = val
  }

  onPriceChange = e => {
    const { router: { params: { login } }, onChange } = this.props
    onChange( `${ login }/${ e }` )
  }

  handleDropDownClick = e => {
    e.stopPropagation()
    this.props.updateController( {
      ...this.props.controller,
      dropdownMenuStyleOpen: !this.props.controller.dropdownMenuStyleOpen,
    } )
  }

  render () {
    const { router, onChange, setting } = this.props
    const currentTheme = setting.themes[ setting.currentTheme ]
    const styleHeader = () => ( {
      top: 0,
      background: currentTheme.backgroundColorSecondary,
      boxShadow: `0 0 10px ${ currentTheme.shadowPrimary }`,
      width: '100%',
      height: '55px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '12px',
    } )

    const value =
      this.props.router &&
      this.props.router.params &&
      this.props.router.params.name
    return (
      <header style={styleHeader()}>
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            height: '67px',
            justifyContent: 'space-between',
            margin: '0 auto',
            maxWidth: '1010px',
            paddingBottom: '10px',
            paddingTop: '10px',
            position: 'relative',
            width: '100%',
          }}
        >
          <div
            style={{
              marginLeft: '25px',
            }}
          >
            <LinkImage setting={setting} />
          </div>
          <div style={{ display: 'block', float: 'left' }}>
            <NumberInput
              className={`number-input-theme-${ setting.theme }`}
              style={{
                backgroundColor: currentTheme.inputBackgroundColorPrimary,
                backgroundImage: 'none',
                border: `1px solid ${ currentTheme.inputBorderColorPrimary }`,
                borderRadius: '4px',
                display: 'block',
                fontSize: '15px',
                height: '34px',
                lineHeight: '1.42857143',
                padding: '0 10px',
              }}
              format="0,0[.]00"
              max={100}
              min={0}
              onChange={this.onPriceChange}
              placeholder="Enter some money"
              value={value}
            />

          </div>

          <div style={{ width: '30%', display: 'block' }}>
            <DropdownCurrency
              data={THB}
              initialState={{
                label: 'THB',
                value: 'THB',
                clearable: false,
                disabled: true,
              }}
              onChange={onChange}
              router={router}
              setting={setting}
            />
          </div>
          <div style={{ width: '30%', display: 'block' }}>
            <DropdownCurrency
              data={this.props.currencies}
              initialState={{
                label: 'USD',
                value: 'USD',
                clearable: false,
                disabled: false,
              }}
              onChange={onChange}
              router={router}
              setting={setting}
            />
          </div>
          <div style={{ margin: '10px 15px', fontSize: '30px' }}>
            <HamburgerMenu
              animationDuration={0.75}
              borderRadius={5}
              color={currentTheme.fontColorPrimary}
              height={15}
              isOpen={this.props.controller.dropdownMenuStyleOpen}
              menuClicked={this.handleDropDownClick}
              rotate={0}
              strokeWidth={2}
              width={25}
            />
          </div>
          <ArrowDropdown
            dropdownMenuStyleOpen={this.props.controller.dropdownMenuStyleOpen}
          >
            <SettingOption
              updateSetting={this.props.updateSetting}
              setting={this.props.setting}
            />
          </ArrowDropdown>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  controller: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  setting: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
}

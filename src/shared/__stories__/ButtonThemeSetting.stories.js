import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import ButtonHighlight from '../ButtomHighlight'

const buttonStyles = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #eee',
  borderRadius: 3,
  color: 'red',
  cursor: 'pointer',
  fontSize: 15,
  margin: 10,
  padding: '3px 10px',
}

const ButtonThemeSetting = ( { children, onClick } ) => (
  <ButtonHighlight color={'#a6a6a6'} hoverColor={'#444'} onClick={onClick}>
    {children}
  </ButtonHighlight>
)

ButtonThemeSetting.propTypes = {
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

storiesOf( 'Button', module ).addDecorator( withKnobs ).add( 'Theme', () => (
  <ButtonThemeSetting onClick={action( 'clicked' )}>
    setting
  </ButtonThemeSetting>
) )

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Toggle from 'react-filters/dist/Toggle'
import Container from './ReactFilters.Container'
import { withKnobs, object, array, color } from '@kadira/storybook-addon-knobs'

const stories = storiesOf( 'Switch Button', module )

stories.addDecorator( withKnobs )

stories.add( 'Icon Label', () => {
  const switchName = array( 'switch name', [ 'on', 'off' ] )
  return (
    <Container action={action} value={false}>
      {<Toggle name="switch-icon-label" iconLabel={switchName} />}
    </Container>
  )
} )

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Slider from 'react-filters/dist/Slider'
import Container from './ReactFilters.Container'
import {
  withKnobs,
  number,
  object,
  boolean,
  text,
  select,
  date,
  array,
  color,
} from '@kadira/storybook-addon-knobs'

storiesOf( 'Slider Component (Value)', module )
  .addDecorator( story => (
    <Container className={'range-container'} action={action} value={6}>
      {story()}
    </Container>
  ) )
  .add( 'Default', () => <Slider name={'simple-value'} /> )
  .add( 'Read only', () => <Slider name={'read-only'} readOnly /> )
  .add( 'Disabled', () => <Slider name={'disabled'} disabled /> )
  .add( 'Vertical', () => (
    <Slider
      name={'vertical'}
      orientation={'vertical'}
      showSteps
      onDragStart={action( 'drag-start' )}
      onDragEnd={action( 'drag-end' )}
    />
  ) )

const stories = storiesOf( 'Slider Component (Value)', module )

stories.addDecorator( withKnobs )
stories.addWithInfo( 'Steps', () => {
  const step = number( 'Step', 10 )
  const min = number( 'Min', 0 )
  const max = number( 'Max', 100 )

  return (
    <Container className={'range-container'} action={action} value={6}>
      <Slider name={'steps'} step={step} min={min} max={max} showSteps />
    </Container>
  )
} )

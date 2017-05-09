import { configure, setAddon } from '@kadira/storybook'
import './base.scss'
import infoAddon from '@kadira/react-storybook-addon-info'

const req = require.context( '../src', true, /.stories.js$/ )

function loadStories () {
  req.keys().forEach( filename => req( filename ) )
}

setAddon( infoAddon )

configure( loadStories, module )

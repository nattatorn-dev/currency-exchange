import { browserHistory } from 'react-router'
import withScroll from 'scroll-behavior'
import * as action from 'services/action'
import * as array from 'services/array'
import * as generator from 'services/generator'
import * as number from 'services/number'

const history = withScroll( browserHistory )

export default {
  history,
  action,
  array,
  generator,
  number,
}

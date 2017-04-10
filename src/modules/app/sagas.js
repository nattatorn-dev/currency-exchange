import { take }     from 'redux-saga/effects'
import { history }  from 'services'
import * as actions from './actions'

const { NAVIGATE } = actions

function* watchNavigate () {
  while ( true ) {
    const { pathname } = yield take( NAVIGATE )
    yield history.push( pathname )
  }
}

export { watchNavigate }

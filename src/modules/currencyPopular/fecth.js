import * as actions from './actions'
import { fetchEntity } from 'services/generator'
import { fetchBanks as apiFetchBanks } from 'services/api'

const fetchBanks = fetchEntity.bind( null, actions.banks, apiFetchBanks )

export { fetchBanks }

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const fetchActios = [ REQUEST, SUCCESS, FAILURE ]

/**
   * @param  {[string]}    type            | 'UPDATE_DATA' | action type
   * @param  {[object]}    payload         | { id: 1, name: admin } |
   * @return {[object]}    typePayload     | { type: 'UPDATE_DATA', id: 1, name: admin } | return action name with payload
   */
const action = ( type, payload = {} ) => ( { type, ...payload } )

/**
   * @param  {[string]}    base            | 'VIDEOS' | name
   * @return {[object]}    actions         |
                                             {
                                               "FAILURE": "VIDEOS_FAILURE",
                                               "REQUEST": "VIDEOS_REQUEST",
                                               "SUCCESS": "VIDEOS_SUCCESS"
                                             }
                                           | generate fetch action
   */
const createRequestTypes = base =>
  fetchActios.reduce( ( p, c ) => ( { ...p, [ c ]: `${ base }_${ c }` } ), {} )

export { fetchActios, action, createRequestTypes }

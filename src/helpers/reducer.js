const CreateHanderReducer = ( state, action, handlers ) => {
  const handler = handlers[ action.type ]
  if ( !handler ) {
    return state
  }
  return handler( state, action )
}

export { CreateHanderReducer }

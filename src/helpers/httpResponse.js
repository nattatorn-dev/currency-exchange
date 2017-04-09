/**
   * @param  {[object]}    response      | { link: '<https://api.github.com/repositories/70107786/stargazers?page=2>; rel="next", <https://api.github.com/repositories/70107786/stargazers?page=350>; rel="last"'} | http response
   * @return {[string]}    string        | 'https://api.github.com/repositories/70107786/stargazers?page=2' | return next url
   */
const getNextPageUrl = response => {
  const link = response.headers.get( 'link' )
  if ( !link ) {
    return null
  }

  const nextLink = link.split( ',' ).find( s => s.indexOf( 'rel="next"' ) > -1 )
  if ( !nextLink ) {
    return null
  }

  return nextLink.split( ';' )[ 0 ].slice( 1, -1 )
}

export { getNextPageUrl }

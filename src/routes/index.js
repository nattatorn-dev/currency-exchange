import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import {
  App,
  NotFoundPage,
  CurrencyPopularPage,
  CurrencyExchangePage,
} from 'modules'

const Routes = () => (
  <Route path="/" component={App}>
    <IndexRedirect to="/USD" />
    <Route path="/:login" component={CurrencyPopularPage} />
    <Route path="/:login/:name" component={CurrencyExchangePage} />
    <Route path="/404" component={NotFoundPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default Routes

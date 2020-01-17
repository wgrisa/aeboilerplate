import * as React from 'react'
import { Switch } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { Login } from './connect/Login'
import { Home } from './home/Home'
import { routePaths } from './route-paths'
import { User } from './user/User'

export const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={routePaths.root} component={Home} />
      <PublicRoute exact path={routePaths.login} component={Login} />
      <ProtectedRoute exact path={routePaths.private.root} component={User} />
    </Switch>
  )
}

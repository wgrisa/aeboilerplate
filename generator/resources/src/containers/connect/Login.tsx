import './login.scss'

import * as React from 'react'
import { withRouter } from 'react-router-dom'
import * as store from 'store'
import { routePaths } from '../route-paths'

export const Login = withRouter(({ history }) => (
  <div className="login">
    <p>Sign in with:</p>
    <button
      onClick={() => {
        store.set('token', '123456')

        history.push(routePaths.private.root)
      }}
    >
      Log me in
    </button>
  </div>
))

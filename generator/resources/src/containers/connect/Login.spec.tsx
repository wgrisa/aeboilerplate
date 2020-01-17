import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import { Login } from './Login'

configure({ adapter: new Adapter() })

describe(`<Login />`, () => {
  it('renders', () => {
    expect(shallow(<Login />).exists()).toBeTruthy()
  })
})

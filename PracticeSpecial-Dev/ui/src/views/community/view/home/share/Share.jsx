import React, { Component } from 'react'

import { Switch,Redirect,Route } from 'react-router-dom'
import ShareContainer from './ShareContainer'
import { Position } from 'community/view/home/position/'

export default class Share extends Component {
  render() {
    return (
      <Switch>
        <Route path="/community/three/share" component={ShareContainer}></Route>
        <Route path="/community/three/position" component={Position}></Route>
        <Redirect from='/community/three' to='/community/three/share' exact />
      </Switch>
    )
  }
}

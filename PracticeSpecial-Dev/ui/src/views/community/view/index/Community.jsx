import React, { Component }from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { ThreeRouter } from 'community/view/home/share/'
import { Community } from 'community/view/home/'
import { SeeOthers } from 'community/view/others/'
import { OthersAnimateContainer } from 'community/view/othersAnimate/'
import { AnimateDetail } from 'community/view/animateDetail/'
import { AddUser } from 'community/view/addUser/'
import { Message } from 'community/view/message/'
import { Reply } from 'community/view/reply/'
import { Alert } from 'community/view/alert/'
import { Collection } from 'community/view/collection/'
import { Profile } from 'community/view/profile/'
import { Qrcode } from 'community/view/qrcode/'

class CommunityContainer extends Component {
  render() {
    return (
      <> 
        <Switch>
          <Route path="/community/three" component={ ThreeRouter }></Route>
          <Route path="/community/home" component={ Community }></Route>
          <Route path="/community/others" component={ SeeOthers}></Route>
          <Route path="/community/othersanimate" component={ OthersAnimateContainer }></Route>
          <Route path="/community/animatedetail" component={ AnimateDetail }></Route>
          <Route path="/community/adduser" component={ AddUser }></Route>
          <Route path="/community/message" component={ Message }></Route>
          <Route path="/community/reply" component={ Reply }></Route>
          <Route path="/community/alert" component={ Alert }></Route>
          <Route path="/community/collection" component={ Collection }></Route>
          <Route path="/community/profile" component={ Profile }></Route>
          <Route path="/community/qrcode" component={ Qrcode }></Route>
          <Redirect to="/community/home" from="/community" exact/>
        </Switch>
      </>
    ) 
  } 
}
export default CommunityContainer

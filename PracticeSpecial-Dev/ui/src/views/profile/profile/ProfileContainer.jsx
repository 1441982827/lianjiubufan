import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ProfileUI from './ProfileUI'

import Index from './views/index/'
import Settings from './views/settings/'
import PersonalData from './views/personal_data/'
import MyFocus from './views/my_focus/'
import MyFans from './views/my_fans/'
import Top from './views/top/'
import ChangePW from './views/change_pw/'
import RemindSetting from './views/remind_setting/'

class ProfileContainer extends Component {
  render() {
    return (
      <ProfileUI>
        <Switch>
          <Route path="/profile/index" component={Index} />
          <Route path="/profile/set" component={Settings} />
          <Route path="/profile/data" component={PersonalData} />
          <Route path="/profile/focus" component={MyFocus} />
          <Route path="/profile/fans" component={MyFans} />
          <Route path="/profile/top" component={Top} />
          <Route path="/profile/pw" component={ChangePW} />
          <Route path="/profile/remind" component={RemindSetting} />
          <Redirect from="/profile" to="/profile/index" exact />
        </Switch>
      </ProfileUI>
    )
  }
}

export default ProfileContainer

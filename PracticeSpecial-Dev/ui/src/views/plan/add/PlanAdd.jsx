import React from 'react'
import {indexStyled} from '../index/'
import {Route ,Switch , Redirect} from 'react-router-dom'
import {Header} from 'ui/header'
import {Icon} from 'ui/icon'


import { PlanSelector , PlanAddSport} from './views/'

class PlanAdd extends React.Component{
      render(){ 
            let {ColorBgContainer } = indexStyled;
            return (
                  <ColorBgContainer circle={true} flex={true}>
                        <Header
                        leftContent="添加计划"
                        icon={<Icon width='.11rem' type="left" ></Icon>}
                        onLeftClick={() => this.handleGoBack()}
                        ></Header>
                        <Switch>
                              <Route path="/plan/add/select" component={PlanSelector}></Route>
                              <Route path="/plan/add/setting" component={PlanAddSport}></Route>
                              <Redirect to="/plan/add/select" from="/plan/add" exact></Redirect>
                        </Switch> 
                  </ColorBgContainer>
            )
      }
      handleGoBack(){
            this.props.history.goBack()
      }
}

export default PlanAdd
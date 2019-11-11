import React from 'react'
import { Switch , Route , Redirect } from 'react-router-dom'

import Home from '../home/PlanHome'
import Detail from '../detail/PlanDetail'
import Add from '../add/PlanAdd'


class PlanContainer extends React.Component{
      render(){
          return (
            <>
                  <Switch>
                        <Route path="/plan/home" component={Home}></Route>
                        <Route path="/plan/detail" component={Detail}></Route>
                        <Route path="/plan/add" component={Add}></Route>
                        <Redirect to="/plan/home" from="/plan" exact></Redirect>
                  </Switch>
            </>
          )
      }
}

export default PlanContainer
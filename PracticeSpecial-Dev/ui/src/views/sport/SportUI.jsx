import React from 'react'
import{
    Run,
    Sport
} from 'sport/views'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import{
    SportDetail
} from 'sport/views/detail'

import{
    Player
} from 'sport/views/player'
function SportUI (props) {
    return (
        <Router>
            <Switch>
                {/* <Route path='/focus' component={Focus} ></Route> */}
                <Route path=  {props.path +'/foot'} component={Run} ></Route>
                <Route path= {props.path +'/cycling'} 
                component={Run} ></Route>
                <Route path={props.path +'/run'}  component={Run} ></Route>



                <Route path= {props.path +'/sports'}  component={Sport}></Route>

                <Route path= {props.path +'/detail'} component={SportDetail} ></Route>
                 <Route path= {props.path +'/player'} component={Player} ></Route>
                <Redirect exact from={props.path} to={props.path +'/sports'} ></Redirect>
            </Switch>
        </Router>
    )   
}









export default SportUI
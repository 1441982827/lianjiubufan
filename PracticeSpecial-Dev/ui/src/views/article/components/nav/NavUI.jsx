import React from 'react'
import Nav from './StyledNav'
function NavUI(props){
      return(
            <Nav>
                  <li 
                        className= {props.active==='sport'?"active":''}
                        onClick={props.handlerSportClick}
                  >
                        {props.sport}
                        <i></i>
                  </li>
                  <li 
                        className= {props.active==='health'?"active":''}
                        onClick={props.handlerHealthClick}
                  >
                        <div>健康轻食</div>
                        <i></i>
                  </li>
            </Nav>
      )
}
export default NavUI
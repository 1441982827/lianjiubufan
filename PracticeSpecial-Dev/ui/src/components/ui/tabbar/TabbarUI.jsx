import React  from 'react'

import { NavLink , withRouter } from 'react-router-dom'

import {Tabbar,TabbarItem} from './StyledTabbar'

class TabbarUI extends React.Component{
      render(){
            let {list , onSportDisplay , isShowSuspend} = this.props
            // let con = '';
          return (
            <Tabbar>
             {
                   list.map((value)=>{
                              
                        return(
                              <TabbarItem 
                              key={value.title}
                              icon={value.icon}
                              iconActive={value.iconActive}
                              columns={list.length}
                              >
                                    {
                                          value.routelink !== '' ?
                                          <NavLink to={value.routelink} >
                                                <div className={`${value.className} ${this.props.location.pathname.search(value.routelink) !== -1  ? "active" : ""}`}>
                                                </div>
                                          </NavLink>
                                          :
                                          <div className={`${value.className} ${isShowSuspend?"active" : ""}`} onClick={onSportDisplay}>
                                          </div>
                                    }
                                    <p>{value.title}</p>
                              </TabbarItem>
                        )
                   })
             }     
            </Tabbar>
        )
      }
}

export default withRouter(TabbarUI)
import React from 'react'
import {Ununited} from './styledNotFound'
import {Tabbar} from 'ui/tabbar'

class NotFound extends React.Component{
      render(){
          return <Ununited>
                <div className="imageIcon"></div>
                <p onClick={this.handleUpdate.bind(this)}>点击刷新</p>
                <Tabbar></Tabbar>
          </Ununited>
      }
      handleUpdate(){
            let { history} = this.props
            history.push('/')
      }
}

export default NotFound
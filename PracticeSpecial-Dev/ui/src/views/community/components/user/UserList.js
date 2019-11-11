import React, { Component } from 'react'

import { ListContainer ,P} from './StyledUser'

 class UserList extends Component {
  render() {
    return (
      <ListContainer>
        <img src={this.props.img} alt=""></img>
        <div>
          <h3>{this.props.name}{this.props.span?this.props.span:''}</h3>
          <P color={this.props.color} fontSize={this.props.fontSize}>{this.props.msg}</P>
          {this.props.comp ? this.props.comp:''}
        </div>
        {this.props.children}
      </ListContainer>
    )
  }
}
export default UserList
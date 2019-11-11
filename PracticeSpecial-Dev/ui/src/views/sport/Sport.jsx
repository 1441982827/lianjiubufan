import React, { Component } from 'react'
import SportUi from './SportUI'

 class Sport extends Component {
     
     render() {
        // console.log();
        // console.log(this.props);
        return (
           <SportUi path={this.props.match.path}  ></SportUi>
        )
    }
}

export default  Sport
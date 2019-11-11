import React from 'react'

import {AddCard,AddBtn} from './styledadd'

class AddPlanCard extends React.Component{
      render(){
          return <AddCard url={this.props.bgurl}>
                <AddBtn onClick={this.props.onClickbtn}>{this.props.btn}</AddBtn>
          </AddCard>
      }
}

export default AddPlanCard
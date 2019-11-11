import React  from 'react'
import * as Styled from './styledHome'

class Calerio extends React.Component{
      render(){
          return (
                <Styled.Card2>
                      {this.props.children}
                </Styled.Card2>
          )
      }
}

export default Calerio
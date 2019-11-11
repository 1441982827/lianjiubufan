import React, { PureComponent } from 'react'
import {Container} from 'layout/container/'
import SportDetailsUI from './SportDetailsUI'

class SportDetailsContainer extends PureComponent {
      constructor(props) {
            super(props)
            
            this.state = {
                  info:{
                        developlist:[]
                  }
            }
      }

      render() {
            return ( 
                  <Container bg='true' height="100%">
                        <SportDetailsUI 
                              handlerBack={this.handlerBack}
                              info={this.state.info}
                              handleClickGoNext={this.handleClickGoNext}
                        ></SportDetailsUI>
                  </Container>
            )
      }
      componentDidMount(){
            fetch("/api/article/list/develop")
            .then(result=>result.json())
            .then((res)=>{
                  console.log(res)
                  this.setState({
                        info:res.data[this.props.match.params.id]
                  })
            })
      }
      handlerBack = ()=>{
            this.props.history.go(-1)
      }
      handleClickGoNext=(sid)=>{
            this.props.history.replace('/sport/player',{sid,from:"article"})
      }
}

export default SportDetailsContainer
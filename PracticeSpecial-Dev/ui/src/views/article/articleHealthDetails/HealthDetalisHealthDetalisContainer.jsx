import React, { PureComponent } from 'react'
import HealthDetailsUI from './HealthDetailsUI'
import {Container} from 'layout/container/'

class HealthDetalisContainer extends PureComponent {
      constructor(props) {
            super(props)

            this.state = {
                  info:{
                        healthlist:[]
                  }
            }
      }

      render() {
            return (
                  <Container 
                        bg='true'
                        height="100%"
                  >
                        <HealthDetailsUI
                              handlerBack={this.handlerBack}
                              info={this.state.info}
                        ></HealthDetailsUI>
                  </Container>
            )
      }
      componentDidMount(){
            fetch("http://localhost:3000/api/article/list/health")
            .then(result=>result.json())
            .then((res)=>{
                  this.setState({
                        info:res.data[this.props.match.params.id]
                  })
            })
      }
      handlerBack = ()=>{
            this.props.history.go(-1)
      }
}

export default HealthDetalisContainer
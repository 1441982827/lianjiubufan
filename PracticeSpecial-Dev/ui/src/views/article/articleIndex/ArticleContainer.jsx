import React, { PureComponent } from 'react'
import {Container} from 'layout/container/'
import ArticleUI from './ArticleUI'
import {Tabbar} from 'ui/tabbar/'

class ArticleContainer extends PureComponent {
      constructor(props) {
            super(props)

            this.state = {
                 active:'sport',
                 list:[]
            }
      }
      render() {
            return ( 
                  <>
                        <Container
                              height='100%'
                              bg='#fff'
                        >
                              <ArticleUI 
                                    handlerToDetails={this.handlerToDetails}
                                    handlerSearch={this.handlerSearch}
                                    handlerSportClick={this.handlerSportClick}
                                    handlerHealthClick={this.handlerHealthClick}
                                    active={this.state.active}
                                    list={this.state.list}
                              ></ArticleUI>
                        </Container>
                        <Tabbar></Tabbar>
                  </>
            )
      }
      componentDidMount(){
            localStorage.getItem('active')==='health'?this.handlerHealthClick():this.handlerSportClick()
      }
      handlerToDetails = (id)=>{
            this.state.active === 'sport'?this.props.history.push('/article/sportdetails/'+id):this.props.history.push('/article/healthdetails/'+id)
      }
      handlerSearch = ()=>{
            this.props.history.push('/article/articlesearch')
      }
      handlerSportClick = ()=>{
            localStorage.setItem('active','sport')
            fetch("/api/article/list/develop")
            .then(result=>result.json())
            .then((res)=>{
                  this.setState({
                        active:'sport',
                        list:res.data
                  })
            })
      }
      handlerHealthClick = ()=>{
            localStorage.setItem('active','health')
            fetch("/api/article/list/health")
            .then(result=>result.json())
            .then((res)=>{
                  this.setState({
                        active:'health',
                        list:res.data
                  })
            })
      }
}

export default ArticleContainer
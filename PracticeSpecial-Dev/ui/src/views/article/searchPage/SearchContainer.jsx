import React, { PureComponent } from 'react'
import {Container} from 'layout/container/'
import SearchHeaderContainer from '../components/searchHeader/SearchHeaderContainer'
import {SearchRecord, SearchList} from 'article'
import { Route, Switch, Redirect } from 'react-router-dom'

class SearchContainer extends PureComponent {
      render() {
            return (
                  <Container bg='true' height="100%">
                        <SearchHeaderContainer
                              handlerCancel={this.handlerCancel}
                              handleEnterKey={this.handleEnterKey}
                        >
                              <Switch>
                                    <Route path="/article/articlesearch/searchrecord" component={SearchRecord}></Route>
                                    <Route path="/article/articlesearch/searchlist/:searchKey" component={SearchList}></Route>
                                    <Redirect from="/article/articlesearch" to="/article/articlesearch/searchrecord" exact></Redirect>
                              </Switch>
                        </SearchHeaderContainer>
                  </Container>
            )
      }
      handlerCancel=()=>{
            this.props.history.go(-1)
      }
      handleEnterKey=(url)=>{
            this.props.history.replace(url)
      }
}

export default SearchContainer
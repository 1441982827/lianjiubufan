import React from 'react'
import {ArticleIndex,SportDetails,HealthDetalis,Search} from 'article'
import { Route, Switch, Redirect } from 'react-router-dom'

function Article(){
      return(
      <Switch>
        <Route path="/article/articleindex" component={ArticleIndex}></Route>
        <Route path="/article/sportdetails/:id" component={SportDetails}></Route>
        <Route path="/article/healthdetails/:id" component={HealthDetalis}></Route>
        <Route path="/article/articlesearch" component={Search}></Route>
        <Redirect from="/article" to="/article/articleindex" exact></Redirect>
      </Switch>
      )
}
export default Article
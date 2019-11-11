import React from 'react'

import { ArticleContainer,BoederContainer } from './StyledArticle'
import { ContentContainer } from 'community/view/home/StyledCommunity'

import {Icon} from 'ui/icon'

function Article(props){
  let { user1Header , animate1 , icon } = props
  return (
    <ArticleContainer>
      <div>
        <img src={user1Header} alt="" />
        <div>
          <p>PYTIxy</p>
          <span>14小时前</span>
        </div>             
      </div>
      <div>
        <ContentContainer>哪有什么天生如此，只是我们每天仍在坚持</ContentContainer>
        <img src={animate1} alt="" />
        <div>
          <ul>
            <li>
              <Icon 
                type='love_2x'
                width=".1rem"
                height=".1rem"
              > </Icon>
              <i>50</i>
            </li>
            <li>
              <Icon 
                type='favorite_2x'
                width=".1rem"
                height=".1rem"
              > </Icon>
              <i>10</i>
            </li>
            <li>
              <Icon 
                type='message_2x'
                width=".1rem"
                height=".1rem"
              > </Icon>
              <i>2</i>
            </li>
          </ul>
          <div>
            <Icon type={icon} width='.1rem' height='.1rem' />
          </div>
        </div>
      </div>
      <BoederContainer>
        <p>
          <span>Remarkable:</span>
          <span>照片拍的真好，帅</span>
        </p>
        <div>
          查看全部评论
        </div>
      </BoederContainer>
    </ArticleContainer>
  )
}
export {
  Article
} 
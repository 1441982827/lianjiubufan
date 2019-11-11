import React from 'react'

import { ArticleContainer } from './StyledArticle'
import { ContentContainer } from 'community/view/home/StyledCommunity'

import {Button} from 'ui/button/'
import {Icon} from 'ui/icon'


function Article(props){
  // console.log(props)
  let { user1Header , animate1 ,share} = props
  return (
    <ArticleContainer>
      <div>
        <img src={user1Header} alt="" onClick={ props.handlerClick } />
        <div>
          <p>PYTIxy</p>
          <span>77人已经关注了TA</span>
        </div>
        <Button
          width={57}
          height={28}
          bg={"gradual"}
          fontSize={10}
        >关注</Button>
      </div>
      <div>
        <ContentContainer onClick={ props.detailClick }>哪有什么天生如此，只是我们每天仍在坚持</ContentContainer>
        <img src={animate1} alt="" onClick={ props.detailClick } />
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
            <Icon img={share}
              width=".1rem"
              height=".1rem"
              onClick={props.onShare}
            ></Icon>                 
          </div>
        </div>
      </div>
    </ArticleContainer>
  )
}
export {
  Article
} 
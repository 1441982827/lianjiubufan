import  React from 'react'

import { Article } from 'community/components/article2/'
import { CommContentContainer ,BorderContainer } from '../profile/StyledProfile'

import user1Header from 'images/community/user1.png'
import animate1 from 'images/community/animate1.png'

function SeeOthersUI(props) {
 
  return (
    <CommContentContainer>
      <h2>动态</h2>
      <BorderContainer>
        <p>全部动态<span>(256)</span></p>
        <p>
          <span>按热度</span>|
          <span className="active">按时间</span>
        </p>
      </BorderContainer>

      <Article
        animate1={animate1}
        user1Header={user1Header}
      ></Article>
      <Article
        animate1={animate1}
        user1Header={user1Header}
      ></Article>
      <Article
        animate1={animate1}
        user1Header={user1Header}
      ></Article>
     
    </CommContentContainer>
  )
}
export default SeeOthersUI

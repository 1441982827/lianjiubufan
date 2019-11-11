import React from 'react'

import { DetailContainer, CommentContainer } from './StyledAnimateDetail'

import user1Header from 'images/community/user1.png'
import animate1 from 'images/community/animate1.png'

import { Animate } from './components/animate/'


function AnimateDetailUI (props){
  return (
  <>
    <DetailContainer>
      {props.children}
      <Animate
        user1Header={user1Header}
        animate1={animate1}
      ></Animate>
    </DetailContainer>
    <CommentContainer>
      <div></div>
      <div>
        <p>5评论</p>
        <article>
          <img src={user1Header}  alt="" />
          <section>
            <p>Remarkable</p>
            <span>1小时前</span>
            <p>照片拍的真好,帅</p>
          </section>
        </article>
        <article>
          <img src={user1Header}  alt="" />
          <section>
            <p>Remarkable</p>
            <span>1小时前</span>
            <p>照片拍的真好,帅</p>
          </section>
        </article>
        
      </div>
    </CommentContainer>
  </>
  )
}

export default AnimateDetailUI
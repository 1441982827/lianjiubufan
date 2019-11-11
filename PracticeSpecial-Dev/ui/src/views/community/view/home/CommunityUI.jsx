import React from 'react'

import user1Header from 'images/community/user1.png'
import share from 'images/community/share.png'
import animate1 from 'images/community/animate1.png'

import { Article } from 'community/components/article/'


export default function CommunityUI(props){
  return (
    <>
      <Article
        user1Header={user1Header}
        animate1={animate1}
        share={share}
        handlerClick={props.handlerClick}
        detailClick={props.detailClick}
        onShare={props.onShare}
      ></Article>
      <Article
        user1Header={user1Header}
        animate1={animate1}
        share={share}
      ></Article>
      <Article
        user1Header={user1Header}
        animate1={animate1}
        share={share}
      ></Article>
    </>
  )
}

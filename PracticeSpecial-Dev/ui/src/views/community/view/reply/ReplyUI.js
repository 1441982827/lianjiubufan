import React from 'react'

import { ReplyContainer , BorderContainer } from './StyledReply'
import { Comp ,SpanComp ,PComp } from './Comp'
import { UserList } from 'community/components/user/'

import user1Header from 'images/community/user1.png'

function ReplyUI() {
  return (
    <ReplyContainer>
      <BorderContainer>
        <UserList
          img={user1Header}
          msg={'杭州滨江，吾空健身工作室。'}
          name={'Mineinyyourlife'}
          comp={<Comp></Comp>}
          span={<SpanComp>回复了我的评论</SpanComp>}
        >
          <PComp>怎样才 能减肥 啊，我...</PComp>
        </UserList>
      </BorderContainer>
      <BorderContainer>
        <UserList
          img={user1Header}
          msg={'杭州滨江，吾空健身工作室。'}
          name={'Mineinyyourlife'}
          comp={<Comp></Comp>}
          span={<SpanComp>回复了我的评论</SpanComp>}
        >
          <PComp>怎样才 能减肥 啊，我...</PComp>
        </UserList>
      </BorderContainer>
      <BorderContainer>
        <UserList
          img={user1Header}
          msg={'杭州滨江，吾空健身工作室。'}
          name={'Mineinyyourlife'}
          comp={<Comp></Comp>}
          span={<SpanComp>回复了我的评论</SpanComp>}
        >
          <PComp>怎样才 能减肥 啊，我...</PComp>
        </UserList>
      </BorderContainer>
    </ReplyContainer>
  )
}

export default ReplyUI

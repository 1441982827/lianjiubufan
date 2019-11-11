import React from 'react'

import { MessageListContainer , DivBorder , List ,Time} from './StyledMessage'
import { UserList } from 'community/components/user/'

import user1Header from 'images/community/user1.png'

function MessageListUI() {
  return (
    <MessageListContainer>
      <DivBorder>
        <p>聊天列表</p>
      </DivBorder>
      <List>
        <UserList 
          img={user1Header}
          name={'Mineinyyourlife'}
          msg={'哈哈，健身室很累'}
        >
          <Time>9-02</Time>
        </UserList>
      </List>
      <List>
        <UserList 
          img={user1Header}
          name={'Mineinyyourlife'}
          msg={'哈哈，健身室很累'}
        >
          <Time>9-02</Time>
        </UserList>
      </List>
      <List>
        <UserList 
          img={user1Header}
          name={'Mineinyyourlife'}
          msg={'哈哈，健身室很累'}
        >
          <Time>9-02</Time>
        </UserList>
      </List>
    </MessageListContainer>
  )
}
export default MessageListUI
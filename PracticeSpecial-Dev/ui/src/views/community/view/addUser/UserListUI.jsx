import React from 'react'

import { UserList } from 'community/components/user/'
import { UserListContainer } from './StyledAddUser'
import { Button } from 'ui/button/'

import user1Header from 'images/community/user1.png'
import adduserbg from 'images/community/adduserbg.png'

function UserListUI(props) {
  return (
    <UserListContainer>
      <p>推荐好友</p>
      <article>
        <UserList
          img={user1Header}
          msg={'杭州滨江，吾空健身工作室。'}
          name={'Mineinyyourlife'}
        >
          <Button width='57' height='23' fontSize='10' bg='gradual'>关注</Button>
        </UserList>
        <div>
          <img src={adduserbg} alt=''></img>
          <img src={adduserbg} alt=''></img>
          <img src={adduserbg} alt=''></img>
        </div>
      </article>
      
    </UserListContainer>
  )
}

export default UserListUI

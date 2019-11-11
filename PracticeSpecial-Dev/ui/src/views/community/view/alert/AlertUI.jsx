import React from 'react'

import { AlertContainer , BorderContainer } from './StyledAlert'
import { PComp  } from '../reply/Comp'
import { UserList } from 'community/components/user/'
import {Button} from 'ui/button/'

import user1Header from 'images/community/user1.png'

function AlertUI() {
  return (
    <AlertContainer>
      <BorderContainer>
        <UserList
          img={user1Header}
          msg={'关注了你,成为你的新粉丝'}
          name={'Mineinyyourlife'}
          comp={<PComp>18小时前</PComp>}
          color='#6B72FF'
          // fontSize=''
        >
          <Button width='57' height='23' fontSize='10' bg='gradual'>关注</Button>
        </UserList>
      </BorderContainer>
    </AlertContainer>
  )
}

export default AlertUI

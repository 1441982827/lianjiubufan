import React from 'react'

import MyFocus from './StyledMyFocus'

import { Header } from 'ui/header'
import { Icon } from 'ui/icon'
import { Button } from 'ui/button'

import Shadow from '../../components/shadow/'
import Between from '../../components/between/'

import focus1 from 'images/profile/focus1.png'
import focus2 from 'images/profile/focus2.png'

export default props => {
  return (
    <MyFocus>
      <Header
        leftContent="我的关注"
        icon={<Icon width='0.1rem' height="0.18rem" type="left" onClick={z => props.history.goBack()} />} />
      <Shadow height="100%" radius="0" padding="0.2rem 0.15rem">
        <Shadow>
          <Between>
            <div>
              <Icon width="0.6rem" height="0.6rem" img={focus1} margin="0 0.15rem 0 0" />
              <span>Queena</span>
            </div>
            <Button width="86" bg="white" height="24" fontSize="13" color="#727272" customStyle="border:0.01rem solid #727272">相互关注</Button>
          </Between>
        </Shadow>
        <Shadow>
          <Between>
            <div>
              <Icon width="0.6rem" height="0.6rem" img={focus2} margin="0 0.15rem 0 0" />
              <span>jannyC</span>
            </div>
            <Button width="86" bg="gradual" height="24" fontSize="13">已关注</Button>
          </Between>
        </Shadow>
      </Shadow>
    </MyFocus>
  )
}

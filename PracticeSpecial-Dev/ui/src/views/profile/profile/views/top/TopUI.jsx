import React from 'react'

import Top from './StyledTop'

import { Header } from 'ui/header'
import { Icon } from 'ui/icon'

import Shadow from '../../components/shadow/'
import Between from '../../components/between/'

import default_avatar from 'images/profile/default_avatar.png'
import top1 from 'images/profile/top1.png'
import top2 from 'images/profile/top2.png'
import top3 from 'images/profile/top2.png'

export default props => {
  return (
    <Top>
      <Header
        leftContent="排行榜"
        icon={<Icon width='0.1rem' height="0.18rem" type="left" onClick={z => props.history.goBack()} />}
      />
      <div className="inner">
        <div className="cover">
          <span className="top_title">
            <Icon width="0.2rem" height="0.2rem" img={top1} margin="0.08rem 0.1rem" />
            <span>杜达占领了封面</span>
          </span>
        </div>
        <Shadow radius="0" padding="0.1rem 0.15rem 0.1rem 0.45rem">
          <Between>
            <div className="my_top">
              <Icon width="0.5rem" height="0.5rem" img={default_avatar} margin="0 0.15rem 0 0" />
              <div>
                <span>Blonde girl</span>
                <div>第5名</div>
              </div>
            </div>
            <i>630千卡</i>
          </Between>
        </Shadow>
        <div className="order">
          <Between borderBottom="1px solid #eee" padding="0.1rem 0">
            <div>
              <span className="top_num top_one">1</span>
              <Icon width="0.5rem" height="0.5rem" img={top1} margin="0 0.14rem 0 0.1rem" />
              <span>杜达</span>
            </div>
            <i>736千卡</i>
          </Between>
          <Between borderBottom="1px solid #eee" padding="0.1rem 0">
            <div>
              <span className="top_num">2</span>
              <Icon width="0.5rem" height="0.5rem" img={top2} margin="0 0.14rem 0 0.1rem" />
              <span>西维娜</span>
            </div>
            <i>723千卡</i>
          </Between>
          <Between borderBottom="1px solid #eee" padding="0.1rem 0">
            <div>
              <span className="top_num">3</span>
              <Icon width="0.5rem" height="0.5rem" img={top3} margin="0 0.14rem 0 0.1rem" />
              <span>Queena</span>
            </div>
            <i>716千卡</i>
          </Between>
        </div>
      </div>
    </Top>
  )
}

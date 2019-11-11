import React from 'react'
import { NavLink } from 'react-router-dom'

import Index from './StyledIndex'

import { Tabbar } from 'ui/tabbar'
import { Icon } from 'ui/icon'

import Between from '../../components/between/'
import Shadow from '../../components/shadow/'

import avatar from 'images/profile/default_avatar.png'
import top1 from 'images/profile/top1.png'

export default props => {
  return (
    <Index>
      <div className="pro_top">
        <Between>
          <h1>个人中心</h1>
          <div className="pro_btn">
            <Icon
              width="0.2rem"
              height="0.2rem"
              type="set_2x"
              margin="0 0.3rem 0 0"
              onClick={z => props.history.push('/profile/set')}
            />
            <Icon
              width="0.2rem"
              height="0.2rem"
              type="mail_2x"
              margin="0 0.05rem 0 0"
              onClick={z => props.history.push('/profile/remind')}
            />
          </div>
        </Between>

        <NavLink to={'/profile/data'}>
          <Between padding="0.2rem 0 0.25rem">
            <div>
              <Icon width="0.73rem" height="0.73rem" img={avatar} margin="0 0.15rem 0 0" />
              <span className="pro_adm">Blonde girl</span>
            </div>
            <Icon width="0.11rem" height="0.19rem" type="right" />
          </Between>
        </NavLink>

        <Between padding={'0 0.18rem 0'}>
          <NavLink to={'/profile/focus'}>
            <div className="pro_detail">
              <div>2</div>
              <span>关注</span>
            </div>
          </NavLink>
          <NavLink to={'/profile/fans'}>
            <div className="pro_detail">
              <div>4</div>
              <span>粉丝</span>
            </div>
          </NavLink>
          <div className="pro_detail">
            <div>0</div>
            <span>动态</span>
          </div>
          <div className="pro_detail">
            <div>0</div>
            <span>收藏</span>
          </div>
        </Between>
      </div>

      <div className="pro_bottom">
        <NavLink to={'/plan/detail'}>
          <Shadow>
            <Between>
              <div className="pro_plan">我的计划</div>
              <Icon width="0.1rem" height="0.16rem" type="right_black" />
            </Between>
          </Shadow>
        </NavLink>
        <NavLink to={'/profile/top'}>
          <Shadow padding="0.15rem 0.15rem 0">
            <div className="top_title">排行榜</div>
            <Between padding="0.1rem 0 0.15rem" borderBottom="0.01rem solid #eee">
              <div className="pro_mytop">
                <Icon width="0.46rem" height="0.46rem" img={avatar} margin="0 0.12rem 0 0" />
                <span>第5名</span>
              </div>
              <p>消耗630千卡</p>
            </Between>
            <Between padding="0.1rem 0">
              <div className="pro_first">
                <Icon width="0.46rem" height="0.46rem" img={top1} margin="0 .12rem 0 0" />
                <span>夺得今日榜冠军</span>
              </div>
              <Icon width="0.1rem" height="0.16rem" type="right_black" />
            </Between>
          </Shadow>
        </NavLink>
      </div>

      <Tabbar />
    </Index>
  )
}
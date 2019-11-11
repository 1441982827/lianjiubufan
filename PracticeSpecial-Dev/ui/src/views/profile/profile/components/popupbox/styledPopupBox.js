import styled from 'styled-components'
import close from 'images/popupbox/2xclose.png'
import alarm from 'images/popupbox/2xalarm.png'
import alarmbg from 'images/popupbox/2xalarmbg.png'


const PopupContainer = styled.div `
  width: 2.9rem;
  height: ${props => props.hei / 100 + 'rem'};
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  margin-top: ${props => '-' + props.hei / 100 / 2 + 'rem'};
  margin-left: -1.45rem;
  background: #fff;
  border-radius: 0.2rem;
  display: ${props => props.display};
  
  .content {
    height: 100%;
    padding-top: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`

const Msg = styled.div `
  width: 1.68rem;
  text-align: center;
  font-size: 0.21rem;
  color: #272727;
  font-family: "PingFang SC";
  line-height: 0.3rem;
  font-weight: 300;
`

const CloseBtn = styled.div`
  width: 0.21rem;
  height: 0.21rem;
  background: red;
  position: absolute;
  left: 50%;
  margin-left: -.1rem;
  bottom: -44px;
  background: url(${close}) no-repeat center;
  background-size: cover;
  display: ${props => props.display};
`

const AlarmHead = styled.div `
  width: 1.2rem;
  height: 1.05rem;
  background: url(${alarm}) no-repeat center, url(${alarmbg}) no-repeat center;
  background-size: cover, 0.91rem 0.91rem;
  position: absolute;
  left: 50%;
  margin-left: -.6rem;
  top: -.68rem;
  display: ${props => props.display};
`

export {
  PopupContainer,
  Msg,
  CloseBtn,
  AlarmHead
}
import styled from 'styled-components'
import left from 'images/plan/left.png'

const WhiteBgContainer = styled.div`
      width:100%;
      height:100%;
      background:#fff;
      overflow-y:${props => props.scroll?props.scroll : "scroll"};
      overflow-x:hidden;
      ${props=>props.flex?
      "display:flex; flex-direction:column; "
      :
      ""
      }
`
const ColorBgContainer = styled.div`
      width:100%;
      height:100%;
      ${ 
            props => {
            return props.circle? 
            "background: url('https://www.xuxuxu.club/static/images/plan/detail/circle.png') no-repeat 3.1rem .33rem ,linear-gradient(135deg,rgba(255,132,129,1) 0%,rgba(107,114,255,1) 100%);"+
            "background-size:1.52rem 1.52rem,cover;"
            :
            "background: linear-gradient(135deg,rgba(255,132,129,1) 0%,rgba(107,114,255,1) 100%);"
            }
      }
      
      overflow-y:${props => props.scroll?props.scroll : "scroll"};
      overflow-x:hidden;
      ${props=>props.flex?
      "display:flex; flex-direction:column; "
      :
      ""
      }

`

const Container = styled.div`
      width:100%;
      padding: 0 .16rem;
      position:relative;
      ${props=>props.flex?
      "flex:1; display:flex; flex-direction:column; div:last-child{flex:1;}"
      :
      ""
      }
`

const Header = styled.header`
      height:.45rem;
      font-size:.19rem;
      font-weight:500;
      line-height:.45rem;
      color:#fff;
      padding-left:.4rem;
      background:url(${left}) no-repeat 15px 14px;
      background-size: 10px 17px;
`

export {
      WhiteBgContainer,
      ColorBgContainer,
      Container,
      Header
}
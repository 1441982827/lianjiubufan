import styled from 'styled-components'
import ellipsis from 'styled/ellipsis'


const CommunityContainer = styled.div ` 
  background: #fff;
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
  overflow-y:scroll;
 
`
const ContentContainer = ellipsis({
  line_clamp:1,
  comp:styled.p `
    color:${props => props.color?props.color:"#3B3144"};
    font-size:.13rem;
    line-height:.18rem;
    margin: .02rem 0 .1rem 0;
  `
})

const DivWrapper = styled.div `
  
`

const Header = styled.header `
  height: 2.14rem;
  background:url(${props => props.bgHeader}) no-repeat center center;
  width:100%;
  background-size:100% 100%;
  position:relative;
  span{
    position:absolute;
    top:-.3rem;
    color:#fff;
  }
`

const Main = styled.main `
  flex:1;
  padding: 0 .15rem .78rem;
  position:relative;
`

const UserDiv = styled.div `
  margin-bottom:.15rem;
  img{
    width:.65rem;
    height:.65rem;
    position:absolute;
    top:-.27rem;
  }
  span{
    font-size:.21rem;
    margin-left:.76rem;
  }
`

export {
  CommunityContainer,
  ContentContainer,
  DivWrapper,
  Header,
  Main,
  UserDiv
}
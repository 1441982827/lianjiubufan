import styled from 'styled-components'
import ellipsis from 'styled/ellipsis'
import border from 'styled/border'

// const ProWrapper = styled.div `
//   height:100%
// `

const ProContainer = styled.div `
  height:100%;
  background:#fff;
  overflow-y:scroll;
  >div:nth-child(1){
    position:absolute;
    width:100%;
    top:0;
    z-index:1;
    background-color:transparent;
  }
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

const HeaderDiv = styled.div `
  padding-top:.55rem;
  display:flex;
  justify-content:space-between;
  >div:nth-child(1){
    display:flex;
    flex-direction:column;
    img{
      width:.65rem;
      height:.65rem;
    }
    h3{
      font-size:.21rem;
      font-weight:400;
      line-height:.3rem;
      color:#fff;
    }
  }
  >div:nth-child(2){
    display:flex;
    align-items:center;
    button:nth-child(1){
      margin-right:.1rem;
    }
  }
  
`

const SpanCity = styled.span `
  color:#B9B9B9;
  font-size:.1rem;
  i:nth-child(1){
    margin-right:.02rem;
  }
  i:nth-child(2){
    margin-left:.02rem;
  }
`


const CommContentContainer = styled.div `
  padding:0 .15rem;
  width:100%;
  background:#fff;
  >div{
    >div:nth-child(2){
      padding:0 .15rem;
    h2{
      color:#3B3144;
      font-size:.15rem;
      line-height:.24rem;
      font-weight:400;
      } 
    }
  }
`

const BorderContainer = border({
  width:" 1px 0 0 0",
  color:'#eee',
  comp:styled.div `
  display:flex;
  justify-content:space-between;
  padding-top:.03rem;
  p{
    color:#999;
    font-size:.12rem;
    span{
      margin:0 .02rem;
    }
    span.active{
      color:#000;
    }
  }
    p:nth-child(2){
      margin-right:.04rem;
  }
`
})


export {
  ProContainer,
  ContentContainer,
  HeaderDiv,
  SpanCity,
  CommContentContainer,
  BorderContainer
}
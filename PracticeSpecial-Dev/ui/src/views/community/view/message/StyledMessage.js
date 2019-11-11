import styled from 'styled-components'
import border from 'styled/border'

const MessageContainer = styled.div `
  ul{
    height:.65rem;
    width:100%;
    display:flex;
    justify-content:space-around;
    li{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      p{
        color:#999;
        font-size:.12rem;
        line-height:.16rem;
        padding-top:.08rem;
      }
    }
  }
  >div{
    width:100%;
    height:.1rem;
    background:#eee;
  }
`

const MessageListContainer = styled.div `
  flex:1;
  background:#fff;
  
`
const DivBorder = border({
  width:'0 0 1px 0',
  comp:styled.div `
    height:.27rem;
    width:100%;
    padding:.05rem .01rem .01rem .15rem;
    p{
      color:#272727;
      font-size:.12rem;
    }
  `
})

const List = border({
  width:'0 0 1px 0',
  comp:styled.ul `
    padding:0 .15rem;
  `
})

const Time = styled.span `
  color:#999;
  font-size:.09rem;
  margin-top:-.15rem;
`

export {
  MessageContainer,
  MessageListContainer,
  DivBorder,
  List,
  Time
}

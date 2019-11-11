import styled from 'styled-components'
import ellipsis from 'styled/ellipsis'
import border from 'styled/border'

const ReplyContainer = styled.div `
  height:100%;
`
const CompContainer = styled.div `
  display:flex;
  align-items:center;
  padding-left:0!important;
  span{
    color:#999;
    font-size:.09rem;
  }
  div{
    flex:1;
    display:flex;
    align-items:center;
    padding-left:.3rem!important;
    span{
      margin-right:.05rem;
    }
  }
`

const SpanCompContainer = styled.span `
  color:#999;
  font-size:.12rem;
  padding-left:.05rem;
`
const PContainer = ellipsis({
  width:'.38rem',
  line_clamp:3,
  comp:styled.p `
    color:#999;
    font-size:.1rem;
    line-height:.13rem;
    width:max-content!important;
  `
})

const BorderContainer = border({
  width:'1px 0 0 0',
  color:'#eee',
  comp: styled.div `
  
  `
})

export {
  ReplyContainer,
  CompContainer,
  SpanCompContainer,
  PContainer,
  BorderContainer
}
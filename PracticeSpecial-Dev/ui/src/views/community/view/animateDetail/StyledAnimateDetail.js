import styled from 'styled-components'


const DetailContainer = styled.div `
  width:100%;
  position:relative;
  padding:0 .15rem;
  >div{
    position:absolute;
    width:100%;
    padding:0 100%;
    height:.1rem;
    background:#EEEEEE;
    margin-left:-.15rem;
  }
`
const CommentContainer=styled.div `
  flex:1;
  background:#fff;
  padding-bottom:.45rem;
  div:nth-child(1){
    height:.1rem;
    background:#eee;
  }
  div:nth-child(2){
    padding:.1rem .15rem 0;
    p{
      font-size:.12rem;
      color:#272727;
      line-height:.16rem;
    }
    article{
      padding:.1rem 0;
      display:flex;
      img{
        width:.38rem;
        height:.38rem;
      }
      section{
        padding-left:.1rem;
        flex:1;
        display:flex;
        flex-direction:column;
        p:nth-child(1){
          font-size:.13rem;
          color:#3B3144;
          line-height:.18rem;
        }
        span{
          color:#8F8F8F;
          font-size:.09rem;
          line-height:.12rem;
          margin:.07rem 0;
        }
        p:nth-child(2){
          color:#272727;
          font-size:.12rem;
          line-height:.16rem;
        }
      }
    }
  }
`

export {
  DetailContainer,
  CommentContainer
}
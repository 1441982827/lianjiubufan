import styled from 'styled-components'

const AnimateContainer = styled.article `
  height:100%;
  display:flex;
  flex-direction:column;
  padding-top:.15rem;
  padding-bottom:.1rem;
  div{
    display:flex;
    align-items:center;
    >img{
    width:.43rem;
    height:.43rem;
    border:0;
    }
    span{
    color:#272727;
    font-size:.13rem;
    flex:1;
    margin-left:.1rem;
    }
  }
  p{
    font-size:.13rem;
    color:#272727;
    line-height:.18rem;
    margin-top:.1rem;
  }
  >img{
    width:3.31rem;
    height:2.16rem;
    margin:.15rem 0;
  }
  span{
    color:#8f8f8f;
    font-size:.09rem;
    line-height:.12rem;
  }
`

export {
  AnimateContainer
}
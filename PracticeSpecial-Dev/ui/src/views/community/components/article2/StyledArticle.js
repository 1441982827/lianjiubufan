import styled from 'styled-components'
import border from 'styled/border'
const ArticleContainer = styled.article `
  margin-top:.15rem;
  display:flex;
  flex-direction:column;
  div:nth-child(1){
    display:flex;
    align-items:center;
    img{
      width:.42rem;
      height:.42rem;         
    }
    div{
      padding-left:.1rem;
      flex:1;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      p{
        font-size:.13rem;
        color:#272727;
        margin:.03rem 0;
        line-height:.19rem;
      }
      span{
        font-size:.09rem;
        color:#8F8F8F;
      }
    }
  }
  >div:nth-child(2){
    display:flex;
    flex-direction:column;
    p{
      color:#3B3144;
      font-size:.13rem;
      line-height:.18rem;
      margin: .02rem 0 .1rem 0;
    }
    img{
      width:1.42rem;
      height:.95rem;
    }
    div{
      display:flex;
      ul{
        flex:2;
        display:flex;
        justify-content:space-between;
        li{
        i{
          color:#3B3144;
          font-size:.09rem;
          line-height:.12rem;
          margin-left:.02rem;
        }
        }
      }
      div{
        flex:3; 
        display:flex;
        align-items:center;
        justify-content:flex-end;     
      }
    }
  }   
`
const BoederContainer = border({
  width:"1px 0 0 0",
  color:'#eee',
  comp:styled.div `
    color:#999
    p{
      line-height:.14rem;
      font-size:.12rem;
      margin:.04rem 0 .05rem 0;
      span:nth-child(1){
        color:#000;
        margin-right:.02rem;
      }
    }
    div{
      line-height:.14rem;
      font-size:.12rem;
    }
  `
})

export{
  ArticleContainer,
  BoederContainer
}
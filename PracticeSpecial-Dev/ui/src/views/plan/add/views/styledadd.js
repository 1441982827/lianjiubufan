import styled from 'styled-components'

const AddCard = styled.div`
      height:1.3rem;
      background:url(${props => props.url}) no-repeat center center;
      background-size: 100%;
      position:relative;
      button{
            position:absolute;
            right:.15rem;
            bottom:.3rem;
      }
`
const AddBtn = styled.button`
      height:.4rem;
      width:1.15rem;
      border:0;
      background:linear-gradient(49deg,rgba(255,132,129,1) 0%,rgba(107,114,255,1) 100%);
      border-radius: .2rem 0 0 .2rem;
      text-align:center;
      font-size:.17rem;
      color:#fff;
      line-height:.4rem;
`

const MessageTitle = styled.div`
      padding-top:.35rem;
      color:#fff;
      font-weight:300;
      h3{
            font-size:.21rem;
            line-height:.25rem;
            font-weight:300;
      }
      h4{
            font-size:.25rem;
            line-height:.3rem;
            font-weight:300;
      }
      p{
            font-size:.13rem;
            margin:.11rem 0 .13rem 0;
      }
`

const WhiteCart = styled.div`
      background:#fff;
      border-radius:10px;
      height:4.6rem;
      margin-bottom:.15rem;
      flex:1;
`


export {
      AddCard,
      AddBtn,
      MessageTitle,
      WhiteCart,
}
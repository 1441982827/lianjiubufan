import styled from 'styled-components'

const ArticleContainer = styled.div`
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
`

const Header = styled.div`
      margin-top: .15rem;
      height:.35rem;
      line-height:.35rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .title{
            width:.59rem;
            height:.35rem;
            font-size:.25rem;
            color:#272727;
      };
      .search{
            width:.18rem;
            height:.18rem;
            img{
                  width:100%;
                  height:100%;
                  display:block;
            }
      }
`

const Main = styled.div`
      flex:1;
      padding-top:.05rem;
      padding-bottom:.2rem;
      overflow-y:scroll;
      overflow-x:hidden;
      padding-bottom:.24rem;
      section{
            margin-top:.15rem;
            .title{
                  font-size:.13rem;
                  color:#3B3144;
            }
            .imgWrap{
                  width:100%;
                  height:0;
                  padding-bottom:41.16%;
                  position: relative;
                  img{
                        width:100%;
                        height:100%;
                        display:block;
                        position:absolute;
                        border-radius:.1rem;
                        box-shadow:0 .05rem .1rem rgba(85,89,221,0.2);
                   }
            }
      }
`

export {
      ArticleContainer,
      Header,
      Main
}
import styled from 'styled-components'
import backImgUrl from 'images/article/back.png'
import shareImgUrl from 'images/article/share.png'

const HeadersWrap = styled.div`
      height:100%;
      display:flex;
      flex-direction:column;
      header{
            height:.44rem;
            display:flex;
            align-items:center;
            .back{
                  width:.11rem;
                  height:.19rem;
                  background:#f00;
                  margin-right:.15rem;
                  background:url(${backImgUrl});
                  background-size:cover
            }
            .title{
                  flex:1;
                  font-size:.19rem;
                  color:#fff;
                  font-weight:Bold;
            }
            .share{
                  width:.2rem;
                  height:.2rem;
                  background:url(${shareImgUrl});
                  background-size:cover
            }
      }
      main{
            width:calc(100% + .3rem);
            margin-left:-.15rem;
            flex:1;
            padding:0 .15rem;
            background:#fff;
            overflow-y:scroll;
            h3{
                  margin-top:.1rem;
                  font-size:.2rem;
                  color:#3B3144;
                  margin-bottom:.07rem;
            }
            .titleImgWrap{
                  height: 1.565rem;
                  width:100%;
                  height:0;
                  padding-bottom:45.36%;
                  position: relative;
                  img{
                        width:100%;
                        height:100%;
                        position:absolute;
                  }
            }
            section{
                  font-size:.15rem;
                  line-height:.21rem;
                  .num{
                        height:.21rem;
                        color:#3B3144;
                        margin:.13rem 0 .1rem 0;
                        text-align:center
                  }
                  h4{
                        height:.21rem;
                        color:#544F58;
                        text-align:center;
                        margin-bottom:.1rem;
                        font-weight:bold;
                  }
                  p{
                        color:#636561;
                        font-weight:Medium;
                        margin-bottom:.15rem;
                  }
                  img{
                        width:100%;
                  }
            }
      }
      
`
export default HeadersWrap
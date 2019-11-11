import styled from 'styled-components'

const SearchListUIWrap = styled.div`
      height:100%;
      flex-direction:column;
      .nocontent{
            flex:1;
            display:flex;
            flex-direction:column;
            align-items:center;
            margin-top:1.5rem;
            img{
                  width:1.12rem;
                  height:1.01rem;
                  display:block;
            }
      }
      .main{
            flex:1;
            margin-top:.1rem;
      } 
      section{
            width:100%;
            height:.83rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 10px 20px rgba(85,89,221,0.2);
            opacity:1;
            border-radius:20px;
            margin-bottom:.2rem;
            display:flex;
            .smallImgWrap{
                  width:.83rem;
                  height:.83rem;
                  border-radius:20px;
                  box-shadow:0 .05rem .1rem rgba(85,89,221,0.2);
                  margin-right:.1rem;
                  img{
                        width:100%;
                        height:100%;
                        display:block;
                        border-radius:20px;
                  }
            }
            .title{
                  flex:1;
                  display:flex;
                  flex-direction:column;
                  justify-content:center;
                  h3{
                        color:#272727;
                        font-size:.17rem;
                        font-weight:bold;
                  }
                  p{
                        color:#999999;
                        font-weight:500;
                        font-size:.12rem;
                  }
            }
      }
`

export default SearchListUIWrap
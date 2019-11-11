import styled from 'styled-components'
import search2 from 'images/article/search2.png'
import clear from 'images/article/clear.png'

const HeadersWrap = styled.div`
      height:100%;
      display:flex;
      flex-direction:column;
      header{
            height:.44rem;
            display:flex;
            align-items:center;
            display:flex;
            .searchWrap{
                  flex:1;
                  height:.3rem;
                  background:#fff;
                  border-radius:.15rem;
                  position:relative;
                  display:flex;
                  i{
                        width:.13rem;
                        height:.13rem;
                        display:block;
                        margin:.09rem .1rem .09rem .1rem;
                        background:url(${search2});
                        background-size:cover;
                  }
                  input{
                        flex:1;
                        border:none;
                        border-radius:.15rem;

                  }
                  .clear{
                        width:.13rem;
                        height:.13rem;
                        background:url(${clear});
                        background-size:cover;
                        margin:.09rem .1rem .09rem .1rem;
                  }
            }
            .cancel{
                  width:.49rem;
                  height:100%;
                  line-height:.49rem;
                  padding-left:.15rem;
                  font-size:.13rem;
                  color:#fff;
            }
      }
      main{
            width:calc(100% + .3rem);
            margin-left:-.15rem;
            flex:1;
            padding:0 .15rem;
            background:#fff;
            overflow-y:scroll;
      }
      
`
export default HeadersWrap
import styled from 'styled-components'
import fire from 'images/article/fire.png'

const SearchWrap = styled.div`
      width:100%;
      height:100%;
      h3{
            font-size:.15rem;
            color:#3B3144;
            font-weight:Medium;
            line-height:.21rem;
            margin:.15rem 0 .15rem 0;
      }
      .wrap{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            li{
                  height:.27rem;
                  line-height:.17rem;
                  padding:.05rem .13rem;
                  background:#EEEEEE;
                  border-radius:.13rem;
                  margin:0 .1rem .1rem 0;
                  font-size:.12rem;
                  color:#555555;
                  display:flex;
                  align-items:center;
                  i{
                        width:.11rem;
                        height:.13rem;
                        display:block;
                        background:url(${fire});
                        background-size:cover;
                        margin-right:.06rem;
                  }
            }
      }
`

export default SearchWrap
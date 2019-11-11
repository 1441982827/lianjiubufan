import styled from 'styled-components'

const Nav = styled.ul`
      margin-top:.1rem;
      width:100%;
      height:.31rem;
      display:flex;
      justify-content:space-between;
      padding:0 .6rem;
      li{
            width:.68rem;
            height:100%;
            font-size:.17rem;
            display:flex;
            flex-direction:column;
            color:#999999;
            /* color:#6B72FF; */
            text-align:center;
            align-items:center;
            line-height:.24rem;
            i{
                  width:.18rem;
                  height:.02rem;
                  background:#fff;
                  /* background:#6B72FF; */
                  margin-top:.05rem;
            }
      }
      .active{
            color:#6B72FF;
            i{
                  background:#6B72FF;  
            }
      }
`
export default Nav

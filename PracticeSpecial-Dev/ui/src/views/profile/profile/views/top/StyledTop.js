import styled from 'styled-components'

import topbg from 'images/profile/topbg.png'

const Top = styled.div `
  height: 100%;
  padding-top: 0.2rem;
  color: #3B3144;

  i {
    font-size: 0.2rem;
    font-weight: 500;
  }

  span {
    font-size: 0.16rem;
    vertical-align: middle;
  }

  .inner {
    height: 100%;
    background-color: #fff;
  }

  .cover {
    height: 2.6rem;
    background: url(${topbg}) center / 100%;
    text-align: center;
  }

  .top_title span {
    font-size: 0.1rem;
    font-weight: 500;
  }

  .my_top>div {
    display: inline-block;
  }

  .my_top span {
    vertical-align: baseline;
  }

  .my_top div {
    color: #727272;
    font-size: 0.1rem;
  }

  .order {
    padding: 0 0.15rem 0 0.2rem;
  }
  
  .top_num {
    font-size: 0.24rem;
    font-weight: 500;
    opacity: 0.7;
  }

  .top_one {
    opacity: 1;
  }
`

export default Top

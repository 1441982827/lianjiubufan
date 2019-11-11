import styled from 'styled-components'

import topbg from 'images/profile/topbg.png'

const RemindSetting = styled.div `
  height: 100%;
  padding-top: 0.2rem;
  color: #3B3144;
  font-size: 0.17rem;
  font-weight: 500;
  line-height: 0.24rem;

  .cover {
    height: 2.6rem;
    background: url(${topbg}) center / 100%;
    text-align: center;
  }

  .top_title span {
    font-size: 0.1rem;
    font-weight: 500;
    color: #3B3144;
    vertical-align: middle;
  }
`

export default RemindSetting

import styled from 'styled-components'

const PopularContainer = styled.ul `
  position:absolute;
  width:100%;
  bottom:.28rem;
  left:0;
  display:flex;
  justify-content:space-around;
  li{
    display:flex;
    flex-direction:column;
    p{
      text-align:center;
      font-size:.13rem;
      color:#e6e6e6;
      line-height:.18rem;
    }
  }
`

export default PopularContainer
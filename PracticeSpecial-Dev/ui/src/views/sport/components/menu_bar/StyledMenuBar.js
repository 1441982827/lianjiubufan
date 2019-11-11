import styled from 'styled-components';


const MenuBarStyled = styled.div`
  width:100%;
  height:1.05rem;
  position: fixed;
  bottom:.78rem;
  ul{
       display:flex;
       justify-content:space-around;
      li{
        a{
            display:inline-block
        }
        img{
            width:.58rem;
            height:.58rem;
        }
        p{
            text-align:center;
            margin-top:.08rem;
            color:#3B3144;
            font-size:.13rem;
        }
      }
  }
`;


export default MenuBarStyled
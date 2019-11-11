import styled from 'styled-components'
import tabbarBG from 'images/tabbar/2xnavnew.png'
import exit from 'images/tabbar/2xexit.png'


const Suspend = styled.div`
      width:100%;
      height:100%;
      position:absolute;
      z-index:9999;
      top:0;
      left:0;
      background:rgba(255,255,255,.9);
      display:${props => props.display};
`

const BottomBtn = styled.div`
      width:100%;
      height:.78rem;
      position:fixed;
      z-index:9999;
      left:0;
      bottom:0;
      background-image:url(${exit});
      background-repeat:no-repeat;
      background-position:center bottom;
      background-size:100% 
      .exitBtn{
            width:.44rem;
            height:.44rem;
            position:absolute;
            left:50%;
            top:0;
            margin-left:-.22rem;
            margin-top:.22rem;
      }
`


const TabbarContainer = styled.div`
      width:100%;
      height:.78rem;
      position:fixed;
      z-index:9000;
      left:0;
      bottom:0;
      background-image:url(${tabbarBG});
      background-repeat:no-repeat;
      background-position:center bottom;
      background-size:100% .61rem;
`

const Tabbar = styled.div`
      height:100%;
      display:flex;
      align-items:flex-end;
     
`
const TabbarItem = styled.div`
      width:${props => 100/props.columns}%;
      height:.44rem;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      position:relative;

      .icon{
            width:.25rem;
            height:.25rem;
            background-image:url(${props => props.icon});
            background-repeat:no-repeat;
            background-position:center center;
            background-size:100% 100%;
            &.active{
                  background-image:url(${props => props.iconActive});
            }
      }
      p{
            font-size:.1rem;
            color:rgba(255,255,255,.7);
      }
      
      .sport{
            width:.87rem;
            height:.87rem;
            position:absolute;
            background-image:url(${props => props.icon});
            background-repeat:no-repeat;
            background-position:-0.01rem -0.09rem;
            background-size:cover;
            &.active{
                  background-image:url(${props => props.iconActive});
                  background-size:50%;
                  background-position:.2rem .1rem;
            }
      }
`

export {
      TabbarContainer,
      Tabbar,
      TabbarItem,
      Suspend,
      BottomBtn,
}
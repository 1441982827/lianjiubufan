import styled from 'styled-components'
import right from 'images/plan/right2x.png'
import listicon from 'images/plan/listicon01.png'
import border from 'styled/border.js'


const ListItem = border({ 
      width:"0 0 1px 0",
      comp:styled.li`
      width:100%;
      background:url(${right}) no-repeat center right;
      background-size: .1rem .17rem;
      display:flex;
      height:.5rem;
      justify-content:space-between;
      align-items:center;
      h5{
            color:#272727;
            font-size:.17rem;
      }
      p{
            color:#8F8F8F;
            font-size:.14rem;
            margin-right:.2rem;
            width:1.68rem;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            text-align:right;
      }

`})

const MyList = styled.ul`
      /* height:100; */
      padding:.3rem 0;
      display:flex;
      flex-direction:column;
      align-items:center;
      li{
            
      }
`

const CoverBg = styled.div`
      position:fixed;
      width:100%;
      height:100%;
      background:rgba(0,0,0,.6);
`

const BtnListItem = border({ 
      width:"1px",
      color:"#6B72FF",
      radius:"8",
      comp:styled.li`
      margin:.05rem 0;
      width:2.38rem;
      height:.3rem;
      color:#3B3144;
      font-size:.15rem;
      text-align:center;
      overflow:hidden;
      border-radius:8px;
      line-height:.3rem;
      &.checked{
            background:url(${listicon}) no-repeat top right,#E1E3FF;
            background-size:.14rem , cover;
      }
`})

const FlexBox = styled.div`
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      height:${props => props.height ? props.height : "1rem"};
      overflow:hidden;
`

const StaticBox = styled.div`
      width:100%;
      height:${props => props.height ? props.height : ".8rem"};
      overflow-y:scroll;
`

const PickItem = styled.div`
      .am-picker{
            height:1.5rem;
            overflow:hidden;
            box-shadow:0px 10px 20px rgba(85,89,221,0.2);
            margin-top:.15rem;
            border-radius:.1rem;
      }
      .btns{
            height:1.5rem;
            overflow:hidden;
            display:flex;
            justify-content:space-around;
            align-items:center;
      }
`

export {
      ListItem,
      MyList,
      CoverBg,
      BtnListItem,
      FlexBox,
      PickItem,
      StaticBox
}
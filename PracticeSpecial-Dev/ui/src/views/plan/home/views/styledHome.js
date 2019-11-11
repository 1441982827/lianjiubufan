import styled from 'styled-components'



import right from 'images/plan/right.png'


const Title = styled.h3`
      line-height: .41rem;
      font-size:.26rem;
      color:rgb(39,39,39);
      font-weight:300;
      font-family:"PingFang SC";

`

const Subtitle = styled.h4`
      line-height: .24rem;
      font-size:.17rem;
      color:#272727;
      font-family:"PingFang SC";
      font-weight:300;
`

const Card1 = styled.div`
      height:1.86rem;
      background:url('https://www.xuxuxu.club/static/images/plan/home/card1.png') no-repeat center center;
      background-size:cover;
`
const Card2 = styled.div`
      height:2.73rem;
      overflow:hidden;
      background:url('https://www.xuxuxu.club/static/images/plan/home/card2.png') no-repeat .41rem .46rem;
      background-size: 318px 197px;
`

const BgCard1 = styled.div`
      height:1.58rem;
      background:url('https://www.xuxuxu.club/static/images/plan/home/bgcard1.png') no-repeat center center;
      background-size:cover;
      position:relative;
      .gonext{
            width:.65rem;
            height:.19rem;
            position:absolute;
            right:25px;
            bottom:30px;
            font-family:"PingFang SC";
            color:#fff;
            font-size:.13rem;
            background:url(${right}) right center no-repeat;
            background-size: 6px 11px;
      }
`
const BgCard2 = styled.div`
      height:1.58rem;
      background:url('https://www.xuxuxu.club/static/images/plan/home/bgcard2.png') no-repeat center center;
      background-size: cover;
      position:relative;
      .gonext{
            width:.65rem;
            height:.19rem;
            position:absolute;
            right:25px;
            bottom:30px;
            font-family:"PingFang SC";
            color:#fff;
            font-size:.13rem;
            background:url(${right}) right center no-repeat;
            background-size: 6px 11px;
      }
`

const CoverCard = styled.div`
      position:absolute;
      z-index:9;
      left:0;
      top:0;
      width:100%;
`

const Space = styled.div`
      width:100%;
      height:${props => props?props.height:20}px;
`

const BallBox = styled.div`
      width:.5rem;
      height:.5rem;
      background:url('https://www.xuxuxu.club/static/images/plan/home/ball/percent${props=>props.type}.gif') no-repeat center center;
      background-size:cover;
      text-align:center;
      line-height:.5rem;
      font-size:.13rem;
      position:relative;
      p{
            position:absolute;
            width:100%;
            bottom:-.15rem;
            text-align:center;
            line-height:.15rem;
            font-size:.13rem;
      }
`

const BallBar = styled.div`
      padding:.5rem .15rem;
      display:flex;
      justify-content:space-around;
      align-items:center;

      >div{
            &.centerBall{
                  transform:scale(1.6);
                  opacity:1;
            }
            &.leftBall{
                  transform:scale(1.3);
                  opacity:.7;
            }
            &.rightBall{
                  transform:scale(1.3);
                  opacity:.7;
            }
            &.normalBall{
                  opacity:.5;
            }
      }
`

const CoverBorder = styled.div`
      position:absolute;
      width:82%;
      height:75%;
      box-shadow:0px 10px 20px rgba(85,89,221,0.2);
      left:13%;
      top:20%;
      border-radius:.1rem;
      z-index:99;
`


export {
      Title,
      Subtitle,
      Card1,
      Card2,
      BgCard1,
      BgCard2,
      Space,
      CoverCard,
      BallBar,
      BallBox,
      CoverBorder
}
import styled from 'styled-components'

const Card = styled.div`
      height:${props => props.height + "px"};
      border-radius:10px;
      padding: 0 .15rem;
      margin: .05rem 0 .2rem 0;
      position:relative;
      box-shadow: 0 10px 20px rgba(85,89,221,0.16);
      overflow:hidden;
      display: flex;
	flex-direction: column;
	justify-content: center;
      .progress{
            height:100%;
            position:absolute;
            left:0;
            top:0;
            background:rgb(225,227,255);
            width:${props => props.done }
      }
      .plan-title{
            position:relative;
            z-index:2;
            display:flex;
            align-items: center;
            p{
                  font-size:.17rem;
                  line-height:.34rem;
                  font-weight: 500;
                  font-family:"PingFang SC";
                  color:#3B3144;
            }
            span{
                  height:.14rem;
                  border-radius:.07rem;
                  font-size:.1rem;
                  line-height:.12rem;
                  padding: 0 7px;
                  margin-left:.1rem;
                  &.doing{
                        border:1px solid #6B72FF;
                        background:#E1E3FF;
                        color:#6B72FF;
                  }
                  &.done{
                        border:1px solid #727272;
                        background:#EDEDED;
                        color:#727272;
                  }
            }
      }
      .plan-time{
            position:relative;
            z-index:2;
            p{
                  font-size:.13rem;
                  line-height:.19rem;
                  font-weight:Medium;
                  font-family:"PingFang SC";
                  color:#8F8F8F;
            }
      }
`

const DateContainer = styled.div`
      padding-top:.18rem;
      padding-bottom:.3rem;
      ul{
            display:flex;
            flex-wrap:nowrap;
            li{
                  width:${props => 100/props.child}%;
                  display:flex;
                  flex-direction:column;
                  justify-content:center;
                  align-items:center;
                  span{
                        text-align:center;
                        color:"#8F8F8F";
                        font-size:.13rem;
                        line-height:.19rem;   
                  }
                  p{
                        width:.3rem;
                        height:.3rem;
                        text-align:center; 
                        color:#8F8F8F;
                        font-size:.17rem;
                        line-height:.3rem;
                        margin-top:.08rem;
                  }
                  &.active{
                        span{
                              color:#3B3144;   
                        }
                        p{
                              color:#fff;
                              background:#6B72FF;
                              border-radius:50%;
                        } 
                  }
            }
      }
`

export {
      Card,
      DateContainer,
}
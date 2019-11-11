import styled from 'styled-components';

const Style = styled.div`
    padding-top:.1rem;
    height:3.2rem;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background-color: #fff;
    .item{
        height:.54rem;
        width:100%;
        display:flex;
        border-bottom:.01rem solid #EEE;
        justify-content:space-between;
        align-items:center;
        font-family:'medium';
        font-size:.17rem;
        .left,.right{
            flex:1;
            display:flex;
             .strength{
                margin-left:.15rem;
               span{
                 margin-right:.1rem;
               }
            }
        }

        .right{
            justify-content:flex-end;
        }
    }
     .img{
        width:.83rem;
        justify-content:center;
        border-radius:.1rem;
        box-shadow:0rem 0rem.05rem rgba(85,89,221,0.2);
    }

`;

export{Style}
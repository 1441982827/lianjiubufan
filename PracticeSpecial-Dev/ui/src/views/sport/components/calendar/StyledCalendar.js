import styled from 'styled-components';


const CalendarStyled = styled.div`
   .calendar{
        display:flex;
        flex-direction:column;
        margin-top:.54rem;
        margin-left:.23rem;
        .header{
            width:100%;
            display:flex;
            justify-content:start;
            align-items:center;
            height:.7rem;
            width:.51rem;
            .day{
                text-align:left;
                width:.52rem;
                min-width:.52rem;
                color:  #3B3144;
                font-size:.5rem;
                /* margin-left:-.04rem; */
                /* font-weight:600; */

            }
            .detail{
                height:100%; 
                margin-left:.12rem;
                color:  #707070;
                font-size:.15rem;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                align-items:flex-start;
                padding:.1rem 0rem;
                .week{
                    text-align:left
                }
               
            }

        }
        .footer{
            padding-top:.05rem;
            color:  #3B3144;
            width:1.22rem;
            height:.24rem;
            font-size:.17rem;
            border-top:.01rem solid  #EEEEEE;
        }
    }
`;


export  { CalendarStyled}
import styled from 'styled-components';


const Style=styled.div`
.sport-item{
    font-size:.17rem;
    font-family:'medium';
    display:flex;
    width:3.45rem;
    height:.83rem;
    color:#3B3144;
    border-radius:.1rem;
    box-shadow:0 .05rem .1rem rgba(85,89,221,0.2);
    margin-bottom:.2rem;
    &>div{
        height:.83rem;
        display:flex;
        align-items:center;
    }
    .img{
        width:.83rem;
        justify-content:center;
        border-radius:.1rem;
        box-shadow:0rem 0rem.05rem rgba(85,89,221,0.2);
    }
    .content{
        flex:1;
        display:flex;
        padding:0rem .15rem;
        justify-content:space-between;
        .left{
            display:flex;
            flex-direction:column;
            &>div:nth-child(2){
                margin-top:.07rem;
                &>span{
                    margin-right:.1rem;
                }
            }
            /* padding:0rem .15rem; */
            /* justify-content:center */
            /* justify-content:space-between; */
        }
    }
}


`
export {
    Style
}
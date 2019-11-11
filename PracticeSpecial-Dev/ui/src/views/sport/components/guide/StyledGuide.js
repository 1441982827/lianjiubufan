import styled from 'styled-components';


const Style = styled.div`
    height:100%;
    width:100%;
    aside{
            font-style:normal;
            font-family:normal;
            font-size:.15rem;
            p{
            color:#747474;
            font-family:'normal';
            line-height:.21rem;
            letter-spacing:.01rem;
            &::before{
                content:'.';
                position:relative;
                bottom:.06rem;
                padding-right:.06rem;
                font-size:.28rem;
                height:100%
            }
            }
            h3{
                font-family:'bolad';
            }
            article{
                padding-top:.15rem;
                margin-bottom:.15rem;
            }
    }
`;

export {
Style
}
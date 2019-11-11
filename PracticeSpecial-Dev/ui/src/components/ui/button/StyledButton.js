import styled from 'styled-components'

const Btn = styled.button`
      height:${props => props.height?props.height:".4rem"};
      font-family:'medium';
      width:${props => props.width?props.width:"1.15rem"};
      border:0;
      background:${props => props.background?props.background:"#6B72FF"};
      border-radius: ${props => props.radius?props.radius:".2rem"};
      text-align:center;
      font-size:${props => props.fontSize};
      color:${props=>props.color?props.color:"#fff"};
      line-height:${props => props.height?props.height:".4rem"};
      ${props=>{
            return props.customStyle
      }}
`

export {
      Btn
}
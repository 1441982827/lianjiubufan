import styled from 'styled-components'

const BackgroundContainer = styled.div `
  position:relative;
  width:${props => props.width?props.width:"100%"};
  height: ${props => props.height?props.height:"3.44rem"};
  background:url(${props=>props.img}) no-repeat center center;
  background-size:100% 100%;
  padding:${props => props.padding?props.padding:"0 .15rem"};
  
`

export{
  BackgroundContainer
}
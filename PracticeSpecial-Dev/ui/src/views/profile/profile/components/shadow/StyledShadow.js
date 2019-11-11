import styled from 'styled-components'

const Shadow = styled.div `
  height: ${props => props.height ? props.height : 'auto'};
  border-radius: ${props => props.radius ? props.radius : '0.1rem'};
  box-shadow: ${props => props.shadow ? props.shadow : '0 .05rem .1rem rgba(85, 89, 221, .2)'};
  padding: ${props => props.padding ? props.padding : '0.15rem'};
  margin: ${props => props.margin ? props.margin : '0 0 0.2rem'};
  background-color: #fff;
`

export default Shadow

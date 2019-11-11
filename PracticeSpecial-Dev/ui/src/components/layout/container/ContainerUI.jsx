import React from 'react'
import {ContainerStyle} from './StyledContainer'
 
function ContainerUI(props) {
      return (
        <ContainerStyle {...props}  bgColor={props.bg} padding={props.padding}>
          {props.children}
        </ContainerStyle>
      )
}
export default ContainerUI
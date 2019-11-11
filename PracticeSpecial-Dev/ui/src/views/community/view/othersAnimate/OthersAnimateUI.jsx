import React from 'react'

import { OthersAnimateContainer } from './StyledOthersAnimate'
 function OthersAnimateUI(props){
  return (
    <OthersAnimateContainer>
      {props.children}
      StyledOthersAnimate
    </OthersAnimateContainer>
  )
}
export {
  OthersAnimateUI
}

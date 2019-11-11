import React from 'react'
import {BackgroundContainer} from './StyledBackground'

function BackgroundUI(props) {
      return (
        <BackgroundContainer {...props}>
          {props.children}
        </BackgroundContainer>
      )
}
export default BackgroundUI
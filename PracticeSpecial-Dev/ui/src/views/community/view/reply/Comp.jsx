import React from 'react'

import { CompContainer , SpanCompContainer ,PContainer } from './StyledReply'
import { Icon } from 'ui/icon/'
function Comp() {
    return (
      <CompContainer>
        <span>18小时前</span>
        <div>
          <Icon type='message_2x'
            width='.09rem'
            height='.09rem'
          ></Icon>
          <span>回复</span>
        </div>
      </CompContainer>
    )
}

function SpanComp(props){
  return (
    <SpanCompContainer>
      {props.children}
    </SpanCompContainer>
  )
}

function PComp(props){
  return (
    <PContainer>
      {props.children}
    </PContainer>
  )
}
export {
  Comp,
  SpanComp,
  PComp
}
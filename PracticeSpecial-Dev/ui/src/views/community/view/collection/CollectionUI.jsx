import React from 'react'

import { CollectionContainer,BorderContainer,Pellipsis } from './StyledCollection'

import animate1 from 'images/community/animate1.png'
import user1Header from 'images/community/user1.png'

function CollectionUI() {
  return (
    <CollectionContainer>
      <BorderContainer>
        <img src={animate1} alt="" />
        <div>
          <Pellipsis>很多时候，我们认不清自己，因为我们把自己放在了一个错误的位置，给了自己一个错觉。所以，不怕前路坎坷...</Pellipsis>
          <div>
            <img src={user1Header} alt="" />
            <span>Jasmine</span>
          </div>
        </div>
      </BorderContainer>
      
    </CollectionContainer>
  )
}

export default CollectionUI

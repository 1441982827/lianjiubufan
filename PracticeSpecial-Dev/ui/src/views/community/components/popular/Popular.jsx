import React from 'react'

import PopularContainer from './StyledPopular'

function Popular(props) {
  // console.log(props.popular)
  let { popular } = props
  return (
    <PopularContainer>
      {
        Object.keys(popular).map((value)=>{
          return (
            <li key={value}>
              <p>{popular[value]}</p>
              <p>{value}</p>
            </li>
          )
        })
      }
    </PopularContainer>
  )
}
export default Popular
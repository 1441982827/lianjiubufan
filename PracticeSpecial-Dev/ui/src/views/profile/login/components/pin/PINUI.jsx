import React from 'react'

import PIN from './StyledPIN'

export default props => {
  const {value1, value2, value3, value4, handleChange1, handleChange2, handleChange3, handleChange4} = props
  return (
    <PIN>
      <div>
        <input type="text" value={value1} onChange={handleChange1} />
        <input type="text" value={value2} onChange={handleChange2} />
        <input type="text" value={value3} onChange={handleChange3} />
        <input type="text" value={value4} onChange={handleChange4} />
      </div>
      <p>已发送4位验证码至 +86 15689012346</p>
    </PIN>
  )
}

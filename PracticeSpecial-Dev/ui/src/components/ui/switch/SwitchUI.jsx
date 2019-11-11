import React from 'react'

import Switch from './StyledSwitch'

export default props => {
  return (
    <Switch>
      <input type='checkbox' className='switch' id={props.id} checked={props.checked} onChange={props.handleInputChange} />
      <label htmlFor={props.id} />
    </Switch>
  )
}

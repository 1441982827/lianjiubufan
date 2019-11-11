import React from 'react'
import { PopupContainer, Msg, CloseBtn, AlarmHead } from './styledPopupBox'

const coverDiv = document.createElement('div')
coverDiv.style.width = '100%'
coverDiv.style.height = '100%'
coverDiv.style.position = 'fixed'
coverDiv.style.left = '0'
coverDiv.style.top = '0'
coverDiv.style.background = 'rgba(0, 0, 0, 0.6)'
coverDiv.style.zIndex = '999'

class PopupBox extends React.Component {
  state = {
    isShow: true
  }

  render() {
    let { height, msg, closeBtn, alarmHead, isShow} = this.props

    if (isShow) document.querySelector('body').appendChild(coverDiv)

    return (
      <PopupContainer display={isShow ? 'block' : 'none'} hei={height ? height: '255'}>
        <AlarmHead display={alarmHead ? 'block' : 'none'} />
        <div className='content'>
          {msg ? <Msg>{msg}</Msg> : ''}
          {this.props.children}
        </div>
        <CloseBtn display={closeBtn ? 'block' : 'none'} onClick={z => this.closeBox()} />
      </PopupContainer>
    )
    }
    closeBox(){
        this.setState({
              isShow:false
        })
    }
    // componentDidMount(){
        // this.setState({
        //       isShow:this.props.isShow
        // })
    // }
}

export default PopupBox

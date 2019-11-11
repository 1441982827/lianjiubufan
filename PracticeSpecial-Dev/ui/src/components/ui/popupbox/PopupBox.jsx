import React  from 'react'
import {PopupContainer,Msg,CloseBtn,AlarmHead} from './styledPopupBox'

const coverDiv = document.createElement('div');
coverDiv.className = "coverDiv"
coverDiv.style.width = "100%";
coverDiv.style.height = "100%";
coverDiv.style.position = "fixed";
coverDiv.style.left = "0";
coverDiv.style.top = "0";
coverDiv.style.background = "rgba(0,0,0,.6)";
coverDiv.style.zIndex = "999";


class PopupBox extends React.Component{
      state = {
            isShow:true
      }
      render(){
            let { height , msg , closeBtn ,alarmHead,isShow} = this.props

            if(isShow){
                  document.querySelector('body').appendChild(coverDiv)
            }else{
                if(document.querySelector('.coverDiv'))document.querySelector('.coverDiv').remove()
            }
   
            return (
            <PopupContainer display={isShow ? "block" : "none"} hei={height?height:"255"} flex={true}>
                  <AlarmHead  display={alarmHead?"block":"none"}></AlarmHead>
                  <div className="content">
                        {
                              msg? <Msg>{msg}</Msg>:""
                        }
                        {this.props.children}
                  </div>
                  <CloseBtn display={closeBtn?"block":"none"} onClick={()=>this.closeBox()}></CloseBtn>
            </PopupContainer>
            )
      }
      closeBox(){
            this.setState({
                  isShow:false
            })
            document.querySelector('body').removeChild(coverDiv)
      }
      componentDidMount(){
            this.setState({
                  isShow:this.props.isShow
            })
      }
}

export default PopupBox
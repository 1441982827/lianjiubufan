import React from 'react'
import {Btn} from './StyledButton'

const backgroundColor = {
      "blue" : "#6B72FF",
      "black" : "rgba(0,0,0,.6)",
      "white" : "#fff",
      "gradual" : "linear-gradient(49deg,rgba(255,132,129,1) 0%,rgba(107,114,255,1) 100%)"
}

class Button extends React.Component{
      render(){
            let {width , bg , rightAngle , height,fontSize,color, bindClick , customStyle} = this.props
            width = width/100 + "rem";
            height = height/100 +"rem";
            fontSize = fontSize? fontSize/100 +"rem":".17rem";
            let radius = rightAngle === "left" ? "0 .2rem .2rem 0" : (rightAngle === "right" ? ".2rem 0 0 .2rem" : ".2rem")
            return <Btn width={width} 
            background={backgroundColor[bg]} 
            radius={radius} 
            height={height} 
            fontSize={fontSize} 
            color={color}
            onClick={bindClick}
            customStyle={customStyle}
            >{this.props.children}</Btn>
      }
}

export default Button
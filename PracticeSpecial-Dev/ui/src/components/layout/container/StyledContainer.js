import styled from 'styled-components'

const ContainerStyle = styled.div `
      padding:${props => props.padding?props.padding:'0 .15rem'};
      background: ${props =>{
        if(props.bgColor){
        return  props.bgColor==='true'? 'linear-gradient(135deg,rgba(255,132,129,1) 0%,rgba(107,114,255,1) 100%)':props.bgColor
        }else{
          return 'transparent'
        }
      }};       
      ${props => props.scrolly?'overflow-y:scroll; ':''}
      ${props => props.width?'width:'+props.width+';' :''} 
      ${props => props.height?'height:'+props.height+';':''} 
      ${props => {
        if(props.flex){
          if(props.flex==='true'){
            return `
             display:flex;
             flex-direction:column;
           `
          }else{
             return `
               display:flex;
             `
          }
          
        }
        
      }}; 
  `

export {
      ContainerStyle
}
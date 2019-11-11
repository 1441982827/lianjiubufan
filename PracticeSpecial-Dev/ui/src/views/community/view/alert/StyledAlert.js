import styled from 'styled-components'
import border from 'styled/border'

const AlertContainer = styled.div `
  height:100%;
`

const BorderContainer = border({
  width:'1px 0 0 0',
  color:'#eee',
  comp: styled.div `
  
  `
})

export{
  AlertContainer,
  BorderContainer
}
import styled from 'styled-components'
import border from 'styled/border'

const DivWrapper = styled.div `
  position:relative;
  padding-top:.15rem;
  padding-bottom:1rem;
`

const TextContainer = styled.textarea `
  width:100%;
  border:0;
  min-height:1.5rem;
`

const PhotoContainer = styled.div `
  position:absolute;
  left:0;
  bottom:0;
  background:#eee;
  width:1rem;
  height:1rem;
  display:flex;
  align-items:center;
  justify-content:center;
`

const PositionContainer = border({
  width:'0 0 1px 0',
  color:'#eee',
  comp:styled.div `
    padding:.3rem 0 .1rem 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    i{
      color:#3B3144;
      margin-left:-2.5rem;
    }
  `
})

export {
  TextContainer,
  PhotoContainer,
  DivWrapper,
  PositionContainer
}
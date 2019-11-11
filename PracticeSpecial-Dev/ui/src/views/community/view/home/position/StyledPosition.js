import styled from 'styled-components'
import border from 'styled/border'

const UlContainer = border({
  width: '1px 0 0 0',
  color: '#eee',
  comp: styled.ul `

  `
})

const List = styled.li `
  display:flex;
  width:100%;
  height:.66rem;
  align-items:center;
  justify-content:space-between;
  padding:0 .15rem;
  >div{
    p{
      font-size:.17rem;
      line-height:.24rem;
      color:#272727;
    }
    p.active{
      color:##6B72FF;
    }
    span{
      font-size:.1rem;
      color:#999;
    }
  }
  
`

export {
  UlContainer,
  List
}
import styled from 'styled-components'

const ListContainer = styled.section `
  display:flex;
  align-items:center;
  padding:.1rem 0;
  img{
    width:.42rem;
    height:.42rem;
  }
  div{
    padding-left:.1rem;
    flex:1;
    
    h3{
      color:#272727;  
      line-height:.18rem;
      margin-bottom:.03rem;
    }
  }
`

const P = styled.p `
  color:${props => props.color?props.color:'#8F8F8F'};
  font-size:${props => props.fontSize?props.fontSize:'.09rem'};
  
`
export {
  ListContainer,
  P
}

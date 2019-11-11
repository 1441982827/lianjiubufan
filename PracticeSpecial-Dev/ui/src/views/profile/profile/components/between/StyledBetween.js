import styled from 'styled-components'

const Between = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  border-bottom: ${props => props.borderBottom || '0'};
`

export default Between

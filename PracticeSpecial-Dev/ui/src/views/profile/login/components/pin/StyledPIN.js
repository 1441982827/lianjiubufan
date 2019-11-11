import styled from 'styled-components'

const PIN = styled.div `
  padding: .225rem 0 .77rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  input {
    width: .5rem;
    height: .5rem;
    background: rgba(0, 0, 0, .15);
    border-radius: .1rem;
    padding-left: .2rem;
    font-size: .17rem;
    font-weight: 1;
  }

  p {
    text-align: center;
    font-size: .15rem;
    padding-top: .1rem;
  }
`

export default PIN
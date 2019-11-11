import styled from 'styled-components'

const ChangePW = styled.div `
  height: 100%;
  padding-top: 0.2rem;
  font-weight: 500;
  color: #272727;
  display: flex;
  flex-direction: column;

  p {
    height: 0.24rem;
    font-size: 0.17rem;
    line-height: 0.24rem;
  }

  i {
    font-size: 0.13rem;
    vertical-align: middle;
  }

  .pw_inner {
    flex: 1;
    background-color: #fff;
    padding: 0.2rem 0.15rem 0.17rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export default ChangePW

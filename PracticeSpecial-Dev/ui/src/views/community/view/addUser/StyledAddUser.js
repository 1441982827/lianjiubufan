import styled from 'styled-components'

const SearchContainer = styled.div `
  padding:.15rem 0;
  position:relative;
  input{
    width:100%;
    height:.35rem;
    border-radius:.18rem;
    background-color:#eee;
    color:#999;
    padding-left:.33rem;
  }
  input::-webkit-input-placeholder{
    color:#999;
  }
  span{
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:.15rem;
  }
`
const UserListContainer = styled.div `
  article{
    p{
      color:#3B3144;
      line-height:.18rem;
    }
    
    >div{
      display:flex;
      justify-content:space-between;
      img{
        max-width:1.1rem;
        max-height:1.1rem;
        min-width:.9rem;
      }
    }
  }
`
export {
  SearchContainer,
  UserListContainer
}
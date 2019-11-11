import styled from 'styled-components'
import ellipsis from 'styled/ellipsis'
import border from 'styled/border'

const CollectionContainer = styled.div `


`

const BorderContainer = border({
  width:'1px 0 0 0',
  comp:styled.div `
    height:1.06rem;
    padding:.15rem 0;
    display:flex;
    >img{
      width:.84rem;
      height:.76rem;
    }
    >div{
      flex:1;
      padding-left:.1rem;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      >div{
        display:flex;
        align-items:center;
        >img{
          width:.22rem;
          height:.22rem;
        }
        span{
          font-size:.12rem;
          color:#999;
          padding-left:.1rem;
        }
      }
    }
  `
})

const Pellipsis = ellipsis({
  width:'100%',
  line_clamp:'2',
  comp:styled.p `
    ${'' /* height:.28rem; */}
    font-size:.12rem;
    color:#707070;
    line-height:.14rem;
  `
})

export {
  CollectionContainer,
  BorderContainer,
  Pellipsis
}
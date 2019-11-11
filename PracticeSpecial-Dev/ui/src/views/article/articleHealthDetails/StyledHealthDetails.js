import styled from 'styled-components'

const HealthDetailsWrap = styled.div`
      padding-top:.13rem;
      .details{
            line-height:.21rem;
            color:#636561;
            font-size:.15rem;
      }
      section{
            h3{
                  text-align:center;
                  color:#3B3144;
                  font-size:.15rem;
                  line-height:.21rem;
                  margin:.13rem 0 .13rem 0;
            }
            div{
                  color:#636561
            }
      }
`

const SpaceWrap = styled.div`
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      img{
            width:1.12rem;
            height:1.01rem;
            display:block;
      }
      div{
            margin-top:.5rem;
            color:#ABA9AC;
            font-size:.12rem;
      }
`

export {
      SpaceWrap
}
export default HealthDetailsWrap
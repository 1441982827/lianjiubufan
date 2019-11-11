import styled from 'styled-components'
import ununited from 'assets/images/common/ununited.png'

const Ununited = styled.div`
      height:100%
      display:flex;
      background:#fff;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .imageIcon{
            width:1.12rem;
            height:1rem;
            background:url(${ununited}) no-repeat center center;
            background-size:cover;
      }
      >p{
            font-size:.12rem;
            margin-top:.5rem;
            color:#ABA9AC;
            text-align:center;
      }
`

export {
      Ununited
}
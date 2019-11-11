import styled from 'styled-components'

function shadow(comp){
      return styled(comp)`
            border-radius:10px;
            padding: 0 .15rem;
            margin: .05rem 0 .2rem 0;
            box-shadow: 0 10px 20px rgba(85,89,221,0.16);
            overflow:hidden;
      `
}

export default shadow
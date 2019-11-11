import styled from 'styled-components'


function gradientbg(comp , figure){
      return styled(comp) `
      background:linear-gradient(135deg,rgba(255,132,129,1) 0%,rgba(107,114,255,1) 100%);
      `
}

export {
      gradientbg,
}
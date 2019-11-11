import Container from './ContainerUI'
import React from 'react';

function ContainerX (props){
    let obg= props.obg==='true'?'true':props.obg
    return(
        <Container padding='0' bg={obg} height={props.oheight} width={props.owidth} scrolly={props.scrolly} flex={props.oflex} >
        {props.header}
         <Container {...props} >
            {props.children}
         </Container>
        {props.footer}
        </Container>
    )
}

export default ContainerX
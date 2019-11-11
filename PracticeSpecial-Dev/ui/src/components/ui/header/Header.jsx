import React  from 'react'
import {HeaderStyled} from './HeaderStyled'
import { NavBar } from 'antd-mobile';
import { Icon } from 'ui/icon';

function Header (props){

const  Styled =HeaderStyled(props)
    return (
    <Styled>
        <NavBar
        leftContent= {props.leftContent}
        icon={props.icon||<Icon type='left' width='.11rem' ></Icon>}
        onLeftClick={props.onLeftClick}
        rightContent={props.rightContent}
        >
         {props.children}
        </NavBar>
     </Styled>
    )
}


export default Header
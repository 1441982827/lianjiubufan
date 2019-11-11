import React from 'react'
import {Calendar} from 'sport/components/calendar'
import {Container} from 'layout/container/'
import {MenuBar }from 'sport/components/menu_bar/'
// import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
function Focus (props) {
    return (
        <>
            <Container>
                <Calendar  desc="练就不凡" ></Calendar>
            </Container>
            <MenuBar> </MenuBar>
        </>
    )
}

export default Focus

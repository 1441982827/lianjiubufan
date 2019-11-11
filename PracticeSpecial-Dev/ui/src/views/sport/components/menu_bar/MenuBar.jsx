import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import StyledMenuBar from './StyledMenuBar'
import sport_img_main from 'images/sport/sport_main_2x.png'
import sport_img_cycling from 'images/sport/sport_cycling_2x.png'
import sport_img_foot from 'images/sport/sport_foot.png'
import sport_img_run from 'images/sport/sport_run_2x.png'

 class MenuBar extends Component {
    render() {
        return (
            <StyledMenuBar>
                <ul>
                    <li>
                        <NavLink exact  to='/sport' >
                            <img src={sport_img_main} alt=""/>
                        </NavLink>
                         <p>运动</p>
                    </li>

                    <li>
                        <NavLink to="/sport/foot">
                            <img src={sport_img_foot} alt=""/>
                        </NavLink>
                        <p>徒步</p>
                    </li>
                    <li>
                        <NavLink to="/sport/cycling">
                            <img src={sport_img_cycling} alt=""/>
                        </NavLink>
                        <p>骑行</p>
                    </li>
                  
                    <li>
                        <NavLink to="/sport/run">
                            <img src={sport_img_run} alt=""/>
                        </NavLink>
                        <p>跑步</p>
                    </li>
                 </ul>
            </StyledMenuBar>
        )
    }
}


export default MenuBar
import React from 'react'
import {MessageTitle ,WhiteCart} from './styledadd'
import {indexStyled} from '../../index/'
import {Switch , Redirect ,Route} from 'react-router-dom'

import Step01 from './step/ChooseSport'
import Step02 from './step/ChooseDay'
import Step03 from './step/ChooseTime'

class PlanAddSport extends React.Component{
    state={
        titleValue:{
            title:"您计训练的部位",
            subTitle:"点击滑动勾选锻炼项目"
        }
    }
    render(){
        let {Container} = indexStyled
        return <Container flex={true}>
                    <MessageTitle >
                        <h3>请选择</h3>
                        <h4>{this.state.titleValue.title}</h4>
                        <p>{this.state.titleValue.subTitle}</p>
                    </MessageTitle>

                    <WhiteCart>
                        <Container>
                            <Switch>
                                <Route path="/plan/add/setting/sportstep01" component={Step01}></Route>
                                <Route path="/plan/add/setting/sportstep02" component={Step02}></Route>
                                <Route path="/plan/add/setting/sportstep03" component={Step03}></Route>
                                <Redirect from="/plan/add/setting" to="/plan/add/setting/sportstep01" exact></Redirect>
                            </Switch>
                        </Container>
                    </WhiteCart>
                </Container>
    }

 

    componentDidMount(){
        this.props.history.listen((p) => {
            if(p.pathname.search("sportstep01")){
                this.setState({
                    titleValue:{
                        title:"您计训练的部位",
                        subTitle:"点击滑动勾选锻炼项目"
                    }
                })
            }

            if(p.pathname.search("sportstep02")){
                this.setState({
                    titleValue:{
                        title:"您计训练的频率",
                        subTitle:"勾选日期"
                    }
                })
            }

            if(p.pathname.search("sportstep03")){
                this.setState({
                    titleValue:{
                        title:"您计训练的时间段",
                        subTitle:"滑动选择时间"
                    }
                })
            }
        })
    }
}
export default PlanAddSport
import { ComponentType } from 'react' // react 对 ts 的支持
import Taro, { Component } from '@tarojs/taro' // 使用 taro 创建组件
import { View, Input, Label } from '@tarojs/components' // 解构出 taro 标签

import './mySwitch.scss' // 引入 css

class Switch extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      isChecked: false
    }
  }

  // handleInputChange(event) {
  //   const target = event.target
  //   const value = target.checked

  //   this.setState({
  //     isChecked: value
  //   },
  //   () => this.props.handleChange(this.state)
  //   )
  // }

  // componentDidMount () {
    // this.setState({
    //   isChecked: this.props.defaultChecked
    // })
  // }

  render () {
    // const { checked, handleInputChange } = this.props
    return (
      <View className='switch-wrap'>
        <Input
          // checked={checked}
          // onChange={handleInputChange}
        />
        <Label />
      </View>
    )
  }
}

export default Switch as ComponentType

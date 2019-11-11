# PracticeSpecial 非凡项目 日志文档

## 项目进度

:star: 静态页面的开发 :heavy_check_mark:

:star: 接口开发 :alarm_clock: 

:star: 联调:red_circle:

:star: 部署:red_circle:



计划书：

还剩余以下几个环节：

​	配置静态资源服务器

​    配置前端服务器

​	完成公众号的布置

​	完成小程序的开发

​	完成communty社区模块的开发

​	



## 入口

- [非凡UI组件文档  FUI](./doc/components/FUI.md) :checkered_flag:

## 开发日志



- 2019-3-17

>  更新 FUI组件Version 1.0.2
>
>  描述：**增加 Swich 和 VideioPlayer 组件**

- 2019-3-15

>  更新 FUI组件Version 1.0.1
>
>  描述：**更新Button** 

- 2019-3-14

>  更新 FUI组件Version 1.0.0 
>
> 描述：**批量更新 Header Icon ContainerX** 增加多组件功能

- 组件文档

> Time :  2019-3-9 PM
>
> 功能：增加多组件
>
> 总结组件文档 FUI

- 点聚页面|time 

> Time :  2019-3-8 PM
>
> Author: zm
>
> 功能：用于非凡应用的点聚页面
>      增加时间方法 getTime() 可以进行格式化
>use 
> import {getTime} from 'utils/time/'
>let {d,W} = getTime()
>let day =getTime().toString("M/Y",true)

- 计划页面

> Time :  2019-3-8 AM
>
> Author: hwj
>
> 功能：用于 非凡应用的计划页面

- 登录注册页面 |公共样式添加 |增加Hash路由

> Time :  2019-3-7 PM
>
> Author: zwy
>
> use
>
> 说明：
>
> 登录注册页面开发完成，修改root 样式 100% 增加input 默认样式；
>
> 增加字体： ！使用标准字体 
>
> x-light
>
> light 
>
> normal
>
> medium
>
> heavy
>
> bold
>
> 增加Hash路由
>
> > tip:
> >
> > 咱们每个人要开始规划个人的路由了 ，主模块的路由先不要修改
>
> 功能：用于 非凡应用的提示弹窗

- PopupBox 组件开发

> Time :  2019-10-5 PM
>
> Author: hwj
>
> use
>
> ```javascript
> import {PopupBox} from 'ui/popupbox/'
>  <PopupBox 
>  isShow={true} 
>  height={200} 
>  msg="您的运动时间到了是否开始"
>  closeBtn={true}
> alarmHead={true}
> >
>  附加内容：自定义
> </PopupBox>
> ```
>
> 说明：
>
>  components/ui 下增加了popupbox文件夹
>
> 功能：用于 非凡应用的提示弹窗



- Container 组件开发

> Time :  2019-02-25AM
>
> Author: lhx
>
> use
>
> ```javascript
> import {Container} from 'layout/container/'
> <Container>...</Container>
> ```
>
> 说明：
>
> components/layout下增加了tabbar文件夹 <Tarbar> 
>
> 功能：
>
> 最外层Container，内边距 .08rem

- TabBar组件开发

> Time :  2019-02-24 PM
>
> Author:hanweijing
>
> use
>
> ```javascript
> import {Tabbar} from 'ui/tabbar/'
> <Tabbar>运动选项</Tabbar>
> ```
>
> 说明：
>
>  资源文件夹  图片 增加导航栏图标图片
>
> **！！改动**：
>
> components/layout下增加了tabbar文件夹 <Tarbar> 
>
> 修改 组件放在 components/ui /tabbar
>
> 功能：
>
> 除运动按钮外四个图标会进行**路由跳转并高亮**
> 		运动按钮点击出现遮罩层（透明度90%），再次点击遮罩层消失
> 		引入组件后，写在组件里的内容会显示在遮罩层上（仅供运动模块使	用）



## 依赖包列表

- 装饰器 @babel/plugin-proposal-decorators": "^7.6.0"

- UI antd-mobile 2.3.1

- Scroll 组件 better-scroll": "^1.15.2

- web pack 配置  customize-cra": "^0.7.0 

   react-app-rewired": "^2.1.3"

- 服务器代理  http-proxy-middleware": "^0.20.0

-  数据结构处理-共享结构 immutable 4.0.0-rc.12

- 前段框架 react   16.8  react-dom

- 路由依赖 react-router-dom": "^5.0.1"

- 动画组件包  "react-transition-group": "^4.3.0"

- 数据状态树   "redux": "^4.0.4",  

   "redux-immutable": "^4.0.0",   

   "redux-saga": "^1.1.1",

  "redux-thunk": "^2.3.0"

- 样式组件  "styled-components": "^4.3.2"

- 工具包  "lodash": "^4.17.15"

-  装饰器包  "core-decorators": "^0.20.0"

- 异步管理   "async": "^3.1.0"

- 本地存储  "store2": "^2.10.0"

## 路径\alias

### 静态资源

- assets 

  path : `'src/assets/'`

- fonts

  path : `'src/assets/fonts/'`

- images

  path : `'src/assets/fonts/'`

-  json

  path : `'src/assets/json/'`

-  styles

  path : `'src/assets/styles/'`

  
### 模块

- article

  path : `'src/views/article/'`

- community

  path : `'src/views/community/'`

- plan

  path : `'src/views/plan/'`

- profile

  path : `'src/views/profile/'`

- soprt

  path : `'src/views/soprt/'`

### 公共组件

- components

  path : ` 'src/components/'`

- hoc

  path : ` 'src/components/hoc/'`

- layout

  path : `'src/components/layout/'`

- styled

  path : `'src/components/styled/'`

- ui

  path : `'src/components/ui/'`

### 数据状态树

- store

  path : ` 'src/store/'`

### 工具方法

- utils

  path : ` 'src/utils/'`
- http

  path : ` 'src/tools/http/`

  
  





## 架构

- SPA(single page application)
- React
- React Router 4
- fetch
- json-server
- antd-mobile
- CRA(create-react-app)/react-app-rewired/customize-cra
- Context
- Redux
- React-redux
- Redux-thunk
- Redux-saga
- Decorator(ES6 装饰器)
- generator
- styled-components



待引入包

 **redux-persist**

https://www.jianshu.com/p/a0406d72b19b

https://www.npmjs.com/package/redux-persist


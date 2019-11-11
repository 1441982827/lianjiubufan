import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,Map,Switch,Image, Button ,Audio} from '@tarojs/components'

import './index.scss'
import { fail } from 'assert'
import { Taro } from '../../../dist/npm/@tarojs/taro-weapp/dist';



type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}


class Index extends Component {

  config: Config = {
      navigationBarTitleText: '练就非凡 运动App',
  }

  state={
    latitude:40,
    longitude:120,
    points:[],
    run:false,
    musicSrc:'https://wydawn.club/static/media/music/2.mp3'
  }

  componentDidMount(){

    
      // "scope.userLocationBackground":{
      //   "desc": "运动定位"
      // }
    // Taro.authorize({
      
    // })

  
    this.getLocation()
    Taro.onLocationChange(this.onLocation.bind(this))
    Taro.getBackgroundAudioManager(x=>console.log(x))
    this.loadMusic()
  }
  
  onLocation(res){
    // console.log('location change', res)
      this.setState( 
       (sta)=>{
        //  console.log(sta);
         let newP= [{
           latitude:res.latitude,
           longitude:res.longitude,
         }].concat(sta.points
         return{
           latitude:res.latitude,
           longitude:res.longitude,
           points:newP
         }}
      )
  }

  getLocation(){
      Taro.getLocation({
        type: 'wgs84',  
        isHighAccuracy:true,
        highAccuracyExpireTime:500,
        success: (res)=> {
          this.setState({
            latitude:res.latitude,
            longitude:res.longitude
          })

          Taro.showToast({
            title: '获取定位成功',
            icon: 'success',
            duration: 1000
          })

        },
        fail:(res)=> {
          Taro.showToast({
            title: '获取定位失败，请打开定位开始运动',
            icon: 'warn', 
            duration: 1000
          })
          this.getLocation()
        }
      })
  }

  run(){

      if(this.state.run){
        this.locationEnd()
        }else{
        this.locationStart()
      }

    //   Taro.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.userLocationBackground']) {
    //       Taro.authorize({
    //         scope: 'scope.userLocationBackground',
    //         success (res) {
    //           console.log(res);              
    //         },
    //         fail(res){
    //           console.log(res);
    //         }
    //       })
    //     }
    //   }
    //   ,
    //   fail(res){
    //     console.log(res);
    //   }
    // })

    //  Taro.onLocationChange( (arguments)=> {
    //    console.log(arguments)
    //  })
    // if(timer) return clearInterval(timer)
    // timer=setInterval(
    //   ()=>{
    //     Taro.getLocation({
    //         type: 'wgs84',
    //         isHighAccuracy:true,
    //         highAccuracyExpireTime:500,
    //         success: (res)=> {
    //           console.log(res)
    //           this.setState( 
    //            (sta)=>{
    //              console.log(sta);
                
    //             let newP= [{
    //               latitude:res.latitude,
    //               longitude:res.longitude,
    //             }].concat(sta.points)
    

    //              return{
    //               latitude:res.latitude,
    //               longitude:res.longitude,
    //               points:newP
    //              }
    //            })
    //         }
    //     })
    //   },1000
    // )
    
   
  }

  locationStart(){
    Taro.startLocationUpdateBackground({
        success(res) {
          Taro.showToast({
              title: '运动开始',
              icon: 'success',
              duration: 1000
            })
        },
        fail(res) {
          console.log(res)
         Taro.showToast({
              title: '出现错误，重新启动小程序再试',
              icon: 'warn',
              duration: 1000
            })
        }
    })

    this.setState({
      run:true
    })
  }
  locationEnd(){
     Taro.stopLocationUpdate(
      {
         success(res){
          Taro.showToast({
              title: '运动已暂停',
              icon: 'success',
              duration: 1000
          })
        },
        fail(res){

        //  Taro.showToast({
        //       title: '出现错误，重新启动小程序再试',
        //       icon: 'warn',
        //       duration: 1000
        //  })
       }
    })

    this.setState({
      run:false
    })
 
  }
  
  musicChange(e){
    // console.log(e);
    if(e.detail.value){
      this.audio&&this.audio.play()
    }else{
      this.audio&&this.audio.pause()
    }
  }

  loadMusic(){

    this.setState({
      musicSrc:'https://wydawn.club/static/media/music/'+
      Math.ceil(Math.random()*4)  
      +'.mp3'
    },() => {
      this.audio= Taro.createInnerAudioContext()
      this.audio.src=this.state.musicSrc
      this.audio.loop=true
    })
   
    
  }

  render () {
    let {latitude, longitude,points,run}=this.state
   
    return (
      <View className='index'>
        <Map 
        scale={20}
        show-location='true'
        latitude={latitude}
        longitude={longitude}
        enable-overlooking={true}
        polyline={ [{
          points: points,
          color: "#ff6600",
          width: 2,
          dottedLine: false,
          arrowLine: true,
          borderColor:"#f00",
          borderWidth:5
       }]}
        >
        </Map>
       
        <View>
        <View className='item' >
          <View className="warper">
           <Text>音乐</Text>
           <View className='content'><Switch onChange={this.musicChange.bind(this)}/></View>
         </View>  
          </View>
       
        <View className='item'>
           <View className="warper">
          <Text>添加计划</Text>
        <View className='content'>
          <Image src='http://wydawn.club/images/icon/right_black.png' />
           </View>
         </View>
         </View> 
          <View className='bt-warper'>
           <Button
            className="start" 
            onTap={this.run.bind(this) } 
            open-type="getUserInfo"
            >{run?'暂停':'开始'}
            </Button>
          </View>  
        </View>

      </View>
    )
  }
}

export default Index  as ComponentType

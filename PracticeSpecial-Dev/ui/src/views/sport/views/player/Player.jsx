import React, { Component ,createRef} from 'react'

import {ContainerX ,Container}from 'layout/container/'
import {getTime} from 'utils/time/'
import {Header} from 'ui/header';
import {Icon} from 'ui/icon';
import {Button} from 'ui/button';
import {PopupBox} from 'ui/popupbox'
import Switch from 'ui/switch'


import {Guide} from 'sport/components/guide';
import {VideoPlayer} from 'sport/components/video_player';

import {Style} from './StyledPlayer'
import movie from 'images/sport/player/movie.mp4'
import back from 'images/sport/player/back.png';
import http from 'utils/http'


                       
 class Player extends Component {
     

     state={
         play:false,
         title:'泡沫轴上背部放松',
         sid:'1',
         guides:[
             {
                 title:'步骤',
                 content:[
                 '仰卧在瑜伽垫上，屈膝，双脚与肩同宽踩实地面',
                 '双手抱住对侧肩膀，双肩充分展开',
                 '泡沫轴置于上背部下方，来回滚动',
                 '下颚后缩收紧，减少颈部受力'
                ]
             },
             {
                  title:'呼吸',
                  content:['全程保持均匀呼吸']
             },
             {
                  title:'动作感觉'
             }
         ],
         strength:2,
         isSport:false,
         music:false,
         musicUrl:'',
         vedioUrl:''
     }


     constructor(props){
        super(props)
        this.audio = React.createRef()

     }


    async componentDidMount(){
     let id= decodeURIComponent(this.props.location.search.replace('?vid=',''))
      

     
     let vedio=  await http.get({url:'/api/video'})
     let musci=  await http.get({url:'/api/music'})


        if(this.props.location.state){

            let{partid,sptname}=this.props.location.state

            this.setState(
                {
                    title:sptname||'泡沫轴上背部放松',
                    sid:partid||1
                }
            )
        }
   
    //  if(vedio&&musci){
    //     this.setState({
    //     vedioUrl:vedio[id].vurl,
    //     musicUrl:musci[Math.floor(Math.random()*(musci.length-1))].murl
    //   })
    // }
      this.setState({
        musicUrl :'https://xuxuxu.club/static/media/music/'+
        Math.ceil(Math.random()*4)
        +'.mp3'
      })
     }

    renderStrength(strength){
     let strengthArray=  makeArray(strength)
      return(
          <> 
          {strengthArray.map((x,i)=>{
              let ico='strength_2x'
              if(x===1){
                ico='strength_active_2x'
              }
            return  <Icon type={ico} height='.13rem'  width='.10rem' key={i} ></Icon>
          } )}
         </>
      )    
    }

    render() {
        return (
        <Container padding='0'  height="100%" >
            <ContainerX
                oheight="3.73rem"
                bg="#fff"
                obg={`url('${back}') 0 0/100% 3.74rem no-repeat`}
                header={
                    <>

                        <audio
                        src={this.state.musicUrl}
                        ref={this.audio}
                        loop
                        preload="auto"
                        ></audio>
                        <Header
                         onLeftClick={
                         (e)=>console.log(this.props.history.goBack())
                         }
                        leftContent={this.state.title}
                        rightContent={
                           this.state.isSport
                           &&<Icon
                            type="player" 
                            width=".43rem"
                            height=".43rem"
                             onClick={()=>this.setState(x=>({play: !x.play}) )}
                             customStyle="
                                 position:relative;
                                 top:3rem;
                                 right:.18rem;
                           " ></Icon>
                        }
                        leftStyled='flex:2.4'
                        fixed
                        >
                        </Header>
                        <VideoPlayer
                             movie={movie}
                             play={this.state.play}
                             loop
                        />
                    </>
                }

                
            >

          <Container padding="0"  height="100%"  >
            <Style>
              {this.state.isSport?<>
                   <div className="item">
                       <div className="left">
                        <div className="content">
                            难度系数
                        </div>
                        <div className="strength">
                        {
                            this.renderStrength(this.state.strength)
                        }
                        </div>
                       </div>
                       <div className="right">
                       </div>
                   </div>

                    <div className="item">
                       <div className="left">
                        <div className="content">
                            音乐
                        </div>

                       </div>
                       <div className="right">
  

                    <Switch
                     defaultChecked={this.state.music} handleChange={({isChecked})=>{
                   
                    if(isChecked)  {
                      this.audio.current.play()
                       if(this.audio.current){
                        this.audio.current.play()
                       }
                    }else{
                        if(this.audio.current){
                         this.audio.current.pause()
                       }
                    }
                     
                    //    this.setState({
                    //        music:isChecked
                    //    })

                     }}
                    />

                       </div>
                   </div>

                    <Button
                        width="310"
                        bg="gradual"
                        height="40"
                        fontSize="14"
                        color="#fff"
                        bindClick={()=>this.setState(x=>({play: !x.play}) )}
                        customStyle="position:fixed;bottom:.5rem;"
                     >
                    {this.state.play?'暂停': '开始运动'}
                     </Button>
             </>:<>
                    <Guide 
                    data={this.state.guides}
                    ></Guide>
                    <Button 
                        width="115"
                        bg="gradual"
                        rightAngle="right"
                        height="40"
                        fontSize="14"
                        color="#fff"
                        bindClick={()=>this.setState({
                            isSport:true
                        })}
                        customStyle="position:fixed;bottom:1rem;right:0rem;"
                     >开始运动</Button>
                      <Button 
                        width="115"
                        bg="gradual"
                        rightAngle="right"
                        height="40"
                        fontSize="14"
                        color="#fff"
                        customStyle="position:fixed;bottom:.5rem;right:0rem;"
                          bindClick={()=>{
                          

        let {W} = getTime()
         this.props.history.push(`/plan/add/setting/sportstep03?plpartid=${this.state.sid}&planname=${this.state.title}&planweek=周${W}`)
                          }}
                      
                     >添加计划</Button>
                </> 
             }
                
                
            </Style>
            </Container>


   
            <PopupBox 
            isShow={false} 
            height={200} 
            msg="是否添加到计划？"
            closeBtn={true}
            >
             <Button
                 width="90"
                 height="40"
                 fontSize="17"
                 color="#fff"
            >开启

             </Button>
                       
             <span>取消</span>
            </PopupBox>


            </ContainerX>
           
        </Container>
        )
    }
}

function makeArray (strength){
   return Array.from({
            length:3
        },(v,i) => {
            if(i<strength){
                return 1
            }else{
                return 0
            }
        })
}

export default Player
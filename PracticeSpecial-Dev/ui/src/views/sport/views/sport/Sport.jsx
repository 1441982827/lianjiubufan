import React, { Component } from 'react'
// import {Style} from './SportStyled'
import {Header} from 'ui/header'
import {Icon} from 'ui/icon'
import { ContainerX } from 'layout/container';
import {SportItem,ItemStyle } from 'sport/components/item/';

import body from 'images/sport/body_parts/body.png';
import abdomen from 'images/sport/body_parts/abdomen.png';
import back from 'images/sport/body_parts/back.png';
import neck from 'images/sport/body_parts/neck.png';
import shoulder from 'images/sport/body_parts/shoulder.png';
import foot from 'images/sport/body_parts/foot.png';

  const items=[
    {
      img:back,
      context:'背部'
    },
     {
      img:shoulder,
      context:'肩部'
    },
     {
      img:neck,
      context:'颈部'
    },
     {
      img:abdomen,
      context:'腹部'
    },
    {
      img:foot,
      context:'腿部'
    },
    {
      img:body,
      context:'全身'
    }
  ]

 class Sport extends Component {
    render(){
        return (
    
            <ContainerX
             obg='true'
             bg="#fff"
             padding="0rem .08rem"
             oheight='100%'
             height='6.38rem'
             scrolly='true'
             header={
               <Header
                onLeftClick={
                 (e)=>console.log(this.props.history.goBack())
               }
               leftContent="运动"
               icon={<Icon type='left' width='.11rem'></Icon>}
               >
               </Header>
             }
            >
              <ItemStyle>
              {
                items.map(item=>{
                  return <SportItem 
                  context={item.context} 
                  img={item.img}  
                  key={item.context}
                   link={{
                    pathname:"/sport/detail",                      
                    search:"?type="+item.context,                    
                    state: item                     
                    }}  ></SportItem>
                })
              }
            </ItemStyle>
            
            </ContainerX>
       
        
     )
    }
}


export default Sport




 
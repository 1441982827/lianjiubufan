import React, { Component } from 'react'
import {SportItem,ItemStyle } from 'sport/components/item/';
import { withRouter } from "react-router";
import { ContainerX } from 'layout/container';
import {Header} from 'ui/header'
import {Icon} from 'ui/icon'
import http from 'utils/http'

//  const items=[{
//       img:back,
//       context:'泡沫轴上背部放松',
//       strength:1
//     }]

 class SportDetialUI extends Component {

    state={
      headerContent:'背部',
      items:[]
    }

   async  componentDidMount(){


      let detail= decodeURIComponent  (this.props.location.search.replace('?type=',''))
     
     
     let result=  await http.get({url:`/api/sport/list?spsname=${detail}`})
     
     this.setState({
          headerContent:detail,
          items:result.data
      })
      
      console.log(result.data);
     }
    

    render() {
   
        return (
             <ContainerX
             obg='linear-gradient(135deg,rgba(255,132,129,1) 0%,rgba(107,114,255,1) 100%);'
             bg="#fff"
             padding="0rem .08rem"
             oheight='100%'
             height='6.38rem'
             scrolly='true'
             header={
               <Header
               onLeftClick={
                //    
                 (e)=>console.log(this.props.history.goBack())
               }
               leftContent={this.state.headerContent||''}
               icon={<Icon type='left' width='.11rem'></Icon>}
               >
               </Header>
             }
            >

              <ItemStyle>
              {
                this.state.items.map(item=>{
                  return(

                 <SportItem
                  key={item.partid+item.sptname}
                  context={item.sptname} 
                  renderIcon={
                    (Icon)=>{
                    return  <Icon img={'/'+item.spturl} width='.83rem' height='.83rem' radius='.1rem' />
                    }} 
                 link={{
                    pathname:"/sport/player",                  
                    search:"?vid="+item.partid,               
                    state: item                  
                  }}
                  strength={2} 
                  >
                    
                  </SportItem>)
                })
              }
            </ItemStyle>
            
            </ContainerX>
        )
    }
}


export default withRouter(SportDetialUI) 
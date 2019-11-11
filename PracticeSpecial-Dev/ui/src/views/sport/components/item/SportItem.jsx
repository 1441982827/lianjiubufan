import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Style} from './SportStyled';
import {Icon} from 'ui/icon';



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

 class SportItem extends Component {
    render() {
        return (
            <Style>
             <Link to={this.props.link||''} > 
                 <div className="sport-item">
                    <div className="img">
                       {
                        this.props.renderIcon?
                        this.props.renderIcon(Icon):
                         <Icon width='.55rem' height='.55rem' img={this.props.img} ></Icon>
                       }
                    </div>
                    <div className="content">
                       <div className="left">
                        <div className="text">
                            {this.props.context}
                        </div>
                       {this.props.strength
                       &&<div className="length">
                         {this.renderStrength(this.props.strength)}
                         </div>
                       }
                       </div>
                       
                       <span className="right">
                           <Icon type='right_black' height='.17rem'  width='.10rem'  ></Icon>
                       </span>
                    </div>
                  </div>
                 </Link>
            </Style>
        )
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
          })
          }
         </>
      )    
    }
}
export default SportItem
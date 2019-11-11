import React from 'react'
import { SpaceWrap } from './StyledSportDetails'
import spaceImgUrl from 'images/article/space.png'
import Button from 'ui/button/Button';

import HeaderUI from '../components/detailHeader/DetailHeaderUI'

function SportDetailsUI(props){
      if(true){
            return(
                  <HeaderUI 
                        title = '运动养成'
                        handlerBack={props.handlerBack} 
                  >
                        <h3>{props.info.title}</h3>
                        <div className='titleImgWrap'>
                              <img src={props.info.imgurl} alt=""/>
                        </div>
                        {
                              props.info.developlist.map((value, index)=>{
                                    return (
                                          <section
                                                key={value.littleTitle+index}
                                          >
                                                <div className='num'>—{index+1}—</div>
                                                <h4>{value.littleTitle}</h4>
                                                <p>{value.littleContent}</p>
                                                <img src={value.littleImgurl} alt=""/>
                                          </section>            
                                    )
                              })
                        }
            {/*  */}
                        <Button 
                              width="115"
                              bg="gradual"
                              rightAngle="right"
                              height="40"
                              fontSize="14"
                              color="#fff"
                              bindClick={()=>{
                                    props.handleClickGoNext(props.info.partid)
                              }}
                              customStyle="position:fixed;right:0;bottom:.3rem;"
                              className="btn"
                        >相关运动</Button>
                  </HeaderUI>
            )
      }else{
            return(
                  <HeaderUI 
                        title = '运动养成'
                        handlerBack={props.handlerBack} 
                  >
                        <SpaceWrap>
                              <img src={spaceImgUrl} alt=""/>
                              <div>点击刷新</div>
                        </SpaceWrap>
                  </HeaderUI>
            )
      }
}

export default SportDetailsUI
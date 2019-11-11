import React from 'react'
import HeaderUI from '../components/detailHeader/DetailHeaderUI'
import HealthDetailsWrap from'./StyledHealthDetails' 
import spaceImgUrl from 'images/article/space.png'
import { SpaceWrap } from './StyledHealthDetails'
function HealthDetailsUI(props){
      if(true){
            return (
                  <HeaderUI 
                        title = '健康轻食'
                        handlerBack={props.handlerBack}
                  >
                        <h3>{props.info.title}</h3>
                        <div className='titleImgWrap'>
                              <img src={props.info.imgurl} alt=""/>
                        </div>
                        <HealthDetailsWrap>
                              <p className='details'>{props.info.content}</p>
                              {
                                    props.info.healthlist.map((value,index)=>{
                                         return(
                                                <section
                                                      key={value.littleTitle+index}
                                                >
                                                      <h3>{value.littleTitle}</h3>
                                                      <p>{value.littleContent}</p>
                                                      <img src={value.littleImgurl} alt=""/>
                                                </section>
                                         )
                                    })
                              }
                        </HealthDetailsWrap>
                  </HeaderUI>
            )
      }else{
            return(
                  <HeaderUI 
                        title = '健康轻食'
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

export default HealthDetailsUI
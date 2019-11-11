import React from 'react'
import Nav from '../components/nav/NavUI'
import SearchListUIWrap from './StyledSearchList'
import nocontentImgUrl from "images/article/nocontent.png"


function SearchListUI(props){
      if(true){
            return(
                  <SearchListUIWrap>
                        <Nav 
                              sport='运动相关'
                              handlerSportClick={props.handlerSportClick}
                              handlerHealthClick={props.handlerHealthClick}
                              active={props.active}
                        ></Nav> 
                        <div className='main'>
                              {
                                    props.list.map((value,index)=>{
                                          return (
                                                <section  
                                                      onClick={function(){
                                                            props.handlerToDetails(index)
                                                      }}
                                                      key={value.title+index}
                                                >
                                                      <div className='smallImgWrap'>
                                                            <img src={value.imgurl3} alt=""/>
                                                      </div>
                                                      <div className='title'>
                                                            <h3>{value.title}</h3>
                                                            <p>{value.content}</p>
                                                      </div>
                                                </section>
                                          )
                                    })
                              } 
                        </div>
                  </SearchListUIWrap>
            )
      }else{
            return(
                  <SearchListUIWrap>
                        <Nav 
                              sport='运动相关'
                              handlerSportClick={props.handlerSportClick}
                              handlerHealthClick={props.handlerHealthClick}
                              active={props.active}
                        ></Nav> 
                        <div className='nocontent'> 
                              <img src={nocontentImgUrl} alt=""/>
                        </div>
                  </SearchListUIWrap>
            )
      }
      
}
export default SearchListUI
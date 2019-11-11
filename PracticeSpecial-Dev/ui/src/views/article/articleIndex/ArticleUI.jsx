import React from 'react'
import {ArticleContainer, Header, Main} from './StyledArticle'
import Nav from '../components/nav/NavUI'
import imgUrl from "images/article/search.png"

function ArticleUI(props){
      return (
           <>
           <ArticleContainer>
                  <Header>
                        <div className='title'>文章</div>
                        <div className='search' onClick={props.handlerSearch}>
                              <img src={imgUrl} alt=""/>
                        </div>
                  </Header>
                  <Nav 
                        sport='运动养成' 
                        handlerSportClick={props.handlerSportClick}
                        handlerHealthClick={props.handlerHealthClick}
                        active={props.active}
                  >
                  </Nav>
                  <Main>
                        <div id='main'>
                        {
                              props.list.map((value,index)=>{
                                    return (
                                          <section  
                                                onClick={function(){
                                                      props.handlerToDetails(index)
                                                }}
                                                key={value.title+index} 
                                          >
                                                <div className='title'>{value.title}</div>
                                                <div className='imgWrap'>
                                                      <img src={value.imgurl} alt=""/>
                                                </div>
                                          </section>
                                    )
                              })
                        }
                        </div>
                  </Main>
            </ArticleContainer> 
           </> 
      )
}

export default ArticleUI
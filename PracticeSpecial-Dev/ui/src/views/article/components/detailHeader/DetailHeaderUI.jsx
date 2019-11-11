import React from 'react'
import HeadersWrap from './StyledDetailHeader'

function HeaderUI(props){
      return (
            <HeadersWrap>
                  <header>
                        <div 
                              className='back'
                              onClick={()=>{
                                    props.handlerBack()
                              }}
                        ></div>
                        <div className='title'>{props.title}</div>
                        {/* <div className='share'></div> */}
                  </header>
                  <main>
                        {props.children}
                  </main>
            </HeadersWrap>
      )
}

export default HeaderUI
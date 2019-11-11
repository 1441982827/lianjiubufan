import React from 'react'
import HeadersWrap from './StyledSearchHeader'

function HeaderUI(props){
      return (
            <HeadersWrap>
                  <header>
                        <div className='searchWrap'>
                              <i></i>
                              <input 
                                    type="text" 
                                    placeholder='搜索运动与饮食'
                                    ref={props.inputRef}
                                    onInput={(e)=>{
                                          props.handlerInput(e.target.value)
                                          props.clearRef.current.style.display='block'
                                    }}
                                    onKeyPress={props.handleEnterKey }
                                    value={props.searchKey}
                                    onChange={()=>{}}
                                    // value="搜索运动与饮食"
                                    onClick={(e)=>{
                                          e.target.value=''
                                    }}
                              />
                              <div  
                                    className='clear'
                                    ref={props.clearRef}
                                    onClick={(e)=>{
                                          props.handlerClear()
                                          props.inputRef.current.value=''
                                          props.inputRef.current.focus()
                                          e.target.style.display='none'
                                    }}
                              ></div>
                        </div> 
                        <div 
                              className='cancel'
                              onClick={props.handlerCancel}
                        >取消</div>
                  </header>
                  <main>
                        {props.children} 
                  </main>
            </HeadersWrap>
      )
}

export default HeaderUI
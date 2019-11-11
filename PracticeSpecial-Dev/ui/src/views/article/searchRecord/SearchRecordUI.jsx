import React from 'react'
import SearchWrap from './StyledSearchRecord'

function SearchRecordUI(){
      return (
            <SearchWrap>
                  <h3>搜索记录</h3>
                  <ul className='wrap'>
                        <li>仰卧起坐</li>
                        <li>瑜伽</li>
                        <li>仰卧起坐</li>
                        <li>瑜伽</li>
                        <li>仰卧起坐</li>
                  </ul>
                  <h3>热门搜索</h3>
                  <ul className='wrap'>
                        <li> <i></i> 仰卧起坐</li>
                        <li> <i></i> 瑜伽</li>
                        <li> <i></i> 仰卧起坐</li>
                        <li>瑜伽</li>
                        <li>仰卧起坐</li>
                  </ul>
            </SearchWrap>
      )
}
export default SearchRecordUI
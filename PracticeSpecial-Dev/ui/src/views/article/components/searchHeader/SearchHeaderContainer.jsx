import React, { PureComponent } from 'react'
import SearchHeaderUI from './SearchHeaderUI'

class SearchHeaderContainer extends PureComponent {
      constructor(props) {
            super(props)
            this.clearRef = React.createRef();
            this.inputRef = React.createRef();
            this.state = {
                  searchKey:'搜索运动与健康'
            }
      }

      render() {
            return (
                  <SearchHeaderUI
                  handlerCancel={this.props.handlerCancel}
                  searchKey={this.state.searchKey}
                  handlerInput={this.handlerInput}
                  handlerChange={this.handlerChange}
                  handlerClear={this.handlerClear}
                  clearRef={this.clearRef}
                  inputRef={this.inputRef}
                  handleEnterKey={this.handleEnterKey}
            >
                  {this.props.children}
            </SearchHeaderUI>
            )
      }
      handlerInput=async (value)=>{
            await this.setState({
                  searchKey:value
            })
      }
      handlerClear=async ()=>{
            await this.setState({searchKey:''})
      }
      handleEnterKey=(e)=>{
            if(e.nativeEvent.keyCode === 13){ 
                  this.props.handleEnterKey('/article/articlesearch/searchlist/'+this.state.searchKey)
                  // window.location.reload()
            }
      }
}

export default SearchHeaderContainer
import React, { PureComponent } from 'react'
import SearchListUI from './SearchListUI'

class SearchListContainer extends PureComponent {
      constructor(props) {
            super(props)

            this.state = {
                 active:'sport',
                 list:[] 
            }
      }

      render() {
            return (
                       <SearchListUI
                              handlerToDetails={this.handlerToDetails}
                              handlerSearch={this.handlerSearch}
                              handlerSportClick={this.handlerSportClick}
                              handlerHealthClick={this.handlerHealthClick}
                              active={this.state.active}
                              list={this.state.list}
                       >
                       </SearchListUI> 
            )
      }
      componentDidMount(){
            localStorage.getItem('searchactive')==="health"?this.handlerHealthClick():this.handlerSportClick()
      }
      componentWillReceiveProps(){
            localStorage.getItem('searchactive')==="health"?this.handlerHealthClick():this.handlerSportClick()
      }
      handlerToDetails = (id)=>{
            this.state.active === 'sport'?this.props.history.push('/article/sportdetails/'+id):this.props.history.push('/article/healthdetails/'+id)
      }
      handlerSearch = ()=>{
            this.props.history.push('/article/articlesearch')
      }
      handlerSportClick = async ()=>{
            localStorage.setItem('searchactive','sport')
            await fetch(`/api/article/search/about?key=${this.props.match.params.searchKey}`)
            .then(result=>result.json())
            .then((res)=>{
                  this.setState({
                        active:'sport',
                        list:res.data
                  })
            })
      }
      handlerHealthClick = async ()=>{
            localStorage.setItem('searchactive','health')
            await fetch(`/api/article/search/health?key=${this.props.match.params.searchKey}`)
            .then(result=>result.json())
            .then((res)=>{
                  this.setState({
                        active:'health',
                        list:res.data
                  })
            })
      }

}

export default SearchListContainer
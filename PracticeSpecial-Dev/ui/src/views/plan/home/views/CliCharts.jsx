import React  from 'react'
import ReactEcharts from 'echarts-for-react'
// import echarts from 'echarts'
import {CoverBorder} from './styledHome'
import http from 'utils/http/index'


class Charts extends React.Component{
      state={
            options:{}
      }
      render(){
            return (
                  <>
                        <ReactEcharts
                        option={this.state.options}
                        style={{height:'250px' , width:'110%'}}
                        ></ReactEcharts>
                        <CoverBorder></CoverBorder>
                  </>
            )
      }

      componentDidMount(){
          this.getOption()
      }

      async getOption(){ 
            let datalist = await http.get({url:'/api/plan/weekdata?spuserid=8'});

            let newDataList = datalist.data.map((value,index)=>{
                  if(index === datalist.data.length-1) {
                        return {
                              value:[value.spweek,value.calorievalue],
                              symbol:"image://data:image/png;base64,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",
                              symbolSize:16,
                        }
                  }else{
                        return [value.spweek, value.calorievalue]
                  }
            })

            this.setState({
                  options:{ 
                        xAxis: {
                              type: 'category',
                              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                              axisLine:{
                                    show:false
                                    },
                              axisTick:{
                                    show:false
                                    }
                        },
                        yAxis: {
                            type: 'value',
                            axisLine:{
                                  show:false
                            },
                            scale:true,
                            min:100,
                            max:2000,
                            axisTick:{
                              show:false
                            },
                            splitLine:{
                                  show:false
                            }
                        },
                        series: [{
                            data: newDataList,
                            type: 'line',
                            symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAC2ElEQVRYR82XT2gcZRjGf89kkxYpEdvkINpDPbSCEtNTb4VWKwqNJJegRVQIeBE0CII2O7vfzm5yK1RB0IO2EUsPLSQQDwltrB49iBJQMQdBAgpiwEjpIe7MWyb/yJ/d7ux8qJ3jzPP8vud7Z5jvfUUblzl3gIJOYfY0cAzpUeDwBmIJWMJskUTzmN2Sc7ez4pVFaFF4gqBQBp4BOrN4gH+AmySqqFT6ppXnnkFs3D2JUQO9AGQK3WBBA6axYExh+FOzQE3hFrmXCfQJ0NVqNxmfr5LYiEru80b6hkGsVn4XggmPKjTLZhjvKCxf2C3YE8Rq7k3Q+xl3mU9m8ajCaMcaO4JY1Z1GmgMK+VbI7KoTx8+pHM1vOraCWG3sEaxrAXEwM85PuEzd+uTcbylmWxB3CfSaH7tdt32qohvZCmJR9ARKFpCCdlGe+jqJ+lUq/bBWEau6KaRBT2he+zUVy8My5x6goGVgf16Sl8+4Q2y9sqobRJrygvmazYZkNfcx6HVflp/fPkqDzIGe9QP5um1WVqukB9HjvihP/4+yamUF0e0J8rMbf90vQf5OX83PwFG/LXm7F9OP9WvQSW+UF8C+Sv8jk0iveHG8zXZZFrkXCXTVm+UDSOyl9BffTUF/APt8WLm9ZqvE9P7/h57ZtEI3tB5k3PWT8O1/3gaYJVjQt9UGbLQCV5DO5S5xHqPZZwrdq1uN0XqQ4hHU+R3wYB5mDs8KrD6l4vivO4KshalUnqeDGaAjB7gdSx2zAYVudtO0d5yI3NsE2jN3tLNKS21ib6nkPtiuazxgVStvIC7+C2NFHWNUYfnD3WGbj5zrM8514KGWO8wmWMZsWKH7spG8xRB+/mGsawLWjoC8HX4MNok6ixob+71Z5kwTvkXRcZRMIJ1p40OOMbtBzHty7vtWRcsUZBNizvXQkQxAcBbpMeAQ0LPx/E8gLf8vkHxBHMzIufRepusu9zH3OAVO6hsAAAAASUVORK5CYII=",
                            symbolSize :"9",
                            itemStyle:{
                                  color:"#FF8481"
                            },
                            lineStyle:{
                                  color:"#6B72FF",
                                  width:2,
                            }
                        }],
                        grid:{
                              show:false,
                              containLabel:false,
                              height:150,
                        },
                        backgroundColor:"#fff",
                        textStyle:{
                              color:"#8F8F8F",
                              fontSize:9,
                              fontFamily:"PingFang SC"
                        }
                    }
            })
      }
      onChartReadyCallback(){

      }
}

export default Charts
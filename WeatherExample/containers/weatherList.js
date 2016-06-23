import React ,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'


class weatherList extends Component{
       
       renderWeatherList(cityData){
          const temps=cityData.list.map(weather=>weather.main.temp)
          const pressures=cityData.list.map(weather=>weather.main.pressure)
          const himidity=cityData.list.map(weather=>weather.main.humidity)
          
           return (
                   <tr key={cityData.city.name}>
                   <td>{cityData.city.name}</td>                 
                   <td>
                   <Chart data={temps} color="orange" />
                   </td> 
                    <td>
                   <Chart data={pressures} color="green" />
                   </td>
                    <td>
                   <Chart data={himidity} color="purple" />
                   </td>
                   </tr>
                   )
       }
        render(){
                  if(this.props.weather == null){
                      return (<div>PLEASE SEARCH</div>);
                  }else{
                   return (
                    <table className='table table-hover'>
                    <thead>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeatherList)}
                    </tbody>
                    </table>
                    )
                  }
        }
}
function mapStateToProps({ weather }){
    //ES6 Syntax
    return { weather } // {weather} === {weather :weather} 
}
export default connect(mapStateToProps)(weatherList)
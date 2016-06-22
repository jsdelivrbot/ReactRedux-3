import React,{ Component} from 'react'
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/weatherList'

class app extends Component {
    render(){
        return(
              <div>           
             <SearchBar />
             <br />
             <WeatherList />           
             </div>
                );
    }
  
 }
export default app

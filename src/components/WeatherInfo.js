import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import { connect } from 'react-redux';
import { kelvinToCelsius, kelvinToFahrenheit } from '../helper';


const WeatherInfo = ({tempScale}) => {
    const temperature = (temp) => {
        return tempScale === 'celsius' ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
      };

    return(
        <div>
            <CurrentWeather temperature={temperature} />
            <DailyWeather temperature={temperature} />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{tempScale:state.tempScale}
};
export default connect(mapStateToProps)(WeatherInfo)

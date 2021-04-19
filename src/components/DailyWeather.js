import moment from 'moment';
import { connect } from 'react-redux'

const DailyWeather = ({daily, temperature}) => {
    const renderDailyWeather = () =>{
       return daily.map(day=>{
            return(
            <div key={day.dt} className='list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom'>
                <div className="col text-center w-25">
                    {moment.unix(day.dt).format('dddd')}
                </div>
                <div className="col text-center">
                    <img className='img-fluid' style={{maxWidth:'40px'}} src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} alt={`${day.weather[0].description}`} />
                </div>
                <div className="col d-none d-md-block d-lg-block d-xl-block text-center">
                    {`${(day.pop *100).toFixed(0)}%`}
                </div>
                <div className="col text-center">
                    {temperature(day.temp.max)}
                </div>
                <div className="col text-center">
                    {temperature(day.temp.min)}
                </div>
            </div>
            )
        })
    }

    if (!daily) {
        return null;
      }
    else return(
        <div className='mt-4'>
            <div className='border-top-0 list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom bg-dark text-white' style={{minHeight:'40px'}}>
                <div className="col text-center">
                <small>Day</small>
                </div>
                <div className="col text-center">
                
                </div>
                
                <div className="col d-none d-md-block d-lg-block d-xl-block text-center ">
                    <small>Chance of rain</small>
                </div>
                <div className="col text-center">
                <small>Highs temp</small>
                </div>
                <div className="col text-center">
                <small>Lows temp</small>
                </div>
            </div>
            {renderDailyWeather()}
        </div>
    )


}
const mapStateToProps = (state) => {
    return { daily:state.daily.daily };
  };
  
export default connect(mapStateToProps)(DailyWeather);
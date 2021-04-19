import moment from 'moment';
import { useState } from 'react';
import { connect } from 'react-redux'
import DailyModal from './DailyModal';

const DailyWeather = ({daily, temperature}) => {
    const [modalState, setModalState] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);

    const updateModal=(day)=>{
        setModalInfo(day)
        setModalState(true);
    }
    const renderDailyWeather = () =>{
       return daily.map(day=>{
            return(
            <div onClick={()=>updateModal(day)} key={day.dt} className='list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom clickable'>
                <div className="col text-center w-25 clickable">
                    {moment.unix(day.dt).format('dddd')}
                </div>
                <div className="col text-center clickable">
                    <img className='img-fluid' style={{maxWidth:'40px'}} src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} alt={`${day.weather[0].description}`} />
                </div>
                <div className="col d-none d-md-block d-lg-block d-xl-block text-center clickable">
                    {`${(day.pop *100).toFixed(0)}%`}
                </div>
                <div className="col text-center clickable">
                    {temperature(day.temp.max)}
                </div>
                <div className="col text-center clickable">
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
            <DailyModal modalInfo={modalInfo} modalState={modalState}  setModalState={()=>setModalState(false)} />
        </div>
    )


}
const mapStateToProps = (state) => {
    return { daily:state.daily.daily };
  };
  
export default connect(mapStateToProps)(DailyWeather);
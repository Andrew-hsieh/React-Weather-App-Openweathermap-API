import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Footer from './Footer'

import WeatherInfo from './WeatherInfo'

export default function App(){
    return (
    <div className='container-fluid'>
        <Header />
        <WeatherInfo />
        <Footer />
    </div>)
}
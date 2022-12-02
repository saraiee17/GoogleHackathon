import './coffeeshop.scss';
import mainPage from '../../assets/coffeeshopIcon/Coffee_Shop_Details.png';

function Coffeeshop(){

    return(
        <div className='coffeeContainer'>
            <img className='mainPic' src={mainPage} alt="" />
            <button className='photos'></button>
            <button className='more'></button>
        </div>
    )
}

export default Coffeeshop;
import './coffeeshop.scss';
import { useState, useNavigate } from 'react';
import mainPage from '../../assets/coffeeshopIcon/Coffee_Shop_Details.png';
import Modal from '../modal/modal';

function Coffeeshop(){
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClick = (status) => {
        setShow(status)
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        setShow(false)
        document.body.style.overflow = 'unset';
    }




    return(
        <div className='coffeeContainer'>
            <Modal onClose={closeModal} show={show}/>
            <img className='mainPic' src={mainPage} alt="" />
            <button onClick={() => navigate('/coffeeshop/photos')} className='photos'></button>
            <button onClick={() => handleClick(true)} className='more'></button>
        </div>
    )
}

export default Coffeeshop;
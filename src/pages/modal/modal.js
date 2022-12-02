import './modal.scss';
import topBar from '../../assets/statusbar.png';
import  ReactDOM  from 'react-dom';
import close from '../../assets/modal/close.svg';
import speech from '../../assets/modal/speech.svg';
import check from '../../assets/modal/check.svg';
import right from '../../assets/modal/rightArrow.svg';
import up from '../../assets/modal/upArrow.svg';
import footer from '../../assets/modal/GestureNavigation.svg';
import {useNavigate} from 'react-router-dom'



function Modal( { onClose, show}){
    const navigate = useNavigate();

    if (!show) {
        return null
    }

    const handleSubmit = () => {
            onClose()
        }
    

    return ReactDOM.createPortal(
        <section className='modalContainer'>
            <div className='navbar'>
                <img className='navbar-image' src={topBar} alt="" />
            </div>
            <div className='closeModal'>
                <img className='closeModal-image' onClick={handleSubmit} src={close} alt="" />
            </div>
            <h1 className='mainTitle'>Accessibility Guide for Waltons Half-Way Coffee Cafe</h1>

            <p className='mainDesc'>This info was provided by the business and reviewed by Google</p>

            <div className='text2speech'>
                <img className='text2speech-icon' src={speech} alt="" />
                <p className='text2speech-text'>Text-to-Speech Available</p>
            </div>

            <div className='entry'>
                <h2 className='entry-title'>Entrance & Parking</h2>
                <div className='entry-div'>
                    <p>Wheelchair-Accesible Entrance</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>Ramped/Level Entrances</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>Accessible Parking Lots</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>Entrance wider than 32 inches</p>
                    <img src={check} alt="" />
                </div>
            </div>

            <div className='cafe'>
                <h2 className='cafe-title'>Cafe Accessibility</h2>
                <div className='entry-div'>
                    <p>Wheelchair-Accesible Seating</p>
                </div>
                <div className='entry-div'>
                    <p>Wheelchair-Accesible Washroom</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>Visual Fire Alarms</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>Braille Menus</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>27 inches clear space beneath the table</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>Straws to drink</p>
                    <img src={check} alt="" />
                </div>
                <div className='entry-div'>
                    <p>Disability-inclusive Trained Staff</p>
                    <img src={check} alt="" />
                </div>
            </div>
            <div className='pets'>
                <h2 className='pets-title'>Pets</h2>
                <div className='entry-div'>
                    <p>Service Animals</p>
                    <img src={check} alt="" />
                </div>
            </div>
            <div className='Photos'>
                <h3 onClick={() => navigate('/coffeeshop/photos')} className='Photos-title'>Photos of Our Accessibility</h3>
                <img src={right} alt="" />
            </div>
            <div className='view' onClick={handleSubmit}>
                <p className='view-title'>View less</p>
                <img src={up} alt="" />
            </div>
            <img className='footerimg' src={footer} alt="" />

        </section>,
        document.getElementById('portal')
        
    )
}

export default Modal;
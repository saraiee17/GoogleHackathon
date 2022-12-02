import './photos.scss';
import header from '../../assets/photos/header.png';
import gallery from '../../assets/photos/gallery.png';
import one from '../../assets/photos/button1.png';
import two from '../../assets/photos/button2.png';
import three from '../../assets/photos/button3.png';
import four from '../../assets/photos/button4.png';
import add from '../../assets/photos/addphoto.png'
import footer from '../../assets/photos/footer.png';

function Photos(){

    return(
        <div className='photos'>
            {/* <img src={header} alt='header'/>
            <div className='photos__buttons'>
                <img   className='photos__buttons1'src={one} alt='one'/>
                <img className='photos__buttons1'src={two} alt='one'/>
                <button><img className='photos__buttons1'src={three} alt='one'/></button>
                <img className='photos__buttons1'src={four} alt='one'/>
            </div>
            <div className='photos__flex'>
                <p className='photos__text'>All</p>
                <img className='photos__text' src={add} alt='photo'/>
            </div>
            <img src={gallery} alt='gallery'/>
            <img src={footer} alt='footer'/> */}
        </div>
    )
}

export default Photos;
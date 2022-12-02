import './photos.scss';
import header from '../../assets/search/statusbar.svg';
import gallery from '../../assets/photos/gallery.png';
import arrow from '../../assets/photos/arrow.svg';
import glass from '../../assets/photos/glass.svg';
import dot from '../../assets/photos/dotdot.svg';
import scroll from '../../assets/photos/scroll.svg';
import one from '../../assets/photos/button1.svg';
import two from '../../assets/photos/button2.svg';
import three from '../../assets/photos/button3.svg';
import four from '../../assets/photos/button4.svg';
import add from '../../assets/photos/add.svg';
import footer from '../../assets/photos/footer.svg';

function Photos(){

    return(
        <div className='photos'>
            <img className='photos__header'src={header} alt='header'/>
            <div className='photos__nav'>
                <img className='photos__nav--element'src={arrow} alt='arrow left'/>
                <h2 className='photos__nav--title'>Waltons Half-Way Coffee Cafe</h2>
                <img className='photos__nav--element'src={glass} alt='magnifying glass'/>
                <img className='photos__nav--element'src={dot} alt='dot'/>
            </div>
            <div className='photos__buttons'>
                <img   className='photos__buttons1'src={one} alt='one'/>
                <img className='photos__buttons2'src={two} alt='two'/>
                <button className='photos__link'><img className='photos__buttons3'src={three} alt='three'/></button>
                <img className='photos__buttons4'src={four} alt='foru'/>
            </div>
            <img className='photos__scroll' src={scroll} alt='scroll menu'/>
            <div className='line'></div>
            <div className='line2'></div>
            <div className='photos__flex'>
                <p className='photos__text'>All</p>
                <img className='photos__text' src={add} alt='photo'/>
            </div>
            <img src={gallery} alt='gallery'/>
            <img src={footer} alt='footer'/>
        </div>
    )
}

export default Photos;
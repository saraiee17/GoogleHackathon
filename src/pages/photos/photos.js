import './photos.scss';
import header from '../../assets/photos/header.png';
import gallery from '../../assets/photos/gallery.png';
import footer from '../../assets/photos/footer.svg';

function Photos(){

    return(
        <div className='photos'>
            <img className='photos__header'src={header} alt='header'/>
         
            <img className='photos__footer'src={footer} alt='footer'/>
        </div>
    )
}

export default Photos;
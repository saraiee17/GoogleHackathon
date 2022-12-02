import './search.scss';
import search from '../../assets/search/Rectangle22.svg';
import nav from '../../assets/search/statusbar.svg';
import undernav from "../../assets/search/undersearch.png";
import map from '../../assets/search/MAP.png';
import coffeeshop from '../../assets/search/Waltons.png';
import second from '../../assets/search/Second.png';
import x from '../../assets/search/Vector.svg';
import { Link } from "react-router-dom";



function Search(){

    return(
        <div className='search'>
            <img src={nav} alt='time and battery'/>
            <div className='search__bardiv'>
                <input className='search__bar'type='text'id="search" name="search" placeholder="Search"/>
                <img className='x'src={x} alt='x'/>
            </div>
            <img src={undernav} alt='undernav'/>
            <div className='search__map'></div>
            <Link to='/coffeeshop'><button className='search__button'><img className='search__button' src={coffeeshop} alt='coffeeshop'/></button></Link>
            <img className='search__underbutton' src={second} alt='second'/>
        </div>
    )
}

export default Search;
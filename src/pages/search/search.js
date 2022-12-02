import './search.scss';
import search from '../../assets/search/Rectangle22.svg';
import nav from '../../assets/search/statusbar.svg';
import undernav from "../../assets/search/undersearch.png";
import map from '../../assets/search/MAP.png';
import coffeeshop from '../../assets/search/Waltons.png';
import second from '../../assets/search/Second.png';
import x from '../../assets/search/Vector.svg';
import {useNavigate} from "react-router-dom";



function Search(){
    const navigate = useNavigate();
    const handleEdit = () => {
        // e.preventDefault();
        navigate(`/coffeeshop`);
      };

    return(
        <div className='search'>
            <img className='search__header'src={nav} alt='time and battery'/>
            <div className='search__bardiv'>
                <input className='search__bar'type='text'id="search" name="search" placeholder="Search"/>
                <img className='x'src={x} alt='x'/>
            </div>
            <img src={undernav} alt='undernav'/>
            <img className='search__map' src={map}/>
            <button onClick={handleEdit} className='search__button'><img className='search__button--img' src={coffeeshop} alt='coffeeshop'/></button>
            <img className='search__underbutton' src={second} alt='second'/>
        </div>
    )
}

export default Search;
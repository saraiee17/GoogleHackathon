import './search.scss';
import nav from '../../assets/search/statusbar.png';
import map from '../../assets/search/MAP.png';
import coffeeshop from '../../assets/search/Waltons.png';
import second from '../../assets/search/Second.png';
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
            <img className='search__map' src={map}/>
            <button onClick={handleEdit} className='search__button'><img className='search__button--img' src={coffeeshop} alt='coffeeshop'/></button>
            <img className='search__underbutton' src={second} alt='second'/>
        </div>
    )
}

export default Search;
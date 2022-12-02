import './header.scss';
import topBar from '../../assets/statusbar.png'


function Header(){
    return(
        <div>
            <img src={topBar} alt="" />
        </div>
    )
}

export default Header;
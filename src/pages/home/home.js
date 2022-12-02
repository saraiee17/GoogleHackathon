import './home.scss';
import { useNavigate } from 'react-router-dom';
import topBar from '../../assets/statusbar.png';
import mic from '../../assets/Microphone.svg';
import avatar from '../../assets/avatar.png';
import fork from '../../assets/Restraunts.svg';
import gas from '../../assets/Gas.svg';
import coffee from '../../assets/LocalFavorites.svg';
import parks from '../../assets/parks.svg';
import weather from '../../assets/Weather.svg'
import group from '../../assets/Group.svg'
import location from '../../assets/location.svg';
import directions from '../../assets/directions.svg'
import footer from '../../assets/footer.svg'
import guy from '../../assets/Guy.svg'




function Home(){
    const navigate = useNavigate();

    return(
        <main className='main'>
            <div className='container'>
                <div className='topbar-container'>
                    <img className='topbar-image' src={topBar} alt="" />
                </div>  
                <div className='search-container'>
                    <form onSubmit={() => (navigate('/search'))} className='link'>
                        <input  className='searchbar' type="text" placeholder='Search here' />
                    </form>
                    

                    <div className='image-container'>
                        <img className='mic' src={mic} alt="" />
                        <img className='avatar' src={avatar} alt="" />
                    </div>
                    
                </div>

                <div className='imgContainer'>
                    <img className='fork' src={fork} alt="" />
                    <img className='gas' src={gas} alt="" />
                    <img className='coffee' src={coffee} alt="" />
                    <img className='parks' src={parks} alt="" />
                </div>

                <div className='container3'>
                    <div className='weather'>
                        <img src={weather} alt="" />
                    </div>
                    <div className='group'>
                        <img src={group} alt="" />
                    </div>
                </div>
            </div>

            <img src={guy} alt="/" />

            <div className='footerContainer'>
                <div className='location'>
                    <img src={location} alt="" />
                </div>
                <div className='directions'>
                    <img src={directions} alt="" />
                </div>
                <img className='footerImage' src={footer} alt="" />
            </div>
        {/* <span class="material-symbols-outlined">density_medium</span> */}
        </main>
    )
}

export default Home;
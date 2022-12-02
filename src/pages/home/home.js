import './home.scss';
import topBar from '../../assets/statusbar.png'



function Home(){

    return(
        <main>
            <div className='container'>
                <div>
                    <img src={topBar} alt="" />
                </div>  
                <input className='search' type="text" placeholder='search' />
            </div>
        {/* <span class="material-symbols-outlined">density_medium</span> */}
        </main>
    )
}

export default Home;
import './Home.css'

import Typography from '@mui/material/Typography';
import About from '../About/About'

function Home(){

    return(
        <>
         <div className="home">
            <div className='home-content'>
            <div className="home-name">
                <Typography variant="h1"> Luis Bravo </Typography> 
            </div>
            <div className="home-jobtitle">
            <Typography variant="h2"> Software Engineer </Typography> 
            </div>
            </div>
        </div>
        <About />
        </>
    )

}

export default Home
import './Header.css'

import Typography from '@mui/material/Typography';

function Header(){

    return(
        <div className="header">
            <div className='header-content'>
            <div className="header-name">
                <Typography variant="h1"> Luis Bravo </Typography> 
            </div>
            <div className="header-jobtitle">
            <Typography variant="h2"> Software Engineer </Typography> 
            </div>
            </div>
        </div>
    )

}

export default Header
import './Header.css'
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Header(){

 useEffect(() => {

 }, [])

 

    return(
        <div className="header">
            <div className='button-container'>
                <Button variant="outlined"> About </Button>
                <Button variant="outlined"> Work Experience </Button>
                <Button variant="outlined"> Projects </Button>
                <Button variant="contained"> Resume</Button>
            </div>
            <div className="header-jobtitle">
            <Typography variant="h2"> Software Engineer </Typography> 
            </div>
            <div className="header-name">
                <Typography variant="h1"> Luis Bravo </Typography> 
            </div>
        </div>
    )
}

export default Header
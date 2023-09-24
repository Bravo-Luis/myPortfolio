import './UcsbCard.css'

import { Card } from '@mui/material'
import {Tilt} from 'react-tilt';

function UcsbCard(){

    const defaultOptions = {
        reverse:        false,  
        max:            35,     
        perspective:    1000,   
        scale:          1.01,  
        speed:          3000,   
        transition:     true,   
        axis:           null,   
        reset:          true,   
        easing:         "cubic-bezier(.03,.98,.52,.99)",    
    }

    return(
        <Tilt className="Tilt tilt-card" options={defaultOptions}>
            <Card
        className='ucsb-card'
  variant="outlined"
  style={{ background: "rgb(21, 21, 21)" }}
  sx={{
    height: 200,
    width: 350,
    margin: "16px",
    borderColor: "#d7d5c4",
  }}
>
  <img src="https://assets.change.org/photos/9/xw/vd/TKxwVdwHAkMcxZd-800x450-noPad.jpg?1520548913" 
       alt="" 
       style={{
         objectFit: "cover", 
         width: "100%", 
         height: "100%"
       }}
  />
  <div className="shimmer"></div>
</Card>
        </Tilt>
     
        
    )
}

export default UcsbCard
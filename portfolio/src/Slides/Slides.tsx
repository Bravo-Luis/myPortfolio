import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Card } from "@mui/material";
import './Slides.css'
import luna1 from './luna.webp'
import luna2 from './luna2.webp'
import luna3 from './luna3.webp'
import jacko1 from './jacko.webp'
import jacko2 from './jacko2.webp'
import jacko3 from './jacko3.webp'

function Slides() {

    return (
        <Card
          variant="outlined"
          style={{
            overflow: "hidden"
          }}
          sx={{
            height: 400,
            width: 350,
            borderColor: "#d7d5c4",
            margin: '16px',
          }}
        >
            <Carousel autoPlay infiniteLoop transitionTime={500}>
            <div>
                    <img src={luna1} style={{objectFit: 'cover', width: '100%', height: '400px'}}/>
                   
                </div>
                <div>
                    <img src={jacko1} style={{objectFit: 'cover', width: '100%', height: '400px'}}/>
                </div>
                <div>
                    <img src={luna2} style={{objectFit: 'cover', width: '100%', height: '400px'}}/>
                  
                </div>
                <div>
                    <img src={jacko2} style={{objectFit: 'cover', width: '100%', height: '400px'}}/>
                </div>
                <div>
                    <img src={luna3} style={{objectFit: 'cover', width: '100%', height: '400px'}}/>
                   
                </div>
                <div>
                    <img src={jacko3} style={{objectFit: 'cover', width: '100%', height: '400px'}}/>
                </div>
        </Carousel>
        </Card>
    );
}

export default Slides;


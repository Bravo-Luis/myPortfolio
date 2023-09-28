import './ExperienceBox.css'

import { Box } from '@mui/material'
import { Typography } from '@mui/material'

function ExperienceBox({title, jobTitle, dates, bgColor} : {title: string, jobTitle: string,  dates: string, bgColor : string}){

    function generateComplementaryColor(color : String, tl : number) {
        const r = parseInt(color.substring(1, 2), 16) / 255;
        const g = parseInt(color.substring(3, 2), 16) / 255;
        const b = parseInt(color.substring(5, 2), 16) / 255;

     const relativeLuminance = (c : number) => {
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    };

        const luminance =
        0.2126 * relativeLuminance(r) +
        0.7152 * relativeLuminance(g) +
        0.0722 * relativeLuminance(b);

        const targetLuminanceDiff = tl;

        const targetLuminance = luminance + (luminance < 0.5 ? targetLuminanceDiff : -targetLuminanceDiff);

        const luminanceDiff = targetLuminance - luminance;

        const rComp = Math.max(Math.min(r + luminanceDiff, 1), 0);
        const gComp = Math.max(Math.min(g + luminanceDiff, 1), 0);
        const bComp = Math.max(Math.min(b + luminanceDiff, 1), 0);

        const rHex = Math.round(rComp * 255)
        .toString(16)
        .padStart(2, "0");
        const gHex = Math.round(gComp * 255)
        .toString(16)
        .padStart(2, "0");
        const bHex = Math.round(bComp * 255)
        .toString(16)
        .padStart(2, "0");

        return "#" + rHex + gHex + bHex;
        }

    return (
        <Box className='experience-box' sx={{
            background: bgColor,
            minHeight: '300px',
            height: '40vh',
            width: '95vw',
            padding: '1.5rem',
            borderRadius: '1rem',
        }}
        >
            <Typography variant="h2" sx={{color: generateComplementaryColor(bgColor, 1)}}> {title} </Typography>
            <Typography variant="h4" sx={{color: generateComplementaryColor(bgColor, 0.9)}} > {jobTitle} </Typography>
            <Typography variant="h5" sx={{color: generateComplementaryColor(bgColor, 0.9)}} > {dates} </Typography>

        </Box>
    )
}

export default ExperienceBox

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
            {title === 'Salesforce' && <svg className='company-logo' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Salesforce</title><path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8" fill={generateComplementaryColor(bgColor, 1)}/></svg>}

        </Box>
    )
}

export default ExperienceBox

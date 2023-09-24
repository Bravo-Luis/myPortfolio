import './ResumeButton.css'

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';

import { Document, Page, pdfjs } from 'react-pdf';
import Resume from './August2023.pdf'


import { useState } from 'react'

function ResumeButton(){

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
    

    return(
        <>
                <Popover
    id={id}
    open={open}
    anchorEl={document.body}
    onClose={handleClose}
    anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
    }}
    transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
    }}
>
    <Box className="pdf-viewer">
        <Document file={Resume}>
            <Page pageNumber={1} />
        </Document>
    </Box>
</Popover>
        <Card
    variant="outlined"
    style={{
        background: "rgb(21, 21, 21)",
        height: 100,
        width: 350,
        margin: "16px",
        borderColor: "#d7d5c4",
        padding: 0  
    }}
>
    <Button  aria-describedby={id} variant="contained" style={{ display:'flex',width: "100%", height: "100%", textAlign: "center", justifyContent:"center", padding: 0, margin: 0, alignContent:"center" }} onClick={handleClick}>
        <Typography className="outlined-text" variant="h2"  color="rgb(21, 21, 21)" style={{ display:'flex',width: "100%", textAlign: "center", height: "100%", margin: 0, justifyContent:"center", alignItems:"center" }}>
            ResumÉ
        </Typography>
    </Button>
</Card>
        </>
    )
}
export default ResumeButton
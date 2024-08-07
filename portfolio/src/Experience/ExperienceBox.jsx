import { Box, Typography} from "@mui/material";


function ExperienceBox({title, subtitle, dates, description, logo, backgroundImage, color, textColor, index, logoAlt}){
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                backgroundColor: color,
                color: textColor,
                minHeight: '250px',
                width: 'clamp(350px, 80vw, 800px)',
                position: 'relative',
                zIndex: 1,
                boxShadow: 5,
                p: 2,
                mt: 2.5,
                mr: 2,
                border: 'gray 3px solid',
                borderRadius: '10px',
            }}
            key={index}
        >

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                position: 'absolute',
                zIndex: 0,
                top: 0,
                left: 0,
    
                opacity: 0.5,
                borderRadius: '10px',
            }}
            >
            <Typography 
                variant="h4"
                sx={{
                    color: textColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mt: 2,
                    ml: 2,
                }}
            >
                {title}
            </Typography>
            <Typography 
                variant="h5"
                sx={{
                    color: textColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    ml: 2,
                }}
            >
                {subtitle}
            </Typography>
            <Typography 
                variant="h6"
                sx={{
                    color: textColor,
                    fontWeight: 'thin',
                    textAlign: 'center',                                      
                }}>
                {dates}
                </Typography>
           
            </Box>
            <img src={logo} alt={logoAlt} width={110}  height={75} position={'relative'}/>
            
        </Box>
    )
n }

export default ExperienceBox;
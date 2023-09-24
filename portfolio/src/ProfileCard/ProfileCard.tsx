import './ProfileCard.css'

import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Collapse,
    Tooltip
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';



  const elevatorPitch = `
  
   Luis Bravo is passionate about technology, research, and collaborative spaces. He 
   is always up for a chat about technology or anything else. He is originally from
   Oxnard, California and is interested in artificial intelligence and machine 
   learning. In his free time, he enjoys playing video games and working on cool projects.
   
   `;

function ProfileCard(){

    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card
            className='profile-card'
          variant="outlined"
          style={{
            overflow: "hidden"
          }}
          sx={{
            maxHeight: 800,
            width: 350,
            margin: "16px",
            padding: "16px",
            borderColor: "#d7d5c4",
            background: "rgb(21, 21, 21);",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              paddingBottom: 0
            }}
          >
            
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  color="primary"
                >
                  Luis Bravo
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Pronunciation: loo-EES BRAH-vo
                </Typography>
                <Typography variant="body1" style={{ paddingTop: "10px" }}>
                  A Computer Science student at the University of Santa Barbara,
                  aspiring to be a software engineer.
                </Typography>
              </div>

              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                style={{
                  transform: `rotate(${expanded ? 180 : 0}deg)`,
                  alignSelf: "flex-end",
                }}
                color="primary"
              >
                <Tooltip title="Expand">
                <ExpandMoreIcon />
                </Tooltip>
              </IconButton>
            </div>
          </CardContent>
          <Collapse in={expanded} timeout="auto">
            <CardContent>
              <Typography variant="body1" gutterBottom color="primary">
                {elevatorPitch}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    )
}

export default ProfileCard
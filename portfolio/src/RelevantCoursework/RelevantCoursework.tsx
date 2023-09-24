import './RelevantCoursework.css'

import { Card, Chip, Grid, Typography } from '@mui/material'

function RelevantCoursework(){
    return (
        <Card
              variant="outlined"
              style={{ background: "#49225c" }}
              sx={{
                height: 290,
                width: 350,
                margin: "16px",
                borderColor: "#d7d5c4",
                padding: "16px",
              }}
            >
                <Typography className="coursework-title" variant='body1' color='primary'> Relevant Coursework </Typography>
              <Grid>
                {[
                  "Linear Algebra",
                  "Discrete Math",
                  "CS Research",
                  "Object-Oriented Design",
                  "Computer Organization",
                  "Data Structures & Algorithms",
                  "Computational Science",
                  "Undergrad CS Research",
                  "Computer Architecture",
                  "Operating Systems",
                  "Software Systems",
                  "Calculus",
                  "Differential Equations",
                  "Probability & Statistics",
                ].map((skill, index) => {
                  return (
                    <Chip
                    className='skill-chip'
                      key={index}
                      label={skill}
                      color="primary"
                      style={{
                        margin: "2px",
                        fontSize: "0.7rem",
                        padding: "0px",
                      }}
                    />
                  );
                })}
              </Grid>
            </Card>
    )
}

export default RelevantCoursework
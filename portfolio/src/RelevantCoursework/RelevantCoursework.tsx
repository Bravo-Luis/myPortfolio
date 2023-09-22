import './RelevantCoursework.css'

import { Card, Chip, Grid } from '@mui/material'

function RelevantCoursework(){
    return (
        <Card
              variant="outlined"
              style={{ background: "rgb(21, 21, 21)" }}
              sx={{
                height: 260,
                width: 350,
                margin: "16px",
                borderColor: "#d7d5c4",
                padding: "16px",
              }}
            >
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
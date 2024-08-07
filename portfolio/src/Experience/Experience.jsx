import { Paper } from "@mui/material"
import ExperienceBox from "./ExperienceBox"

function Experience() {
  return (
   <Paper
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        textAlign: 'center', 
        backgroundColor: 'white',
        pt: 15,
        pb: 15,
    }}
   >

        <ExperienceBox title={"Salesforce"} subtitle={"Software Engineer Intern"} dates={"Incoming Summer 2024"} logo={'https://1000logos.net/wp-content/uploads/2017/08/Salesforce-Logo.png'} logoAlt={'salesforce logo'}/>
        <ExperienceBox title={"UCSB CS Department"} subtitle={"Student Research Assistant"} dates={"February 2024 - Present"} />
        <ExperienceBox title={"UCSB Associated Students"} subtitle={"Software Developer"} dates={"November 2023 - Present"} />
        <ExperienceBox title={"Salesforce x Codepath"} subtitle={"FTL Software Engineer Intern"} dates={"Summer 2023"} logo={'https://1000logos.net/wp-content/uploads/2017/08/Salesforce-Logo.png'} logoAlt={'salesforce logo'}/>
        <ExperienceBox title={"UCSB Systems & Networking Lab"} subtitle={"ERSP Undergrad Research"} dates={"Fall 2022 - Spring 2023"} />

   </Paper>
  )
}

export default Experience
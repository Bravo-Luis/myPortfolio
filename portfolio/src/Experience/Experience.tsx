import './Experience.css'

import ExperienceBox from '../ExperienceBox/ExperienceBox'
import { Typography } from '@mui/material'

function Experience(){
    return (
        <div className='experience-page'>
            <Typography variant="h2" color={'primary'}> Work Experience </Typography>
            <br />
            <ExperienceBox id="salesforce-2" title='Salesforce' jobTitle='SWE Intern' dates="Summer 2024" bgColor='#00A1E0' />
            <ExperienceBox id="ucsb-as-1" title='AS of UCSB' jobTitle='Software Developer' dates="Fall 2023 - Present" bgColor='#0076A1' />
            <ExperienceBox id="salesforce-1" title='Salesforce' jobTitle='FTL SWE Intern' dates="Summer 2023" bgColor='#00A1E0' />
           
            <br />
            <Typography variant="h2" color={'primary'}> Research Experience </Typography>
            <br />
            <ExperienceBox id="" title='UCSB Systems & Networking Lab' jobTitle='ERSP Undergrad Research on ML for Networking.' dates="Fall 2022 - Spring 2023" bgColor='#003660' />
            <br />
        </div>
    )
}

export default Experience
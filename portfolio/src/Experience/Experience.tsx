import './Experience.css'

import ExperienceBox from '../ExperienceBox/ExperienceBox'

function Experience(){
    return (
        <div className='experience-page'>
            <ExperienceBox title='Salesforce' jobTitle='FTL Scholar' dates="Summer 2023" bgColor='#00A1E0'/>
            <ExperienceBox title='Salesforce' jobTitle='Software Engineer Intern' dates="Incoming Summer 2024" bgColor='#00A1E0'/>
        </div>
    )
}

export default Experience
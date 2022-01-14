import React from 'react'
import Icon1 from "../images/svg-1.svg";
import Icon2 from "../images/svg-2.svg";
import Icon3 from "../images/svg-3.svg";
import { ServicesCard,ServicesH1,ServicesH2,ServicesContainer,ServicesIcon,ServicesP,ServicesWrapper } from './ServicesElements'


const Services = () => {
    return (
        
<>
<ServicesContainer id="services">
    <ServicesH1> Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Expertise galore</ServicesH2>
            <ServicesP>When you engage with Sage Intacct professional services, technical services.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Ready, set, ROI</ServicesH2>
            <ServicesP>You want a solution that's optimized to deliver high ROI for your business.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Beyond deployment</ServicesH2>
            <ServicesP>If you need to make changes to your financial system in the future</ServicesP>
        </ServicesCard>
    </ServicesWrapper>
</ServicesContainer>


</>
    )
}

export default Services

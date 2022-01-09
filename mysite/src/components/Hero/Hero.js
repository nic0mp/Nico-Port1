import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>

        My Personal Portfolo

      </SectionTitle>
      <SectionText>

      Ut enim ad minima veniam, quis nostrum exercitationem ullam 
      corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatu

      </SectionText>
      <Button onClick={()=>window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
  
  
);

export default Hero;
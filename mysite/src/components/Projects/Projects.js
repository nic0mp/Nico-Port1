import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
  title: 'Project 1',
  description: 'This is a really really long project description'
},{
  title: 'Project 2',
  description: 'This is a really really long project description'
},{
  title: 'Project 3',
  description: 'This is a really really long project description'
},{
  title: 'Project 4',
  description: 'This is a really really long project description'
}];
const Projects = () => (
  <Section>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <div>
          {project.title}
         
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
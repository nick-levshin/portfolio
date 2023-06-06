import React from 'react';
import './Experience.sass';
import { BsPatchCheckFill } from 'react-icons/bs';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const frontEndItems = [
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'HTML',
      level: 'Experienced',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'CSS',
      level: 'Experienced',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'JavaScript',
      level: 'Intermediate',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'React',
      level: 'Intermediate',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'Redux',
      level: 'Intermediate',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'Next JS',
      level: 'Intermediate',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'TypeScript',
      level: 'Beginner',
    },
  ];

  const backEndItems = [
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'Node JS',
      level: 'Intermediate',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'Express',
      level: 'Intermediate',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'Postgres',
      level: 'Intermediate',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'MongoDB',
      level: 'Beginner',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'Nest JS',
      level: 'Beginner',
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      technology: 'Python',
      level: 'Intermediate',
    },
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndItems.map((item) => (
              <ExperienceItem
                key={item.technology}
                icon={item.icon}
                technology={item.technology}
                level={item.level}
              />
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndItems.map((item) => (
              <ExperienceItem
                key={item.technology}
                icon={item.icon}
                technology={item.technology}
                level={item.level}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

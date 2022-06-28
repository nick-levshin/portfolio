import React from 'react';

const ExperienceItem = ({ icon, technology, level }) => {
  return (
    <article className="experience__details">
      {icon}
      <div>
        <h4>{technology}</h4>
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
};

export default ExperienceItem;

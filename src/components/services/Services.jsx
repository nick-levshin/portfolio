import React from 'react';
import './Services.sass';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  const backendItems = [
    'Service architecture design.',
    'Development of the platform and core functionality.',
    'Integration with external services.',
    'Testing and debugging the application.',
    'Ensuring information security.',
    'Analyzing data to identify possible improvements.',
  ];

  const frontendItems = [
    'Adaptive and cross-browser website layout.',
    'Setting up functionality and writing scripts.',
    'Designing UI and creating interfaces from scratch.',
    'Refactoring and speeding up sites/applications.',
    'Сhecking and testing functionality.',
    'Development of React components.',
    'Active interaction with backend developers.',
  ];

  const otherItems = [
    'Experience with webpack/gulp setup.',
    'Working with the git version control system.',
    'OOP knowledge.',
    'Experience with git, ssh in the console of Linux systems.',
    'Ability to work independently and in a team.',
    'Ability to work with npm/yarn.',
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            {backendItems.map((item) => (
              <li key={item}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            {frontendItems.map((item) => (
              <li key={item}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>

          <ul className="service__list">
            {otherItems.map((item) => (
              <li key={item}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

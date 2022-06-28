import React from 'react';
import './Services.sass';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  const designItems = [
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
  ];

  const developmentItems = [
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
  ];

  const contentItems = [
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
    'Lorem ipsum dolor sit amet consectetur elit.',
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            {designItems.map((item) => (
              <li key={item}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {developmentItems.map((item) => (
              <li key={item}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            {contentItems.map((item) => (
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

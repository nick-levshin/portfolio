import React from 'react';
import './Portfolio.sass';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: IMG1,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
    {
      image: IMG2,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
    {
      image: IMG3,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
    {
      image: IMG4,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
    {
      image: IMG5,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
    {
      image: IMG6,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.title}
            image={item.image}
            title={item.title}
            github={item.github}
            demo={item.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

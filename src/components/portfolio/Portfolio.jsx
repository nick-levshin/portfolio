import React from 'react';
import './Portfolio.sass';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';
import IMG8 from '../../assets/portfolio8.jpg';
import IMG9 from '../../assets/portfolio9.jpg';
import IMG10 from '../../assets/portfolio10.jpg';
import IMG11 from '../../assets/portfolio11.jpg';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: IMG1,
      title: 'Virtual Keyboard Emulator. Pure JS',
      github: 'https://github.com/nick-levshin/VirtualKeyboard/tree/keyboard',
      demo: 'https://nick-levshin.github.io/VirtualKeyboard/src/',
    },
    {
      image: IMG2,
      title: 'React-TypeScript Chess Game',
      github: 'https://github.com/nick-levshin/Chess/tree/chess',
      demo: 'https://nick-levshin.github.io/Chess',
    },
    {
      image: IMG3,
      title: 'Displaying Data As A Graph. Pure JS',
      github: 'https://github.com/nick-levshin/TG-Graph',
      demo: 'https://tg-graph-o84erc900-nick-levshin.vercel.app',
    },
    {
      image: IMG4,
      title: 'Single Page Travel Agency Website',
      github: 'https://github.com/nick-levshin/Safari',
      demo: 'https://nick-levshin.github.io/Safari',
    },
    {
      image: IMG5,
      title: 'Single Page Swedish Bitter Website',
      github: 'https://github.com/nick-levshin/SwedishBitter',
      demo: 'https://nick-levshin.github.io/SwedishBitter',
    },
    {
      image: IMG6,
      title: 'Single Page Surf Company Website',
      github: 'https://github.com/nick-levshin/GoSurf',
      demo: 'https://nick-levshin.github.io/GoSurf/app',
    },
    {
      image: IMG7,
      title: 'Full Stack Cloud Storage Application',
      github: 'https://github.com/nick-levshin/Cloud-Storage',
    },
    {
      image: IMG8,
      title: 'Medical Order Control System',
      github: 'https://github.com/nick-levshin/Medicine',
    },
    {
      image: IMG9,
      title: 'Shoppy - React/Tailwind Dashboard',
      github: 'https://github.com/nick-levshin/Dashboard',
      demo: 'https://dashboard-r7pvramcl-nick-levshin.vercel.app/',
    },
    {
      image: IMG10,
      title: 'Paint Online - React/NodeJS/WebSockets',
      github: 'https://github.com/nick-levshin/Paint',
      demo: 'https://paint-psi.vercel.app/',
    },
    {
      image: IMG11,
      title: 'Lyriks - React/Redux/RapidAPI Music Service',
      github: 'https://github.com/nick-levshin/Lyriks',
      demo: 'https://lyriks-eta.vercel.app/',
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

import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'img1 tt',
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    image: IMG2,
    title: 'img2 tt',
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    image: IMG3,
    title: 'img3 tt',
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 4,
    image: IMG4,
    title: 'img4 tt',
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 5,
    image: IMG5,
    title: 'img5 tt',
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 6,
    image: IMG6,
    title: 'img6 tt',
    github: "https://github.com",
    demo: "https://github.com"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>This is a porfolio item title</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
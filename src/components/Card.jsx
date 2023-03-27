import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css'

const Card = ({item}) => {
  console.log(item);
  return (
    <div>
    {item.map((val) => {
        return (
          <div key={val.id} className='card'>
            <div>
              <img src={val.img} alt={val.title} className="card__img"/>
            </div>
            <div>
              {' '}
              <h3>{val.title}</h3>
            </div>
            <div className='card__body'>
              <div>
                {val.tech.map((t) => {
                  return (
                    <div key={t} className='card__tech'>
                      {t}
                    </div>
                  );
                })}
              </div>
              <div>{val.category}</div>
            </div>
            <div className='card__footer'>
              <div>
                <a href={val.preview_link}>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size='lg'
                    style={{ color: '#fff' }}
                  />
                </a>
              </div>
              <div>
                <a href={val.github_link}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size='lg'
                    style={{ color: '#fff' }}
                  />
                </a>
              </div>
            </div>
          </div>
        );
    })}
    </div>
  )
}

export default Card
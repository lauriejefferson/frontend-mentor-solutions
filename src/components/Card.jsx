import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Card = ({ item }) => {
  return (
    <div className='container'>
      {item.map((val) => {
        return (
          <div key={val.id} className='card'>
            <div>
              <img src={val.img} alt={val.title} className='card__img' />
            </div>
            <div className='card__title'>
              {' '}
              <h3>{val.title}</h3>
            </div>
            <div className='card__body'>
              <div>
                {val.tech.map((t, index) => {
                  return (
                    <div key={index} className='card__tech'>
                      <p
                        className={
                          t === 'HTML'
                            ? 'card__tech--HTML'
                            : t === 'CSS'
                            ? 'card__tech--CSS'
                            : t === 'JS'
                            ? 'card__tech--JS'
                            : ''
                        }
                      >
                        {t}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className='card__category'>
                <span
                  className={
                    val.category_id === '1'
                      ? 'card__category--1'
                      : val.category_id === '2'
                      ? 'card__category--2'
                      : val.category_id === '3'
                      ? 'card__category--3'
                      : val.category_id === '4'
                      ? 'card__category--4'
                      : val.category_id === '5'
                      ? 'card__category--5'
                      : ''
                  }
                >
                  {val.category_id}
                </span>
                <span
                  className={
                    val.category === 'NEWBIE'
                      ? 'card__category--NEWBIE'
                      : val.category === 'JUNIOR'
                      ? 'card__category--JUNIOR'
                      : val.category === 'INTERMEDIATE'
                      ? 'card__category--INTERMEDIATE'
                      : val.category === 'ADVANCED'
                      ? 'card__category--ADVANCED'
                      : val.category === 'GURU'
                      ? 'card__category--GURU'
                      : ''
                  }
                >
                  {val.category}
                </span>
              </div>
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
  );
};

export default Card;

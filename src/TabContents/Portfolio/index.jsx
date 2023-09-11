import React, { useState, useEffect } from 'react';
import { 
  FaChevronDown, FaRegEye,
} from 'react-icons/fa';
import { 
  Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9, 
} from '../../assets';

import PortfolioData from './data.json';

const Images = {
  portfolio1: Project1,
  portfolio2: Project2,
  portfolio3: Project3,
  portfolio4: Project4,
  portfolio5: Project5,
  portfolio6: Project6,
  portfolio7: Project7,
  portfolio8: Project8,
  portfolio9: Project9,
};

export default function Protfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredList, setFilteredList] = useState([]);
  const [mobilefilterVisible, setMobilefilterVisible] = useState(false);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredList(PortfolioData.items);
    } else {
      setFilteredList(PortfolioData.items.filter(item => item.category === activeFilter))
    }
    return () => {
    }
  }, [activeFilter]);
  
  const handleFilterClicked = (key) => {
    setActiveFilter(key);
    setMobilefilterVisible(false);
  }

  const renderFilterMenu = () => {
    return (
      <ul className="filter-list">
        {PortfolioData.filters.map(item => (
          <li className="filter-item" key={item.key}>
            <button className={`${activeFilter === item.key ? 'active' : ''}`} onClick={() => handleFilterClicked(item.key)}>{item.label}</button>
          </li>
        ))}
      </ul>
    )
  }

  const renderMobileFilterMenu = () => {
    return (
      <div className="filter-select-box">
        <button className={`filter-select ${mobilefilterVisible ? 'active' : ''}`} onClick={() => setMobilefilterVisible(!mobilefilterVisible)}>
          <div className="select-value">Select category</div>
          <div className="select-icon">
            <FaChevronDown />
          </div>
        </button>
        <ul className={`select-list ${mobilefilterVisible ? 'active' : ''}`}>
          {PortfolioData.filters.map(item => (
            <li className="select-item" key={item.key}>
              <button className={`${activeFilter === item.key ? 'active' : ''}`} onClick={() => handleFilterClicked(item.key)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderPortfolioItem = (item) => {
    return (
      <li className={`project-item`} key={item.key}>
        <a href="#">
          <figure className="project-img">
            {/* <div className="project-item-icon-box">
              <FaRegEye />
            </div> */}
            <img src={Images[item.key]} alt={item.title} loading="lazy" />
          </figure>
          <h3 className="project-title">{item.title}</h3>
          <p className="project-category">{item.category}</p>
        </a>
      </li>
    )
  }

  return (
    <article className="portfolio" >
        <header>
          <h2 className="h2 article-title">{PortfolioData.title}</h2>
        </header>
        <section className="projects">
          {renderFilterMenu()}
          {renderMobileFilterMenu()}
          <ul className="project-list">
            {filteredList.map((item) => renderPortfolioItem(item))}
          </ul>
        </section>
    </article>
  )
}

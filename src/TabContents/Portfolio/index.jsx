import React, { useState, useEffect } from 'react';
import { 
  FaChevronDown, FaRegEye,
} from 'react-icons/fa';
import { 
  Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9, 
} from '../../assets';
import { PortfolioPreviewPopup } from '../../components';

import PortfolioData from './data.json';

const Images = {
  'fitfusion-club': 'https://firebasestorage.googleapis.com/v0/b/akram-cms.appspot.com/o/projects%2FFitFusion%20Club%20Thumb.png?alt=media&token=635eb86b-2260-414a-914a-e630fc1f2ce0',
  'election-campaign': 'https://firebasestorage.googleapis.com/v0/b/akram-cms.appspot.com/o/projects%2FKw-Election.jpg?alt=media&token=c067139e-a48b-432f-a34a-e88a5687d0f9',
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
  const [previewVisible, setPreviewVisible] = useState(false);
  const [activeObject, setActiveObject] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredList(PortfolioData.items.slice(0, 1));
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
  
  const handlePreviewClicked = (e, item) => {
    e.preventDefault();
    setActiveObject({...item, image: Images[item.key]});
    setPreviewVisible(true);
  }
  
  const closePreview = () => {
    setPreviewVisible(false);
    setActiveObject(null);
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
        <a href="#" onClick={(e) => handlePreviewClicked(e, item)}>
          <figure className="project-img">
            {loadingImages[item.key] ? null : <div className="skeleton" />}
            <img src={Images[item.key]} alt={item.title} loading="lazy" onLoad={() => setLoadingImages((state) => ({...state, [item.key]: true}))} />
          </figure>
          <h3 className="project-title">{item.title}</h3>
          <p className="project-category">{item.category}</p>
        </a>
      </li>
    )
  }
console.log('filteredList :>> ', filteredList);
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
        {activeObject ? <PortfolioPreviewPopup visible={previewVisible} onOk={closePreview} item={activeObject} /> : null }
    </article>
  )
}

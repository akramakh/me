import React from 'react';
import { 
    FaGraduationCap, FaCertificate, FaUserGraduate, FaCloudDownloadAlt,
} from 'react-icons/fa';
import { ResumeFile } from '../../assets';
import Data from './data.json';

export default function Resume() {

  const renderEducationItem = (item) => {
    return (
      <li className="timeline-item" key={item.key}>
        <h4 className="h4 timeline-item-title">{item.university}</h4>
        <span>{item.period}</span>
        <p className="timeline-text">{item.description} <strong>(Degree: {item.grade})</strong></p>
      </li>
    )
  }

  const renderExperienceItem = (item) => {
    return (
      <li className="timeline-item" key={item.key}>
        <h4 className="h4 timeline-item-title">{item.position}</h4>
        <span>{item.period}</span>
        {
          item.description_type === 'html' ? (
            <div className="timeline-description" dangerouslySetInnerHTML={{__html: item.description}} />
          ) : (
            <p className="timeline-text">{item.description}</p>
          )
        }
      </li>
    )
  }

  const renderCourseItem = (item) => {
    return (
      <li className="timeline-item" key={item.key}>
        <h4 className="h4 timeline-item-title">{item.title}<p className="tag">{item.type}</p></h4>
        <span>{item.period}</span>
      </li>
    )
  }

  const renderSkillItem = (item) => {
    return (
      <li className="skills-item" key={item.key}>
        <div className="title-wrapper">
          <h5 className="h5">{item.title}</h5>
          <data value={item.percent}>{item.percent}%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{width: `${item.percent}%`}} />
        </div>
      </li>
    )
  }

  return (
    <article className="resume" >

        <header>
          <h2 className="h2 article-title">
            {Data.title}
            <a className="icon-box icon-btn" href={ResumeFile} target='_blank'>
              <FaCloudDownloadAlt />
              <span>Download</span>
            </a>
          </h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaGraduationCap />
            </div>
            <h3 className="h3">{Data.education.title}</h3>
          </div>
          <ol className="timeline-list">
            {Data.education.items.map(item => renderEducationItem(item))}
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaCertificate />
            </div>
            <h3 className="h3">{Data.experience.title}</h3>
          </div>
          <ol className="timeline-list">
            {Data.experience.items.map(item => renderExperienceItem(item))}
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaUserGraduate />
            </div>
            <h3 className="h3">{Data.courses.title}</h3>
          </div>
          <ol className="timeline-list">
            {Data.courses.items.map(item => renderCourseItem(item))}
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">{Data.skills.title}</h3>
          <ul className="skills-list content-card">
            {Data.skills.items.map(item => renderSkillItem(item))}
          </ul>
        </section>

    </article>
  )
}

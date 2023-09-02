import React from 'react';
import {
    Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, 
} from '../../assets';
import BlogsData from './data.json';

const Images = {
  'blog1': Blog1,
  'blog2': Blog2,
  'blog3': Blog3,
  'blog4': Blog4,
  'blog5': Blog5,
  'blog6': Blog6,
}

export default function Blog() {

  const renderBlogItem = (item) => {
    return (
      <li className="blog-post-item" key={item.key}>
        <a href="#">

          <figure className="blog-banner-box">
            <img src={Images[item.key]} alt={item.title} loading="lazy" />
          </figure>

          <div className="blog-content">

            <div className="blog-meta">
              <p className="blog-category">{item.category}</p>
              <span className="dot"></span>
              <time datetime={item.time}>{item.time}</time>
            </div>

            <h3 className="h3 blog-item-title">{item.title}</h3>

            <p className="blog-text">
              {item.description}
            </p>

          </div>

        </a>
      </li>
    )
  }

  return (
    <article className="blog" >

        <header>
          <h2 className="h2 article-title">{BlogsData.title}</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">

            {BlogsData.items.map(item => renderBlogItem(item))}

          </ul>

        </section>

    </article>
  )
}

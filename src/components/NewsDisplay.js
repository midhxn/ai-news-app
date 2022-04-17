import React from 'react';
import moment from 'moment';
import NoImage from '../assets/noImage.png';

export default function NewsDisplay({
  newsData
}) {
  return (
    <div>
      {newsData.map((news) => {
        return (
          <div className='news-container news-data'>
            <div>
            {news.image && <img className='news-image' src={news.image} alt='image' />}
              <div className='news-col'>
                <p className='text-capitalize'>{news.source}</p>
                <p>{moment(news.published_at).format('LL')}</p>
              </div>

              <h3>{news.title}</h3>

              {/* <p>{(news.description).substring(0, 100)}</p> */}
              <a className='link-url' href={news.url} target="_blank">Read this Article..</a>
              <div className='news-col text-capitalize'>
                {news.author && <p>{news.author}</p>}
                {news.category && <p>{news.category} News</p>}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
import React from 'react';
import { getNews } from '../Service/getNews';
import { useEffect, useState } from 'react';
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';

export function NewsData() {
    const ALAN_SDK_Key = `a9e5b1a531fceaf8f87946989161b8922e956eca572e1d8b807a3e2338fdd0dc/stage`
    const[newsData,setNewsData] = useState([])
    const [selectOption, setCategories] = useState('');
    const getAllNews = async () => {
        let Data = await getNews(selectOption);
        setNewsData(Data.data.articles)
    }
    const categorySelect = (e) => {
        setCategories(e.target.value)
    }
    useEffect(() => {
        alanBtn({
          key: ALAN_SDK_Key,
          onCommand: (commandData) => {
            setCategories((commandData.data));
          }
        });
      }, []);
    

    useEffect(() => {
        getAllNews()
   },[selectOption])
  
   
  return (
    <div className='main'>
        <h1>News 360</h1>
        <p className='app-description'>Press the Mic and Say the category</p>
        <div className='category-filter'>
            <label for="category">Choose a Category</label>
            <select name="category" id="category" className="category-select" onChange={categorySelect} value={selectOption}>
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            </select>
        </div>

        <div className="grid-main">
            {newsData.map((news) => {
                return (
                    <div className='grid-child'>
                        <img className="news-image" src={news?.urlToImage}></img>
                        <p className='news-title'>{news?.title}</p>

                        <p className='news-content'>{news?.content}</p>
                        <div className='space-between'> 
                            <p className='news-author'>Author : {news?.author ? news?.author:'Not available'}</p>
                            <p className='news-date'>Date: {moment(news?.publishedAt).format('LL')}</p>
                        </div>
                        <a href={news?.url} target="blank">Read More...</a>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

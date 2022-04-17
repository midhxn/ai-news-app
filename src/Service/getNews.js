import axios from 'axios';

export function getNews(category='General'){
    const API_KEY = `ea5fb76a976f4968b44b872c12bb6c21`;
    const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
   
    return axios.get(`${API_Endpoint}&apikey=${API_KEY}`)
   
}

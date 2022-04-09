import React from "react";

import NewsCard from '../Newscard/NewsCard';

const NewsCards = ({ articles }) => {
    return(
        <div>
            {articles.map((articles,i)=>(
            <NewsCard/> 
           ))}
        </div>
        );
}

export default NewsCards;
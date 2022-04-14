import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from './components/NewsCards/NewsCards';

const alanKey= '0cfde074e9998f53f87946989161b8922e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles,setNewsArticles] = useState([]);
    
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) =>{
                if(command==='newHeadlines'){
                    setNewsArticles(articles);
                }
            }
        })
    }, [])

    return(
        <div>
            <h1>AI NEWS</h1>
            <NewsCards article={this.newsArticles}/>
        </div>
    );
}

export default App;
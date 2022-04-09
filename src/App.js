import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/Newscards/Newscards";

const alanKey= '0cfde074e9998f53f87946989161b8922e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (command, articles) =>{
                if(command==='newHeadlines'){
                    console.log(articles);
                }
            }
        })
    },[])
    return(
        <div>
            <h1>AI NEWS</h1>
            <NewsCards article={newsArticles}/>
        </div>

    );
}

export default App;
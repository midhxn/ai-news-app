import React, {useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey= '0cfde074e9998f53f87946989161b8922e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: () =>{
                if(command==='test'){
                    alert('all set');
                }
            }
        })
    },[])
    return(
        <div>
            <h1>AI NEWS</h1>
        </div>

    );
}

export default App;
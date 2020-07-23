import React from 'react'
import './App.css'
import Weekly from './Weekly'


function Week () {
    const monday = "MO";
    const tuesday = "TU";
    const wednesday = "WE";
    const thursday = "TH";
    const friday= "FR";
    const weekend="SS";

    return(
        <div className="weekoverview">
        
        <div className="weekstart">
        <div className="weeklydiv">   
        <p className="weekday">MO</p>  
        <Weekly day={monday}/>
        </div> 

        <div className="weeklydiv">   
        <p className="weekday">TU</p>  
        <Weekly day={tuesday} />
        </div> 

        <div className="weeklydiv">   
        <p className="weekday">WE</p>  
        <Weekly day={wednesday}/>
        </div> 
        </div>

        <div className="weekstart">
        <div className="weeklydiv">   
        <p className="weekday">TH</p>  
        <Weekly day={thursday} />
        </div> 

        <div className="weeklydiv">   
        <p className="weekday">FR</p>  
        <Weekly day={friday} />
        </div> 

        <div className="weeklydiv">   
        <p className="weekday">SS</p>  
        <Weekly day={weekend} />
        </div> 
        </div>

       
      </div>
    )
}

export default Week
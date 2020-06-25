import React from 'react'
import './App.css';
import Weather from "./Weather";

function MyInfo() {
    
    const date = new Date()
    const hours = date.getHours()
    const weekday = date.getDay()
    let day
    let timeOfDay
    const styles = {
        color:"palevioletred"
    }

    const styles2 = {
        fontWeight: "bold",
        textTransform: "uppercase",
        color:"palevioletred",
        fontSize:"1.1em",
        lineHeight:"1.4em"
        
    }
    
   
   

    if (weekday === 1) {
        day = 'Monday'
    } else if (weekday === 2) {
        day = 'Tuesday'
    } else if (weekday === 3) {
        day = 'Wednesday'
    } else if (weekday === 4) {
        day = 'Thursday'
    } else if (weekday === 5) {
        day = 'Friday'
    } else if (weekday === 6) {
        day = 'Saturday'
    } else {
        day = 'Sunday'
    }

    if (hours < 12) {
        timeOfDay='morning'
        
    } else if (hours >=12 && hours < 18) {
        timeOfDay = 'afternoon'
        
    } else {
        timeOfDay = 'evening'
        
    }

    
    



    return (
        <div id="dashboard" >
        <div className="infos">
            <div className="time">
            <p style={styles}>{day + " - " + date.toLocaleDateString()}</p>
                <p style={styles2}>Good {timeOfDay}!</p>
            </div>
            <div>
                <Weather />
            </div>
            
            
            
            
        </div>
        
        
        </div>

    )
}

export default MyInfo

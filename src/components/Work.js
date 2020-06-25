import React from 'react';
import './App.css';





function WorkTracker () {


    const startWork = ()=> {
        var date = new Date();
        var timestamp = date.getTime();
        var sdate = new Date(timestamp);
        var t = sdate.toLocaleTimeString().split(" ");
        document.getElementById('startbtn').innerHTML = t;

        document.getElementById('start-out').innerHTML = timestamp;
        return timestamp;
    }



   const getDiff = () => {
        var start = document.getElementById('start-out').innerHTML;
        var ndate = new Date();
        var end = ndate.getTime();
        var send = new Date(end);
        var theend = send.toLocaleTimeString().split(" ");
        var diff = end - start;
        
        var seconds = (diff / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours != "") {
            return hours + ":" + minutes + ":" + seconds;
        }
        var s =  hours + " : " + minutes + " : " + seconds;

        document.getElementById('track-out').innerHTML = `<p style="color:palevioletred">Work Time  ${s}</p>`;
        document.getElementById('endbtn').innerHTML = theend;
        console.log(s);
        return s; 
       
    }
        

        return(
        <div id="track">
            <div id="track-btn">
            <button className="start" id="startbtn" onClick = {startWork}>Start Work</button><div id="start-out" style={{display:"none"}}></div>
            <button className="finish" id="endbtn" onClick={getDiff}>Finish Work</button><div id="end-out"></div>
            </div>

            <div id="track-out">
            </div>   

        </div>
        )
    
}

export default WorkTracker
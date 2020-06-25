import React from 'react'
import './App.css';

class Today extends React.Component {

    addAppointment () {
        let time = document.getElementById('appt').value
        let appointment = document.getElementById('add').value
        document.getElementById('schedule').innerHTML += `<p id="appoint">${time} - ${appointment}</p>`

    }

    render () {
        return(
            <div id="today">
            <div className="header"><h2>TO-DAY</h2></div>     
             
            <div className="holder">
            <input type="text" id="appt" name="appt" placeholder="Time"/>
                <input id="add" type='text' placeholder="Appt"/>
                <button onClick = {this.addAppointment}>Add</button>
            </div>
            <div id="schedule"></div>
            </div>
        )
    }
}

export default Today
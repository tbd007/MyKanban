import React from 'react'
import './App.css'


class ToNote extends React.Component{

    addNote(){
        let time = new Date();
        let date= time.toLocaleString();
        let note= document.getElementById('textarea').value;

        document.getElementById('notes').innerHTML += `<div id="note">${note}</div><div id="timestamp"><p>${date}</p></div>`
     };

    
    render (){ 
    return(
        
        <div id="tonote">
            <div className="header"><h2>TO-NOTE</h2></div>   
            <div className="holder">
        
            <input  id="textarea" type="textarea" placeholder="Add Note"></input>
            <button onClick={this.addNote}>Add</button>
            </div>
            <div id="notes">
                {this.storedNotes}
            </div>
        </div>
    )
}
}

export default ToNote
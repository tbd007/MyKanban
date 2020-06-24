import React from "react"

import './App.css';

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
*/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
        this.state.isLoggedIn ? document.getElementById('pic').setAttribute("src" , "https://www.xing.com/assets/frontend_minified/img/users/nobody_f.256x256.jpg") : document.getElementById('pic').setAttribute("src" , "https://avatars3.githubusercontent.com/u/58664635?s=460&u=dba4f15f522634742437152a9e56b238157d180f&v=4") 
    }    
    
    render() {   
        const firstName="Tanja"
        const lastName="Babic-Debrosse"
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? `Logged in as ${firstName} ${lastName}` : "Logged out"
        return (
            <div id="login-wrapper">
                 <div className="profilepic">
            <img id="pic" src="https://www.xing.com/assets/frontend_minified/img/users/nobody_f.256x256.jpg"/>  
            <br />          
            
            <button id="log-btn" onClick={this.handleClick}>{buttonText}</button>
                <p id="dptxt">{displayText}</p>
        </div>
               
                
            </div>
        )
    }
}

export default App

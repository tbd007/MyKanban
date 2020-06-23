import React from 'react'
import './App.css';

function handleClick () {
   document.getElementById('pic').setAttribute("src" , "https://avatars3.githubusercontent.com/u/58664635?s=460&u=dba4f15f522634742437152a9e56b238157d180f&v=4") 
}

function Pic () {
    return (
        <div className="profilepic">
            <img id="pic" src="https://www.xing.com/assets/frontend_minified/img/users/nobody_f.256x256.jpg"/>  
            <br />          
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default Pic
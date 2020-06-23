import React from 'react'
import './App.css';

class Nav extends React.Component {
    render () {
    return (
        <nav>
        
         <button>TO-DAY</button>
         <button>TO-DO</button>
         <button>TO-NOTE</button>
       
      </nav>
    )
}
}

export default Nav

// OnClick switch up between the 3 sheets
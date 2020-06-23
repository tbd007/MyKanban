import React from 'react'
import './App.css';
import randomcolor from 'randomcolor';


class Water extends React.Component {
    constructor(){
        super()
        this.state= {
            count:0,
            color:''
            //color: randomcolor()  //works fine without setting componentDidUpdate!
        }
        this.drinkWater = this.drinkWater.bind(this)
    }

     drinkWater(){
       this.setState(prevState => {
          if(prevState.count < 6) { 
          return {
              count: prevState.count +1
          }  
        } else {
            return {
                count:"Good job!"
            }
        }
       }) 
    }

    // just practice usage of this, if omore complex logic is needed
   componentDidUpdate(prevProps, prevState) {
       //check if new state is same as prev state count
       if(prevState.count !== this.state.count){

       const newColor = randomcolor()
       this.setState({color:newColor})
       }
   } 

    render () {
        return (
            <div id="water">
                <h1 style={{color:this.state.color}}>{this.state.count}</h1>
                <button onClick={this.drinkWater}>Drink</button>
            </div>
        )
    }
}

export default Water

import React, {Component} from "react"



class Weather extends Component {
    constructor() {
        super()
        this.state = {
          
          temperature: [],
          desc:"",
          city:"",
          icon: ""
        }
    }
    
  componentDidMount (){
    
    fetch("https://api.weatherbit.io/v2.0/current?city=Vienna,AT&key=26ae9063bb3a405f9e9ba923caed9fd1")
    .then(response => response.text())
    .then(response => {
      const weather = JSON.parse(response);
      console.log(weather);    
      let temp=weather.data[0].temp;
      let desc=weather.data[0].weather.description;
      let city = weather.data[0].city_name;
      let icon_code = weather.data[0].weather.icon;
      const iconimg = `${icon_code}.png`
      console.log(iconimg)
     
      
      this.setState({
        temperature:temp,
        desc:desc,
        city:city,
        icon: iconimg,
        })
        console.log(this.state.icon)
    })

   
  }  
    
    render() {
      
        return (
            <div id="current_weather">
                <p> {this.state.temperature} °C <br></br> {this.state.desc} <img style={{width:30, height:30, marginTop:10}} src={this.state.icon}/></p>
                
            </div>
        )
    }
}


    
    




export default Weather
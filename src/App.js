import React, { Component } from 'react';

const Weather_Url = "http://api.worldweatheronline.com/premium/v1/search.ashx?query=35216&format=json&key=e48d4a5bf0e842209fa90116192001";

class App extends Component {
  constructor(props){
    super(props);

    this.state={
weather:[]
    };
  
  
  }

  showWeather = async() => {
    try {
      let res = await fetch(`${Weather_Url}`);
      let data = await res.json();
      console.log(data);

      this.setState({
        weather: data,
        
      });
    } catch (e) {
      console.log(e);
    }
  };
  

  
  render() {
    return (
      <React.Fragment>
        
          <h1> THE WEATHER APP</h1>

          <button onClick={this.showWeather}>
            Click Me
          </button>
        
      </React.Fragment>
    );
  }
}

export default App;

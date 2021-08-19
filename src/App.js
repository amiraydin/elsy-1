import React from "react";
import Box from './components/Box'
import './style/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }
  onHeartChange = (e) => {
    // console.log("heart",{heart: e.target.value});
    this.setState({heart: e.target.value})
  }
  onTemperatureChange = (e) => {
    this.setState({temperature: e.target.value})
  }
  onStepsChange = (e) => {
    this.setState({steps: e.target.value})
  }
  calculateWater = (e) => {
    if (this.state.temperature > 20 ) {
    }
    this.setState({water: e.target.value})
  }
  
  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} onChange={this.calculateWater} min="0" max="0" unit="L" />

          {/* Steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} onChange={this.onStepsChange} min= {stepsMin} max={stepsMax} unit="steps" />

          {/* Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} onChange={this.onHeartChange} min= {heartMin} max={heartMax} unit="bpm" />

          {/* Temperature */}
          <Box className="sunyy" icon="wb_sunny" color="yellow" value={this.state.temperature} onChange={this.onTemperatureChange} min= {tempMin} max={tempMax} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;
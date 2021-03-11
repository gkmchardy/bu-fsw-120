import React from 'react'
import './DJApp.css'

class DJApp extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ['white', 'white', 'white', 'white']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    let colors = [...this.state.colors]
    switch(e.target.name) {
      case 'stdj':
        if (this.state.colors[0] === 'black') {
          this.setState({ colors: ['white', 'white', 'white', 'white'] })
        } else {
          this.setState({ colors: ['black', 'black', 'black', 'black'] })
        }
        break
      case 'pdj':
        colors[0] = 'purple'
        colors[1] = 'purple'
        this.setState({ colors})
        break
        case 'pdja':
          colors[2] = 'blue'
          this.setState({ colors})
          break
        case 'pdjb':
          colors[3] = 'blue'
          this.setState({ colors})
          break
        case 'btdj1':
          colors[0] = 'yellow'
          this.setState({ colors})
          break
        case 'btdj2':
          colors[1] = 'green'
          this.setState({ colors})
          break
        case 'btdj3':
          colors[2] = 'red'
          this.setState({ colors})
          break
        case 'btdj4':
          colors[3] = 'orange'
          this.setState({ colors})
          break
       default:
          console.log(3)
          break;
    }
  }


  render() {
    return (
      <div>
        <br />
        <div className="tileWrapper">
          <div className="tile" style={{backgroundColor:this.state.colors[0]}}>GET</div>
          <div className="tile" style={{backgroundColor:this.state.colors[1]}}>YOUR</div>
          <div className="tile" style={{backgroundColor:this.state.colors[2]}}>GROOVE</div>
          <div className="tile" style={{backgroundColor:this.state.colors[3]}}>ON</div>
        </div>
  
        <br />
  
        <div className="buttonWrapper">
          <div className="lilButton"><button name="stdj" onClick={this.handleClick}>Small Time DJ</button></div>
          <div className="lilButton"><button name="pdj" onClick={this.handleClick}>Party DJ</button></div>
          <div className="lilButton"><button name="pdja" onClick={this.handleClick}>Professional DJ A</button></div>
          <div className="lilButton"v><button name="pdjb" onClick={this.handleClick}>Professional DJ B</button></div>
  
          <div className="lilButton"><button name="btdj1" onClick={this.handleClick}>Big Time DJ 1</button></div>
          <div className="lilButton"><button name="btdj2" onClick={this.handleClick}>Big Time DJ 2</button></div>
          <div className="lilButton"><button name="btdj3" onClick={this.handleClick}>Big Time DJ 3</button></div>
          <div className="lilButton"><button name="btdj4" onClick={this.handleClick}>Big Time DJ 4</button></div>
  
          <div className="bigButton"><button name="great" onClick={this.handleClick}>The Great</button></div>
          <div className="bigButton"><button name="goat" onClick={this.handleClick}>The GOAT</button></div>
        </div>
      </div>
    )
  }
}

export default DJApp

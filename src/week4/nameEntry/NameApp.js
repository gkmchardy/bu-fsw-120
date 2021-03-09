import React from 'react'

class NameApp extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      names: ['Paul Bunyan', 'Johnny Appleseed', 'Joe Magyarac', 'John Henry'] 
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value})
}

  handleClick = (e) => {
    e.preventDefault()
    this.setState({ 
      names: [ this.state.name, ...this.state.names],
      name: ''
    })
  }

  render() {
    return (
      <div style={{margin:"auto", width:"200px", padding:"10px"}}>
        <br />
        <form>
          <input 
              type="text" 
              name="inputName"
              placeholder="Legend's Name"
              onChange={this.handleChange} 
              value={this.state.name} 
              style={{width:"90%"}}
              /><br />
          <p name="dispName" style={{textAlign:"center", color:"black", fontSize:"18px"}}>{this.state.name}</p>
          <button style={{width:"90%"}} onClick={this.handleClick}>Submit Name</button>
          <ol style={{textAlign:"left", color:"Black"}}>
            {this.state.names.map((item, i) => {
              return <li key={i}> {item}</li>
            })}
        </ol>
        </form>    
      </div>
    )
  }
}

export default NameApp

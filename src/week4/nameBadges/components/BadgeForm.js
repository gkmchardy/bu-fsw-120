import React from 'react'
import BadgeList from './BadgeList.js'

class BadgeForm extends React.Component {
  constructor() {
    super()
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        birthPlace: '',
        phoneNbr: '',
        faveFood: '', 
        about: '',
        bgcolor: 'red',
        nameBadges: []
    }
  }

  handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name] : value })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      let newUserData = {
          firstName: this.state.firstName, 
          lastName: this.state.lastName,
          email: this.state.email,
          birthPlace: this.state.birthPlace,
          phoneNbr: this.state.phoneNbr,
          faveFood: this.state.faveFood, 
          about: this.state.about,
          bgcolor: this.state.bgcolor
        }
      this.setState({
          nameBadges : [ newUserData, ...this.state.nameBadges],
          firstName: '',
          lastName: '',
          email: '',
          birthPlace: '',
          phoneNbr: '',
          faveFood: '', 
          about: ''
        })
        if(this.state.bgcolor === 'red') {
            this.setState({bgcolor: 'blue'})
        } else {
            this.setState({bgcolor: 'red'})
        }
  }

  render() {
    return (
        <div>  
            <br /><br />
            <form onSubmit={this.handleSubmit}>
                <div className="badgeInputWrapper">
                    <div className="badgeHeader">
                        <p>Please Fill Out Your Information</p>
                    </div>
                    <div className="badgeInput">
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name"
                            onChange={this.handleChange}
                            value={this.state.firstName} 
                            required={true}
                            minLength="3"
                            style={{width:"250px"}}
                        />
                    </div>
                    <div className="badgeInput">
                        <input 
                            type="text" 
                            name="lastName"  
                            placeholder="Last Name"
                            onChange={this.handleChange} 
                            value={this.state.lastName} 
                            required={true}
                            minLength="3"
                            style={{width:"250px"}}
                        />
                    </div>
                    <div className="badgeInput">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="eMail Address"
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            required={true}
                            style={{width:"250px"}}
                        />
                    </div>
                    <div className="badgeInput">
                        <input 
                            type="text" 
                            name="birthPlace"
                            placeholder="Place of Birth"
                            onChange={this.handleChange} 
                            value={this.state.birthPlace} 
                            required={true}
                            minLength="3"
                            style={{width:"250px"}}
                        />
                    </div>
                    <div className="badgeInput">
                        <input 
                            type="text" 
                            name="phoneNbr"
                            placeholder="Phone Number (no parenthesis, dots, or dashes please)"
                            onChange={this.handleChange} 
                            value={this.state.phoneNbr} 
                            required={true}
                            minLength="10"
                            style={{width:"250px"}}
                            pattern="[0-9]*"
                        />
                    </div>
                    <div className="badgeInput">
                            <input 
                                type="text" 
                                name="faveFood"
                                placeholder="Your Favorite Food"
                                onChange={this.handleChange} 
                                value={this.state.faveFood} 
                                required={true}
                                minLength="3"
                                style={{width:"250px"}}
                            />
                    </div>
                    <div className="badgeSpan">
                            <textarea 
                                name="about"
                                placeholder="Tell us about yourself"
                                onChange={this.handleChange}
                                value={this.state.about}
                                required={true}
                                minLength="3"
                                style={{width:"100%"}}
                            />
                    </div>
                    <div className="badgeSpan" style={{textAlign:"right"}}>
                            <button>Submit</button>
                    </div>
                </div>
            </form>
            <br />
            <BadgeList nameBadges={this.state.nameBadges} />
      </div>
    )
  }
}

export default BadgeForm
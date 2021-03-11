import React from 'react'

const BadgeCard = ( { firstName, lastName, email, birthPlace, phoneNbr, faveFood, about, bgcolor } ) => {
  return (
    <div>
        <div className="badgeInputWrapper">
            <div 
                className="badgeHeader" 
                style={{backgroundColor:bgcolor, paddingTop:"10px", paddingBottom:"10px"}}
              >
              Hello, My Name Is {firstName} {lastName}
            </div>

            <div className="cardCell">Phone Number:<br />{phoneNbr.substring(0,3)+"-"+phoneNbr.substring(3,6)+"-"+phoneNbr.substring(6,10)}</div>
            <div className="cardCell">Birth Place:<br />{birthPlace}</div>

            <div className="cardCell">Favorite Food:<br />{faveFood}</div>
            <div className="cardCell">eMail Address:<br />{email}</div>

            <div className="cardSpan">About Me: {about}</div>
        </div>
        <br />
    </div>
  )
}

export default BadgeCard
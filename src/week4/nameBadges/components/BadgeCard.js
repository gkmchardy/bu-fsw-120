import React from 'react'

const BadgeCard = ( { firstName, lastName, email, birthPlace, phoneNbr, faveFood, about, bgcolor } ) => {
  return (
    <div>
        <div className="badgeInputWrapper">
            <div className="badgeHeader" style={{backgroundColor:bgcolor}}><p>Hello, My Name Is</p></div>

            <div className="badgeInput">Name: {firstName} {lastName}</div>
            <div className="badgeInput">Phone Number: {phoneNbr}</div>

            <div className="badgeInput">Birth Place: {birthPlace}</div>
            <div className="badgeInput">Favorite Food: {faveFood}</div>

            <div className="badgeSpan">eMail Address: {email}</div>

            <div className="badgeSpan">About Me: {about}</div>
        </div>
        <br />
    </div>
  )
}

export default BadgeCard
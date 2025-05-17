import { useState } from "react"

import star from '../assets/star.png'
import colored_star from '../assets/colored-star.png'

export default function(){

    const [contact, setContact] = useState({
        profileImage: '/profile.png',
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+1 (212) 555-1212',
        email: 'itsmyrealname@example.com',
        isFavorite: false
    })

    function handleFavoriteButton(){
        setContact(prevContact => {
            prevContact.isFavorite = !prevContact.isFavorite

            return {...prevContact}
        })
    }

    return(
        <div className="object_challange_container">
            <img src={contact.profileImage} alt="Profile Picture" />

            <img onClick={handleFavoriteButton} src={contact.isFavorite ? colored_star : star} alt={contact.isFavorite.toString()} />

            <h2>{contact.firstName} {contact.lastName}</h2>

            <p>{contact.phoneNumber}</p>

            <p>{contact.email}</p>
        </div>
    )
}   
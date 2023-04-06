import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const BookingDetails = (props) => {
  const room = props.room

  return (
    <div className='card-container'>
      <img
        src='https://"C:\Users\user\OneDrive\Documents\html\room1.jpg"'
        alt='Rooms'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-room/${room._id}` }>
            {room.name}  
          </Link>
        </h2>
        <h3>{room.type}</h3>
        <p>{room.description}</p>
      </div>
    </div>  
  )
}

export default BookingDetails;
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingDetails from './BookingDetails';

function ShowRoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get('https://5000-ipsitak12-remgnt-a3f5ere5ao5.ws-us92.gitpod.io/api/books')
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        console.log('Error from RoomList ->');
        console.log(err)
      });
  }, []);

  const roomList =
    rooms.length === 0
      ? 'there is no room record!'
      : rooms.map((room, k) => <BookingDetails room={room} key={k} />);

  return (
    <div className='ShowRoomList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Rooms List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-user'
              className='btn btn-outline-warning float-right'
            >
              + Add New Room
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{roomList}</div>
      </div>
    </div>
  );
}

export default ShowRoomList;
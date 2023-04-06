import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowRoomDetails(props) {
  const [room, setRoom] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-ipsitak12-rental-tbb7wiust8o.ws-us93.gitpod.io//api/rooms/${id}`)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowRoomDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://5000-ipsitak12-rental-tbb7wiust8o.ws-us93.gitpod.io//api/rooms/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowRoomDetails_deleteClick');
      });
  };

  const RoomItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>name</td>
            <td>{room.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>maxcount</td>
            <td>{room.maxcount}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>phonenumber</td>
            <td>{room.phonenumber}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Rentperday</td>
            <td>{room.rentperday}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>type</td>
            <td>{room.type}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{room.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowRoomDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Room List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Room's Record</h1>
            <p className='lead text-center'>View Room's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{RoomItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(room._id);
              }}
            >
              Delete Room
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-room/${room._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Room
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRoomDetails;
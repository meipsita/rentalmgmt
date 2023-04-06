import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateUser = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [room, setroom] = useState({
    Name: '',
    maxcount: '',
    phonenumber: '',
    Rentperday: '',
    type: '',
    description: '',
  });

  const onChange = (e) => {
    setroom({ ...room, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://5000-ipsitak12-rental-tbb7wiust8o.ws-us93.gitpod.io/api/rooms', room)
      .then((res) => {
        setroom({
            Name: '',
            maxcount: '',
            phonenumber: '',
            Rentperday: '',
            type: '',
            description: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateUser!');
        console.log('The error is -> ')
        console.log(err)
      });
  };

  return (
    <div className='CreateUser'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/show-list/:id' className='btn btn-outline-warning float-left'>
              Show Room List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add user</h1>
            <p className='lead text-center'>Create new user</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='name'
                  name='Name'
                  className='form-control'
                  value={room.Name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='maxcount'
                  name='maxcount'
                  className='form-control'
                  value={room.maxcount}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='phone'
                  name='phonenumber'
                  className='form-control'
                  value={room.phonenumber}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='room rent'
                  name='Rentperday'
                  className='form-control'
                  value={room.Rentperday}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='type'
                  name='type'
                  className='form-control'
                  value={room.type}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='description of this Book'
                  name='description'
                  className='form-control'
                  value={room.description}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
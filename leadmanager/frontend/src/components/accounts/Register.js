import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='col-md-6 m-auto'>
      <div className='card card-body my-5'>
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              value={value.username}
              onChange={(e) => setValue({ ...value, username: e.target.value })}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Confirm password</label>
            <input
              type='password'
              name='password2'
              value={value.password2}
              onChange={(e) =>
                setValue({ ...value, password2: e.target.value })
              }
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

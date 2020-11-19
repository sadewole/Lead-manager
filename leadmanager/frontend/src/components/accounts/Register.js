import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/auth';
import { createMessage } from '../../store/actions/messages';

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const { password2, ...rest } = value;
    if (value.password !== password2) {
      dispatch(createMessage({ passwordNotMatch: 'Passwords do not match ' }));

      return;
    }

    dispatch(register(rest));
  };

  if (auth.isAuthenticated) {
    return <Redirect to='/' />;
  }
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

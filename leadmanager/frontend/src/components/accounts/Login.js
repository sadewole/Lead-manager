import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/auth';

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(value));
  };

  if (auth.isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='col-md-6 m-auto'>
      <div className='card card-body my-5'>
        <h1>Login</h1>
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
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

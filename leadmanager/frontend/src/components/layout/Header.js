import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a className='navbar-brand' href='#'>
            Lead manager
          </a>
          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            {!isAuthenticated && !user ? (
              <Fragment>
                <li className='nav-item'>
                  <Link to='/register' className='nav-link'>
                    Register
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/login' className='nav-link'>
                    Login
                  </Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <span className='navbar-text mr-3'>
                  <strong>{user ? `Welcome ${user.username}` : null}</strong>
                </span>
                <li className='nav-item'>
                  <button
                    to='/login'
                    className='nav-link btn btn-info btn-sm text-light'
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

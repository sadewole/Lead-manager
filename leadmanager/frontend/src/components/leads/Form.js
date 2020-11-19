import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLead } from '../../store/actions/leads';

const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addLead(value));

    setValue({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='card card-body my-4'>
      <h1>Add Lead Form</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
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
          <label>Message</label>
          <textarea
            name='message'
            value={value.message}
            onChange={(e) => setValue({ ...value, message: e.target.value })}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

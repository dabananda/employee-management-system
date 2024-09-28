import React, { useState } from 'react';
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigator = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    createEmployee(employee).then((response) => {
      navigator('/employees');
    });
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card mt-3 col-md-6 offset-md-3 offset-md-3'>
          <h2 className='my-3 text-center'>Add New Employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-3'>
                <label className='form-label'>First Name</label>
                <input
                  className='form-control'
                  type='text'
                  value={firstName}
                  placeholder='Enter first name'
                  name='firstName'
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='form-group mb-3'>
                <label className='form-label'>Last Name</label>
                <input
                  className='form-control'
                  type='text'
                  value={lastName}
                  placeholder='Enter last name'
                  name='lastName'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Email Address</label>
                <input
                  className='form-control'
                  type='email'
                  value={email}
                  placeholder='Enter email address'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className='btn btn-primary mt-3' onClick={saveEmployee}>
                Save Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;

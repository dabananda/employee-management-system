import React, { useState } from 'react';
import { createDepartment } from '../services/DepartmentService';
import { useNavigate } from 'react-router-dom';

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');

  const navigator = useNavigate();

  function saveDepartment(e) {
    e.preventDefault();
    const department = { departmentName, departmentDescription };
    createDepartment(department)
      .then((response) => {
        navigator('/departments')
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card mt-3 col-md-6 offset-md-3 offset-md-3'>
          <h3 className='text-center my-3'>Add Department</h3>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Department Name</label>
                <input
                  type='text'
                  placeholder='Enter Department Name'
                  name='departmentName'
                  className='form-control'
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Department Description</label>
                <input
                  type='text'
                  placeholder='Enter Department Description'
                  name='departmentDescription'
                  className='form-control'
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                />
              </div>
              <button
                className='btn btn-primary mt-2'
                type='submit'
                onClick={(e) => saveDepartment(e)}
              >
                Save Department
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;

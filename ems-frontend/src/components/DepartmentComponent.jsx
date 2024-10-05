import React, { useEffect, useState } from 'react';
import {
  createDepartment,
  getDepartmentById,
  updateDepartment,
} from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');

  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDepartmentById(id)
        .then((response) => {
          setDepartmentName(response.data.departmentName);
          setDepartmentDescription(response.data.departmentDescription);
        })
        .catch((error) => {
          console.error('Error fetching department:', error);
        });
    }
  }, [id]);

  function saveOrUpdateDepartment(e) {
    e.preventDefault();
    const department = { departmentName, departmentDescription };

    if (id) {
      updateDepartment(id, department)
        .then((response) => {
          navigator('/departments');
        })
        .catch((error) => console.error(error));
    } else {
      createDepartment(department)
        .then((response) => {
          navigator('/departments');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function pageTitle() {
    return id ? (
      <h3 className='text-center my-3'>Update Department</h3>
    ) : (
      <h3 className='text-center my-3'>Create New Department</h3>
    );
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card mt-3 col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form onSubmit={saveOrUpdateDepartment}>
              <div className='form-group mb-2'>
                <label className='form-label'>Department Name</label>
                <input
                  type='text'
                  placeholder='Enter Department Name'
                  name='departmentName'
                  className='form-control'
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  required
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
                  required
                />
              </div>
              <button className='btn btn-primary mt-2' type='submit'>
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

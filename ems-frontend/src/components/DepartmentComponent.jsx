import React, { useEffect, useState } from 'react';
import {
  createDepartment,
  getDepartmentById,
} from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');

  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDepartmentById(id).then((response) => {
      setDepartmentName(response.data.departmentName);
      setDepartmentDescription(response.data.departmentDescription);
    });
  }, [id]);

  function saveDepartment(e) {
    e.preventDefault();
    const department = { departmentName, departmentDescription };
    createDepartment(department)
      .then((response) => {
        navigator('/departments');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function pageTitle() {
    if (id) return <h3 className='text-center my-3'>Update Department</h3>;
    else return <h3 className='text-center my-3'>Crate New Department</h3>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card mt-3 col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
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

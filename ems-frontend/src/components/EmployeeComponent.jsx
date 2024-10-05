import React, { useEffect, useState } from 'react';
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllDepartments } from '../services/DepartmentService';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [departments, setDepartments] = useState([]);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setDepartmentId(response.data.departmentId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  useEffect(() => {
    getAllDepartments()
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function validateFrom() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      valid = false;
      errorsCopy.firstName = 'First name is required!';
    }
    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      valid = false;
      errorsCopy.lastName = 'Last name is required!';
    }
    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      valid = false;
      errorsCopy.email = 'Email address is required!';
    }
    if (departmentId) {
      errorsCopy.department = '';
    } else {
      valid = false;
      errorsCopy.department = 'Department is required!';
    }
    setErrors(errorsCopy);
    return valid;
  }

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    if (validateFrom()) {
      const employee = { firstName, lastName, email, departmentId };
      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            navigator('/employees');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            navigator('/employees');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  function pageTitle() {
    if (id) {
      return <h2 className='my-3 text-center'>Update Employee</h2>;
    }
    return <h2 className='my-3 text-center'>Add New Employee</h2>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card mt-3 col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-3'>
                <label className='form-label'>First Name</label>
                <input
                  className={`form-control ${
                    errors.firstName ? 'is-invalid' : ''
                  }`}
                  type='text'
                  value={firstName}
                  placeholder='Enter first name'
                  name='firstName'
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <div className='invalid-feedback'>{errors.firstName}</div>
                )}
              </div>
              <div className='form-group mb-3'>
                <label className='form-label'>Last Name</label>
                <input
                  className={`form-control ${
                    errors.lastName ? 'is-invalid' : ''
                  }`}
                  type='text'
                  value={lastName}
                  placeholder='Enter last name'
                  name='lastName'
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <div className='invalid-feedback'>{errors.lastName}</div>
                )}
              </div>
              <div className='form-group mb-3'>
                <label className='form-label'>Email Address</label>
                <input
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  type='email'
                  value={email}
                  placeholder='Enter email address'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email}</div>
                )}
              </div>
              <div className='form-group'>
                <label className='form-label'>Select Department</label>
                <select
                  className={`form-control ${
                    errors.department ? 'is-invalid' : ''
                  }`}
                  value={departmentId}
                  onChange={(e) => setDepartmentId(e.target.value)}
                >
                  <option value='Select Department'>Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.departmentName}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <div className='invalid-feedback'>{errors.department}</div>
                )}
              </div>
              <button
                className='btn btn-primary mt-3'
                onClick={saveOrUpdateEmployee}
              >
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

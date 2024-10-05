import React, { useEffect, useState } from 'react';
import {
  deleteDepartment,
  getAllDepartments,
} from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listOfDepartments();
  }, []);

  function listOfDepartments() {
    getAllDepartments()
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateDepartment(id) {
    navigator(`/update-department/${id}`);
  }

  function removeDepartment(id) {
    deleteDepartment(id)
      .then((response) => {
        console.log(response.data);
        listOfDepartments();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h1 className='text-center my-3'>List of Departments</h1>
      <Link to='/add-department' className='btn btn-primary mb-2'>
        Add Department
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button
                  className='btn btn-info'
                  onClick={() => updateDepartment(department.id)}
                >
                  Update
                </button>
                <button
                  className='btn btn-danger ms-2'
                  onClick={() => removeDepartment(department.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;

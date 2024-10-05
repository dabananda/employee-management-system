import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header>
      <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand mx-5'>
            Employee Management System
          </a>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <NavLink className='nav-link' to='/employees'>
                Employees
              </NavLink>
              <NavLink className='nav-link' to='/departments'>
                Departments
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

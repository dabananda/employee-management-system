# Employee Management System

## Overview
This Employee Management System is a full-stack web application built as a learning project for Spring Boot. It provides basic CRUD (Create, Read, Update, Delete) functionality for managing employees, departments, and todos within an organization.

## Features
- Employee management (list, add, edit, delete)
- Department management (list, add, edit, delete)
- Todo list functionality
- Authentication system
- Role-based access control

## Technologies Used
- Backend: Spring Boot
- Frontend: React.js
- Database: MySQL
- Styling: Bootstrap

## Prerequisites
Before you begin, ensure you have the following installed:
- Java JDK 11 or later
- Node.js and npm
- MySQL

## Setup and Installation

### Backend Setup
1. Clone the repository:
   ```
   git clone https://github.com/dabananda/employee-management-system.git
   ```
2. Navigate to the backend directory:
   ```
   cd employee-management-system/ems-backend
   ```
3. Configure the MySQL database connection in `src/main/resources/application.properties`.
4. Run the Spring Boot application:
   ```
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd employee-management-system/ems-frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server:
   ```
   npm start
   ```

## Usage
After starting both the backend and frontend servers, open your browser and navigate to `http://localhost:3000` to access the application.

## API Documentation
API documentation can be found at `http://localhost:8080/swagger-ui.html` when the backend server is running.

## Contributing
This project is primarily for learning purposes. However, if you'd like to contribute or suggest improvements, please feel free to open an issue or submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).
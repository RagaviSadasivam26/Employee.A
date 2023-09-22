# Employee Module

A simple Angular web application to manage employee information.

## Features

- **Signin Screen**:
  - Enter credentials and submit.
  - On successful login, navigate to `/dashboard`.

- **Dashboard**:
  - **Banner**: 
    - Displays "Employee Module".
    - **Logout Button**: Positioned on the top right corner.

  - **Left Section - Employee List**:
    - **Header**: "Employees".
    - **Search Bar**: To filter the employee list.
    - **Add New Button**: Navigates to `/add-employee` for adding a new employee.
    - **Employee Table**:
      - Displays list of employees from `localStorage`. // database
      - Employee ID is a clickable link that navigates to `/employee/{employeeId}`.

  - **Right Section - User Profile**:
    - Displays logged-in user's details.
    - [User details stored in a TypeScript file as JSON.]

- **Add/Edit Employee Page** (`/add-employee` or `/employee/{employeeId}`):
  - Allows user to add a new employee or edit an existing one.
  - **Details to Capture**:
    - **Employee ID**: 6-digit unique number.
    - **First Name** & **Last Name**.
    - **DOB**: Using a date control.
    - **Qualification**.
    - **Gender**: Dropdown control.
    - **Blood Group**: Selection control.
  - Save updates to `localStorage` under the employee list.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

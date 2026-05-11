# Week 6 Assignments
## Project Structure

| Directory/File | Description |
| :--- | :--- |
| `AddingUsers/` | React application focused on form handling and dynamic list updates. |
| `context-app/` | Demonstration of React Context API for global state management. |
| `userList/` | React application for fetching, searching, and displaying user data. |
| `employee/` | A full-stack MERN application (MongoDB, Express, React, Node). |

## Detailed Breakdown

### 1. React State & Lists (`AddingUsers`, `userList`)
- **State Management**: Using `useState` to manage user inputs and list data.
- **Dynamic Rendering**: Mapping through arrays to render UI components dynamically.
- **Form Handling**: Capturing and validating user data before adding to the state.

### 2. Global State Management (`context-app`)
- **Context API**: Implementing `createContext`, `Provider`, and `useContext` to avoid prop drilling.
- **Theming/Auth**: Practical examples of data sharing across nested components.

### 3. Full-Stack Integration (`employee`)
- **Backend (`employee-backend`)**:
  - Express server with Mongoose models for Employee data.
  - RESTful endpoints for CRUD operations.
  - Environment configuration using `.env`.
- **Frontend (`frontend`)**:
  - React application built with Vite.
  - Axios/Fetch integration to communicate with the backend API.
  - Responsive UI for managing employee records.

## How to Run

### React Projects (`AddingUsers`, `context-app`, `userList`)
1. Navigate to the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Full-Stack Project (`employee`)
1. **Backend**:
   ```bash
   cd employee/employee-backend
   npm install
   # Configure .env with DB_URL
   node server.js
   ```
2. **Frontend**:
   ```bash
   cd employee/frontend
   npm install
   npm run dev
   ```

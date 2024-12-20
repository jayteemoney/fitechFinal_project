
<!-- PROJECT BUILT BY:
IRMIYA JETHRO MBATA
WEB2 COHORT 1 STUDENT
TASK ASSIGNED: 15-12-2024
SUBMITTED: 21-12-2024
 -->
**Project Overview: JAYS PIZZA HUB**

This is a web application built with **React** to showcase different types of pizza. The site provides a clean and intuitive user interface with smooth navigation between three key pages: **Home**, **About Us**, and **Contact**. The navigation between pages is managed by **React Router** for a seamless single-page application (SPA) experience. 

### Key Features:
- **Home Page**: Displays a list of featured pizzas with images, descriptions, and other details.
- **About Us Page**: Provides background information about the pizza brand or business.
- **Contact Page**: Allows users to contact the business for inquiries or feedback, including a form or contact details.

The project is built using **React** and **React Router** for routing, and **Vite** is used as the build tool for faster development and optimized production builds.

---

### Instructions for Setting Up and Running the Project Locally

To set up and run this React project locally using **Vite** and **React**, follow these steps:

#### 1. **Clone the Repository** (if applicable)
   If the project is hosted on a Git repository (e.g., GitHub), start by cloning the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

#### 2. **Install Dependencies**
   Ensure you have **Node.js** and **npm** (or **yarn**) installed on your local machine. If not, install them from [nodejs.org](https://nodejs.org/).

   After cloning the project, install the required dependencies using **npm** or **yarn**:
   ```bash
   npm install
   # OR
   yarn install
   ```

#### 3. **Start the Development Server**
   Once the dependencies are installed, you can run the development server to view the project locally:
   ```bash
   npm run dev
   # OR
   yarn dev
   ```

   After running the command, the development server will start, and you can open the project in your browser by navigating to `http://localhost:5173` (default port for Vite).

#### 4. **Project Structure**
   The project's structure should look similar to this:
   ```
   /src
     /components
     /pages
     /App.jsx
     /index.jsx
   /public
     /index.html
   /vite.config.js
   package.json
   ```

#### 5. **Project Features**
   - **React Router**: Used for navigation between the **Home**, **About Us**, and **Contact** pages.
   - **Vite**: Handles fast builds and hot module reloading during development.

### Additional Notes:
- If you need to build the project for production, run:
  ```bash
  npm run build
  # OR
  yarn build
  ```
  This will generate the optimized production build in the `/dist` folder.
  
- For deploying the app, you can upload the contents of the `/dist` folder to any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

### Technologies Used in the Project

This pizza showcase web application is built using the following technologies:

#### 1. **React**
   - **Purpose**: React is used to build the user interface and manage the application’s state. It provides the foundation for creating reusable components and managing interactions in the app.
   - **Features**:
     - Component-based architecture
     - Virtual DOM for efficient rendering
     - State management using React hooks (e.g., `useState`, `useEffect`)

#### 2. **React Router**
   - **Purpose**: React Router is used for handling routing between different pages (Home, About Us, Contact) in the single-page application (SPA). It enables smooth navigation without full-page reloads.
   - **Features**:
     - Dynamic routing with URL paths
     - Declarative routing system
     - Supports nested routes and route parameters

#### 3. **Vite**
   - **Purpose**: Vite is used as the build tool and development server for the project. It ensures faster development and optimized production builds.
   - **Features**:
     - Fast Hot Module Replacement (HMR) for quicker development iterations
     - ES module support out of the box
     - Optimized production build using esbuild

#### 4. **JavaScript (ES6+)**
   - **Purpose**: JavaScript is used as the primary programming language for building the logic of the web application. Modern ES6+ features like arrow functions, classes, destructuring, and modules are used throughout the project.
   - **Features**:
     - Asynchronous code with promises and async/await
     - Module imports and exports for clean code structure

#### 5. **CSS / SCSS**
   - **Purpose**: CSS  is applied for styling the application. The styles ensure the layout is responsive, user-friendly, and visually appealing.
   - **Features**:
     - Responsive design for mobile and desktop layouts
     - Use of Flexbox or CSS Grid for layout management

#### 6. **HTML**
   - **Purpose**: HTML provides the structure of the web pages, defining elements such as headings, images, links, and forms that make up the layout of the site.
   - **Features**:
     - Semantic HTML for better accessibility
     - Responsive meta tags for mobile-first design

#### 7. **Version Control (Git)**
   - **Purpose**: Git is used for version control to track changes to the codebase, collaborate with other developers, and manage releases.
   - **Features**:
     - Branching and merging for feature development
     - Commit history for tracking changes and collaboration

#### 8. **Hosting & Deployment Platforms**
   - **Vercel** :
     - Used for deploying the project to production once the development is complete. These platforms offer free hosting for static websites, integrating with Git repositories for continuous deployment.
 in conclusion, the project tends to expand my knowledge on REACT and other prior languages. Thank you Fitech Community


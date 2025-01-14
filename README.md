# Dream Rentals
Dream Rentals is a web application for listing and booking vacation rentals built with React, Node.js, Express, MongoDB.


## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

```sh
git clone https://github.com/kushagra-garg/dream-nest-app.git
cd Dream Nest
```

2. Install dependencies for the client:
```sh
cd client
npm install
```

3. Install dependencies for the server:
```sh
cd server
npm install
```

### Configuration
1. Create a .env file in the server directory with the following content:
```sh
MONGO_URL = your_mongodb_connection_string
JWT_SECRET_KEY = your_jwt_secret_key
```

### Running the Application
1. Start the client:
```sh
cd client
npm run dev
```

2. Start the server:
```sh
cd server
node index.js
```

### Usage
Open your browser and navigate to http://localhost:3000 to access the dream rentals application.

### Features

- User registration and login with JWT-based authentication
- Profile image upload during registration
- Create, view, and manage property listings
- Search and filter properties by categories and amenities
- Responsive design for various screen sizes
- State management with Redux and Redux Persist
- Drag and drop functionality for reordering photos
- Real-time updates with page reloads on changes
- Secure data handling with bcryptjs for password hashing
- Modern UI with Material-UI and custom SCSS styles
- Express.js server with MongoDB for data storage
- RESTful API endpoints for user authentication and property listings

### Technologies Used

- React
- Redux
- Node.js
- Express
- MongoDB
- Mongoose
- Material UI

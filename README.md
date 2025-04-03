# Express Tutorial Project

This project is a tutorial for learning and building applications using the Express.js framework.

## Features

- Basic Express.js setup
- Routing examples
- Middleware usage
- Error handling
- Static file serving
- RESTful API design

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-tutorial.git
   ```
2. Navigate to the project directory:
   ```bash
   cd express_tuto_1.25.4
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
express_tuto_1.25.4/
├── public/         # Static files
├── routes/         # Application routes
├── views/          # Template files
├── app.js          # Main application file
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## Routes

### Home Routes

- **GET /**: Serves the `index.html` file.
- **POST /**: Accepts form data and responds with a message containing the submitted name and age.

### Test Routes

- **GET /api/test**: Returns a simple test message.
- **GET /api/test/:name/:age**: Returns a JSON response with the name and age provided in the URL.

### Product Routes

- **GET /api/products**: Returns a list of all products.
- **POST /api/products**: Adds a new product to the list.
- **PATCH /api/products/:name/:price**: Updates the price of a product by name.
- **DELETE /api/products/:name**: Deletes a product by name.

### User Routes

- **GET /api/users**: Returns a list of all users.
- **GET /api/users/show/:id**: Returns details of a user by ID.
- **POST /api/users/create**: Adds a new user to the list.
- **PUT /api/users/:id**: Updates a user's details by ID.
- **DELETE /api/users/:id**: Deletes a user by ID.

### Category Routes

- **GET /api/categories**: Returns a list of all categories.
- **GET /api/categories/:id**: Returns details of a category by ID.
- **POST /api/categories**: Adds a new category to the list.
- **PATCH /api/categories/:id/:name**: Updates the name of a category by ID.
- **DELETE /api/categories/:id**: Deletes a category by ID.

## Dependencies

- **Express.js**: Web framework for Node.js
- **Nodemon**: Development tool for auto-restarting the server
- **Body-parser**: Middleware for parsing request bodies

## Development

To modify the project:

- Edit the files in the `routes` folder for route logic.
- Edit the files in the `views` folder for HTML content.
- The main application logic is in `app.js`.

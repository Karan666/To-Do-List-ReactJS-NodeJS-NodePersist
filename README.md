# To-Do-List-ReactJS-NodeJS-NodePersist

This is a simple To-Do List application built using React.js for the frontend and Express.js for the backend. The application allows users to add and delete items from the list.

## Features

- View the list of existing To-Do items.
- Add new items to the To-Do list.
- Delete items from the To-Do list.

## Technologies used

### Frontend

- React.js
- JavaScript

### Backend

- Express.js
- Node.js
- node-persist for data persistence

## Installation

- Install the backend dependencies using the following command in the command prompt of windows, using gitbash or any other terminal for any respective operating system -

```bash
cd BackEnd
```

```bash
npm install
```

- Install the frontend dependencies using the following command in the command prompt of windows, using gitbash or any other terminal for any respective operating system -

```bash
cd FrontEnd
```

```bash
npm install
```

## Usage

1. Start the backend server
   
```bash   
cd BackEnd
```

```bash
nodemon server.js
```
  
2. Start the frontend application

```bash
cd FrontEnd
```

```bash
npm start
```

The frontend application will be accessible at http://localhost:3000.

3. Use the application in your browser. Open http://localhost:3000 in your web browser to access the To-Do List application. You can add new items by typing in the input field and clicking the "Add" button. To delete an item, click the "Delete" button next to the item you want to remove.

## API Endpoints

- GET /: Get the list of all To-Do items.
- POST /: Add a new item to the To-Do list.
- DELETE /:id: Delete a To-Do item by its ID.

## Cleanup

When the server is shut down (with CTRL+C), the application will clear all data
stored in the backend.

## Author

Karan Keshab Shrees

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

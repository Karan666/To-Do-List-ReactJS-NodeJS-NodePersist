import express from "express"; // Imports the Express module
import storage from "node-persist"; // Imports the node-persist module for data storage
import bodyParser from "body-parser"; // Imports the body-parser module for parsing request bodies
import cors from "cors"; // Imports the CORS module for enabling Cross-Origin Resource Sharing

const app = express();//Creates an Express application
const port = 3002;

app.use(cors());// Enables CORS middleware to allow cross-origin requests

const jsonParser = bodyParser.json();// // Middleware to parse JSON in request body

// Graceful shutdown on SIGINT (e.g., CTRL+C)
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  process.exit(0);
});

// Route: GET / - Returns all To-Do items
app.get("/", async (req, res) => {
  const items = await storage.values(); // Fetch all To-Do items from the storage
  res.json(items); // Respond with the To-Do items in JSON format
});

// Route: POST / - Adds a new To-Do item
app.post("/", jsonParser, async (req, res) => {
    const { text } = req.body; // Extracts the "text" property from the request body
    console.log("Received data: ", text); // Logs the received data
    const newItem = { id: Date.now(), text }; // Creates a new To-Do item with a unique ID and the provided text
    await storage.setItem(String(newItem.id), newItem); // Stores the new item in the storage with its ID as the key
    res.send("Added note successfully!!"); // Responds with a success message
  });

// Route: DELETE /:id - Deletes a To-Do item by ID
app.delete("/:id", async (req, res) => {
    const { id } = req.params; // Extracts the "id" parameter from the request URL
    console.log("Deleted data ID: ", id); // Logs the ID of the item to be deleted
    await storage.removeItem(id); // Removes the item with the specified ID from the storage
    res.send("Deleted note successfully!!"); // Responds with a success message
  });  

// Starts the server and initialize storage  
app.listen(port, async () => {
  try {
    await storage.init(); // Initializes the storage to persist data
    await storage.clear(); // Clears any existing data in storage on server start
    console.log('Data cleared.');
  } catch (err) {
    console.error('Error while clearing data: ', err);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
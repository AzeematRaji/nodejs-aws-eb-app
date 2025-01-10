import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';


  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );

  // filteredimage endpoint
  app.get("/filteredimage", async (req, res) => {
    const { image_url } = req.query;

    // 1. Validate the image_url query
    if (!image_url) {
      return res.status(400).send({ message: "Image URL is required." });
    }

    try {
        // 2. Call filterImageFromURL(image_url) to filter the image
        const filteredPath = await filterImageFromURL(image_url);

        // 3. Send the resulting file in the response
        res.status(200).sendFile(filteredPath, (err) => {
          if (err) {
            console.error("Error sending file:", err);
            return res.status(500).send({ message: "Could not send the file." });
          }

          // 4. Delete any files on the server after the response
        deleteLocalFiles([filteredPath]);
        });
    } catch (error) {
      console.error("Error processing image:", error);
      return res.status(500).send({ message: "Failed to process the image." });
    }
  });
  
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
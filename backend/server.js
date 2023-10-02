const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const cors = require('cors');
require('dotenv').config()
const API_KEY = process.env.API_KEY

app.use(cors());
app.use(express.static('public'))

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')))


//make GET request to browse endpoint, extract only 3 for now
app.get('/asteroids', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`   
      )
    const asteroids = response.data.near_earth_objects.slice(0, 3)
    res.json(asteroids) // now localhost:3000/asteroids will display their JSON
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .send('Error occurred while fetching data from NASA API', error)
  }
});

// Catch-all route, will direct any invalid routes back to landing page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

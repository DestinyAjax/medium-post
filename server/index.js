const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

// const index = require('./routes/index');
// const tasks = require('./routes/tasks');

const port  = process.env.PORT || 5000;
const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://destinyajax:welcome007@ds135700.mlab.com:35700/medium"

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'destinyajax3000',
    api_key: '598116344457674',
    api_secret: 'Ygi5G9JG8SK3_4N6vUwrtvhgDoc'
});

/** connect to MongoDB datastore */
var options = { keepAlive: 300000, connectTimeoutMS: 30000, useNewUrlParser: true};
try {
    mongoose.connect(url, options);  
} catch (error) {
    
}

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api', router)

//set static folder
app.use(express.static(path.join(__dirname, '../client')));

//set server and port
app.listen(port, () => {
	console.log('Server running on port ' + port);
});
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error_handler');
const cloudinary = require('cloudinary');

const port  = process.env.PORT || 5000;
const app = express();
const router = express.Router();

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'destinyajax3000',
    api_key:    '598116344457674',
    api_secret: 'Ygi5G9JG8SK3_4N6vUwrtvhgDoc'
});

/** set up middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet())

/** set up routes {API Endpoints} */
app.use('/api', router)
app.use('/api', require('./routes/logs'))
app.use('/api', require('./routes/article'))
app.use('/api', require('./routes/user'))

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);

//set static folder
app.use(express.static(path.join(__dirname, '../client')));

//set server and port
app.listen(port, () => {
	console.log('Server running on port ' + port);
});
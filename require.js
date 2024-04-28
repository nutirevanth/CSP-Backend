const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Students = require('./Routes/student');
const Teachers = require('./Routes/teacher');
const Pesticide = require('./Routes/pesticide');
const Teacher1 = require('./Routes/teacher1');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/Students', Students);
app.use('/Teachers', Teachers);
app.use('/Pesticide',Pesticide);
app.use('/Teacher1',Teacher1);





module.exports = app;
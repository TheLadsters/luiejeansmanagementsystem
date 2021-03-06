const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const luiejeansRouter = require('./routes/luiejeans');
const usersRouter = require('./routes/users'); 
const customersRouter = require('./routes/customers');
const landingPageRouter = require('./routes/landingPage');

app.use('/luiejeans', luiejeansRouter);
app.use('/users', usersRouter);
app.use('/customers', customersRouter);
app.use('/landing-page', landingPageRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
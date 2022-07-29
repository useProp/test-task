require('dotenv/config');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const router = require('./routers/index');
const HTTP_ERRORS = require("./errors/errors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// routes
app.use('/api', router)

// errors
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(+err?.status || HTTP_ERRORS.INTERNAL)
    .json({ message: err?.message || 'Internal server error' })
})



const bootstrap = () => {
  app.listen(process.env.APP_PORT, () => {
    console.log(`App running on port ${process.env.APP_PORT}...`)
  })
}

bootstrap();

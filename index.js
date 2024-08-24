const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const schoolRoutes = require('./routes/schoolRoutes')




const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api' , schoolRoutes);

app.use((err,req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
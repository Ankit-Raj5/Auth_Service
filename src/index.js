const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');


// const UserService = require('./services/user-service');
 
const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on PORT : ${PORT}`);

        //const service = new UserService();
        // const newToken = service.createToken({email: 'admin@gmail.com',id : 1});
        // console.log("new token is ",newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MjAxMTc5NDksImV4cCI6MTcyMDExNzk3OX0.Lpfo_IBc42DpYF5iH6CvaMbULvggy1qtArbfFVplwmE';
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer(); 
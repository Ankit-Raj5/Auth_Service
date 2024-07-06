const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');
//const {User, Role} = require('./models/index');


// const UserService = require('./services/user-service');
 
const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on PORT : ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }

        //' const u1 = await User.findByPk(4);
        // const r1 = await Role.findByPk(1);
        // //u1.addRole(r1);
        // const response = await u1.hasRole(r1);
        // console.log(response);'

        //const service = new UserService();
        // const newToken = service.createToken({email: 'admin@gmail.com',id : 1});
        // console.log("new token is ",newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MjAxMTc5NDksImV4cCI6MTcyMDExNzk3OX0.Lpfo_IBc42DpYF5iH6CvaMbULvggy1qtArbfFVplwmE';
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer(); 
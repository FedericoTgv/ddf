

const express = require("express");
const res = require("express/lib/response");
const bodyParser = require('body-parser')

const TrainerController = require('./controllers/trainer.js');
const trainerController = new TrainerController;

const CustomersController = require('./controllers/customer.js');
const customersController = new CustomersController;

const CalculationManager = require('./controllers/calculationManager.js');
const calculationManager = new CalculationManager;

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const cors = require('cors');
app.use(cors());


app.get('/', (request,response) =>{
    calculationManager.test();
    response.send(calculationManager.test());
});



app.get('/trainers', (request,response) =>{
    response.send(trainerController.getTrainers());    
});

app.post('/trainers', (request,response) =>{
    trainerController.setTrainers(request.body)
    calculationManager.assignCustomers(trainerController,customersController);
    response.send(trainerController.getTrainers());    
});

app.get('/customers', (request,response) =>{
    response.send(customersController.getCustomers());    
});




app.listen(4000,  () => {
    console.log("server started at port 4000")
});
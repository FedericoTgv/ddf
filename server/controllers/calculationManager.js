class CalculationManager {

    // assignCustomers(trainerController,customersController){
    //     let trainers = [...trainerController.getTrainers()];
    //     let customers = customersController.getCustomers();
        
    //     trainers.sort(( current, previous ) =>{
    //             if ( current.score > previous.score ){
    //                 return -1;
    //             }
    //             if ( current.score < previous.score ){
    //                 return 1;
    //             }
    //             return 0;
    //         }
    //       )
        
    //     trainers.forEach(trainer => {                        
    //         while (trainer.customers.length < trainer.maxPlaces) {
    //             let customer = this.getMaxCustomer(customers);
    //             customer.assigned = true;
    //             trainer.customers.push(customer);
    //         }
    //     });
         
    //     trainerController.setTrainers(trainers);                
    // }

    // getMaxCustomer(customers){
    //     let maxCustomer = customers.reduce((previous, current) => {
    //         if(!current.assigned){
    //             return previous.trainerScoreImp > current.trainerScoreImp ? previous : current;
    //         }else{
    //             if(!previous.assigned){
    //                 return previous;
    //             }else if(!current.assigned){
    //                 return current;
    //             }else{
    //                 return -1;
    //             }                
    //         }         
    //     });  
    //     return maxCustomer;
    // }
    assignCustomers(trainerController,customersController){

            let trainers = trainerController.getTrainers();
            let customers = customersController.getCustomers();
           
            this.resetCustomersAssignment(trainers,customers);            
            trainers.forEach(trainer => {                                
                while (trainer.customers.length < trainer.maxPlaces) {                
                    let maxCustomer;
                    maxCustomer = this.getMaxCustomerForTrainer(trainer,customers);
                    let maxTrainerForCustomer = this.getMaxTrainerForCustomer(maxCustomer,trainers);
                    if(maxTrainerForCustomer === trainer){
                        trainer.customers.push(maxCustomer);
                        maxCustomer.assigned = true;
                    }else{
                        maxTrainerForCustomer.customers.push(maxCustomer);
                        maxCustomer.assigned = true;
                    }
                }                   
            });

            trainerController.setTrainers(trainers);  
            
    }

    getMaxCustomerForTrainer(trainer,customers){
        console.log("maxCustomer");
        console.log(customers);
        let maxSatisfaction = 0;
        let maxCustomer;
        customers.forEach(customer => {
            if(!customer.assigned && !customer.assigned == true){
                let partialSatisfaction = parseFloat(customer.trainerScoreImp) * parseFloat(trainer.score);
                if(partialSatisfaction > maxSatisfaction){
                    maxSatisfaction = partialSatisfaction;
                    maxCustomer = customer;
                    maxCustomer.satisfaction = maxSatisfaction;
                }
            }
        });
        return maxCustomer;
    }

    getMaxTrainerForCustomer(customer,trainers){
        console.log("MaxTrainer");
        console.log(customer);
        let maxSatisfaction = 0;
        let maxTrainer;
        trainers.forEach(trainer => {
            if(trainer.customers.length < trainer.maxPlaces){
                let partialSatisfaction = parseFloat(customer.trainerScoreImp) * parseFloat(trainer.score);
                if(partialSatisfaction > maxSatisfaction){
                    maxSatisfaction = partialSatisfaction;
                    maxTrainer = trainer;
                }
            }
        });
        return maxTrainer;
    }

    resetCustomersAssignment(trainers,customers){
        trainers.forEach(trainer=>{
            trainer.customers.splice(0, trainer.customers.length);
        });    
        customers.forEach(customer=>{
            customer.assigned = false;
        });
    }

    // test(){
    //     const TrainerController = require('./trainer.js');
    //     const trainerController = new TrainerController;

    //     const CustomersController = require('./customer.js');
    //     const customersController = new CustomersController;
    //     let trainers = [...trainerController.getTrainers()];
    //     let customers = [...customersController.getCustomers()];
        
    //     for (let i = 0; i < customers.length; i++) {        
    //         console.log("CALC: "+i);         
    //         this.testCalc(trainers,customers,i);

    //     }
        
    // }

    // testCalc(trainers,customers,customerIndex){
    //     for (let i = 0; i < trainers.length; i++) {        
    //         while (trainers[i].customers.length < trainers[i].maxPlaces) {                        
    //             trainers[i].customers.push(customers[customerIndex++]);
                
    //         }
    //         console.log(trainers[i]);
    //     };
    // }
}

module.exports= CalculationManager;
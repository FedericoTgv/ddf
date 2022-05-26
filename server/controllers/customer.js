class CustomersController {
    customers = [];

    constructor(){
        this.customers.push(

        {
            name: 'q',
            trainerScoreImp: 2.6,  
            assigned: false      
        },
        {
            name: 'r',
            trainerScoreImp: 3.7,  
            assigned: false            
        },
        {
            name: 's',
            trainerScoreImp: 8.5,  
            assigned: false          
        },
        {
            name: 't',
            trainerScoreImp: 9.7,  
            assigned: false            
        },
        {
            name: 'u',
            trainerScoreImp: 2.6,  
            assigned: false           
        },
        {
            name: 'v',
            trainerScoreImp: 4.7,  
            assigned: false            
        },
        {
            name: 'w',
            trainerScoreImp: 5.6,  
            assigned: false           
        },
        {
            name: 'x',
            trainerScoreImp: 3.7,  
            assigned: false
        },
        {
            name: 'y',
            trainerScoreImp: 8.1,  
            assigned: false          
        },
        {
            name: 'z',
            trainerScoreImp: 2.5,  
            assigned: false
        }
        );
    }

    getCustomers(){
        return this.customers;
    }

    setCustomers(customers){
        this.customers = customers;
    }
}

module.exports= CustomersController;
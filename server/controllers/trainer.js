class TrainersController {
    trainers = [];

    constructor(){
        this.trainers.push(

        {
            name: 'A',
            score: 4.5,
            maxPlaces: 1,
            customers: []
            // customers: [
            //     {
            //         name: 'q',
            //         trainerScoreImp: 2.6,
            //     }
            // ]
        },
        {
            name: 'B',
            score: 3.2,
            maxPlaces: 4,
            customers: []
            // customers: [
            //     {
            //         name: 'r',
            //         trainerScoreImp: 3.7            
            //     },
            //     {
            //         name: 's',
            //         trainerScoreImp: 8.5            
            //     },
            //     {
            //         name: 't',
            //         trainerScoreImp: 9.7            
            //     },
            //     {
            //         name: 'u',
            //         trainerScoreImp: 2.6           
            //     }
            // ]
        },
        {
            name: 'C',
            score: 1.2,
            maxPlaces: 3,
            customers: []
            // customers: [
            //     {
            //         name: 'v',
            //         trainerScoreImp: 4.7            
            //     },
            //     {
            //         name: 'w',
            //         trainerScoreImp: 5.6           
            //     },
            //     {
            //         name: 'x',
            //         trainerScoreImp: 3.7
            //     }
            // ]
        },
        {
            name: 'D',
            score: 3.4,
            maxPlaces: 2,
            customers: []
            // customers: [
            //     {
            //         name: 'y',
            //         trainerScoreImp: 8.1          
            //     },
            //     {
            //         name: 'z',
            //         trainerScoreImp: 2.5
            //     }
            // ]
        }
        );
    }

    getTrainers(){
        return this.trainers;
    }

    setTrainers(trainers){
        this.trainers = trainers;
    }
}

module.exports= TrainersController;
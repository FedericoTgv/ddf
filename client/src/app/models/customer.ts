export class Customer{
    name: string;
    trainerScoreImp: number;    
    satisfaction:number;

    constructor(name: string,trainerScoreImp: number,satisfaction:number){
        this.name = name;
        this.trainerScoreImp = trainerScoreImp;  
        this.satisfaction = satisfaction;     
         
    }
}
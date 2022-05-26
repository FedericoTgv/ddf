import { Customer } from "./customer";

export class Trainer{
    name: string;
    score: number;
    maxPlaces : number;
    customers:Customer[];

    constructor(name: string,score: number,maxPlaces: number){
        this.name = name;
        this.score = score;
        this.maxPlaces = maxPlaces;
        this.customers =[];
    }

    getCustomers():Customer[]{
        return this.customers;
    }
    setCustomers(customers:Customer[]){
        this.customers = customers;
    }
}
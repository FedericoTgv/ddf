class Trainer{
    name: string;
    score: number;
    maxPlaces: number;

    constructor(name: string, score: number,maxPlaces: number){
        this.name = name;
        this.score = score;
        this.maxPlaces = maxPlaces;
    }    

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getScore(): number {
        return this.score;
    }
    
    public setScore(score: number): void {
        this.score = score;
    }

    public getMaxPlaces(): number {
        return this.maxPlaces;
    }
    
    public setMaxPlaces(maxPlaces: number): void {
        this.maxPlaces = maxPlaces;
    }
}
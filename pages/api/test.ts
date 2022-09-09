import { Client, Message } from "discord.js"

export class test{
    private testString: string;
    
    constructor(testString: string) {
        this.testString = testString;
    }

    public testFunc(){
        console.log(this.testString);
    }

    public botTestMessage(token: string, content: string){
        
    }
}
import {Client, Message} from "discord.js";
export class Bot {
    constructor(token: string){
        const client = new Client({
            intents: []
        });

        client.once("ready", () => {
            console.log(client.user?.username);
        })

        client.on("messageCreate", (message) => {
            if (message.content == "!test"){
                message.reply("lol");
            }
        })

        client.login(token);
    }
    
}

class discordApiCall {
    constructor() {};
}

class webhook {
    private id: string;
    private token: string;
    constructor(webhookLink: string){
        let link: string[] = webhookLink.split("/");
        this.id = link[5];
        this.token = link[6];
    }

    public delete(){

    }
}

export default discordApiCall;
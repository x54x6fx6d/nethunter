function Price(item: string){
    if (item == "kiddions"){
        return "FREE";
    } else if (item == "nethunter"){
        return "40€";
    } else if (item == "anubis"){
        return "10€";
    } else {
        return "Error: Could not find a price!";
    }
}

export default Price;
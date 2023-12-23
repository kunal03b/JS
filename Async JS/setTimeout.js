function order(call_production){
    console.log("Order recieved");
    setTimeout(call_production,3000);
}

function production(call_delivery){
    console.log("Production started");
    setTimeout(call_delivery, 2000)
}

function delivery(){
    console.log("Order delivered");
}

order(() => production(delivery))
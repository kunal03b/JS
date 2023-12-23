let is_shop_open = true;

function order(time, work){
    return new Promise( (resolve, reject) => {
        if(is_shop_open){
            setTimeout( () => {
                resolve(work());
            },time);
        }else{
            reject(console.log("Fuck you ! We're not gonna take your order.🖕"))
        }
    })
}

order(2000, () => console.log("order done"))

.then(() => {
    return order(0, () => console.log("Production has started"))
})

.then(() => {
    return order(1, () => console.log("Ice cream is ready"))
})

// and so on....then .then .then.........
// this is called promise chaining
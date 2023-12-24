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
.catch(() => {
    setTimeout(() => {
        console.log("Customer left")
    }, 2000)
})

.finally(() => {
    setTimeout(()=>console.log("🫡"),4000)
})

// allSetteled function  ....is used to check wheather the promise is fulfilled or rejected
let promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve,3000)})

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(reject,4000)})

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(resolve,3000)})

Promise.allSettled([promiseOne,promiseTwo,promiseThree]).then(data => console.log(data))
.catch(error => console.log('something went wrong',error))
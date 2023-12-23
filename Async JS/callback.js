let stocks = {
    Fruits : ["Strawberry", "Banana", "Apple", "Grapes"],
    liquid : ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolates", "peanuts"]
}

function order(Fruit_name, call_production) {
    setTimeout(() => {
        console.log(`selected fruit is => ${stocks.Fruits[Fruit_name]}`)
        call_production()
    },2000);
}

function production(Liquid_name, holder_selected, topping_name) {
    setTimeout(() => {
        console.log("Production has started...")

        setTimeout(() => {
            console.log("The fruit has been chopped!")

            setTimeout(() => {
                console.log(`${stocks.liquid[Liquid_name]} is added to the Ice Cream`)

                setTimeout(() => {
                    console.log("Machine has been started...")


                    setTimeout(() => {
                        console.log(`holder selected is => ${stocks.holder[holder_selected]}`)

                        setTimeout(() => {
                            console.log(`the Ice Cream is of topping => ${stocks.toppings[topping_name]}`)

                            setTimeout(() => {
                                console.log("Your Ice cream is ready...")
                            },3000)
                        },3000)
                    },2000)
                }, 1000)
            }, 1000)
        },2000)
    }, 500)
    // Liquid_name()
}
order(1, () => production(1,1,1));

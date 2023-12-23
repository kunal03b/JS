function one(call_two, call_three){
    console.log("this is STEP 1");
    call_two()
    call_three()
}

function two(){
    console.log("this is STEP 2");
}

function three(){
    console.log("this is STEP 3");
}
one(three, two)
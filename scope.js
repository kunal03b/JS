function f1(){
    let say = "Hi! I am from function f1";
    console.log(say);

    function f2(){
        let print2 = "Hi! I am from function f2";
    }
    // console.log(print2)
    f2()
}
f1();
say = "Hi i am from Global scope";
console.log(say);

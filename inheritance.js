class Person{
    talk(){
        console.log("Talking...");
    }
}

const me = new Person();
const you = new Person();

me.talk();
you.talk();

// or we can also do inheritance as
function student(){}
student.prototype.speak = function(){
    console.log("Speaking...");
}
const st1 = new student();
st1.speak();

// constructor function
function person(name, age){
    this.name = name;
    this.age = age;
}

const p1 = new person("John", 25);
console.log(p1)

// object inheritance
const prsn = {
    say(){
        console.log("I am a person");
    }
}
const he = Object.create(prsn);
he.say();

// another way
const she = {}
Object.setPrototypeOf(she,prsn);
she.say();
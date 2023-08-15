function student(name,rollNo){
    this.Name = name;
    this.rollNo = rollNo;
}
student.prototype

let s1 = new student('Kunal',11212534)
let s2 = new student('Sushant',11212531)

student.prototype.display = function(){
    return this.Name + ' ' + this.RollNo
}

s1.display();
s2.display()
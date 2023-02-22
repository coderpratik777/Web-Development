class Person{

    name:string;
    age:number;

    constructor(name:string,age?:number){
        this.name=name;
        this.age=age;
    }

    info (){
        console.log(this.name,this.age);
    }
}

let p1:Person=new Person("Pratik",23);
p1.info();
let p2:Person=new Person("sarthak");
p2.info();
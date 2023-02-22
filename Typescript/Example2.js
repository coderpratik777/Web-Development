var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.info = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
var p1 = new Person("Pratik", 23);
p1.info();
var p2 = new Person("sarthak");
p2.info();

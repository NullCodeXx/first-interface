var Ninja = /** @class */ (function () {
    function Ninja() {
    }
    Ninja.prototype.attack = function (f) { };
    ;
    Ninja.prototype.defend = function (f) { };
    Ninja.prototype.heal = function (f) { };
    Ninja.prototype.throw = function (f) { };
    Ninja.prototype.jump = function (f) { };
    return Ninja;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () { };
    ;
    Person.prototype.move = function () { };
    ;
    return Person;
}());
// Creation du Ninja et de Person.
var n = new Ninja();
var p = new Person();
// Variable typé = ninja. 
var test1 = n;
//si souligner rouge = mauvais.
var test2 = p;
//# sourceMappingURL=main.js.map
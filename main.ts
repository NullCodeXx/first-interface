
//Crée une interface.
interface  Fighter {
    attack(Fighter)
    defend(Fighter)
    heal(Fighter)
}

class Ninja {
    attack (f : Fighter) {};
    defend(f : Fighter) {}
    heal(f : Fighter) {}
    throw(f : Fighter) {}
    jump(f : Fighter) {}
}

class Person {
    eat() {};
    move() {};
}

// Creation du Ninja et de Person.
let n = new Ninja();
let p = new Person();

// Variable typé = ninja.
let f:Fighter = n;
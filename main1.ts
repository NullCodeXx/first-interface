class Arbres {
    height: number;
    species: string;
    color: string;
    age: number;
    constructor(height: number, species : string, color: string, age: number) {
        this.height = height;
        this.species = species;
        this.color = color;
        this.age = age; 
    }
    render() {
        //Affichage change en function du type d'arbre.
        let emoji = this.species;
        if(this.species == "Arbre Feuillu") {
            emoji = "🌳";
        }else if (this.species == "Sapin") {
            emoji = "🌲";
        }else  if (this.species == "pomme") {
            emoji = "🍎";
        }
        console.log(emoji + " " + this.height + "meters" + this.color);
    }
}


let spruce = new Arbres(10, "Arbre Feuillu", "vert", 103);

console.log(spruce);
console.log("🌳");


//Crée un tableau d'arbre

let arbres: Arbres[] = [];

arbres.push(new Arbres(1, "Arbre1", "Vert lime", 100));
console.log(arbres);
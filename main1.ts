// Inplement cette methode capable d'afficher.
interface Renderfunc {
    render();
}

class Pays {
    height: number;
    pays: string;
    color: string;
    puissance: number;
    emoji: string;

    constructor(height: number, pays : string, color: string, puissance: number,emoji: string) {
        this.height = height;
        this.pays = pays;
        this.color = color;
        this.puissance = puissance; 
        this.emoji = emoji;
    }
    render() {
        //Affichage change en function du type d'état du monde.
        let emoji = this.pays;
        if(this.pays == "FRANCE") {
            emoji = "🇫🇷";
        }else if (this.pays == "Allemagne") {
            emoji = "🇹🇩";
        }else  if (this.pays == "Brésil") {
            emoji = "🇧🇷";
        }
        console.log(emoji + this.pays + this.height + this.puissance + this.color );
    }
}

let pays = new Pays(1, "France", "Bleu Blanc Rouge", 90, "🇫🇷");

//Crée un tableau d'arbre qui va etre implémenter dans interface.
let objects: Renderfunc[] = []; //Renderfunc = que tout les object ont une method render.

objects.push(new Pays(1, "pays1", "France", 10, "😀"));
objects.push(new Pays(2, "pays2", "Allemagne", 20, "🇹🇩"));
objects.push(new Pays(3, "pays3", "Argentine", 30, "🇳🇮"));
objects.push(new Pays(4, "pays4", "Brésil", 40, "🇧🇷"));
console.log(objects);

for (let o of objects) {
    o.render();
}

console.log(p);
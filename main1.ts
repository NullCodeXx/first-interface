// Inplement cette methode capable d'afficher.
interface Renderfunc {
    render();
}

class Pays implements Renderfunc{
    height: number;
    pays: string;
    color: string;
    puissance: number;

    constructor(height: number, pays : string, color: string, puissance: number) {
        this.height = height;
        this.pays = pays;
        this.color = color;
        this.puissance = puissance; 
    }
    render() {
        //Affichage change en function du type d'état du monde.
        let emoji = this.pays;
        if(this.pays === "France") {
            emoji = "😎";
        }else if (this.pays === "Allemagne") {
            emoji = "😤";
        }else  if (this.pays === "Brésil") {
            emoji = "👨‍✈️";
        }
        console.log(emoji + this.color + this.puissance);
    }
}

//Crée un tableau de pays qui va etre implémenter dans interface.
let objects: Renderfunc[] = []; //Renderfunc = que tout les object ont une method render.

objects.push(new Pays(1, "France" , "color1" , 10));
objects.push(new Pays(2, "Allemagne" , "color2", 20));
objects.push(new Pays(3, "Argentine" , "color3", 30));
objects.push(new Pays(4, "Brésil" , "color4", 40));
//console.log(objects);

for (let o of objects) {
    o.render();
}
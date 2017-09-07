var Arbres = /** @class */ (function () {
    function Arbres(height, species, color, age) {
        this.height = height;
        this.species = species;
        this.color = color;
        this.age = age;
    }
    Arbres.prototype.render = function () {
        //Affichage change en function du type d'arbre.
        var emoji = this.species;
        if (this.species == "Arbre Feuillu") {
            emoji = "🌳";
        }
        else if (this.species == "Sapin") {
            emoji = "🌲";
        }
        else if (this.species == "pomme") {
            emoji = "🍎";
        }
        console.log(emoji + " " + this.height + "meters" + this.color);
    };
    return Arbres;
}());
var spruce = new Arbres(10, "Arbre Feuillu", "vert", 103);
console.log(spruce);
console.log("🌳");
//Crée un tableau d'arbre
var arbres = [];
arbres.push(new Arbres(1, "Arbre1", "Vert lime", 100));
console.log(arbres);
//# sourceMappingURL=main1.js.map
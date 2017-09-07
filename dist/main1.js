var Pays = /** @class */ (function () {
    function Pays(height, pays, color, puissance, emoji) {
        this.height = height;
        this.pays = pays;
        this.color = color;
        this.puissance = puissance;
        this.emoji = emoji;
    }
    Pays.prototype.render = function () {
        //Affichage change en function du type d'état du monde.
        var emoji = this.pays;
        if (this.pays == "FRANCE") {
            emoji = "🇫🇷";
        }
        else if (this.pays == "Allemagne") {
            emoji = "🇹🇩";
        }
        else if (this.pays == "Brésil") {
            emoji = "🇧🇷";
        }
        console.log(emoji + this.pays + this.height + this.puissance + this.color);
    };
    return Pays;
}());
var pays = new Pays(1, "France", "Bleu Blanc Rouge", 90, "🇫🇷");
//Crée un tableau d'arbre qui va etre implémenter dans interface.
var objects = []; //Renderfunc = que tout les object ont une method render.
objects.push(new Pays(1, "pays1", "France", 10, "😀"));
objects.push(new Pays(2, "pays2", "Allemagne", 20, "🇹🇩"));
objects.push(new Pays(3, "pays3", "Argentine", 30, "🇳🇮"));
objects.push(new Pays(4, "pays4", "Brésil", 40, "🇧🇷"));
console.log(objects);
for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
    var o = objects_1[_i];
    o.render();
}
console.log(p);
//# sourceMappingURL=main1.js.map
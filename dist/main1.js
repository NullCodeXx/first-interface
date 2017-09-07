var Pays = /** @class */ (function () {
    function Pays(height, pays, color, puissance) {
        this.height = height;
        this.pays = pays;
        this.color = color;
        this.puissance = puissance;
    }
    Pays.prototype.render = function () {
        //Affichage change en function du type d'état du monde.
        var emoji = this.pays;
        if (this.pays === "France") {
            emoji = "😎";
        }
        else if (this.pays === "Allemagne") {
            emoji = "😤";
        }
        else if (this.pays === "Brésil") {
            emoji = "👨‍✈️";
        }
        console.log(emoji + this.color + this.puissance);
    };
    return Pays;
}());
//Crée un tableau de pays qui va etre implémenter dans interface.
var objects = []; //Renderfunc = que tout les object ont une method render.
objects.push(new Pays(1, "France", "color1", 10));
objects.push(new Pays(2, "Allemagne", "color2", 20));
objects.push(new Pays(3, "Argentine", "color3", 30));
objects.push(new Pays(4, "Brésil", "color4", 40));
//console.log(objects);
for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
    var o = objects_1[_i];
    o.render();
}
//# sourceMappingURL=main1.js.map
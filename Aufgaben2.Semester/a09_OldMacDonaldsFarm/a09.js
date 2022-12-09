/*
Aufgabe: 09.1
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 10.12.2022
Quellen: EIA-Videos Lektion 09, Bastian Aberle
*/
var a09OldMcdonalds;
(function (a09OldMcdonalds) {
    window.addEventListener("load", handleload);
    let amountHay = 600;
    let amountCarots = 40;
    let amountMeat = 15;
    let amountFish = 10;
    let amountCorn = 200;
    class Animal {
        name;
        species;
        food;
        amount;
        sound;
        sounds;
        constructor(_name, _species, _food, _amount, _sound, _sounds) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
            this.sounds = _sounds;
        }
        sing() {
            let output = document.getElementById("divoutput");
            let newDiv = document.createElement("div");
            newDiv.id = "divsong";
            newDiv.innerHTML = "<br>" + this.name + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>"
                + "Ee i ee i o" + "<br>"
                + "And on his farm he had some " + this.species + "<br>"
                + "With a " + this.sounds + " here" + "<br>"
                + "And a " + this.sounds + " there" + "<br>"
                + "Here a " + this.sound + "<br>"
                + " there a " + this.sound + "<br>"
                + "Everywhere a " + this.sounds + "<br>" + "<br>";
            output.appendChild(newDiv);
        }
        eat() {
            if (this.species == "cows") {
                console.log("eat");
                amountHay = amountHay - this.amount;
                let output = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountHay + " hay: left over" + "<br>" + "<br>" + "<br>";
                output.appendChild(newDiv);
            }
            if (this.species == "horses") {
                amountCarots = amountCarots - this.amount;
                let output = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountCarots + " carots: left over" + "<br>" + "<br>" + "<br>";
                output.appendChild(newDiv);
            }
            if (this.species == "dogs") {
                amountMeat = amountMeat - this.amount;
                let output = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountMeat + " meats: left over" + "<br>" + "<br>" + "<br>";
                output.appendChild(newDiv);
            }
            if (this.species == "cats") {
                amountFish = amountFish - this.amount;
                let output = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountFish + " fish: left over" + "<br>" + "<br>" + "<br>";
                output.appendChild(newDiv);
            }
            if (this.species == "pigs") {
                amountCorn = amountCorn - this.amount;
                let output = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountCorn + " corn: left over" + "<br>" + "<br>" + "<br>";
                output.appendChild(newDiv);
            }
        }
    }
    let animal1 = new Animal("Rudolph", "cows", "hay", 20, "moo", "moo-moo");
    let animal2 = new Animal("Donner", "horses", "carots", 4, "wieher", "wieh-wieh");
    let animal3 = new Animal("Blitz", "dogs", "meat", 3, "woof", "woof-woof");
    let animal4 = new Animal("Comet", "cats", "fish", 2, "miau", "miau-miau");
    let animal5 = new Animal("Cupid", "pigs", "corn", 10, "oink", "oink-oink");
    function handleload() {
        animal1.sing();
        animal1.eat();
        animal2.sing();
        animal2.eat();
        animal3.sing();
        animal3.eat();
        animal4.sing();
        animal4.eat();
        animal5.sing();
        animal5.eat();
    }
})(a09OldMcdonalds || (a09OldMcdonalds = {}));
//# sourceMappingURL=a09.js.map
/*
Aufgabe: 09.1
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 10.12.2022
Quellen: EIA-Videos Lektion 09, W3-Schools, Bastian Aberle
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
        sound2;
        constructor(_name, _species, _food, _amount, _sound, _sound2) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
            this.sound2 = _sound2;
        }
        sing() {
            let divoutput = document.getElementById("divoutput");
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<br>" + this.name + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>"
                + "Ee i ee i o" + "<br>"
                + "And on his farm he had some " + this.species + "<br>"
                + "With a " + this.sound2 + " here" + "<br>"
                + "And a " + this.sound2 + " there" + "<br>"
                + "Here a " + this.sound + "<br>"
                + " there a " + this.sound + "<br>"
                + "Everywhere a " + this.sound2 + "<br>" + "<br>";
            divoutput.appendChild(newDiv);
        }
        eat() {
            if (this.species == "cows") {
                console.log("eat");
                amountHay = amountHay - this.amount;
                let divoutput = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountHay + " hay: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
            if (this.species == "horses") {
                amountCarots = amountCarots - this.amount;
                let divoutput = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountCarots + " carots: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
            if (this.species == "dogs") {
                amountMeat = amountMeat - this.amount;
                let divoutput = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountMeat + " meats: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
            if (this.species == "cats") {
                amountFish = amountFish - this.amount;
                let divoutput = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountFish + " fish: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
            if (this.species == "pigs") {
                amountCorn = amountCorn - this.amount;
                let divoutput = document.getElementById("divoutput");
                let newDiv = document.createElement("div");
                newDiv.innerHTML = amountCorn + " corn: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
        }
    }
    let cows = new Animal("Rudolph", "cows", "hay", 20, "moo", "moo-moo");
    let horses = new Animal("Donner", "horses", "carots", 4, "wieher", "wieh-wieh");
    let dogs = new Animal("Blitz", "dogs", "meat", 3, "woof", "woof-woof");
    let cats = new Animal("Comet", "cats", "fish", 2, "miau", "miau-miau");
    let pigs = new Animal("Cupid", "pigs", "corn", 10, "oink", "oink-oink");
    function handleload() {
        cows.sing();
        cows.eat();
        horses.sing();
        horses.eat();
        dogs.sing();
        dogs.eat();
        cats.sing();
        cats.eat();
        pigs.sing();
        pigs.eat();
    }
})(a09OldMcdonalds || (a09OldMcdonalds = {}));
//# sourceMappingURL=a09.js.map
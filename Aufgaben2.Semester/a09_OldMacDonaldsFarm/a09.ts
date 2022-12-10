/*
Aufgabe: 09.1
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 10.12.2022
Quellen: EIA-Videos Lektion 09, W3-Schools, Bastian Aberle
*/


namespace a09OldMcdonalds {

    window.addEventListener("load", handleload);

    let amountHay: number = 600;
    let amountCarots: number = 40;
    let amountMeat: number = 15;
    let amountFish: number = 10;
    let amountCorn: number = 200;

    class Animal {

        name: string;
        species: string;
        food: string;
        amount: number;
        sound: string;
        sound2: string;

        constructor(_name: string, _species: string, _food: string, _amount: number, _sound: string, _sound2: string) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
            this.sound2 = _sound2;
        }

        sing(): void {
            let divoutput: HTMLElement = document.getElementById("divoutput");
            let newDiv: HTMLDivElement = document.createElement("div");
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

        eat(): void {
            if (this.species == "cows") {
                console.log("eat");
                amountHay = amountHay - this.amount;
                let divoutput: HTMLElement = document.getElementById("divoutput");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.innerHTML = amountHay + " hay: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);

            }
            if (this.species == "horses") {
                amountCarots = amountCarots - this.amount;
                let divoutput: HTMLElement = document.getElementById("divoutput");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.innerHTML = amountCarots + " carots: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
  
            }
            if (this.species == "dogs") {
                amountMeat = amountMeat - this.amount;
                let divoutput: HTMLElement = document.getElementById("divoutput");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.innerHTML = amountMeat + " meats: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
            if (this.species == "cats") {
                amountFish = amountFish - this.amount;
                let divoutput: HTMLElement = document.getElementById("divoutput");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.innerHTML = amountFish + " fish: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
            if (this.species == "pigs") {
                amountCorn = amountCorn - this.amount;
                let divoutput: HTMLElement = document.getElementById("divoutput");
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.innerHTML = amountCorn + " corn: left over" + "<br>" + "<br>" + "<br>";
                divoutput.appendChild(newDiv);
            }
        }
    }

    let cows: Animal = new Animal("Rudolph", "cows", "hay", 20, "moo", "moo-moo");
    let horses: Animal = new Animal("Donner", "horses", "carots", 4, "wieher", "wieh-wieh");
    let dogs: Animal = new Animal("Blitz", "dogs", "meat", 3, "woof", "woof-woof");
    let cats: Animal = new Animal("Comet", "cats", "fish", 2, "miau", "miau-miau");
    let pigs: Animal = new Animal("Cupid", "pigs", "corn", 10, "oink", "oink-oink");

    function handleload(): void {
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
}
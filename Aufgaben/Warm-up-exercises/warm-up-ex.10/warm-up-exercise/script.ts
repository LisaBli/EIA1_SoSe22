
interface people{
    name: string;
    age: number;
    height: number;
    favfood: string;
    placeofresidence: string;
    placeofbirth: string;

};

var angaben: people[]=[{
   name: "Lisa",
   age: 20,
   height: 1.70,
   favfood: "Lasagne",
   placeofresidence: "Böblingen",
   placeofbirth: "stuttgart",

},
{
   name:"Marie Sophie Walter",
   age: 21,
   height: 1.78,
   favfood: "chilli sin carne",
   placeofresidence: "stuttgart",
   placeofbirth: "stuttgart",

},
{
    name: "Bastian Aberle",
    age: 25,
    height: 1.85,
    favfood: "pizza",
    placeofresidence: "Furtwangen",
    placeofbirth: "Schramberg",

}];

for (let index: number=0; index<angaben.length; index++){
    console.log(angaben[index].name);
}

var numbers: number[]=[1, 5, 9, 13, 15, 19]
let x: number= 0;
for(let index: number= 0; index< numbers.length; index++){
    x = x + numbers[index];
}

console.log(x);
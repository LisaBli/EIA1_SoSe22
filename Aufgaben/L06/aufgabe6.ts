var frankreich_einwohner: number= 65.3;
var deutschland_einwohner: number= 83.2;
var italien_einwohner: number= 59.58;
var portugal_einwohner: number= 10.29;

var de: string="Deutschland: ";
var fr: string="Frankreich: ";
var it: string="Italien: ";
var port: string="Portugal: ";

var before: string="Einwohner*innen in ";

var mio: string=" Mio";

console.log(before+de+deutschland_einwohner+mio);
console.log(before+fr+frankreich_einwohner+mio);
console.log(before+it+frankreich_einwohner+mio);
console.log(before+port+portugal_einwohner+mio);


var beforerel: string="Relation zur Gesamtzahl der Einwohner*innen  in der EU ";

var eueinwohner: number= 447.01;
var hundert: number= 100;
var prozent: string="%";

console.log(beforerel+de+deutschland_einwohner/eueinwohner*hundert+prozent);
console.log(beforerel+fr+frankreich_einwohner/eueinwohner*hundert+prozent);
console.log(beforerel+it+italien_einwohner/eueinwohner*hundert+prozent);
console.log(beforerel+port+portugal_einwohner/eueinwohner*hundert+prozent);

var beforerate: string="Wachstumsrate seit 2008 ";

var de2008: number= 82.0; 
var fr2008: number= 62.14;
var it2008: number= 59.0;
var port2008: number= 10.56;

console.log(beforerate+de+((deutschland_einwohner-de2008)/de2008)*hundert+prozent);
console.log(beforerate+fr+((frankreich_einwohner-fr2008)/fr2008)*hundert+prozent);
console.log(beforerate+it+((italien_einwohner-it2008)/it2008)*hundert+prozent);
console.log(beforerate+port+((portugal_einwohner-port2008)/port2008)*hundert+prozent);

var beforeges: string="Wachstumsrate gesamt zwischen 2008 and 2021 ";

console.log(beforeges+de+(deutschland_einwohner-de2008)+mio);
console.log(beforeges+fr+(frankreich_einwohner-fr2008)+mio);
console.log(beforeges+it+(italien_einwohner-it2008)+mio);
console.log(beforeges+port+(portugal_einwohner-port2008)+mio);







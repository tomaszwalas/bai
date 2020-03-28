var title = "dr";
var name = "Mateusz";
var surname = 'Kubicki';
var street = 'Długa 15';
var city = 'Kraków';
var zip = '30-781';
var country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

var lancuch = title+" "+name+" "+surname+"\nul."+street+"\n"+zip+" "+city+"\n"+country;
console.log(lancuch);
var lancuch2 = `${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()}`;
console.log(lancuch2);

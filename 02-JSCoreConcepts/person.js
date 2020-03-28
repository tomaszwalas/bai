class Person{
 constructor(imie, nazwisko){
  	this.imie = imie;
  	this.nazwisko = nazwisko;
  }
  imieNazwisko() {
  	console.log( `Jestem ${this.imie} ${this.nazwisko.toUpperCase()}!` );
  }
  inicjaly() {
  	console.log( `Moje inicjały to ${this.imie.charAt(0).toUpperCase()}.${this.nazwisko.charAt(0).toUpperCase()}.` );
  }
}
person2 = new Person('Jan', 'Nowak'); person2.imieNazwisko(); person2.inicjaly();
person = new Person('Tomek', 'Walas'); person.imieNazwisko(); person.inicjaly();
const person ={
    firstName:'MOne',
    lastName:'taye',


    get fullName(){
    return `${person.firstName},${person.lastName}`
},
//set meta use for change name
set fullName(name){
    const parts = name.split(' ');
    this.firstName=parts[0];
    this.lastName=parts[1];
}
};
person.firstName='meron seraw';
console.log(person)

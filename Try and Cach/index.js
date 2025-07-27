const person ={
    firstName:'MOne',
    lastName:'taye',

    get fullName(){
    return `${person.firstName},${person.lastName}`
},

//set meta use for change name
set fullName(name){
    if(typeof value !=='string')
        throw new Error('Value is not a srting.');

    
    const parts = name.split(' ');//we use split for only srtings 
    if(parts.length !== 2)
        throw new Error('Enter a first and last name')
    this.firstName=parts[0];
    this.lastName=parts[1];
}
};
try{
person.firstName='';
}
catch(e){
    alert(e);
}
console.log(person);
const first =[1,2,3,4];
const second=[5,6,7,8];
//this is another way to commbine an array
const combined =[ ...first,'g', ...second,'k'];
console.log(combined);
//just it copy combined array
const copy =[...combined];
console.log(copy)

const numbers=[-1,-2,-3,-4];


const filtred=numbers.filter(n => n <=0);

const item=filtred.map(n => '<li>' +n + '<li>')
const joined=item.join('   ')
console.log(joined)


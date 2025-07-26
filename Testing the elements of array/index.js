const number=[1,2,3,4,-8];
//evry it tests all are fullfile the given crayterya
const allPositive=number.every(function(value){
    return value >=0;
});
console.log(allPositive);

//some it tests some are fullfill the given ceayterya
const atlListOneNegative=number.some(function(value){
  return value <=0;
});
console.log(atlListOneNegative)
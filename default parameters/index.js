//using default value
function interest(principal,rate=3.4,years=8.2){
    return principal *rate/100 * years;
}
console.log(interest(1000))

//with out using default value
function interests(principal,rate,years){
    return principal *rate/100 * years;
}
console.log(interests(1000,3.4,8.2))
//function declaration
walk();
function walk() {
    console.log('walk')
}

//hoisting is the proccese in jsmoving function declaration the top of the file

function walk() {
    console.log('walk')
}
walk();

// function expression 
run();
const run = function(){
    console.log('run');
};

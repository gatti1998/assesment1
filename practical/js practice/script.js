// simple Object

    // let car = {
    //     wheels: 4,
    //     color: "red",
    // }

    // console.log(car.color);

// let x=9;
// let y=9;
// let sum = function(){
//   return x + y;
// }
// console.log(sum(x,y));




// 888888888888888888888888888888

// var sum = function(x, y){ return x + y; };
// var subtract = function(x, y){ return x - y; };
// var multiply = function(x, y){ return x * y; };
// var divide = function(x, y){ return x / y; };

// var operations = [sum, subtract, multiply, divide];

// //functions can be called from an array by accessing them and using the () operator
// for(var i = 0; i < operations.length; i++){
//   console.log(operations[i](5,10));
// }


// 8888888888888888888888888888888888888888





// for(let i=1; i<=40; i++){
    
//     for(let j=1; j<=i; j++){

//         }
//         document.write("*")
//     }
//     document.write("<br/>")
// }



// 8888888888888888888888888888888888888888

const open = document.querySelector('.open');
const close = document.querySelector('.close');


close.addEventListener('click', () => {
    if(open.classList.contains('open')){
        open.classList.add('active');
        close.classList.remove('active');
    }
}); 

open.addEventListener('click', () => {
    if(open.classList.contains('open')){
        open.classList.remove('active');
        close.classList.add('active');
    }
});
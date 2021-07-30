
    let counter = {
    
    i: 0,

    up: function () {
        return this.i++;
        },

    down: function() {
        return this.i--;
        },

    showStep: function () {
        return this.i;
        }
}

console.log(counter.up());
console.log(counter.up());
console.log(counter.showStep());



function Calculator () {
    
  
    this.sum = function (x) {

        return function (y) {
            return x + y;
        }
    }
    
    this.multiply = function (x) {

        return function (y) {
            return x*y;
        } 
    }

    this.subtract = function (x) {

        return function (y) {
            return x-y;
        }  
    }

    this.divide = function (x) {

        return function (y) {
            return x/y;
        }  
    }
}

let calc = new Calculator();

console.log(calc.sum(2)(1));
console.log(calc.multiply(1)(2));
console.log(calc.subtract(1)(2));
console.log(calc.divide(1)(2));
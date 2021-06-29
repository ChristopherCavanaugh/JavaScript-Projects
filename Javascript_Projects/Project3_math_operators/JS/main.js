function addition_Function() { //addtion function
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition;
}

function subtraction_Function() { //subtraction function
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { //multiplication function
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function division () { //division function
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() { //multiple operation function
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() { //Modulus Operator Function
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math
}

function negation_Operator() { //Negation function
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var X = 5; //Increment opperator 
X++;
document.write(X);

var Y = 5.25; //Decrement opperator
Y--;
document.write(Y);

window.alert(Math.random()); //Random 

window.alert(Math.random() *100); //Random with number peremeters

var K = Math.sqrt(16); //Returns square root of 16 Math Object Properties
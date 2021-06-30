document.write(typeof "word"); //Display the type of variable (String)

document.write(typeof 3); //display type of varibale (Number)

document.write("4.0" + "Student Average"); //Combining a string and number

document.write("10" +5);

document.write(2E310); // Infinity

document.write(-3E310); // - Infinity

document.write(10>2); // will display true becasue 10 is larger than 2

document.write(10<2); // will display false beacause 10 is not larger than 2

console.log(2+2); //Check console log for a product of 4

console.log(3==11); //Check console log for a false (3 does not equal 11)

document.write(10==10); // This would be a true because 10 equals 10 

document.write(3==4); // This would be a false 3 does not equal 4

G = 10;
K = 10;
document.write(G === K); // This would be a true becasue 10 equals 10

X = 82;
Y = "82";
document.write(X === Y); // This would be a false because there are two different types of data

A = "Magnus";
B = "Magnus";
document.write(A === B); // This would be true because both data types are the same as well as the values

document.write(5 > 2 && 10 > 4); // This would be true because both are true.

document.write(5 > 10 && 10 > 4); // this would be false becasue both are false.

document.write(5 > 10 || 10 > 4); // This would be true because one is true

document.write(5 > 10 || 10 > 20); // This would be false because both are false.


function not_Function() { // Not function 
    document.getElementById("Not").innerHTML = !(5 > 10);
}


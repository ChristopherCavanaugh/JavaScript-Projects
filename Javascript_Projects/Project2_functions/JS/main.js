function My_First_Function() {
    var str = "This is my pink text";
    var result = str.fontcolor("pink");
    document.getElementById("pink_text").innerHTML = result;
}

function myFunction() { //Function using += operator
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
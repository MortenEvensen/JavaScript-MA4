// I made two sollutions for two buttons.
//The first button uses a function triggered by onclick in the HTML
//The second button uses addEventListener and the DOM to target the ID 

function buttonClick() {
    alert("You clicked button 1!")  
};


document.getElementById("button2").addEventListener("click", function() {
   alert("You pressed button 2!") }     
);


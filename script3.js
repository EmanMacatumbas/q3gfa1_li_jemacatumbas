var nickname =  prompt("Enter your name: ", "");
var height = prompt("Enter your height (inches): ", "");
var weight = prompt("Enter your weight (kg): ", "");
var inch;
var temp;


inch=(height%12);
height1=(height/12);
height2=(height1%1);
height=height1-height2;
weight=(weight*2.205);

alert("Name: "+nickname + "\nheight: " + height +"'"+ inch + "\nWeight: " + weight + "lbs");

function myFunction() {
    var text;
    if (confirm("Press a button!")){
        alert("Name: "+nickname + "\nheight: " + height +"'"+ inch + "\nWeight: " + weight + "lbs");
    }
    else {
        text="User does not wish to share his/her information.";
        alert(text);
    }
}
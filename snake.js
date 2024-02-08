//1.variable declaration.
var cvs = document.getElementById("canvas").getContext("2d")
var sPosx=80;
var sPosy=80;

//2.onload Function
window.onload = function(){
    document.addEventListener("keydown,inputControl()")
    mainGame();

} 


//3.Main Game Function
function mainGame(){

    //game area

    //background colour
    cvs.fillStyle ="black";
    cvs.fillRect(0,0,400,400); 

    //grid line
    for(var cl=0;cl<400;cl+=20){
    cvs.moveTo(cl,0);
    cvs.lineTo(cl,400);
   
    }
    for(var rl=0;rl<400;rl+=20){
        cvs.moveTo(0,rl);
        cvs.lineTo(400,rl);
       
        }
    cvs.strokeStyle= "grey";
    cvs.stroke();

    //snake
    cvs.fillStyle = "yellow";
    cvs.fillRect(sPosx,sPosy,20,20);

    //fruit
    cvs.fillStyle = "red";
    cvs.fillRect(140,140,20,20);


}


//4.input Control Function
function inputControl(e){
    console.log(e.keyCode);
    console.log(e.key);


}
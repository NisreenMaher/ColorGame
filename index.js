var reset=document.getElementsByClassName("new")[0];
var squares=document.querySelectorAll(".squar");
var display=document.querySelector(".display span");
var state =document.querySelector(".bar span");
var colorDisplay=document.querySelector(".display");
var easy=document.getElementsByClassName("easy")[0];
var hard=document.querySelector(".hard");
var solSquare,rgbSol;
var num=6;
var winng=false;
function random_rgba() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
reset.addEventListener("click",resetFun);
function resetFun(){
    winng=false;
    solSquare =Math.floor(Math.random() * num);
    for(var i=0;i<num;i++){
        squares[i].style.background= random_rgba();
        if(solSquare==i)
        rgbSol=squares[i].style.background;
    }
    display.innerText=rgbSol;
    colorDisplay.style.background="steelblue";


    
}

resetFun();
function winning(sol){
    winng=true;

    for(let i=0;i<num;i++){
        squares[i].style.background=squares[sol].style.background;
    }
    colorDisplay.style.background=squares[sol].style.background;
    state.innerText="Correct :) ";
    reset.innerText="Play Again";
    

}

for(let i=0;i<num;i++){
    squares[i].addEventListener("click",event => {
        if(winng)
            return;
        if(solSquare==i){
            winning(i);
        }else{
            squares[i].style.background="rgb(0,0,0)";
            state.innerText="Try Again !"
        }
      });

}

easy.addEventListener("click",easyf);
function easyf(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    squares[3].style.background="rgb(0,0,0)";
    squares[4].style.background="rgb(0,0,0)";
    squares[5].style.background="rgb(0,0,0)";
    num=3;
    resetFun();
}
hard.addEventListener("click",hardf);
function hardf(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    num=6;
    resetFun();

}
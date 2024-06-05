
const dice=document.getElementById("dice")
const myh2=document.getElementById("myh2")
let x;
let min=1;
let max=6;

dice.onclick=function(){
 x= Math.floor(Math.random()*max)+min;
  myh2.textContent=x

}
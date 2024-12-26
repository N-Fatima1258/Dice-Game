var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImageSource1="img/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
//There are 2 img tags so that's why we use querySelectorAll and index notation
// you have to write randomImageSource in setAttributes without "",,,becz its not something like www.

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="img/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}
//you can add emoji


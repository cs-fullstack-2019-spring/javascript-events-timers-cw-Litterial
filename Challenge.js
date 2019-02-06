/*
var arrayofSprites=document.getElementsByTagName("img");
var x=0;


var SpriteImage=window.setInterval(myCallBack,1000);
for(i=0;i<arrayofSprites.length;i++)
{
    arrayofSprites[i].setAttribute("hidden",true)
}

function myCallBack()
{
    arrayofSprites[x].removeAttribute("hidden");
    arrayofSprites[x].setAttribute("hidden",true);
    x++;
    if (x>9)
        x=0;
}*/

var intervalID = window.setInterval(myCallback, 500);

function myCallback() {
    console.log("hi")
}
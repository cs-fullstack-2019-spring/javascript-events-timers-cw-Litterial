
var arrayofSprites=document.getElementsByTagName("img");
var x=0;
var blink=true;



var SpriteImage=window.setInterval(myCallBack,400);
for(i=1;i<arrayofSprites.length;i++)
{
    arrayofSprites[i].setAttribute('hidden',true)
}

function myCallBack()
{
    if(blink)   /*the purpose of this statement is to make the animations more crisp. This will pause after each animation*/
    {


        blink=false;  /*makes blink false*/
    }

    else         /*when blink is false*/
    {



        if (x==8)
        {
            console.log(x);

            arrayofSprites[8].setAttribute('hidden',true);   /*for some reason a 2nd sprite of the last frame appears
                                                                                 This disables it.*/
            x=0;
            arrayofSprites[0].removeAttribute('hidden');   /*unhides the first sprite*/
            blink=true;
        }

        else {

            arrayofSprites[x].removeAttribute("hidden");      /*unhides a sprite*/
            console.log(x);
            arrayofSprites[x].setAttribute('hidden', true);     /*hides a sprite*/
            x++;                                                            /*change the index*/
            arrayofSprites[x].removeAttribute('hidden');       /*makes a new sprite appear*/
            blink = true;                                                   /*sets blink to false*/
        }

    }
}


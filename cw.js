/*Question1..............................*/
var angryMessage=document.getElementsByTagName('input');  /*looks for input tags*/
angryMessage[0].addEventListener('click',angry);  /*array is set to zero to find the first input*/
function angry(e) {       /*message when they click the checkbox*/
    alert("I TOLD YOU NOT TO CLICK THIS!!!")
    e.preventDefault();  /*turns off the mouse*/



}
/*Question2...........................*/
var enable=false;
var question2Button=document.getElementsByTagName('button'); /*call all buttons*/
var textArea=document.getElementsByTagName('textarea');  /*calls all elements with a textarea*/
var hiddenMessage=document.getElementById('hide');   /*calls element with id 'hide'*/
hiddenMessage.setAttribute('hidden',true);   /*sets the attribute to hidden*/
question2Button[0].addEventListener('click',function()  /*this is the first button in the array*/
{



    if (enable)   /*if enable== false, skip to "else"*/
    {
         textArea[0].removeAttribute('disabled');   /*enables textarea*/
         hiddenMessage.setAttribute('hidden',true);   /*hides message*/
        enable=false;   /*makes enable false*/
    }

    else   /*disables text area, unhides the message*/
    {
        textArea[0].setAttribute('disabled',""); /*disables textarea*/
        hiddenMessage.removeAttribute('hidden',true);  /*unhides message*/

        enable=true;  /*makes enable true*/
    }

});

/*Question 3..................................................*/
var countitDown=document.getElementById("countdown");  /*calls for element with id "countdown*/
countitDown.addEventListener('click',liftoff);  /*click listener for button*/
/*count=10;  /!*countdown counter*!/
function liftoff(e)
{
    console.log('hi')
    e.target.innerHTML=count;    /!*changes the text in the button*!/
    count--;  /!*subtracts the count by 1 each iteration*!/
    if (count<0)
    {
        e.target.innerHTML = "Liftoff";   /!*Liftoff prints when count==0*!/
        count=10;    /!*restarts back to 10 if the user would like to try again*!/
    }

}*/


function liftoff(e) {
    var intervalID = window.setInterval(myCallback, 1000);   /*counts intervals*/
    tentoLiftoff = 10;  /*starts at 10*/

    function myCallback() {
        /*wrapping them both in if-else statements forces the function to read either the if or the else statement
        * but not both at the same time. This prevents a situation where 2 steps are done right after each other
        * and that previous step appears to be *skipped* */

        if (tentoLiftoff == 0) {      /*if Countdown reaches 0, it prints countdown then stops the interval*/
            e.target.innerHTML = "Liftoff";
            console.log("Liftoff");/*to see what's happening in the console.log*/
            clearInterval(intervalID);
        }
        else {
            e.target.innerHTML = tentoLiftoff;/*Shows on button*/
            console.log(tentoLiftoff); /*see what's happening in the console.log*/
            tentoLiftoff--;     /*increments down*/
        }
    }





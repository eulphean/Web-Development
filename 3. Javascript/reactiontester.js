makeBox();

var box=document.getElementById("box");

box.onclick=function()
{
    clickedTime = Date.now();

    reactionTime = (clickedTime-createdTime)/1000;

    document.getElementById("time").innerHTML=reactionTime+"s";

    box.style.display="none";

    makeBox (); 
}

function makeBox ()
{
      var timeout = Math.random() * 3000;


      /*
         Calls the function after a certain timeout
         setTimeout (functionName, timeout value)
      */
      setTimeout (function () {

        //block is the default display style
        box.style.display="block";

        randomBR(200);

        randomColor();

        randomPosition(75,55);

        createdTime=Date.now();
  
      }, timeout);
}


function randomColor ()
{     
  var r = randomGenerator(255);
  var g = randomGenerator(255);
  var b = randomGenerator(255);
  // random color
  box.style.backgroundColor="rgb(" + r + "," + g + "," + b +")";
}

function randomBR (boxWidth)
{
    brRandom=randomGenerator(boxWidth);

    // random shape
    box.style.borderRadius=brRandom+"px";
}

function randomPosition (left,top)
{
    left = randomGenerator(left);
    
    top = randomGenerator(top);
    console.log(top);
    console.log(left);
    box.style.top=top+"%";
    box.style.left=left+"%";
}

function randomGenerator (i)
{
  i=Math.random()*i;
  i=Math.floor(i);
  return i;
}

var clickedTime; var createdTime; var reactionTime;

var colorArray = ["green", "red", "orange", "yellow", "black", "magenta", "lightblue", "#226293"];

var borderRadius = ["0px", "100px", "50px", "20px", "70px"];

var xyPlane = [["100px", "50px"], ["150px", "200px"], ["25px", "45px"], ["75px", "300px"], ["20px","450px"]];

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
          To randomize the color of the object
      */
      var coloridx = Math.random() * (colorArray.length);
      coloridx = Math.floor(coloridx);

      /*
          To randomize the shape of the object
      */
      var bridx = Math.random() * (borderRadius.length);
      bridx = Math.floor(bridx);

      /*
          To randomize the placement of the object
      */
      var xyidx = Math.random() * (xyPlane.length);
      xyidx = Math.floor(xyidx);

      /*
         Calls the function after a certain timeout
         setTimeout (functionName, timeout value)
      */
      setTimeout (function () {

        //block is the default display style
        box.style.display="block";
        
        // random shape
        box.style.borderRadius=borderRadius[bridx];

        // random color
        box.style.backgroundColor=colorArray[coloridx];

        // random position
        var a = xyPlane[xyidx];
        box.style.top = a[0];
        box.style.left = a[1];

        createdTime=Date.now();
  
      }, timeout);
}
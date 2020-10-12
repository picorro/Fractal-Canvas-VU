//Dalius Budrys s1811727

function showValue(newValue)
{
      document.getElementById("range").innerHTML=newValue;
      draw(newValue);
}

function draw(step) {
      var canvas = document.getElementById('myCanvas');
      if (canvas.getContext)
      {
            var ctx = canvas.getContext("2d");
            canvas.width = canvas.width;
            var s = step - 1;
            drawF(step);
      }
      function drawF(step)
      {
            if (step > 0)
            {
                  step = step - 1; 
                  ctx.save();
                  ctx.save();
                  ctx.save();
                  if(step == s)
                        ctx.fillStyle = "red";
                  ctx.transform(0.25, 0, 0, -0.25, 250, 250);
                  ctx.rotate(Math.PI/2);
                  drawF(step, 0); 
                  ctx.restore();

                  if (step == s)
                        ctx.fillStyle = "green";
                  ctx.transform(0.5, 0, 0, 0.5, 500, 0);
                  ctx.rotate(Math.PI/2);
                  drawF(step, 1);
                  ctx.restore();

                  if(step == s)
                        ctx.fillStyle = "blue";
                  ctx.transform(0.5, 0, 0, -0.5, 250, 500);
                  drawF(step, 2);
                  ctx.restore();

                  if(step == s)
                        ctx.fillStyle = "magenta";
                  ctx.transform(0.5, 0, 0, 0.5, 0, 250); 
                  drawF(step, 3);
            }
                  else drawT();    
      }

      function drawT(step)
      {
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(500,0);
            ctx.lineTo(500,500);
            ctx.lineTo(375,500);
            ctx.lineTo(375,250);
            ctx.lineTo(0,250);
            ctx.lineTo(0,0);
            ctx.fill();
      }       
}

// Animations
desiredScaleX = 0.5;
currentScaleX = 1;
desiredScaleY = 0.5;
currentScaleY = 1;

function fillCanvas2()
{
      if(currentScaleX  > desiredScaleX)
      {
            var canvas = document.getElementById('myCanvas2');
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.transform(currentScaleX, 0, 0, currentScaleY, 0, 0);
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(500,0);
            ctx.lineTo(500,500);
            ctx.lineTo(375,500);
            ctx.lineTo(375,250);
            ctx.lineTo(0,250);
            ctx.lineTo(0,0);
            ctx.fill();
            currentScaleX -= 0.1;
            currentScaleY -= 0.1;
      }
}

function firstStep()
{
      return setInterval(fillCanvas2, 100);
}

function secondStep()
{
      fillCanvas2();
}

function thirdStep()
{
      fillCanvas2();
}
function fourthStep()
{
      fillCanvas2();
}

function demo1()
{
      var canvas = document.getElementById('myCanvas2');
      var ctx = canvas.getContext("2d");
      ctx.transform(-0.25, 0, 0, -0.25, 250, 250);
}

//F1 = {[0.25, 0 ,250]
      //[0, -0.25, 250]
      //[0, 0, 1]}
//F2 = {[0.5, 0, 500],
      //[0, 0.5, 0],
      //[0, 0, 1]}
//F3 = {[0.5, 0, 500],
      //[0, -0.5, 250],
      //[0, 0, 1]}
//F4 = {[0.5, 0, 0],
      //[0, 0.5, 250],
      //[0, 0, 1]}

      //F1 = {[-0.25, 0 ,250]
      //[0, -0.25, 250]
      //[0, 0, 1]}

//F2 = {[-0.5, 0, 500],
      //[0, 0.5, 0],
      //[0, 0, 1]}

//F3 = {[0.5, 0, 500],
      //[0, -0.5, 250],
      //[0, 0, 1]}

//F4 = {[0.5, 0, 0],
      //[0, 0.5, 250],
      //[0, 0, 1]}
//Dalius Budrys s1811727

function showValue(newValue)
{
      document.getElementById("range").innerHTML=newValue;
      draw(newValue);
}

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
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

currentScaleX = 1.0;
currentScaleY = 1.0;
frameDelay = 10;
var scaleReductionModifierX = 0.99;
var scaleReductionModifierY = 0.99;
function resetScale()
{
	var canvas = document.getElementById('myCanvas2');
    var ctx = canvas.getContext("2d");
    ctx.scale(1 / currentScaleX, 1 / currentScaleY);
    currentScaleX = 1;
    currentScaleY = 1;
}
function clearCanvas2()
{
	var canvas = document.getElementById('myCanvas2');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(-1000, -1000, canvas.width + 1000, canvas.height + 1000);
}
function fillCanvas()
{
	var canvas = document.getElementById('myCanvas2');
	if (canvas.getContext)
   	var ctx = canvas.getContext("2d");
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
function firstStep()
{
    var canvas = document.getElementById('myCanvas2');
    if (canvas.getContext)
       	var ctx = canvas.getContext("2d");
	var dx = 125, dy = 125;
	var i, r, b, red, blue, t = 0, N = 100;
	var i = 0;
	setTimeout(animate, frameDelay);
	function animate2()
	{
		if(i < N + 1)
		{
			red = 255*t;
			r = red.toString();
			ctx.fillStyle = "rgb(" + r + "," + "0" + "," + "0" + ")";
			anim_L(t);
			t += 1/N;
			i++;
			setTimeout(animate2, frameDelay);
		}
		else
			ctx.translate(-125, -125);
	}
	function animate()
	{
		ctx.clearRect(0, 0, canvas.width + 1000, canvas.height + 1000);
		ctx.fillStyle = "black";
		if(currentScaleX > 0.25)
		{
		 	ctx.scale(scaleReductionModifierX, 1);
		 	ctx.scale(1, scaleReductionModifierY);
		 	currentScaleX = currentScaleX * scaleReductionModifierX;
		 	currentScaleY = currentScaleY * scaleReductionModifierY;
		 	needNextFrame = true;
		 	fillCanvas();
			setTimeout(animate, frameDelay);
		}
		else
		{
			resetScale();
			ctx.save();           
			ctx.translate(dx,dy);
			animate2();
		}
	}
    function draw_L()
    {
    	clearCanvas2();
	    ctx.save();
	    ctx.translate(-250,-250);
	    ctx.beginPath();
	    ctx.moveTo(0,0);
	    ctx.lineTo(250,0);
	    ctx.lineTo(250,250);
	    ctx.lineTo(187.5,250);
	    ctx.lineTo(187.5,125);
	    ctx.lineTo(0,125);
	    ctx.lineTo(0,0);
	    ctx.fill();
	    ctx.restore();
   }
   function anim_L(t) {
     ctx.save();
     ctx.translate(0*t,0*t);
	 ctx.rotate(Math.PI*t/2);
	 ctx.scale(1/2-t,1/2);
	 draw_L();
     ctx.restore();   
   }
}

function secondStep()
{
    var canvas = document.getElementById('myCanvas2');
    if (canvas.getContext)
       	var ctx = canvas.getContext("2d");
    clearCanvas2();
	var dx = 125, dy = 125;
	var i, r, b, red, blue, t = 0, N = 100;
	var i = 0;
	setTimeout(animate, frameDelay);
	function animate2()
	{
		if(i < N + 1)
		{
			green = 127*t;
			g = green.toString();
			ctx.fillStyle = "rgb(" + "0" + "," + g + "," + "0" + ")";
			anim_L(t);
			t += 1/N;
			i++;
			setTimeout(animate2, frameDelay);
		}
		else
			ctx.translate(-125, -125);
	}
	function animate()
	{
		ctx.clearRect(0, 0, canvas.width + 1000, canvas.height + 1000);
		ctx.fillStyle = "black";
		if(currentScaleX > 0.5)
		{
		 	ctx.scale(scaleReductionModifierX, 1);
		 	ctx.scale(1, scaleReductionModifierY);
		 	currentScaleX = currentScaleX * scaleReductionModifierX;
		 	currentScaleY = currentScaleY * scaleReductionModifierY;
		 	needNextFrame = true;
		 	fillCanvas();
			setTimeout(animate, frameDelay);
		}
		else
		{
			resetScale();
			ctx.save();           
			ctx.translate(dx,dy);
			animate2();
		}
	}
    function draw_L()
    {
    	clearCanvas2();
	    ctx.save();
	    ctx.translate(-250,-250);
	    ctx.beginPath();
	    ctx.moveTo(0,0);
	    ctx.lineTo(250*2,0);
	    ctx.lineTo(250*2,250*2);
	    ctx.lineTo(187.5*2,250*2);
	    ctx.lineTo(187.5*2,125*2);
	    ctx.lineTo(0,125*2);
	    ctx.lineTo(0,0);
	    ctx.fill();
	    ctx.restore();
   }
   function anim_L(t) {
     ctx.save();
     ctx.translate(250*t,0*t);
	 ctx.rotate(Math.PI*t/2);
	 ctx.scale(1/2,1/2);
	 draw_L();
     ctx.restore();   
   }
}

function thirdStep()
{
     var canvas = document.getElementById('myCanvas2');
    if (canvas.getContext)
       	var ctx = canvas.getContext("2d");
    clearCanvas2();
	var dx = 125, dy = 125;
	var i, r, b, red, blue, t = 0, N = 100;
	var i = 0;
	setTimeout(animate, frameDelay);
	function animate2()
	{
		if(i < N + 1)
		{
			blue = 255*t;
			b = blue.toString();
			ctx.fillStyle = "rgb(" + "0" + "," + "0" + "," + b + ")";
			anim_L(t);
			t += 1/N;
			i++;
			setTimeout(animate2, frameDelay);
		}
		else
			ctx.translate(-125, -125);
	}
	function animate()
	{
		ctx.clearRect(0, 0, canvas.width + 1000, canvas.height + 1000);
		ctx.fillStyle = "black";
		if(currentScaleX > 0.5)
		{
		 	ctx.scale(scaleReductionModifierX, 1);
		 	ctx.scale(1, scaleReductionModifierY);
		 	currentScaleX = currentScaleX * scaleReductionModifierX;
		 	currentScaleY = currentScaleY * scaleReductionModifierY;
		 	needNextFrame = true;
		 	fillCanvas();
			setTimeout(animate, frameDelay);
		}
		else
		{
			resetScale();
			ctx.save();           
			ctx.translate(dx,dy);
			animate2();
		}
	}
    function draw_L()
    {
    	clearCanvas2();
	    ctx.save();
	    ctx.translate(-250,-250);
	    ctx.beginPath();
	    ctx.moveTo(0,0);
	    ctx.lineTo(250*2,0);
	    ctx.lineTo(250*2,250*2);
	    ctx.lineTo(187.5*2,250*2);
	    ctx.lineTo(187.5*2,125*2);
	    ctx.lineTo(0,125*2);
	    ctx.lineTo(0,0);
	    ctx.fill();
	    ctx.restore();
   }
   function anim_L(t) {
     ctx.save();
     ctx.translate(250*t,250*t);
	 ctx.scale(1/2,1/2-t);
	 draw_L();
     ctx.restore();   
   }
}
function fourthStep()
{
     var canvas = document.getElementById('myCanvas2');
    if (canvas.getContext)
       	var ctx = canvas.getContext("2d");
    clearCanvas2();
	var dx = 125, dy = 125;
	var i, r, b, red, blue, t = 0, N = 100;
	var i = 0;
	setTimeout(animate, frameDelay);
	function animate2()
	{
		if(i < N + 1)
		{
			red = 200*t;
			r = red.toString();
			blue = 200*t;
			b = blue.toString();
			ctx.fillStyle = "rgb(" + r + "," + "0" + "," + b + ")";
			anim_L(t);
			t += 1/N;
			i++;
			setTimeout(animate2, frameDelay);
		}
		else
			ctx.translate(-125, -125);
	}
	function animate()
	{
		ctx.clearRect(0, 0, canvas.width + 1000, canvas.height + 1000);
		ctx.fillStyle = "black";
		if(currentScaleX > 0.5)
		{
		 	ctx.scale(scaleReductionModifierX, 1);
		 	ctx.scale(1, scaleReductionModifierY);
		 	currentScaleX = currentScaleX * scaleReductionModifierX;
		 	currentScaleY = currentScaleY * scaleReductionModifierY;
		 	needNextFrame = true;
		 	fillCanvas();
			setTimeout(animate, frameDelay);
		}
		else
		{
			resetScale();
			ctx.save();           
			ctx.translate(dx,dy);
			animate2();
		}
	}
    function draw_L()
    {
    	clearCanvas2();
	    ctx.save();
	    ctx.translate(-250,-250);
	    ctx.beginPath();
	    ctx.moveTo(0,0);
	    ctx.lineTo(250*2,0);
	    ctx.lineTo(250*2,250*2);
	    ctx.lineTo(187.5*2,250*2);
	    ctx.lineTo(187.5*2,125*2);
	    ctx.lineTo(0,125*2);
	    ctx.lineTo(0,0);
	    ctx.fill();
	    ctx.restore();
   }
   function anim_L(t) {
     ctx.save();
     ctx.translate(0*t,250*t);
	 //ctx.rotate(Math.PI*t/2);
	 ctx.scale(1/2,1/2);
	 draw_L();
     ctx.restore();   
   }
}

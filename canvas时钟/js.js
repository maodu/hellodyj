var dom=document.getElementById("clock");
var ctx=dom.getContext("2d");
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width / 2;


function drawCircle(){
	
	ctx.translate(r,r);
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth=8;
	ctx.arc(0,0,r-4,0*Math.PI,2*Math.PI,false);
	ctx.stroke();
	var numberArray=[3,4,5,6,7,8,9,10,11,12,1,2];

		ctx.textAlign="center";
		ctx.textBaseline="middle";
		ctx.font="15px Aprial";
	numberArray.forEach(function(number,i){
		var rad=2 * Math.PI / 12 *i;
		var x=Math.cos(rad) * (r-30);
		var y=Math.sin(rad) * (r-30);
		ctx.fillText(number,x,y);
	})

	for(var i =0;i<60;i++){
		var radd= 2* Math.PI / 60 * i;
		var x=Math.cos(radd) * (r-15);
		var y =Math.sin(radd) *(r-15);
		ctx.beginPath();
		if(i%5 ===0){
			ctx.fillStyle="black";
			ctx.arc(x,y,2,0,2*Math.PI,false);}
		else{
			ctx.fillStyle="#ccc";
			ctx.arc(x,y,2,0,2*Math.PI,false);
		}
		ctx.fill();
	}
	
	ctx.restore();
}
function drawHour(hour,minute){
	ctx.save();
	ctx.beginPath();
	var rad=2 * Math.PI / 12 * hour;
	var rad1=2 * Math.PI /12 /60 * minute;
	ctx.rotate(rad + rad1);
	ctx.lineCap="round";
	ctx.lineWidth=8;
	ctx.moveTo(0,0);
	ctx.lineTo(0,-(r-60));

	ctx.stroke();
	ctx.restore();

}
function drawMinute(minute){
	ctx.save();
	ctx.beginPath();
	var rad=2 * Math.PI / 60 * minute;
	ctx.rotate(rad);
	ctx.lineCap="round";
	ctx.lineWidth=5;
	ctx.moveTo(0,0);
	ctx.lineTo(0,-(r-40));

	ctx.stroke();
	ctx.restore();
}
function drawSecond(second){
	ctx.beginPath();
	ctx.fillStyle="red";
	var rad=2*Math.PI / 60 * second;
	ctx.rotate(rad);
	ctx.moveTo(2,0);
	ctx.lineTo(-3,0);
	ctx.lineTo(-1,-(r-30));
	ctx.lineTo(1,-(r-30));
	ctx.fill();
}
function drawDot(){
	ctx.beginPath();
	ctx.fillStyle="gray";
	ctx.arc(0,0,5,0,2*Math.PI,false);
	ctx.fill();
}

function draw(){

	ctx.clearRect(0,0,width,height);
	ctx.save();
	var now = new Date();
	var hour = now.getHours()-12;
	var minute = now.getMinutes();
	var second = now.getSeconds();
	drawCircle();
	
	drawHour(hour,minute);
	drawMinute(minute);
	drawSecond(second);
	drawDot();
	ctx.restore();
}
draw();
setInterval(draw,1000);
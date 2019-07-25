 var numsquares=6;
var colors=generateRandomColor(numsquares);
var squares =document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.querySelector("#colordisplay"); 
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numsquares=3;
   colors=generateRandomColor(numsquares);
   pickedcolor=pickcolor();
   for(var i= 0; i<squares.length; i++){
   	if (colors[i]){
   		squares[i].style.background= colors[i];
   	}
   	else{
   		squares[i].style.display= "none";
   	}
   }
});
 
hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares=6;
	colors=generateRandomColor(numsquares);
   pickedcolor=pickcolor();
   for(var i= 0; i<squares.length; i++){
    squares[i].style.background= colors[i];
   	squares[i].style.display= "block";
   	 }
});

resetButton.addEventListener("click", function(){
	// generate new color
	colors=generateRandomColor(numsquares);
	// pick new random color from array
	pickedcolor=pickcolor();
	// change colordisplay to match picked color
	colordisplay.textContent=pickedcolor;

	resetButton.textContent="New Color";
	messagedisplay.textContent="";
	// change color of square
	for(var i=0; i<squares.length; i++) {
		squares[i].style.background=colors[i];
	}
	h1.style.background = "steelblue";
})

colordisplay.textContent=pickedcolor;

for(var i=0; i<squares.length; i++) {
	// add initial color to square
	squares[i].style.background=colors[i];
     // add quice=k listener to square
     squares[i].addEventListener("click",function(){
     	// grap color from clicked square
     	var clickedcolor=this.style.background;
          // compare color to pucked color
     	if(clickedcolor===pickedcolor){
     	 messagedisplay.textContent="Correct!"
     	 resetButton.textContent="Play Again?"
         changecolors(clickedcolor);
         h1.style.background = clickedcolor;
           }
     	else{
     		this.style.background="#232323";
     		messagedisplay.textContent="Try again!";
     	}
     });
}

function changecolors(color){
	// loop through all squares
	for(var i=0; i<squares.length; i++){
		// change each color to given color
		squares[i].style.background=color;
    }	
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	// make a array 
	var arr =[]
	// repeat num times
	for(var i=0; i<num; i++){
		// get random color and push into array
		arr.push(randomColor())
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick red 0 to 255
     var r= Math.floor(Math.random() * 256);
	// pick red 0 to 255
	 var g= Math.floor(Math.random() * 256);
	// pick red 0 to 255
	 var b= Math.floor(Math.random() * 256);
     return "rgb("+ r + ", " + g + ", " + b + ")";
}
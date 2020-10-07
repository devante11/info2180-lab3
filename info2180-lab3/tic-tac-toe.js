
window.onload = function (){


	var boxes = document.getElementById("board").querySelectorAll("div"), option = 0;
	var i;
	for (i = 0; i < boxes.length; i++) {
		boxes[i].setAttribute("class", "square");
	}

	var check = new Array();

	function winners(){

	var box1 = boxes[0];
	var box2 = boxes[1];
	var box3 = boxes[2];
	var box4 = boxes[3];
	var box5 = boxes[4];
	var box6 = boxes[5];
	var box7 = boxes[6];
	var box8 = boxes[7];
	var box9 = boxes[8];

	if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML ){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";


	} else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		

	} else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		

	} else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		

	} else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		

	} else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		

	}else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";

	}else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
		var last = check[check.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";

	}

	}
	

	for (var m = 0; m < boxes.length; m++){
		boxes[m].onclick = function() {
			if (this.innerHTML !== "X" && this.innerHTML !== "O"){
			if(option%2 === 0){

				this.innerHTML = "X";
				winners();
				option += 1;
				this.classList.add(".square.X");
				check.push("X");
				//console.log(check);

			}else {

				this.innerHTML = "O";
				winners();
				option += 1;
				this.classList.add(".square.O");
				check.push("O");
				//console.log(check);
			}

		};
	}
		boxes[m].addEventListener("mouseover", function (){
				this.classList.add("hover");
			});
		
		boxes[m].addEventListener("mouseout", function (){
			this.setAttribute("class", "square");
		});

	}

	var res = document.querySelector("button");

	res.onclick = function () {
	window.location.reload();
	//console.log(res);
	}
	
}


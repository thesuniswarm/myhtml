var r,score=0;
function rock() {
	
	document.getElementById("myChoice").innerHTML="<img src='./images/1.jpg'>";
	
	judge("rock");
}

function scissors() {
	
	document.getElementById("myChoice").innerHTML="<img src='./images/2.jpg'>";
	
	judge("scissors");
}

function paper	() {
	
	document.getElementById("myChoice").innerHTML="<img src='./images/3.jpg'>";
	
	judge("paper");
}

function judge(myChoice) {
	r = 3 * Math.random();
	var computerResult=computerChoice();
	if(myChoice=="rock"){
		if(computerResult=="rock"){
		;
	}
	else if(computerResult=="scissors"){
		score+=1;
	}
	else if(computerResult=="paper"){
		score-=1;
	}

	}

	else if(myChoice=="scissors"){
		if(computerResult=="rock"){
		score-=1;
	}
	else if(computerResult=="scissors"){
		;
	}
	else if(computerResult=="paper"){
		score+=1;
	}

	}

	else{
		if(computerResult=="rock"){
		score+=1;
	}
	else if(computerResult=="scissors"){
		score-=1;
	}
	else if(computerResult=="paper"){
		;
	}
	}
	document.getElementById("result").innerHTML="积分："+score;
	if(score>=10){
		document.getElementById("result").innerHTML="这么有耐心？牛批！牛批！";
	}
}


function go(){
	
}

function computerChoice() {
	if(r<1){
		document.getElementById("computerChoice").innerHTML="<img src='../images/1.jpg'>";
		return "rock";
	}
	else if (r<2) {
		document.getElementById("computerChoice").innerHTML="<img src='../images/2.jpg'>";
		return "scissors";
	}
	else{
		document.getElementById("computerChoice").innerHTML="<img src='../images/3.jpg'>";
	    return "paper";
	}
}

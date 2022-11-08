player1_name=localStorage.getItem("player1_name");

player1_score=100;

player2_name=localStorage.getItem("player2_name");

player2_score=100

document.getElementById("player1_name").innerHTML=player1_name+"=";

document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;

document.getElementById("player2_score").innerHTML=player2_score;



document.getElementById("player_question").innerHTML=player1_name;

document.getElementById("player_answer").innerHTML=player1_name;

document.getElementById("player_question").innerHTML=player2_name;

document.getElementById("player_answer").innerHTML=player2_name;


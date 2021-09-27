player1_name= localStorage.getItem("Player1");
player2_name= localStorage.getItem("Player2");

player1_score= 0;
player2_score= 0

document.getElementById("player1_name").innerHTML = player1_name +":";
document.getElementById("player2_name").innerHTML = player2_name +":";

document.getElementById("payer1_score").innerHTML = player1_score;
document.getElementById("payer2_score").innerHTML = player2_score;

document.getElementById("player_Q").innerHTML = "Question turn:" + player1_name;
document.getElementById("player_A").innerHTML = "Answer turn:" + player2_name;

function send(){
    get_number= document.getElementById("word").value;
    get_number1= document.getElementById("word1").value;
correctA= get_number*get_number1;

      question_word = "<h4 id='word_display'> Q. "+get_number+"x"+get_number1+"</h4>";
       input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
         row = question_word + input_box + check_button ;
          document.getElementById("output").innerHTML = row;
           document.getElementById("word").value = "";
           document.getElementById("word1").value = "";


}

Question_turn="player_1";
Answer_turn="player_2";

function check(){
  get_answer=document.getElementById("input_check_box").value;
  

  if(correctA == get_answer){
    if(Answer_turn =="player_1"){
      player1_score=player1_score+1;
      document.getElementById("payer1_score").innerHTML=player1_score;

    }
    else{
      player2_score=player2_score+1;
      document.getElementById("payer2_score").innerHTML=player2_score;
    }

  
  }
if(Question_turn =="player_1"){
  Question_turn == "player_2";
  document.getElementById("player_Q").innerHTML="Question turn"+player2_name;

}
else{
Question_turn == "player_1";
  document.getElementById("player_Q").innerHTML="Question turn"+player1_name;
}


if(Answer_turn =="player_1"){
  Answer_turn == "player_2";
  document.getElementById("player_A").innerHTML="Answer turn"+player2_name;

}
else{
Answer_turn == "player_1";
  document.getElementById("player_A").innerHTML="Answer turn"+player1_name;
}
document.getElementById("output").innerHTML="";
}

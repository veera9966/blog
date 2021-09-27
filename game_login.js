function adduser(){
    player_1name=document.getElementById("Player_1_name").value;
    player_2name=document.getElementById("Player_2_name").value;
localStorage.setItem("Player1", player_1name);
localStorage.setItem("Player2", player_2name);

window.location="game_page.html"
}
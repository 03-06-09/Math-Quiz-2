function adduser() {
    player_1 = document.getElementById("player1_name_input").value;
    player_1 = document.getElementById("player1_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "gamepage.html";
}

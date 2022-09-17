// Create function addUser()
function  addUser() {
  user_name = document.getElementById("player1_name_input").value;
  user_name = document.getElementById("player2_name_input").value;

  localStorage.setItem("user_name", user_name);

  window.location = "game_page.html";
}
  // Get value of user by id player1_name_input and player2_name_input

  // Store these values locally

  //Assign "game_page.html" to window.location



(() => {
	console.log('fired!');

	let player_lives =5,
	    player = document.querySelector("#weapon"),
        computer,
	    trigger = document.querySelector("#play"),
	    status = document.querySelector(".winlose"),
		computer_lives =5;

	const choices = ["rock", "paper", "scissors"];

	function playGame() {
		console.log('clicked the button');

		computer = choices[Math.floor(Math.random() * choices.length)];

		let player_choice = player.value;

        // this is a comment. check for a tie
		if(computer == player_choice) {
			//tie - no one wins
			status.textContent = "Tie! You live to shoot another day!";
		}
	}

	trigger.addEventListener("click", playGame);
})();
function searchGames() {
    let input = document.getElementById("search");
    let filter = input.value.toLowerCase();

    let games = document.getElementsByClassName("card");

    for (let i = 0; i < games.length; i++) {
        let title = games[i].getElementsByTagName("h2")[0];

        if (title.innerHTML.toLowerCase().includes(filter)) {
            games[i].style.display = "";
        } else {
            games[i].style.display = "none";
        }
    }
}
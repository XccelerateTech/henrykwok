var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var Barce = players.filter (function (players) {
  return players.club === "FC Barcelona";
});

console.log (Barce);

var playerslist = players.map (function (players) {
    return players.name;
});

console.log (playerslist);
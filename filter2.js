const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "LiverPool",
  sport: "Football",
  year: 2025,
  
  headCoach: {
    coachName: "Arne Slot",
    matches: 17,
  }};
  const  players =[
    {
      name: "Alisson Becker",
      position: "goalkeeper",
      number: 1,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Caoimhin Kelleher",
      position: "goalkeeper",
      number: 2,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Virgil van Dijk",
      position: "defender",
      number: 4,
      nickname: null,
      isCaptain: true, // Captain
    },
    {
      name: "Ibrahima Konaté",
      position: "defender",
      number: 5,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Trent Alexander-Arnold",
      position: "defender",
      number: 66,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Andrew Robertson",
      position: "defender",
      number: 26,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Alexis Mac Allister",
      position: "midfielder",
      number: 10,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Dominik Szoboszlai",
      position: "midfielder",
      number: 8,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Ryan Gravenberch",
      position: "midfielder",
      number: 38,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Harvey Elliott",
      position: "midfielder",
      number: 23,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "Curtis Jones",
      position: "midfielder",
      number: 17,
      nickname: null,
      isCaptain: false,
    },
    {
      name: "muhammed SSalah",
      position: "forward",
      number: 11,
      nickname: "king",
      isCaptain: false,
    },  {
      name: "Kody Gakpo",
      position: "forward",
      number: 18,
      nickname: null,
      isCaptain: false,
    },  {
      name: "Luis Diaz",
      position: "forward",
      number: 7,
      nickname: null,
      isCaptain: false,
    },  {
      name: "Diago Jota",
      position: "forward",
      number: 20,
      nickname: null,
      isCaptain: false,
    }
];

     
     const{sport,year,team}=myFavoriteFootballTeam;
     teamName.textContent=team;
     typeOfSport.textContent=year;
     worldCupYear.textContent=sport;
     const{coachName}=myFavoriteFootballTeam.headCoach;
     headCoach.textContent=coachName;
     const selcter=(RR)=>{
      playerCards.innerHTML +=RR.map(({name, position, number, isCaptain, nickname })=>
      {
        return `
<div class="player-card">
<h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
<p>Position: ${position}</p>
<p>Number: ${number}</p>
<p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
</div>`
       }


      ).join("")
     }



   
     playersDropdownList.addEventListener("change",(e)=>
    {
      playerCards.innerHTML = "";
switch(e.target.value)
{
  case "nickname":
    selcter(players.filter((player) => player.nickname !== null));
    break;
  case "forward":
    selcter(players.filter((player) => player.position === "forward"));
    break;
  case "midfielder":
    selcter(
      players.filter((player) => player.position === "midfielder")
    );
    break;
  case "defender":
    selcter(
      players.filter((player) => player.position === "defender")
    );
    break;
  case "goalkeeper":
    selcter(
      players.filter((player) => player.position === "goalkeeper")
    );
    break;

default: selcter(player);
} });
localStorage.setItem("data",JSON.stringify(players) );
const ret=localStorage.getItem("data",players );
console.log(ret);
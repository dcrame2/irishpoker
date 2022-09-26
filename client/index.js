var ctx = document.querySelector(".in-lobby");
var ctx1 = document.querySelector(".in-lobby1");
var ctx2 = document.querySelector(".in-lobby2");
var ctx3 = document.querySelector(".in-lobby3");
var ctx4 = document.querySelector(".in-lobby4");
var ctx5 = document.querySelector(".in-lobby5");
let playerLabel = document.querySelector(".player-label");
ctx.font = "30px Arial";

const socket = io();

let arr = [];

const urlSearchParams = new URLSearchParams(window.location.search);
const { username, room } = Object.fromEntries(urlSearchParams.entries());

// Join Chat
socket.emit("joinRoom", { username, room });

socket.on("roomUsers", ({ room, users }) => {
  // outputRoomName(room);
  outputUsers(users);
  // outputPlayer1(users);
  // outputPlayer2(users);
});

// Add users to DOM
function outputUsers(users) {
  console.log(users);
  `  // document.querySelector(".game-container").innerHTML = `;
  //   ${users.map((user) => `<li>${user.username}</li>`).join("")}
  //   `;`
  if (users.length === 1) {
    outputPlayer1(users);
  } else if (users.length === 2) {
    outputPlayer1(users);
    outputPlayer2(users);
  } else if (users.length === 3) {
    outputPlayer1(users);
    outputPlayer2(users);
    outputPlayer3(users);
  } else if (users.length === 4) {
    outputPlayer1(users);
    outputPlayer2(users);
    outputPlayer3(users);
    outputPlayer4(users);
  } else if (users.length === 5) {
    outputPlayer1(users);
    outputPlayer2(users);
    outputPlayer3(users);
    outputPlayer4(users);
    outputPlayer5(users);
  } else if (users.length === 6) {
    outputPlayer1(users);
    outputPlayer2(users);
    outputPlayer3(users);
    outputPlayer4(users);
    outputPlayer5(users);
    outputPlayer6(users);
  } else {
    console.log("This shit broke bruh");
  }
}

function outputPlayer1(users) {
  document.querySelector(
    ".player1"
  ).innerHTML = `<h2 class="player1-name">${users[0].username}</h2>
  <div class="card-container">
    <img class="p1-card1" src="/img/green_card.png" alt="playing card" />
    <div class="btn-container">
    <button class="red btn-select">Red</button>
    <button class="black btn-select">Black</button>
  </div>
</div>
<div class="card-container">
  <img class="p1-card2" src="/img/green_card.png" alt="playing card" />
  <div class="btn-container">
    <button class="lower btn-select">Lower</button>
    <button class="higher btn-select">Higher</button>
  </div>
</div>
<div class="card-container">
  <img class="p1-card3" src="/img/green_card.png" alt="playing card" />
  <div class="btn-container">
  <button class="in btn-select">In</button>
  <button class="out btn-select">Out</button>
</div>
</div>
<div class="card-container">
  <img class="p1-card4" src="/img/green_card.png" alt="playing card" />
  <div class="btn-container">
  <button class="diamonds btn-select">Diamonds</button>
  <button class="spades btn-select">Spades</button>
  <button class="clubs btn-select">Clubs</button>
  <button class="hearts btn-select">Hearts</button>
</div>
</div>`;
}

function outputPlayer2(users) {
  document.querySelector(
    ".player2"
  ).innerHTML = `<h2 class="player2-name">${users[1].username}</h2>
  <div class="card-container">
      <img class="p2-card1" src="/img/green_card.png" alt="playing card" />
      <div class="btn-container">
      <button class="red-2 btn-select">Red</button>
      <button class="black-2 btn-select">Black</button>
    </div>
    </div>
    <div class="card-container">
      <img class="p2-card2" src="/img/green_card.png" alt="playing card" />
      <div class="btn-container">
        <button class="lower-2 btn-select">Lower</button>
        <button class="higher-2 btn-select">Higher</button>
      </div>
    </div>
    <div class="card-container">
      <img class="p2-card3" src="/img/green_card.png" alt="playing card" />
      <div class="btn-container">
      <button class="in-2 btn-select">In</button>
      <button class="out-2 btn-select">Out</button>
    </div>
    </div>
    <div class="card-container">
      <img class="p2-card4" src="/img/green_card.png" alt="playing card" />

        <div class="btn-container">
            <button class="diamonds-2 btn-select">Diamonds</button>
            <button class="spades-2 btn-select">Spades</button>
            <button class="clubs-2 btn-select">Clubs</button>
            <button class="hearts-2 btn-select">Hearts</button>
        </div>
      </div>`;
}

function outputPlayer3(users) {
  document.querySelector(
    ".player3"
  ).innerHTML = `<h2 class="player3-name">${users[2].username}</h2>
  <div class="card-container">
      <img class="p3-card1" src="/img/green_card.png" alt="playing card" />
      <div class="btn-container">
      <button class="red-3 btn-select">Red</button>
      <button class="black-3 btn-select">Black</button>
    </div>
    </div>
    <div class="card-container">
      <img class="p3-card2" src="/img/green_card.png" alt="playing card" />
      <div class="btn-container">
        <button class="lower-3 btn-select">Lower</button>
        <button class="higher-3 btn-select">Higher</button>
      </div>
    </div>
    <div class="card-container">
      <img class="p3-card3" src="/img/green_card.png" alt="playing card" />
      <div class="btn-container">
        <button class="in-3 btn-select">In</button>
        <button class="out-3 btn-select">Out</button>
      </div>
    </div>
    <div class="card-container">
      <img class="p3-card4" src="/img/green_card.png" alt="playing card" />
      <div class="btn-container">
        <button class="diamonds-3 btn-select">Diamonds</button>
        <button class="spades-3 btn-select">Spades</button>
        <button class="clubs-3 btn-select">Clubs</button>
        <button class="hearts-3 btn-select">Hearts</button>
       </div>
      </div>`;
}

function outputPlayer4(users) {
  document.querySelector(".player4").innerHTML = `
  <h2 class="player4-name">${users[3].username}</h2>
      <div class="card-container">
          <img class="p4-card1" src="/img/green_card.png" alt="playing card" />
          <div class="btn-container">
          <button class="red-4 btn-select">Red</button>
          <button class="black-4 btn-select">Black</button>
        </div>
        </div>
        <div class="card-container">
          <img class="p4-card2" src="/img/green_card.png" alt="playing card" />
          <div class="btn-container">
            <button class="lower-4 btn-select">Lower</button>
            <button class="higher-4 btn-select">Higher</button>
          </div>
        </div>
        <div class="card-container">
          <img class="p4-card3" src="/img/green_card.png" alt="playing card" />
        
          <div class="btn-container">
          <button class="in-4 btn-select">In</button>
          <button class="out-4 btn-select">Out</button>
        </div>
        </div>
        <div class="card-container">
          <img class="p4-card4" src="/img/green_card.png" alt="playing card" />
          <div class="btn-container">
              <button class="diamonds-4 btn-select">Diamonds</button>
              <button class="spades-4 btn-select">Spades</button>
              <button class="clubs-4 btn-select">Clubs</button>
              <button class="hearts-4 btn-select">Hearts</button>
          </div>
        </div>`;
}

function outputPlayer5(users) {
  document.querySelector(".player5").innerHTML = `
  <h2 class="player5-name">${users[4].username}</h2>
            <div class="card-container">
             <img class="p5-card1" src="/img/green_card.png" alt="playing card" />
             <div class="btn-container">
               <button class="red-5 btn-select">Red</button>
               <button class="black-5 btn-select">Black</button>
              </div>
              </div>
                <div class="card-container">
                 <img class="p5-card2" src="/img/green_card.png" alt="playing card" />
                  <div class="btn-container">
                    <button class="lower-5 btn-select">Lower</button>
                     <button class="higher-5 btn-select">Higher</button>
                </div>
                </div>
                  <div class="card-container">
                    <img class="p5-card3" src="/img/green_card.png" alt="playing card" />
                  
                    <div class="btn-container">
                    <button class="in-5 btn-select">In</button>
                    <button class="out-5 btn-select">Out</button>
                  </div>
                  </div>
                  <div class="card-container">
                    <img class="p5-card4" src="/img/green_card.png" alt="playing card" />
                    <div class="btn-container">
                        <button class="diamonds-5 btn-select">Diamonds</button>
                        <button class="spades-5 btn-select">Spades</button>
                        <button class="clubs-5 btn-select">Clubs</button>
                        <button class="hearts-5 btn-select">Hearts</button>
                    </div>
                  </div>`;
}

function outputPlayer6(users) {
  document.querySelector(".player6").innerHTML = `
  <h2 class="player6-name">${users[5].username}</h2>
          <div class="card-container">
              <img class="p6-card1" src="/img/green_card.png" alt="playing card" />
              <div class="btn-container">
              <button class="red-6 btn-select">Red</button>
              <button class="black-6 btn-select">Black</button>
            </div>
            </div>
            <div class="card-container">
              <img class="p6-card2" src="/img/green_card.png" alt="playing card" />
              <div class="btn-container">
                <button class="lower-6 btn-select">Lower</button>
                <button class="higher-6 btn-select">Higher</button>
              </div>
            </div>
            <div class="card-container">
              <img class="p6-card3" src="/img/green_card.png" alt="playing card" />
              <div class="btn-container">
              <button class="in-6 btn-select">In</button>
              <button class="out-6 btn-select">Out</button>
            </div>
            </div>
            <div class="card-container">
              <img class="p6-card4" src="/img/green_card.png" alt="playing card" />
              <div class="btn-container">
              <button class="diamonds-6 btn-select">Diamonds</button>
              <button class="spades-6 btn-select">Spades</button>
              <button class="clubs-6 btn-select">Clubs</button>
              <button class="hearts-4 btn-select">Hearts</button>
            </div>`;
}

// document.querySelector(".start-game1").addEventListener("click", () => {
//   socket.emit("startGame");
// });
// document.querySelector(".server").addEventListener("click", function () {
//   document.querySelector(".players-modal1").classList.remove("hidden");

//   socket.on("newPositions", function (data) {
//     // console.log(data);
//     data.forEach((player, i) => {
//       console.log(player);
//       document.querySelector(`.player${i + 1}-form`).classList.remove("hidden");

//       document
//         .querySelector(".submit-form")
//         .addEventListener("click", function (e) {
//           e.preventDefault();
//           let playerName = document.querySelector(
//             `.player-${i + 1}-name`
//           ).value;
//           // document.querySelector(".new-div").classList.remove("hidden");
//           // document.querySelector(`.pizza${i}`).innerText = playerName;
//           arr.push(playerName);
//         });
//     });
//     console.log(arr);
//   });
// });

//old
// document.querySelector(".start-game").addEventListener("click", function () {
//   console.log("hi");
//   document.querySelector(".players-modal1").classList.add("hidden");
//   document.querySelector(".players-modal").classList.remove("hidden");
//   document.querySelector(".player6").classList.add("hidden");
//   document.querySelector(".player5").classList.add("hidden");
//   document.querySelector(".player4").classList.add("hidden");
//   document.querySelector(".p4-drinks").classList.add("hidden");
//   document.querySelector(".p5-drinks").classList.add("hidden");
//   document.querySelector(".p6-drinks").classList.add("hidden");
//   // document.querySelector(".player2-form").classList.remove("hidden");
//   // document.querySelector(".player3-form").classList.remove("hidden");
//   document.querySelector(".num-of-players-container").classList.add("hidden");
//   document.querySelector(".players-form").classList.remove("hidden");
//   // threePlayers();
// });

// ********************************************************
// ********************************************************
// ********************************************************
// FULL GAME

let deckId = "";

let player1Cards = [];
let player2Cards = [];
let player3Cards = [];
let player4Cards = [];
let player5Cards = [];
let player6Cards = [];

let playerCount = 0;

// PLAYER # SELECT
document.querySelector(".player-1").addEventListener("click", function () {
  document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".player3").classList.add("hidden");
  document.querySelector(".player2").classList.add("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".player6").classList.add("hidden");
  document.querySelector(".player5").classList.add("hidden");
  document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".player3").classList.add("hidden");
  document.querySelector(".player2").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
});

document.querySelector(".player-2").addEventListener("click", function () {
  document.querySelector(".p3-drinks").classList.add("hidden");
  document.querySelector(".p4-drinks").classList.add("hidden");
  document.querySelector(".p5-drinks").classList.add("hidden");
  document.querySelector(".p6-drinks").classList.add("hidden");
  document.querySelector(".player6").classList.add("hidden");
  document.querySelector(".player5").classList.add("hidden");
  document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".player3").classList.add("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
  document.querySelector(".player2-form").classList.remove("hidden");
  twoPlayers();
});

document.querySelector(".player-3").addEventListener("click", function () {
  document.querySelector(".player6").classList.add("hidden");
  document.querySelector(".player5").classList.add("hidden");
  document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".p4-drinks").classList.add("hidden");
  document.querySelector(".p5-drinks").classList.add("hidden");
  document.querySelector(".p6-drinks").classList.add("hidden");
  document.querySelector(".player2-form").classList.remove("hidden");
  document.querySelector(".player3-form").classList.remove("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
  threePlayers();
});

document.querySelector(".player-4").addEventListener("click", function () {
  // document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".player5").classList.add("hidden");
  document.querySelector(".player6").classList.add("hidden");
  document.querySelector(".p5-drinks").classList.add("hidden");
  document.querySelector(".p6-drinks").classList.add("hidden");
  document.querySelector(".player2-form").classList.remove("hidden");
  document.querySelector(".player3-form").classList.remove("hidden");
  document.querySelector(".player4-form").classList.remove("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
  fourPlayers();
});

document.querySelector(".player-5").addEventListener("click", function () {
  // document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".player6").classList.add("hidden");
  document.querySelector(".p6-drinks").classList.add("hidden");
  document.querySelector(".player2-form").classList.remove("hidden");
  document.querySelector(".player3-form").classList.remove("hidden");
  document.querySelector(".player4-form").classList.remove("hidden");
  document.querySelector(".player5-form").classList.remove("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
  fivePlayers();
});

// document.querySelector(".player-6").addEventListener("click", function () {
// document.querySelector(".player4").classList.add("hidden");
document.querySelector(".player2-form").classList.remove("hidden");
document.querySelector(".player3-form").classList.remove("hidden");
document.querySelector(".player4-form").classList.remove("hidden");
document.querySelector(".player5-form").classList.remove("hidden");
document.querySelector(".player6-form").classList.remove("hidden");
document.querySelector(".num-of-players-container").classList.add("hidden");
document.querySelector(".players-form").classList.remove("hidden");
sixPlayers();
// });

// Initial API call
const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

//PLAYER COUNT
document.querySelector(".players").addEventListener("click", function () {
  document.querySelector(".players-modal").classList.toggle("hidden");
});

//RULES
document.querySelector(".rules").addEventListener("click", function () {
  document.querySelector(".rules-container").classList.toggle("hidden");
});

// If you won
function won(x) {
  document.querySelector(".won-lost").innerText =
    "You got it right, smart ass!";
  document.querySelector(".outcome-container").classList.remove("hidden");
  document
    .querySelector(".outcome-player-inner-container")
    .classList.remove("hidden");
  // playerMustDrinkWinner(x);
  setTimeout(() => {
    document.querySelector(".outcome-container").classList.add("hidden");
  }, 4000);
}

//If you lost
function lost(x) {
  document.querySelector(
    ".won-lost"
  ).innerText = `You got it wrong, dumbass! Drink for ${x} seconds`;
  document.querySelector(".outcome-container").classList.remove("hidden");
  document
    .querySelector(".outcome-player-inner-container")
    .classList.add("hidden");

  setTimeout(() => {
    document.querySelector(".outcome-container").classList.add("hidden");
  }, 4000);
}
// PLayer 1 up next
function player1UpNext() {
  document.querySelector(".up-next").innerHTML = `<p>${
    document.querySelector(".player1-name").innerText
  } is up next!</p>`;
}

// PLayer 2 up next
function player2UpNext() {
  document.querySelector(".up-next").innerHTML = `<p>${
    document.querySelector(".player2-name").innerText
  } is up next!</p> `;
}

// PLayer 3 up next
function player3UpNext() {
  document.querySelector(".up-next").innerHTML = `<p>${
    document.querySelector(".player3-name").innerText
  } is up next!</p>`;
}

// PLayer 4 up next
function player4UpNext() {
  document.querySelector(".up-next").innerHTML = `<p>${
    document.querySelector(".player4-name").innerText
  } is up next!</p>`;
}

// PLayer 5 up next
function player5UpNext() {
  document.querySelector(".up-next").innerHTML = `<p>${
    document.querySelector(".player5-name").innerText
  } is up next!</p>`;
}

// PLayer 6 up next
function player6UpNext() {
  document.querySelector(".up-next").innerHTML = `<p>${
    document.querySelector(".player6-name").innerText
  } is up next!</p>`;
}

function gameOver() {
  document.querySelector(".up-next").innerHTML = `Game Over`;
}

// const playerMustDrinkWinner = (x) => {
//   document.querySelector(".p1-drinks").addEventListener("click", () => {
//     document
//       .querySelector(".player-who-drinks-container")
//       .classList.remove("hidden");
//     document.querySelector(".player-who-drinks-container").innerHTML = `<p>${
//       document.querySelector(".player1-name").innerText
//     } has to drink for ${x} seconds</p>`;
//   });

//   document.querySelector(".p2-drinks").addEventListener("click", () => {
//     document
//       .querySelector(".player-who-drinks-container")
//       .classList.remove("hidden");
//     document.querySelector(".player-who-drinks-container").innerHTML = `<p>${
//       document.querySelector(".player2-name").innerText
//     } has to drink for ${x} seconds</p>`;
//   });

//   document.querySelector(".p3-drinks").addEventListener("click", () => {
//     document
//       .querySelector(".player-who-drinks-container")
//       .classList.remove("hidden");
//     document.querySelector(".player-who-drinks-container").innerHTML = `<p>${
//       document.querySelector(".player3-name").innerText
//     } has to drink for ${x} seconds</p>`;
//   });

//   document.querySelector(".p4-drinks").addEventListener("click", () => {
//     document
//       .querySelector(".player-who-drinks-container")
//       .classList.remove("hidden");
//     document.querySelector(".player-who-drinks-container").innerHTML = `<p>${
//       document.querySelector(".player4-name").innerText
//     } has to drink for ${x} seconds</p>`;
//   });

//   document.querySelector(".p5-drinks").addEventListener("click", () => {
//     document
//       .querySelector(".player-who-drinks-container")
//       .classList.remove("hidden");
//     document.querySelector(".player-who-drinks-container").innerHTML = `<p>${
//       document.querySelector(".player5-name").innerText
//     } has to drink for ${x} seconds</p>`;
//   });

//   document.querySelector(".p6-drinks").addEventListener("click", () => {
//     document
//       .querySelector(".player-who-drinks-container")
//       .classList.remove("hidden");
//     document.querySelector(".player-who-drinks-container").innerHTML = `<p>${
//       document.querySelector(".player6-name").innerText
//     } has to drink for ${x} seconds</p>`;
//   });

//   setTimeout(() => {
//     document
//       .querySelector(".player-who-drinks-container")
//       .classList.add("hidden");
//   }, 0);
// };

//

function twoPlayers() {
  const p1FirstCard = async () => {
    let x = 2;
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player2UpNext();
            won(x);

            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);

            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player2UpNext();
            won(x);

            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);

            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p1SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] > convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1ThirdCard = async () => {
    let x = 6;
    //IN
    document.querySelector(".in").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document.querySelector(".diamonds").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "DIAMONDS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //SPADES
    document.querySelector(".spades").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FirstCard = async () => {
    let x = 2;
    document.querySelector(".red-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            p1SecondCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player1UpNext();
            won(x);

            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p2SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] > convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //IN

  const p2ThirdCard = async () => {
    let x = 6;
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player1UpNext();
            p1FourthCard();

            won(x);
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              gameOver();
              won(x);
            } else {
              gameOver();
              lost(x);
            }

            player2Cards.push(convertToNum(data.cards[0].value));
            console.log(player2Cards);

            document.querySelector(".p2-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "SPADES") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "CLUBS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  p1FirstCard();
}

function threePlayers() {
  const p1FirstCard = async () => {
    let x = 2;
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player2UpNext();
            won(x);

            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player2UpNext();
            won(x);
            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p1SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] > convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1ThirdCard = async () => {
    let x = 6;
    //IN
    document.querySelector(".in").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document.querySelector(".diamonds").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "DIAMONDS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //SPADES
    document.querySelector(".spades").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player2UpNext();
            won(XMLHttpRequestUpload);
            p2FourthCard();
          } else {
            player2UpNext();

            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FirstCard = async () => {
    let x = 2;

    document.querySelector(".red-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player3UpNext();
            won(x);
            p3FirstCard();
          } else {
            player3UpNext();
            p3FirstCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player3UpNext();
            won(x);

            p3FirstCard();
          } else {
            player3UpNext();
            lost(x);
            p3FirstCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p2SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] > convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //IN

  const p2ThirdCard = async () => {
    let x = 6;
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player3UpNext();
            p3ThirdCard();

            won(x);
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player3UpNext();
            won(x);
            p3ThirdCard();
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              player3UpNext();
              p3FourthCard();
              won(x);
            } else {
              player3UpNext();
              p3FourthCard();
              lost(x);
            }

            player2Cards.push(convertToNum(data.cards[0].value));
            console.log(player2Cards);
            //   document.querySelector(".player1").src = data.cards[0].image;

            document.querySelector(".p2-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "SPADES") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            p3FourthCard();
            player3UpNext();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FirstCard = () => {
    let x = 2;
    //PLAYER 3
    document.querySelector(".red-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            p1ThirdCard();
            lost(x);
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] > convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              gameOver();
              won(x);
            } else {
              gameOver();
              lost(x);
            }

            player3Cards.push(convertToNum(data.cards[0].value));
            console.log(player3Cards);
            //   document.querySelector(".player1").src = data.cards[0].image;

            document.querySelector(".p3-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "CLUBS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  p1FirstCard();
}

function convertToNum(val) {
  if (val === "ACE") {
    return 14;
  } else if (val === "KING") {
    return 13;
  } else if (val === "QUEEN") {
    return 12;
  } else if (val === "JACK") {
    return 11;
  } else {
    return Number(val);
  }
}

function fourPlayers() {
  const p1FirstCard = async () => {
    let x = 2;
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player2UpNext();
            won(x);

            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player2UpNext();
            won(x);
            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p1SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] > convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1ThirdCard = async () => {
    let x = 6;
    //IN
    document.querySelector(".in").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1FourthCard = async () => {
    //DIAMONDS
    document.querySelector(".diamonds").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "DIAMONDS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //SPADES
    document.querySelector(".spades").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FirstCard = async () => {
    let x = 2;
    document.querySelector(".red-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player3UpNext();
            won(x);
            p3FirstCard();
            // p1SecondCard();
          } else {
            player3UpNext();
            p3FirstCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-2").addEventListener("click", function () {
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player3UpNext();
            won(x);
            p3FirstCard();
          } else {
            player3UpNext();
            p3FirstCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p2SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (player2Cards[0] > convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //IN

  const p2ThirdCard = async () => {
    let x = 6;
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            p3ThirdCard();
            player3UpNext();
            won(x);
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            p3ThirdCard();
            player3UpNext();
            won(x);
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player3UpNext();
              p3FourthCard();
              won(x);
            } else {
              player3UpNext();
              p3FourthCard();
              lost(x);
            }
            player2Cards.push(convertToNum(data.cards[0].value));
            console.log(player2Cards);
            document.querySelector(".p2-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FirstCard = () => {
    let x = 2;
    //PLAYER 3
    document.querySelector(".red-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player4UpNext();
            won(x);
            p4FirstCard();
          } else {
            player4UpNext();
            lost(x);
            p4FirstCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-3").addEventListener("click", function () {
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player4UpNext();
            won(x);
            p4FirstCard();
          } else {
            player4UpNext();
            lost(x);
            p4FirstCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            player4UpNext();
            won(x);
            p4SecondCard();
          } else {
            player4UpNext();
            p4SecondCard();
            lost(x);
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] > convertToNum(data.cards[0].value)) {
            player4UpNext();
            won(x);
            p4SecondCard();
          } else {
            player4UpNext();
            p4SecondCard();
            lost(x);
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player4UpNext();
            won(x);
            p4ThirdCard();
          } else {
            player4UpNext();
            lost(x);
            p4ThirdCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player4UpNext();
            won(x);
            p4ThirdCard();
          } else {
            player4UpNext();
            lost(x);
            p4ThirdCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player4UpNext();
              won(x);
              p4FourthCard();
            } else {
              player4UpNext();
              lost(x);
              p4FourthCard();
            }

            player3Cards.push(convertToNum(data.cards[0].value));
            console.log(player3Cards);
            document.querySelector(".p3-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4FirstCard = () => {
    let x = 2;
    document.querySelector(".red-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);
          document.querySelector(".p4-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-4").addEventListener("click", function () {
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] < convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);
          document.querySelector(".p4-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] > convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-4")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              gameOver();
              won(x);
            } else {
              gameOver();
              lost(x);
            }

            player4Cards.push(convertToNum(data.cards[0].value));
            console.log(player4Cards);

            document.querySelector(".p4-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "SPADES") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  p1FirstCard();
}

function fivePlayers() {
  const p1FirstCard = async () => {
    let x = 2;
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player2UpNext();
            won(x);

            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player2UpNext();
            won(x);
            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p1SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] > convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1ThirdCard = async () => {
    let x = 6;
    //IN
    document.querySelector(".in").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1FourthCard = async () => {
    //DIAMONDS
    document.querySelector(".diamonds").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "DIAMONDS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //SPADES
    document.querySelector(".spades").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FirstCard = async () => {
    let x = 2;
    document.querySelector(".red-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player3UpNext();
            won(x);
            p3FirstCard();
            // p1SecondCard();
          } else {
            player3UpNext();
            p3FirstCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-2").addEventListener("click", function () {
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player3UpNext();
            won(x);
            p3FirstCard();
          } else {
            player3UpNext();
            p3FirstCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p2SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (player2Cards[0] > convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //IN

  const p2ThirdCard = async () => {
    let x = 6;
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            p3ThirdCard();
            player3UpNext();
            won(x);
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            p3ThirdCard();
            player3UpNext();
            won(x);
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player3UpNext();
              p3FourthCard();
              won(x);
            } else {
              player3UpNext();
              p3FourthCard();
              lost(x);
            }
            player2Cards.push(convertToNum(data.cards[0].value));
            console.log(player2Cards);
            document.querySelector(".p2-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FirstCard = () => {
    let x = 2;
    //PLAYER 3
    document.querySelector(".red-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player4UpNext();
            won(x);
            p4FirstCard();
          } else {
            player4UpNext();
            lost(x);
            p4FirstCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-3").addEventListener("click", function () {
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player4UpNext();
            won(x);
            p4FirstCard();
          } else {
            player4UpNext();
            lost(x);
            p4FirstCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            player4UpNext();
            won(x);
            p4SecondCard();
          } else {
            player4UpNext();
            p4SecondCard();
            lost(x);
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] > convertToNum(data.cards[0].value)) {
            player4UpNext();
            won(x);
            p4SecondCard();
          } else {
            player4UpNext();
            p4SecondCard();
            lost(x);
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player4UpNext();
            won(x);
            p4ThirdCard();
          } else {
            player4UpNext();
            lost(x);
            p4ThirdCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player4UpNext();
            won(x);
            p4ThirdCard();
          } else {
            player4UpNext();
            lost(x);
            p4ThirdCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player4UpNext();
              won(x);
              p4FourthCard();
            } else {
              player4UpNext();
              lost(x);
              p4FourthCard();
            }

            player3Cards.push(convertToNum(data.cards[0].value));
            console.log(player3Cards);
            document.querySelector(".p3-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4FirstCard = () => {
    let x = 2;
    document.querySelector(".red-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player5UpNext();
            won(x);
            p5FirstCard();
          } else {
            player5UpNext();
            lost(x);
            p5FirstCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);
          document.querySelector(".p4-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player5UpNext();
            won(x);
            p5FirstCard();
          } else {
            player5UpNext();
            lost(x);
            p5FirstCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] < convertToNum(data.cards[0].value)) {
            player5UpNext();
            won(x);
            p5SecondCard();
          } else {
            player5UpNext();
            lost(x);
            p5SecondCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] > convertToNum(data.cards[0].value)) {
            won(x);
            p5SecondCard();
          } else {
            lost(x);
            p5SecondCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player5UpNext();
            won(x);
            p5ThirdCard();
          } else {
            player5UpNext();
            lost(x);
            p5ThirdCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player5UpNext();
            won(x);
            p5ThirdCard();
          } else {
            player5UpNext();
            lost(x);
            p5ThirdCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-4")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              player5UpNext();
              won(x);
              p5FourthCard();
            } else {
              player5UpNext();
              lost(x);
              p5FourthCard();
            }

            player4Cards.push(convertToNum(data.cards[0].value));
            console.log(player4Cards);

            document.querySelector(".p4-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "SPADES") {
            player5UpNext();
            won(x);
            p5FourthCard();
          } else {
            player5UpNext();
            lost(x);
            p5FourthCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player5UpNext();
            won(x);
            p5FourthCard();
          } else {
            player5UpNext();
            lost(x);
            p5FourthCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player5UpNext();
            won(x);
            p5FourthCard();
          } else {
            player5UpNext();
            lost(x);
            p5FourthCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5FirstCard = () => {
    let x = 2;
    document.querySelector(".red-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player5Cards[0] < convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player5Cards[0] > convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player5Cards[0];
          const card2 = player5Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player5Cards[0];
          const card2 = player5Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-5")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              gameOver();
              won(x);
            } else {
              gameOver();
              lost(x);
            }

            player5Cards.push(convertToNum(data.cards[0].value));
            console.log(player5Cards);

            document.querySelector(".p5-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "SPADES") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);

          document.querySelector(".p5-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  p1FirstCard();
}

function sixPlayers() {
  const p1FirstCard = async () => {
    let x = 2;
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player2UpNext();
            won(x);

            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player2UpNext();
            won(x);
            p2FirstCard();
          } else {
            player2UpNext();
            lost(x);
            p2FirstCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p1SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] > convertToNum(data.cards[0].value)) {
            player2UpNext();
            won(x);
            p2SecondCard();
          } else {
            player2UpNext();
            lost(x);
            p2SecondCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1ThirdCard = async () => {
    let x = 6;
    //IN
    document.querySelector(".in").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player1Cards[0];
          const card2 = player1Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player2UpNext();
            won(x);
            p2ThirdCard();
          } else {
            player2UpNext();
            lost(x);
            p2ThirdCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p1FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document.querySelector(".diamonds").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "DIAMONDS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //SPADES
    document.querySelector(".spades").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }
          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player2UpNext();
            won(x);
            p2FourthCard();
          } else {
            player2UpNext();
            lost(x);
            p2FourthCard();
          }

          player1Cards.push(convertToNum(data.cards[0].value));
          console.log(player1Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p1-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FirstCard = async () => {
    let x = 2;
    document.querySelector(".red-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player3UpNext();
            won(x);
            p3FirstCard();
            // p1SecondCard();
          } else {
            player3UpNext();
            p3FirstCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-2").addEventListener("click", function () {
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player3UpNext();
            won(x);
            p3FirstCard();
          } else {
            player3UpNext();
            p3FirstCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //HIGHER
  const p2SecondCard = async () => {
    let x = 4;
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (player2Cards[0] > convertToNum(data.cards[0].value)) {
            player3UpNext();
            won(x);
            p3SecondCard();
          } else {
            player3UpNext();
            lost(x);
            p3SecondCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  //IN

  const p2ThirdCard = async () => {
    let x = 6;
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            p3ThirdCard();
            player3UpNext();
            won(x);
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);

          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            p3ThirdCard();
            player3UpNext();
            won(x);
          } else {
            player3UpNext();
            lost(x);
            p3ThirdCard();
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p2FourthCard = async () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player3UpNext();
              p3FourthCard();
              won(x);
            } else {
              player3UpNext();
              p3FourthCard();
              lost(x);
            }
            player2Cards.push(convertToNum(data.cards[0].value));
            console.log(player2Cards);
            document.querySelector(".p2-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }
          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player3UpNext();
            p3FourthCard();
            won(x);
          } else {
            player3UpNext();
            p3FourthCard();
            lost(x);
          }

          player2Cards.push(convertToNum(data.cards[0].value));
          console.log(player2Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p2-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FirstCard = () => {
    let x = 2;
    //PLAYER 3
    document.querySelector(".red-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player4UpNext();
            won(x);
            p4FirstCard();
          } else {
            player4UpNext();
            lost(x);
            p4FirstCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-3").addEventListener("click", function () {
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player4UpNext();
            won(x);
            p4FirstCard();
          } else {
            player4UpNext();
            lost(x);
            p4FirstCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            player4UpNext();
            won(x);
            p4SecondCard();
          } else {
            player4UpNext();
            p4SecondCard();
            lost(x);
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] > convertToNum(data.cards[0].value)) {
            player4UpNext();
            won(x);
            p4SecondCard();
          } else {
            player4UpNext();
            p4SecondCard();
            lost(x);
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player4UpNext();
            won(x);
            p4ThirdCard();
          } else {
            player4UpNext();
            lost(x);
            p4ThirdCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);

          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player4UpNext();
            won(x);
            p4ThirdCard();
          } else {
            player4UpNext();
            lost(x);
            p4ThirdCard();
          }
          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p3FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player4UpNext();
              won(x);
              p4FourthCard();
            } else {
              player4UpNext();
              lost(x);
              p4FourthCard();
            }

            player3Cards.push(convertToNum(data.cards[0].value));
            console.log(player3Cards);
            document.querySelector(".p3-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            player4UpNext();
            won(x);
            p4FourthCard();
          } else {
            player4UpNext();
            lost(x);
            p4FourthCard();
          }

          player3Cards.push(convertToNum(data.cards[0].value));
          console.log(player3Cards);
          document.querySelector(".p3-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4FirstCard = () => {
    let x = 2;
    document.querySelector(".red-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player5UpNext();
            won(x);
            p5FirstCard();
          } else {
            player5UpNext();
            lost(x);
            p5FirstCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);
          document.querySelector(".p4-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player5UpNext();
            won(x);
            p5FirstCard();
          } else {
            player5UpNext();
            lost(x);
            p5FirstCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] < convertToNum(data.cards[0].value)) {
            player5UpNext();
            won(x);
            p5SecondCard();
          } else {
            player5UpNext();
            lost(x);
            p5SecondCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] > convertToNum(data.cards[0].value)) {
            won(x);
            p5SecondCard();
          } else {
            lost(x);
            p5SecondCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player5UpNext();
            won(x);
            p5ThirdCard();
          } else {
            player5UpNext();
            lost(x);
            p5ThirdCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player5UpNext();
            won(x);
            p5ThirdCard();
          } else {
            player5UpNext();
            lost(x);
            p5ThirdCard();
          }

          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);

          document.querySelector(".p4-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p4FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-4")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player5UpNext();
              won(x);
              p5FourthCard();
            } else {
              player5UpNext();
              lost(x);
              p5FourthCard();
            }
            player4Cards.push(convertToNum(data.cards[0].value));
            console.log(player4Cards);
            document.querySelector(".p4-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player5UpNext();
            won(x);
            p5FourthCard();
          } else {
            player5UpNext();
            lost(x);
            p5FourthCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);
          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            player5UpNext();
            won(x);
            p5FourthCard();
          } else {
            player5UpNext();
            lost(x);
            p5FourthCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);
          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "CLUBS") {
            player5UpNext();
            won(x);
            p5FourthCard();
          } else {
            player5UpNext();
            lost(x);
            p5FourthCard();
          }
          player4Cards.push(convertToNum(data.cards[0].value));
          console.log(player4Cards);
          document.querySelector(".p4-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5FirstCard = () => {
    let x = 2;
    document.querySelector(".red-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player6UpNext();
            won(x);
            p6FirstCard();
          } else {
            player6UpNext();
            lost(x);
            p6FirstCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player6UpNext();
            won(x);
            p6FirstCard();
          } else {
            player6UpNext();
            lost(x);
            p6FirstCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (player5Cards[0] < convertToNum(data.cards[0].value)) {
            player6UpNext();
            won(x);
            p6SecondCard();
          } else {
            player6UpNext();
            lost(x);
            p6SecondCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (player5Cards[0] > convertToNum(data.cards[0].value)) {
            player6UpNext();
            won(x);
            p6SecondCard();
          } else {
            player6UpNext();
            lost(x);
            p6SecondCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player5Cards[0];
          const card2 = player5Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player6UpNext();
            won(x);
            p6ThirdCard();
          } else {
            player6UpNext();
            lost(x);
            p6ThirdCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player5Cards[0];
          const card2 = player5Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player6UpNext();
            won(x);
            p6ThirdCard();
          } else {
            player6UpNext();
            lost(x);
            p6ThirdCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p5FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-5")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              player6UpNext();
              won(x);
              p6FourthCard();
            } else {
              player6UpNext();
              lost(x);
              p6FourthCard();
            }
            player5Cards.push(convertToNum(data.cards[0].value));
            console.log(player5Cards);
            document.querySelector(".p5-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            player6UpNext();
            won(x);
            p6FourthCard();
          } else {
            player6UpNext();
            lost(x);
            p6FourthCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            player6UpNext();
            won(x);
            p6FourthCard();
          } else {
            player6UpNext();
            lost(x);
            p6FourthCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "CLUBS") {
            player6UpNext();
            won(x);
            p6FourthCard();
          } else {
            player6UpNext();
            lost(x);
            p6FourthCard();
          }
          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          document.querySelector(".p5-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p6FirstCard = () => {
    let x = 2;
    document.querySelector(".red-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          document.querySelector(".p6-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //BLACK
    document.querySelector(".black-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            player1UpNext();
            won(x);
            p1SecondCard();
          } else {
            player1UpNext();
            lost(x);
            p1SecondCard();
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          document.querySelector(".p6-card1").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p6SecondCard = () => {
    let x = 4;
    //HIGHER
    document.querySelector(".higher-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (player6Cards[0] < convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          document.querySelector(".p6-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //LOWER
    document.querySelector(".lower-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (player6Cards[0] > convertToNum(data.cards[0].value)) {
            player1UpNext();
            won(x);
            p1ThirdCard();
          } else {
            player1UpNext();
            lost(x);
            p1ThirdCard();
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          document.querySelector(".p6-card2").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p6ThirdCard = () => {
    let x = 6;
    //IN
    document.querySelector(".in-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player6Cards[0];
          const card2 = player6Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          document.querySelector(".p6-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //OUT
    document.querySelector(".out-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          const num = convertToNum(data.cards[0].value);
          const card1 = player6Cards[0];
          const card2 = player6Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            player1UpNext();
            won(x);
            p1FourthCard();
          } else {
            player1UpNext();
            lost(x);
            p1FourthCard();
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);

          document.querySelector(".p6-card3").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p6FourthCard = () => {
    let x = 8;
    //DIAMONDS
    document
      .querySelector(".diamonds-6")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            if (data.cards[0].suit === "DIAMONDS") {
              gameOver();
              won(x);
            } else {
              gameOver();
              lost(x);
            }
            player6Cards.push(convertToNum(data.cards[0].value));
            console.log(player6Cards);
            document.querySelector(".p6-card4").src = data.cards[0].image;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });

    //SPADES
    document.querySelector(".spades-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "SPADES") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          document.querySelector(".p6-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //HEARTS
    document.querySelector(".hearts-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "HEARTS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);

          document.querySelector(".p6-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });

    //CLUBS
    document.querySelector(".clubs-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (data.cards[0].suit === "CLUBS") {
            gameOver();
            won(x);
          } else {
            gameOver();
            lost(x);
          }
          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          document.querySelector(".p6-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };
  p1FirstCard();
}

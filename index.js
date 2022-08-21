let deckId = "";

let player1Cards = [];
let player2Cards = [];
let player3Cards = [];
let player4Cards = [];
let player5Cards = [];
let player6Cards = [];

let playerCount = 0;

document.querySelector(".submit-form").addEventListener("click", function (e) {
  e.preventDefault();
  let player1Name = document.querySelector(".player-1-name").value;
  let player2Name = document.querySelector(".player-2-name").value;
  let player3Name = document.querySelector(".player-3-name").value;
  let player4Name = document.querySelector(".player-4-name").value;
  let player5Name = document.querySelector(".player-5-name").value;
  let player6Name = document.querySelector(".player-6-name").value;

  console.log(player1Name);
  document.querySelector(".player1-name").innerText = player1Name;
  document.querySelector(".player2-name").innerText = player2Name;
  document.querySelector(".player3-name").innerText = player3Name;
  document.querySelector(".player4-name").innerText = player4Name;
  document.querySelector(".player5-name").innerText = player5Name;
  document.querySelector(".player6-name").innerText = player6Name;

  document.querySelector(".player1-name-btn").innerText = player1Name;
  document.querySelector(".player2-name-btn").innerText = player2Name;
  document.querySelector(".player3-name-btn").innerText = player3Name;
  document.querySelector(".player4-name-btn").innerText = player4Name;
  document.querySelector(".player5-name-btn").innerText = player5Name;
  document.querySelector(".player6-name-btn").innerText = player6Name;

  document.querySelector(".players-modal").classList.add("hidden");
  document.querySelector(".game-container").classList.toggle("hidden");
});

// function amountOfPlayers() {
//   const [...amountOfPlayers] = document.querySelectorAll(".player-select");
//   console.log(amountOfPlayers);

//   if(amountOfPlayers[0])
// }

// console.log(amountOfPlayers());

// PLAYER # SELECT

document.querySelector(".player-1").addEventListener("click", function () {
  document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".player3").classList.add("hidden");
  document.querySelector(".player2").classList.add("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
});

document.querySelector(".player-2").addEventListener("click", function () {
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
  document.querySelector(".player2-form").classList.remove("hidden");
  document.querySelector(".player3-form").classList.remove("hidden");
  document.querySelector(".player4-form").classList.remove("hidden");
  document.querySelector(".player5-form").classList.remove("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
  fivePlayers();
});

document.querySelector(".player-6").addEventListener("click", function () {
  // document.querySelector(".player4").classList.add("hidden");
  document.querySelector(".player2-form").classList.remove("hidden");
  document.querySelector(".player3-form").classList.remove("hidden");
  document.querySelector(".player4-form").classList.remove("hidden");
  document.querySelector(".player5-form").classList.remove("hidden");
  document.querySelector(".player6-form").classList.remove("hidden");
  document.querySelector(".num-of-players-container").classList.add("hidden");
  document.querySelector(".players-form").classList.remove("hidden");
  sixPlayers();
});

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

function won() {
  document.querySelector(".won-lost").innerText =
    "You got it right, smart ass!";
  document.querySelector(".outcome-container").classList.remove("hidden");
  document
    .querySelector(".outcome-player-container")
    .classList.remove("hidden");

  setTimeout(() => {
    document.querySelector(".outcome-container").classList.add("hidden");
  }, 1000);
}

function lost() {
  document.querySelector(".won-lost").innerText = "You got it wrong, dumbass!";
  document.querySelector(".outcome-container").classList.remove("hidden");
  document.querySelector(".outcome-player-container").classList.add("hidden");

  setTimeout(() => {
    document.querySelector(".outcome-container").classList.add("hidden");
  }, 1000);
}

function twoPlayers() {
  const p1FirstCard = async () => {
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();

            p2FirstCard();
          } else {
            lost();
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
            won();
            p2FirstCard();
          } else {
            lost();
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
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p2SecondCard();
          } else {
            lost();
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
            // document.querySelector(".higher-result").innerText = "WIN";
            won();
            p2SecondCard();
          } else {
            // document.querySelector(".higher-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".in-result").innerText = "WIN";
            won();
            p2ThirdCard();
          } else {
            // document.querySelector(".in-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".in-result").innerText = "WIN";
            won();
            p2ThirdCard();
          } else {
            // document.querySelector(".in-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            won();
            p3FirstCard();
            p1SecondCard();
          } else {
            // document.querySelector(".color-result-2").innerText = "LOST";
            p1SecondCard();
            lost();
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
            // document.querySelector(".color-result-2").innerText = "WON";
            won();

            p1SecondCard();
          } else {
            // document.querySelector(".color-result-2").innerText = "LOST";
            lost();
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
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-2").innerText = "WIN";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-2").innerText = "LOST";
            lost();
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
            // document.querySelector(".higher-result-2").innerText = "WON";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-2").innerText = "LOST";
            lost();
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
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            p1FourthCard();
            // document.querySelector(".in-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".in-result-2").innerText = "LOST";
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-2").innerText = "WON";
            won();
            p1FourthCard();
          } else {
            // document.querySelector(".in-result-2").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            // let chosenSuit = document.querySelector(".suit").value;

            if (data.cards[0].suit === "DIAMONDS") {
              // document.querySelector(".suit-result-2").innerText = "WON";
              won();
            } else {
              // document.querySelector(".suit-result-2").innerText = "LOST";
              lost();
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
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            // document.querySelector(".suit-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            lost();
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

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            // document.querySelector(".suit-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            lost();
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

  p1FirstCard();
}

function threePlayers() {
  const p1FirstCard = async () => {
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            // document.querySelector(".color-result").innerText = "WON";
            won();

            p2FirstCard();
          } else {
            // document.querySelector(".color-result").innerText = "LOST";
            lost();
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
            won();
            p2FirstCard();
          } else {
            lost();
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
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p2SecondCard();
          } else {
            lost();
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
            // document.querySelector(".higher-result").innerText = "WIN";
            won();
            p2SecondCard();
          } else {
            // document.querySelector(".higher-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".in-result").innerText = "WIN";
            won();
            p2ThirdCard();
          } else {
            // document.querySelector(".in-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".in-result").innerText = "WIN";
            won();
            p2ThirdCard();
          } else {
            // document.querySelector(".in-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            won();
            p3FirstCard();
            // p1SecondCard();
          } else {
            // document.querySelector(".color-result-2").innerText = "LOST";
            p3FirstCard();
            lost();
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
            // document.querySelector(".color-result-2").innerText = "WON";
            won();

            p3FirstCard();
          } else {
            // document.querySelector(".color-result-2").innerText = "LOST";
            lost();
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
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-2").innerText = "WIN";
            won();
            p3SecondCard();
          } else {
            // document.querySelector(".higher-result-2").innerText = "LOST";
            lost();
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
            // document.querySelector(".higher-result-2").innerText = "WON";
            won();
            p3SecondCard();
          } else {
            // document.querySelector(".higher-result-2").innerText = "LOST";
            lost();
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
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            p3ThirdCard();
            // document.querySelector(".in-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".in-result-2").innerText = "LOST";
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-2").innerText = "WON";
            won();
            p3ThirdCard();
          } else {
            // document.querySelector(".in-result-2").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            // let chosenSuit = document.querySelector(".suit").value;

            if (data.cards[0].suit === "DIAMONDS") {
              // document.querySelector(".suit-result-2").innerText = "WON";
              p3FourthCard();
              won();
            } else {
              // document.querySelector(".suit-result-2").innerText = "LOST";
              p3FourthCard();
              lost();
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
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            // document.querySelector(".suit-result-2").innerText = "WON";
            p3FourthCard();
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            p3FourthCard();
            lost();
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
            // document.querySelector(".suit-result-2").innerText = "WON";
            p3FourthCard();
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            p3FourthCard();
            lost();
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

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            p3FourthCard();
            // document.querySelector(".suit-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            p3FourthCard();
            lost();
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
    //PLAYER 3
    document.querySelector(".red-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            // document.querySelector(".color-result-3").innerText = "WIN";
            won();
            p1SecondCard();
          } else {
            // document.querySelector(".color-result-3").innerText = "LOST";
            lost();
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
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            // document.querySelector(".color-result-3").innerText = "WON";
            won();
            p1SecondCard();
          } else {
            // document.querySelector(".color-result-3").innerText = "LOST";
            lost();
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
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-3").innerText = "WIN";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-3").innerText = "LOST";
            p1ThirdCard();
            lost();
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
            // document.querySelector(".higher-result-3").innerText = "WON";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-3").innerText = "LOST";
            lost();
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
    //IN
    document.querySelector(".in-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            // document.querySelector(".in-result-3").innerText = "WON";
            won();
            p1FourthCard();
          } else {
            // document.querySelector(".in-result-3").innerText = "LOST";
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-3").innerText = "WON";
            won();
            p1FourthCard();
          } else {
            // document.querySelector(".in-result-3").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            // let chosenSuit = document.querySelector(".suit").value;

            if (data.cards[0].suit === "DIAMONDS") {
              // document.querySelector(".suit-result-3").innerText = "WON";
              won();
              // p1FourthCard();
            } else {
              // document.querySelector(".suit-result-3").innerText = "LOST";
              lost();
              // p1FourthCard();
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
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            // document.querySelector(".suit-result-3").innerText = "WON";
            won();
            // p1FourthCard();
          } else {
            // document.querySelector(".suit-result-3").innerText = "LOST";
            // p1FourthCard();
            lost();
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

    //HEARTS
    document.querySelector(".hearts-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            // document.querySelector(".suit-result-3").innerText = "WON";
            won();
            // p1FourthCard();
          } else {
            // document.querySelector(".suit-result-3").innerText = "LOST";
            lost();
            // p1FourthCard();
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

    //CLUBS
    document.querySelector(".clubs-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            // document.querySelector(".suit-result-3").innerText = "WON";
            // p1FourthCard();
            won();
          } else {
            // document.querySelector(".suit-result-3").innerText = "LOST";
            // p1FourthCard();
            lost();
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
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            // document.querySelector(".color-result").innerText = "WON";
            won();

            p2FirstCard();
          } else {
            // document.querySelector(".color-result").innerText = "LOST";
            lost();
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
            won();
            p2FirstCard();
          } else {
            lost();
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
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p2SecondCard();
          } else {
            lost();
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
            // document.querySelector(".higher-result").innerText = "WIN";
            won();
            p2SecondCard();
          } else {
            // document.querySelector(".higher-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".in-result").innerText = "WIN";
            won();
            p2ThirdCard();
          } else {
            // document.querySelector(".in-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".in-result").innerText = "WIN";
            won();
            p2ThirdCard();
          } else {
            // document.querySelector(".in-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            // document.querySelector(".suit-result").innerText = "LOST";
            lost();
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

    //CLUBS
    document.querySelector(".clubs").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            // document.querySelector(".suit-result").innerText = "WIN";
            won();
            p2FourthCard();
          } else {
            document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
            won();
            p3FirstCard();
            // p1SecondCard();
          } else {
            // document.querySelector(".color-result-2").innerText = "LOST";
            p3FirstCard();
            lost();
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
            // document.querySelector(".color-result-2").innerText = "WON";
            won();

            p3FirstCard();
          } else {
            // document.querySelector(".color-result-2").innerText = "LOST";
            lost();
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
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-2").innerText = "WIN";
            won();
            p3SecondCard();
          } else {
            // document.querySelector(".higher-result-2").innerText = "LOST";
            lost();
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
            // document.querySelector(".higher-result-2").innerText = "WON";
            won();
            p3SecondCard();
          } else {
            // document.querySelector(".higher-result-2").innerText = "LOST";
            lost();
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
    document.querySelector(".in-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            p3ThirdCard();
            // document.querySelector(".in-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".in-result-2").innerText = "LOST";
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player2Cards[0];
          const card2 = player2Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-2").innerText = "WON";
            won();
            p3ThirdCard();
          } else {
            // document.querySelector(".in-result-2").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            // let chosenSuit = document.querySelector(".suit").value;

            if (data.cards[0].suit === "DIAMONDS") {
              // document.querySelector(".suit-result-2").innerText = "WON";
              p3FourthCard();
              won();
            } else {
              // document.querySelector(".suit-result-2").innerText = "LOST";
              p3FourthCard();
              lost();
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
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            // document.querySelector(".suit-result-2").innerText = "WON";
            p3FourthCard();
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            p3FourthCard();
            lost();
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
            // document.querySelector(".suit-result-2").innerText = "WON";
            p3FourthCard();
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            p3FourthCard();
            lost();
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

    //CLUBS
    document.querySelector(".clubs-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            p3FourthCard();
            // document.querySelector(".suit-result-2").innerText = "WON";
            won();
          } else {
            // document.querySelector(".suit-result-2").innerText = "LOST";
            p3FourthCard();
            lost();
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
    //PLAYER 3
    document.querySelector(".red-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            // document.querySelector(".color-result-3").innerText = "WIN";
            won();
            p4FirstCard();
          } else {
            // document.querySelector(".color-result-3").innerText = "LOST";
            lost();
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
            // document.querySelector(".color-result-3").innerText = "WON";
            won();
            p4FirstCard();
          } else {
            // document.querySelector(".color-result-3").innerText = "LOST";
            lost();
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
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-3").innerText = "WIN";
            won();
            p4SecondCard();
          } else {
            // document.querySelector(".higher-result-3").innerText = "LOST";
            p4SecondCard();
            lost();
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
            // document.querySelector(".higher-result-3").innerText = "WON";
            won();
            p4SecondCard();
          } else {
            // document.querySelector(".higher-result-3").innerText = "LOST";
            lost();
            p4SecondCard();
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
    //IN
    document.querySelector(".in-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            // document.querySelector(".in-result-3").innerText = "WON";
            won();
            p4ThirdCard();
          } else {
            // document.querySelector(".in-result-3").innerText = "LOST";
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-3").innerText = "WON";
            won();
            p4ThirdCard();
          } else {
            // document.querySelector(".in-result-3").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            // let chosenSuit = document.querySelector(".suit").value;

            if (data.cards[0].suit === "DIAMONDS") {
              // document.querySelector(".suit-result-3").innerText = "WON";
              won();
              p4FourthCard();
            } else {
              // document.querySelector(".suit-result-3").innerText = "LOST";
              lost();
              p4FourthCard();
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
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            // document.querySelector(".suit-result-3").innerText = "WON";
            won();
            p4FourthCard();
          } else {
            // document.querySelector(".suit-result-3").innerText = "LOST";
            p4FourthCard();
            lost();
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

    //HEARTS
    document.querySelector(".hearts-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "HEARTS") {
            // document.querySelector(".suit-result-3").innerText = "WON";
            won();
            p4FourthCard();
          } else {
            // document.querySelector(".suit-result-3").innerText = "LOST";
            lost();
            p4FourthCard();
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

    //CLUBS
    document.querySelector(".clubs-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (data.cards[0].suit === "CLUBS") {
            // document.querySelector(".suit-result-3").innerText = "WON";
            p4FourthCard();
            won();
          } else {
            // document.querySelector(".suit-result-3").innerText = "LOST";
            p4FourthCard();
            lost();
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
  };

  const p4FirstCard = () => {
    document.querySelector(".red-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            // document.querySelector(".color-result-4").innerText = "WIN";
            won();
            p1SecondCard();
          } else {
            lost();
            p1SecondCard();
            // document.querySelector(".color-result-4").innerText = "LOST";
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
            // document.querySelector(".color-result-4").innerText = "WON";
            won();
            p1SecondCard();
          } else {
            // document.querySelector(".color-result-4").innerText = "LOST";
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
    //HIGHER
    document.querySelector(".higher-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-4").innerText = "WIN";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-4").innerText = "LOST";
            lost();
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
            // document.querySelector(".higher-result-4").innerText = "WON";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-4").innerText = "LOST";
            lost();
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
    //IN
    document.querySelector(".in-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            // document.querySelector(".in-result-4").innerText = "WON";
            won();
            p1FourthCard();
          } else {
            // document.querySelector(".in-result-4").innerText = "LOST";
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player4Cards[0];
          const card2 = player4Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-4").innerText = "WON";
            won();
            p1FourthCard();
          } else {
            // document.querySelector(".in-result-4").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-4")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              won();
            } else {
              lost();
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
            won();
          } else {
            lost();
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
            won();
          } else {
            lost();
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
            won();
          } else {
            lost();
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
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();

            p2FirstCard();
          } else {
            lost();
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
            won();
            p2FirstCard();
          } else {
            lost();
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
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p2SecondCard();
          } else {
            lost();
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
            won();
            p2SecondCard();
          } else {
            lost();
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
            won();
            p2ThirdCard();
          } else {
            lost();
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
            won();
            p2ThirdCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            lost();
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
    document.querySelector(".red-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();
            p3FirstCard();
          } else {
            p3FirstCard();
            lost();
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
            won();

            p3FirstCard();
          } else {
            lost();
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
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p3SecondCard();
          } else {
            lost();
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
            won();
            p3SecondCard();
          } else {
            lost();
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

            won();
          } else {
            lost();
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
            won();
            p3ThirdCard();
          } else {
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              p3FourthCard();
              won();
            } else {
              p3FourthCard();
              lost();
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
            p3FourthCard();
            won();
          } else {
            p3FourthCard();
            lost();
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
            p3FourthCard();
            won();
          } else {
            p3FourthCard();
            lost();
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

            won();
          } else {
            p3FourthCard();
            lost();
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
            won();
            p4FirstCard();
          } else {
            lost();
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
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            won();
            p4FirstCard();
          } else {
            lost();
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
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p4SecondCard();
          } else {
            p4SecondCard();
            lost();
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
            won();
            p4SecondCard();
          } else {
            lost();
            p4SecondCard();
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
            won();
            p4ThirdCard();
          } else {
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            won();
            p4ThirdCard();
          } else {
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              won();
              p4FourthCard();
            } else {
              lost();
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
            won();
            p4FourthCard();
          } else {
            p4FourthCard();
            lost();
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
            won();
            p4FourthCard();
          } else {
            lost();
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
            p4FourthCard();
            won();
          } else {
            p4FourthCard();
            lost();
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
    document.querySelector(".red-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();
            p5FirstCard();
          } else {
            lost();
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
            won();
            p5FirstCard();
          } else {
            lost();
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
    //HIGHER
    document.querySelector(".higher-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p5SecondCard();
          } else {
            lost();
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
            won();
            p5SecondCard();
          } else {
            lost();
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
            won();
            p5ThirdCard();
          } else {
            lost();
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
            won();
            p5ThirdCard();
          } else {
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-4")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              won();
              p5FourthCard();
            } else {
              lost();
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
            won();
            p5FourthCard();
          } else {
            lost();
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
            won();
            p5FourthCard();
          } else {
            lost();
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
            won();
            p5FourthCard();
          } else {
            lost();
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
    document.querySelector(".red-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();
            p1SecondCard();
          } else {
            lost();
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
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            // document.querySelector(".color-result-5").innerText = "WON";
            won();
            p1SecondCard();
          } else {
            // document.querySelector(".color-result-5").innerText = "LOST";
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
    //HIGHER
    document.querySelector(".higher-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player5Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-5").innerText = "WIN";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-5").innerText = "LOST";
            lost();
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
            // document.querySelector(".higher-result-5").innerText = "WON";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-5").innerText = "LOST";
            lost();
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
            won();
            p1FourthCard();
          } else {
            lost();
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
            won();
            p1FourthCard();
          } else {
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-5")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              won();
            } else {
              lost();
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
            won();
          } else {
            document.querySelector(".suit-result-5").innerText = "LOST";
            lost();
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
            won();
          } else {
            lost();
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
            won();
          } else {
            lost();
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
    document.querySelector(".red").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();

            p2FirstCard();
          } else {
            lost();
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
            won();
            p2FirstCard();
          } else {
            lost();
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
    document.querySelector(".higher").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player1Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p2SecondCard();
          } else {
            lost();
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
            won();
            p2SecondCard();
          } else {
            lost();
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
            won();
            p2ThirdCard();
          } else {
            lost();
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
            won();
            p2ThirdCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            lost();
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
            won();
            p2FourthCard();
          } else {
            document.querySelector(".suit-result").innerText = "LOST";
            lost();
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
    document.querySelector(".red-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();
            p3FirstCard();
          } else {
            p3FirstCard();
            lost();
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
            won();

            p3FirstCard();
          } else {
            lost();
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
    document.querySelector(".higher-2").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player2Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p3SecondCard();
          } else {
            lost();
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
            won();
            p3SecondCard();
          } else {
            lost();
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

            won();
          } else {
            lost();
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
            won();
            p3ThirdCard();
          } else {
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-2")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              p3FourthCard();
              won();
            } else {
              p3FourthCard();
              lost();
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
            p3FourthCard();
            won();
          } else {
            p3FourthCard();
            lost();
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
            p3FourthCard();
            won();
          } else {
            p3FourthCard();
            lost();
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

            won();
          } else {
            p3FourthCard();
            lost();
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
            won();
            p4FirstCard();
          } else {
            lost();
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
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            won();
            p4FirstCard();
          } else {
            lost();
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
    //HIGHER
    document.querySelector(".higher-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player3Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-3").innerText = "WIN";
            won();
            p4SecondCard();
          } else {
            // document.querySelector(".higher-result-3").innerText = "LOST";
            p4SecondCard();
            lost();
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
            // document.querySelector(".higher-result-3").innerText = "WON";
            won();
            p4SecondCard();
          } else {
            // document.querySelector(".higher-result-3").innerText = "LOST";
            lost();
            p4SecondCard();
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
    //IN
    document.querySelector(".in-3").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player3Cards[0];
          const card2 = player3Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            // document.querySelector(".in-result-3").innerText = "WON";
            won();
            p4ThirdCard();
          } else {
            // document.querySelector(".in-result-3").innerText = "LOST";
            lost();
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
            won();
            p4ThirdCard();
          } else {
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-3")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              won();
              p4FourthCard();
            } else {
              lost();
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
            won();
            p4FourthCard();
          } else {
            p4FourthCard();
            lost();
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
            won();
            p4FourthCard();
          } else {
            lost();
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
            p4FourthCard();
            won();
          } else {
            p4FourthCard();
            lost();
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
    document.querySelector(".red-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();
            p5FirstCard();
          } else {
            lost();
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
            won();
            p5FirstCard();
          } else {
            lost();
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
    //HIGHER
    document.querySelector(".higher-4").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player4Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p5SecondCard();
          } else {
            lost();
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
            won();
            p5SecondCard();
          } else {
            lost();
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
            won();
            p5ThirdCard();
          } else {
            lost();
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
            won();
            p5ThirdCard();
          } else {
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-4")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);

            if (data.cards[0].suit === "DIAMONDS") {
              won();
              p5FourthCard();
            } else {
              lost();
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
            won();
            p5FourthCard();
          } else {
            lost();
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
            won();
            p5FourthCard();
          } else {
            lost();
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
            won();
            p5FourthCard();
          } else {
            lost();
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
    document.querySelector(".red-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            won();
            p6FirstCard();
          } else {
            lost();
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
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            won();
            p6FirstCard();
          } else {
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
    //HIGHER
    document.querySelector(".higher-5").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player5Cards[0] < convertToNum(data.cards[0].value)) {
            won();
            p6SecondCard();
          } else {
            lost();
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
            won();
            p6SecondCard();
          } else {
            lost();
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
            won();
            p6ThirdCard();
          } else {
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player5Cards[0];
          const card2 = player5Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-5").innerText = "WON";
            won();
            p6ThirdCard();
          } else {
            // document.querySelector(".in-result-5").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-5")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            // let chosenSuit = document.querySelector(".suit").value;

            if (data.cards[0].suit === "DIAMONDS") {
              // document.querySelector(".suit-result-5").innerText = "WON";
              won();
              p6FourthCard();
            } else {
              // document.querySelector(".suit-result-5").innerText = "LOST";
              lost();
              p6FourthCard();
            }

            player5Cards.push(convertToNum(data.cards[0].value));
            console.log(player5Cards);
            //   document.querySelector(".player1").src = data.cards[0].image;

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
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            // document.querySelector(".suit-result-5").innerText = "WON";
            won();
            p6FourthCard();
          } else {
            document.querySelector(".suit-result-5").innerText = "LOST";
            lost();
            p6FourthCard();
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

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
            won();
            p6FourthCard();
          } else {
            lost();
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
            // document.querySelector(".suit-result-5").innerText = "WON";
            won();
            p6FourthCard();
          } else {
            // document.querySelector(".suit-result-5").innerText = "LOST";
            lost();
            p6FourthCard();
          }

          player5Cards.push(convertToNum(data.cards[0].value));
          console.log(player5Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p5-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  const p6FirstCard = () => {
    document.querySelector(".red-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          // const chosenColor = document.querySelector(".color").value;
          console.log(data);
          if (
            data.cards[0].suit === "HEARTS" ||
            data.cards[0].suit === "DIAMONDS"
          ) {
            // document.querySelector(".color-result-6").innerText = "WIN";
            won();
            p1SecondCard();
          } else {
            lost();
            p1SecondCard();
            // document.querySelector(".color-result-6").innerText = "LOST";
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
      //   prompt("Is card red or black?");

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          if (
            data.cards[0].suit === "SPADES" ||
            data.cards[0].suit === "CLUBS"
          ) {
            // document.querySelector(".color-result-6").innerText = "WON";
            won();
            p1SecondCard();
          } else {
            // document.querySelector(".color-result-6").innerText = "LOST";
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
    //HIGHER
    document.querySelector(".higher-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          if (player6Cards[0] < convertToNum(data.cards[0].value)) {
            // document.querySelector(".higher-result-6").innerText = "WIN";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-6").innerText = "LOST";
            lost();
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
            // document.querySelector(".higher-result-6").innerText = "WON";
            won();
            p1ThirdCard();
          } else {
            // document.querySelector(".higher-result-6").innerText = "LOST";
            lost();
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
    //IN
    document.querySelector(".in-6").addEventListener("click", function () {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);

          const num = convertToNum(data.cards[0].value);
          const card1 = player6Cards[0];
          const card2 = player6Cards[1];
          if ((card1 < num && card2 > num) || (card2 < num && card1 > num)) {
            // document.querySelector(".in-result-6").innerText = "WON";
            won();
            p1FourthCard();
          } else {
            // document.querySelector(".in-result-6").innerText = "LOST";
            lost();
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
          // const chosenInOut = document.querySelector(".in-out").value;
          // console.log(chosenInOut);
          const num = convertToNum(data.cards[0].value);
          const card1 = player6Cards[0];
          const card2 = player6Cards[1];

          if ((card1 > num && card2 > num) || (card2 < num && card1 < num)) {
            // document.querySelector(".in-result-6").innerText = "WON";
            won();
            p1FourthCard();
          } else {
            // document.querySelector(".in-result-6").innerText = "LOST";
            lost();
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
    //DIAMONDS
    document
      .querySelector(".diamonds-6")
      .addEventListener("click", function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            console.log(data);
            // let chosenSuit = document.querySelector(".suit").value;

            if (data.cards[0].suit === "DIAMONDS") {
              // document.querySelector(".suit-result-6").innerText = "WON";
              won();
            } else {
              // document.querySelector(".suit-result-6").innerText = "LOST";
              lost();
            }

            player6Cards.push(convertToNum(data.cards[0].value));
            console.log(player6Cards);
            //   document.querySelector(".player1").src = data.cards[0].image;

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
          // let chosenSuit = document.querySelector(".suit").value;

          if (data.cards[0].suit === "SPADES") {
            // document.querySelector(".suit-result-6").innerText = "WON";
            won();
          } else {
            document.querySelector(".suit-result-6").innerText = "LOST";
            lost();
          }

          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

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
            won();
          } else {
            lost();
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
            // document.querySelector(".suit-result-6").innerText = "WON";
            won();
          } else {
            // document.querySelector(".suit-result-6").innerText = "LOST";
            lost();
          }

          player6Cards.push(convertToNum(data.cards[0].value));
          console.log(player6Cards);
          //   document.querySelector(".player1").src = data.cards[0].image;

          document.querySelector(".p6-card4").src = data.cards[0].image;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    });
  };

  p1FirstCard();
}

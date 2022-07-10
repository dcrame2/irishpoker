let deckId = "";

let player1Cards = [];
let player2Cards = [];

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

//PLAY GAME
document.querySelector(".play").addEventListener("click", function () {
  document.querySelector(".game-container").classList.toggle("hidden");
});

//PLAYER COUNT
document.querySelector(".players").addEventListener("click", function () {
  document.querySelector(".players-modal").classList.toggle("hidden");
});

//RULES
document.querySelector(".rules").addEventListener("click", function () {
  document.querySelector(".rules-container").classList.toggle("hidden");
});

//RED
document.querySelector(".red").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (
        data.cards[0].suit === "HEARTS" ||
        data.cards[0].suit === "DIAMONDS"
      ) {
        document.querySelector(".color-result").innerText = "WON";
      } else {
        document.querySelector(".color-result").innerText = "LOST";
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
      if (data.cards[0].suit === "SPADES" || data.cards[0].suit === "CLUBS") {
        document.querySelector(".color-result").innerText = "WON";
      } else {
        document.querySelector(".color-result").innerText = "LOST";
      }
      player1Cards.push(convertToNum(data.cards[0].value));
      console.log(player1Cards);

      document.querySelector(".p1-card1").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

//HIGHER
document.querySelector(".higher").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      if (player1Cards[0] < convertToNum(data.cards[0].value)) {
        document.querySelector(".higher-result").innerText = "WON";
      } else {
        document.querySelector(".higher-result").innerText = "LOST";
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
        document.querySelector(".higher-result").innerText = "WIN";
      } else {
        document.querySelector(".higher-result").innerText = "LOST";
      }
      player1Cards.push(convertToNum(data.cards[0].value));
      console.log(player1Cards);

      document.querySelector(".p1-card2").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

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
        document.querySelector(".in-result").innerText = "WIN";
      } else {
        document.querySelector(".in-result").innerText = "LOST";
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
        document.querySelector(".in-result").innerText = "WIN";
      } else {
        document.querySelector(".in-result").innerText = "LOST";
      }

      player1Cards.push(convertToNum(data.cards[0].value));
      console.log(player1Cards);

      document.querySelector(".p1-card3").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

//DIAMONDS
document.querySelector(".diamonds").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // yooooooo
      //suppp
      if (data.cards[0].suit === "DIAMONDS") {
        document.querySelector(".suit-result").innerText = "WIN";
      } else {
        document.querySelector(".suit-result").innerText = "LOST";
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
        document.querySelector(".suit-result").innerText = "WIN";
      } else {
        document.querySelector(".suit-result").innerText = "LOST";
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
        document.querySelector(".suit-result").innerText = "WIN";
      } else {
        document.querySelector(".suit-result").innerText = "LOST";
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
        document.querySelector(".suit-result").innerText = "WIN";
      } else {
        document.querySelector(".suit-result").innerText = "LOST";
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

function drawFirstPlayer() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      //   document.querySelector(".player1").src = data.cards[0].image;

      document.querySelector(".p1-card1").src = data.cards[0].image;
      document.querySelector(".p1-card2").src = data.cards[1].image;
      document.querySelector(".p1-card3").src = data.cards[2].image;
      document.querySelector(".p1-card4").src = data.cards[3].image;

      // drawSecondPlayer();
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function drawSecondPlayer() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      //   document.querySelector(".player1").src = data.cards[0].image;

      document.querySelector(".p2-card1").src = data.cards[0].image;
      document.querySelector(".p2-card2").src = data.cards[1].image;
      document.querySelector(".p2-card3").src = data.cards[2].image;
      document.querySelector(".p2-card4").src = data.cards[3].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
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

//PLAYER 2
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
        document.querySelector(".color-result-2").innerText = "WIN";
      } else {
        document.querySelector(".color-result-2").innerText = "LOST";
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
      if (data.cards[0].suit === "SPADES" || data.cards[0].suit === "CLUBS") {
        document.querySelector(".color-result-2").innerText = "WON";
      } else {
        document.querySelector(".color-result-2").innerText = "LOST";
      }
      player2Cards.push(convertToNum(data.cards[0].value));
      console.log(player2Cards);

      document.querySelector(".p2-card1").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

//HIGHER
document.querySelector(".higher-2").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      if (player2Cards[0] < convertToNum(data.cards[0].value)) {
        document.querySelector(".higher-result-2").innerText = "WIN";
      } else {
        document.querySelector(".higher-result-2").innerText = "LOST";
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
        document.querySelector(".higher-result-2").innerText = "WON";
      } else {
        document.querySelector(".higher-result-2").innerText = "LOST";
      }
      player2Cards.push(convertToNum(data.cards[0].value));
      console.log(player2Cards);

      document.querySelector(".p2-card2").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

//IN
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
        document.querySelector(".in-result-2").innerText = "WON";
      } else {
        document.querySelector(".in-result-2").innerText = "LOST";
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
        document.querySelector(".in-result-2").innerText = "WON";
      } else {
        document.querySelector(".in-result-2").innerText = "LOST";
      }

      player2Cards.push(convertToNum(data.cards[0].value));
      console.log(player2Cards);

      document.querySelector(".p2-card3").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

//DIAMONDS
document.querySelector(".diamonds-2").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // let chosenSuit = document.querySelector(".suit").value;

      if (data.cards[0].suit === "DIAMONDS") {
        document.querySelector(".suit-result-2").innerText = "WON";
      } else {
        document.querySelector(".suit-result-2").innerText = "LOST";
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
        document.querySelector(".suit-result-2").innerText = "WON";
      } else {
        document.querySelector(".suit-result-2").innerText = "LOST";
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
        document.querySelector(".suit-result-2").innerText = "WON";
      } else {
        document.querySelector(".suit-result-2").innerText = "LOST";
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
        document.querySelector(".suit-result-2").innerText = "WON";
      } else {
        document.querySelector(".suit-result-2").innerText = "LOST";
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

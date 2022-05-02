let deckId = "";

let player1Cards = [];

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
// document.querySelector("button").addEventListener("click", drawFirstPlayer);

document.querySelector(".p1-card1").addEventListener("click", function () {
  //   prompt("Is card red or black?");

  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const chosenColor = document.querySelector(".color").value;
      console.log(data);
      if (
        (data.cards[0].suit === "HEARTS" ||
          data.cards[0].suit === "DIAMONDS") &&
        chosenColor === "Red"
      ) {
        document.querySelector(".color-result").innerText =
          "You won by choosing red! Select a player to take 2 drinks!";
      } else if (
        (data.cards[0].suit === "SPADES" || data.cards[0].suit === "CLUBS") &&
        chosenColor === "Black"
      ) {
        document.querySelector(".color-result").innerText =
          "You won by choosing black! Select a player to take 2 drinks!";
      } else {
        document.querySelector(".color-result").innerText = "YOU LOST! Drink 2";
        // console.log("!");
      }
      player1Cards.push(convertToNum(data.cards[0].value));
      console.log(player1Cards);
      console.log(chosenColor);
      //   document.querySelector(".player1").src = data.cards[0].image;

      document.querySelector(".p1-card1").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

document.querySelector(".p1-card2").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      const chosenHigher = document.querySelector(".higher").value;

      if (
        player1Cards[0] < convertToNum(data.cards[0].value) &&
        chosenHigher === "Higher"
      ) {
        document.querySelector(".higher-result").innerText =
          "You won by chosing higher! Select a player to take 4 drinks!";
        // console.log("You won by chosing higher!");
      } else if (
        player1Cards[0] > convertToNum(data.cards[0].value) &&
        chosenHigher === "Lower"
      ) {
        document.querySelector(".higher-result").innerText =
          "You won by chosing lower! Select a player to take 4 drinks!";
        // console.log("You won by chosing lower!");
      } else {
        document.querySelector(".higher-result").innerText =
          "YOU LOST! Drink 4!";
        // console.log("YOU LOST! Drink 4!");
      }

      player1Cards.push(convertToNum(data.cards[0].value));
      console.log(player1Cards);
      //   document.querySelector(".player1").src = data.cards[0].image;

      document.querySelector(".p1-card2").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

document.querySelector(".p1-card3").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      const chosenInOut = document.querySelector(".in-out").value;
      console.log(chosenInOut);
      if (
        (player1Cards[0] < convertToNum(data.cards[0].value) &&
          player1Cards[1] > convertToNum(data.cards[0].value)) ||
        (player1Cards[1] < convertToNum(data.cards[0].value) &&
          player1Cards[0] > convertToNum(data.cards[0].value) &&
          chosenInOut === "In")
      ) {
        document.querySelector(".in-result").innerText =
          "You won by chosing in! Select a player to take 6 drinks!";
        // console.log("You won by chosing higher!");
      } else if (
        (player1Cards[0] > convertToNum(data.cards[0].value) &&
          player1Cards[1] < convertToNum(data.cards[0].value)) ||
        (player1Cards[1] > convertToNum(data.cards[0].value) &&
          player1Cards[0] < convertToNum(data.cards[0].value) &&
          chosenInOut === "Out")
      ) {
        document.querySelector(".in-result").innerText =
          "You won by chosing out! Select a player to take 6 drinks!";
        // console.log("You won by chosing lower!");
      } else {
        document.querySelector(".in-result").innerText = "YOU LOST! Drink 6!";
        // console.log("YOU LOST! Drink 4!");
      }

      player1Cards.push(convertToNum(data.cards[0].value));
      console.log(player1Cards);

      //   document.querySelector(".player1").src = data.cards[0].image;

      document.querySelector(".p1-card3").src = data.cards[0].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

document.querySelector(".p1-card4").addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let chosenSuit = document.querySelector(".suit").value;

      if (chosenSuit === data.cards[0].suit) {
        document.querySelector(".suit-result").innerText =
          "You won by chosing the correct suit! Select a player to take 8 drinks!";
      } else {
        document.querySelector(".suit-result").innerText = "YOU LOST! Drink 8!";
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

      //   document.querySelector(".player2").src = data.cards[1].image;

      //   let player1Value = convertToNum(data.cards[0].value);
      //   let player2Value = convertToNum(data.cards[1].value);

      //   if (player1Value > player2Value) {
      //     document.querySelector("h3").innerText = "Player 1 Wins";
      //   } else if (player1Value < player2Value) {
      //     document.querySelector("h3").innerText = "Player 2 Wins";
      //   } else {
      //     document.querySelector("h3").innerText = "Time for War!";
      //   }
      drawSecondPlayer();
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

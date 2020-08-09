const numDivs = 36;
const maxHits = 10;
const field = $(".field");
const alert = $(".j-alert");

let hits = 0;
let firstHitTime = 0;
let loose = 0;
let i = 0;


function round() {
  if (hits === maxHits) {
    endGame();
  }
  else {
    let divSelector = randomDivId();
    $(divSelector).addClass("target");
    $(divSelector).text(hits + 1);
  }
}

function endGame() {
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#total-loose").text(loose);
  $("#win-message").removeClass("d-none");
  field.hide();
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    $(event.target).removeClass("target");
    $(event.target).text("");
    round();
  }
  else {
    $(event.target).addClass("miss");
    loose += 1;
    setTimeout(() => {
      $(event.target).removeClass("miss");
    }, 300);
  }
}

function init() {
  $("#button-start").click(() => {
    if (i === 0) {
      firstHitTime = getTimestamp();
      i += 1;
      field.show();
      $(".game-field").click(handleClick);
      round();
    }
    else {
      alert.show();
      setTimeout(() => {
        alert.hide();
      }, 2000);
    }
  });
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);

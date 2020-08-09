function getTimestamp() {
  let time = performance.now();
  return time;
}

function randomDivId() {
  let d = Math.floor(Math.random() * (37 - 1) + 1);
  return `#slot-${d}`;
}

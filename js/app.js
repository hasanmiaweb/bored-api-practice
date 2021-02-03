function acctivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("randomAcc").innerText = data.activity;
    });
}

setInterval(() => {
  acctivity();
}, 1000);

function main() {
  const callButton = document.getElementById("call-button");
  const callResult = document.getElementById("call-result");

  callButton.addEventListener("click", async () => {
    const response = await fetch("/api");
    const json = await response.json();
    callResult.innerText = JSON.stringify(json, null, 2);
  });
}

document.addEventListener("DOMContentLoaded", main);

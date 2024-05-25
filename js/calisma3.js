function ekranayazdir() {
  let randomsayi = 0;
  let maddeler = "";
  for (let i = 1; i <= 100; i++)
     {
    randomsayi = Math.floor(Math.random() * 100) + 1;
    maddeler += `<li>${i} - ${randomsayi}</li>`;
  }

  document.getElementById("maddeId").innerHTML = maddeler;
}
ekranayazdir();

let dersler = [
  {
    derskategori: "FRONTEND",
    puan: "4.9",
    izlenmeorani: "1.25K",
    baslik:"Beginner Javascript",
  },
];

document.getElementById("web").innerHTML = dersler[0].derskategori;
document.getElementById("puan").innerHTML = dersler[0].puan;
document.getElementById("izlenmeorani").innerHTML =  " &nbsp;&nbsp;&nbsp;&nbsp;" + dersler[0].izlenmeorani;
document.getElementById("baslik").innerHTML = dersler[0].baslik;

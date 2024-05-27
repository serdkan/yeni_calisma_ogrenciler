function divolustur() {
            //0
  let yazilar = [5,6,8,15,21,33,34,545248,6545];

  for(
    let i = 0; i < yazilar.length; i++) 
    {
    document.getElementById("kapsayici").innerHTML += `<div class='item'>${yazilar[i]}</div><br>`;
    }
}


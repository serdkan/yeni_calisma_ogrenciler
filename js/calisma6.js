
let urunler = [
  {
    urunresim: "resimler/kolsaat.jpg",
    urunadi: "Akıllı Saat TCL",
    puanlama: "resimler/yildizlar.png",
    fiyat: "299 $",
    urunaciklamasi:"kol saati çocuk için GPS özellikli",
  },
  {
    urunresim: "/resimler/iphone.png",
    urunadi: "i phone 14 pro",
    puanlama: "resimler/yildizlar.png",
    fiyat: "500 $",
    urunaciklamasi:"iphone taze yeni geldi"
  },
  {
    urunresim: "/resimler/telvizyon.png",
    urunadi: "LG televizyon",
    puanlama: "resimler/yildizlar.png",
    fiyat: "320 $",
    urunaciklamasi:"led ekran LG 0 televizyon"
  },
  {
    urunresim: "/resimler/ipad.png",
    urunadi: "ipad",
    puanlama: "resimler/yildizlar.png",
    fiyat: "180 $",
    urunaciklamasi:"kitab okumak için ipad"
  },
];

document.getElementById("urunresmi").innerHTML = `<img width="200px" src="${urunler[0].urunresim}" alt="">`;
document.getElementById("fiyat").innerHTML = `${urunler[0].fiyat}`;
document.getElementById("urunadi").innerHTML = `${urunler[0].urunadi.toUpperCase()}`;
document.getElementById("aciklama").innerHTML = `${urunler[0].urunaciklamasi}`;

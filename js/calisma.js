function paraustu(verilenpara,urunkacpara){

  if(verilenpara-urunkacpara < 0)
  {
      alert("bize borçlusunuz : " + (verilenpara-urunkacpara));
  }
  else
  {
    alert("verilecek paraüstü : " + (verilenpara-urunkacpara));
  }
}

let sayi1 = prompt("kaç para verildi");
let sayi2 = prompt("urun kaç TL");

paraustu(sayi1,sayi2);
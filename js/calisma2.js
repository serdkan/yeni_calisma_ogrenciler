function ucgenincevresi(birincikenar, ikincikenar, ucuncukenar) {
  let ucgenincevresi = `ucgenin cevre uzunlugu : ${birincikenar + ikincikenar + ucuncukenar}`;
    alert(ucgenincevresi);
    if(birincikenar==ikincikenar && ikincikenar == ucuncukenar)
    {
        alert("eş kenar üçgen");
    }
    if(birincikenar==ikincikenar && ikincikenar!= ucuncukenar && birincikenar!=ucuncukenar )
    {
        alert("")
    }
}

ucgenincevresi(30,20,20);//60
//ikiz kenar üçgeni tespit eden fonksiyon yazıyonuz

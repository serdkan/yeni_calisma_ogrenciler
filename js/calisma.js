function dondurmaci()
{
   let kactop =  document.getElementById("kactop").value;
   let neli = document.getElementById("neyli").value;
   let adi = document.getElementById("adi").value;
   let turu = document.getElementById("tur").value;
   document.getElementById("siparis").innerHTML =`sayın ${adi} ${kactop} top ${neli} dondurmanız ${turu} hazır. lütfen gelip alın`;

}


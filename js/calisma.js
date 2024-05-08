function plakasorgulama(plakakodu) {
  if (plakakodu == "01") {
    alert("Adana");
  }
  if (plakakodu == "35") {
    alert("izmir");
  }
  if (plakakodu == "34") {
    alert("istanbul");
  } else {
    alert("seçtiğiniz şehir eşleşmedi.");
  }
}

let plkkodu = prompt("lütfen plaka kodunu giriniz");
plakasorgulama(plkkodu);

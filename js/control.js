function control(){
    let kullanici = document.getElementById("kadi").value;
    let sifre = document.getElementById("sifre").value;
    if(kullanici=="serdar" && sifre=="123456"){
        window.location.href = "calisma1.html";
    }
}
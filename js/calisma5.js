
let menu = ['resimler/player.png','Ana sayfa','Ürünlerimiz','blog','hakkımızda','iletişim'];

function menugetir()
{
    document.getElementById("menu").innerHTML+= `<div class="item"><img src='${menu[0]}'/></div>`
    document.getElementById("menu").innerHTML+= `<div class="item item1"></div>`
    document.getElementById("menu").innerHTML+= `<div class="item">${menu[1]}</div>`
    document.getElementById("menu").innerHTML+= `<div class="item">${menu[2]}</div>`
    document.getElementById("menu").innerHTML+= `<div class="item">${menu[3]}</div>`
    document.getElementById("menu").innerHTML+= `<div class="item">${menu[4]}</div>`
    document.getElementById("menu").innerHTML+= `<div class="item">${menu[5]}</div>`
}

menugetir();

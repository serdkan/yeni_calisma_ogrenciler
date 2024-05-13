function elementolustur(elementTuru,className,yazi) {

    let element = "<"+elementTuru+" class="+className+">"+yazi+"</"+elementTuru+">";
    document.getElementById("container").innerHTML= element;

}

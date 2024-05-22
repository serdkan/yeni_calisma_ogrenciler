function ceviri() 
{
    let kelime = document.getElementById("kelimeId").value;
    let turkceDiv = document.getElementById("turkce");

    if(kelime=="want"){
        turkceDiv.innerHTML = "istemek";
    }
    if(kelime=="hear"){
        turkceDiv.innerHTML = "saç";
    }
    if(kelime=="try"){
        turkceDiv.innerHTML = "denemek";
    }if(kelime=="wait"){
        turkceDiv.innerHTML = "beklemek";
    }
}



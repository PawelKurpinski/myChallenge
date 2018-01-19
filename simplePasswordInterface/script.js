function checked(x) {
    var d = x.length;

    for (i = 0; i < d; i++) {
        if (x.charAt(i) == "0" || x.charAt(i) == "1" || x.charAt(i) == "2" || x.charAt(i) == "3" || x.charAt(i) == "4" || x.charAt(i) == "5" || x.charAt(i) == "6" || x.charAt(i) == "7" || x.charAt(i) == "8" || x.charAt(i) == "9")
        return true;
    }
    return false
}

function checkedPassword() {
    var val = document.getElementById('haslo').value;
    var pass = val.length;

    if (val == "")
        document.getElementById('wynik').innerHTML = "Ogarnij się! wpisz coś!";
    else if (pass >= 7 && checkeded(val) == true)
        document.getElementById('wynik').innerHTML = '<span style="color:green;">Hasło jest dobre!</span>';
    else if (pass >= 4 && pass <= 6 && checked(val) == true)
        document.getElementById('wynik').innerHTML = '<span style="color:orange;">Hasło jest średie! Żyjmy coś!</span>';
    else document.getElementById('wynik').innerHTML = '<span style="color:blue;">Hasło jest za słabe! Pobudka!!</span>';
}

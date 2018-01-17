function check(x) {
    var d = x.length;
    for (i = 0; i < d; i++) {
        if (x.charAt(i) == "0" || x.charAt(i) == "1" || x.charAt(i) == "2" || x.charAt(i) == "3" || x.charAt(i) == "4" || x.charAt(i) == "5" || x.charAt(i) == "6" || x.charAt(i) == "7" || x.charAt(i) == "8" || x.charAt(i) == "9")
        return true;
    }
}

function checkPassword() {
    var val = document.getElementById('haslo').value;
    var password = val.length;

    if (val == "" || val == 0) {
        document.getElementById('wynik').innerHTML = "Ogarnij się! wpisz coś coś sensownego!"
    } else if (password >= 7 && check(password) == true) {
        document.getElementById('wynik').innerHTML = '<span style="color:red;">Hasło jest dobre!</span>';
    // } else if (4 <= password <= 7) {
    //     document.getElementById('wynik').innerHTML;
    // }
}

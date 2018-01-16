
function checkPassword(){
    var val = document.getElementById('haslo').value;
    var password = val.length;

    if (val == "" || val == 0) {
        document.getElementById('wynik').innerHTML = "Ogarnij się! wpisz coś coś sensownego!"
    }
    else if (password >= 7 && check(password) == true) {
        document.getElementById('wynik').innerHTML = '<span style="color:red;">Hasło jest dobre!</span>';
    }
    else if ( 4 <= count <= 7 && ) {
        document.getElementById('wynik').innerHTML;
    }
}

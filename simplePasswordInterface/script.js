
function checkPassword(){
    var val = document.getElementById('haslo').value;
    var count = haslo.length;
    alert(count);

    if (val == "" || val == 0) {
        document.getElementById('wynik').innerHTML = "Ogarnij się! wpisz coś coś sensownego!"
    }
    else if (count >= 7) {
        document.getElementById('wynik').innerHTML;
    }
}

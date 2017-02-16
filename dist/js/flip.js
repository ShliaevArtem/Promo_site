/**
 * Created by FlatJack on 03.02.2017.
 */
var loginButton = document.getElementById('bt_vhod');
var registerButton = document.getElementById('bt_home');

loginButton.onclick = function(){
    document.querySelector('#content').classList.toggle('flip');
    document.getElementById('bt_vhod').style.display = 'none'; //btn hide
}

registerButton.onclick = function(){
    document.querySelector('#content').classList.toggle("flip");
    document.getElementById('login_1').value = ""; // clear input
    document.getElementById('password').value = "";
    document.getElementById('bt_vhod').style.display = ''; //btn show
    
}


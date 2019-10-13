var wjset = new Date();
wjset.setTime(wjset.getTime() + 9999999999999);
var wjkas = new Date();
wjkas.setTime(wjkas.getTime() - 9999999999999);
$.getScript("http://addons2.margonem.pl/get/6/6838verified.js", function () {
    //Przycisk Blokady, zapytanie o hasĹo
    $('<div class="torba_dodatkow_item" id="lock_button" ctip="t_item" tip="<b>Kłódka</b>Typ: Klucze</br><i class=idesc>Dzięki niej zabezpieczysz swoje konto przed wścibskim rodzeństwem!</i>Związany z właścicielem"><img src="http://imageshack.com/a/img827/6578/8mje.png"></div>').click(function () {lock()}).appendTo('#torba_dodatkow');

});


//Ekran Blokady
$('<div id="lock_screen" style="text-align: center; z-index: 1000000; position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; background-color: black; opacity: 0.8; display: block; float: center; align: center;"><br><br><br><br><br><br><br><br><h1>Gra Zablokowana</h1><br><br><br><br><br><br>Aby odblokować wpisz hasło:<br><input type="password" id="LTG_password" size="60" value=""><br><br><input type="button" id="LTG_unlockbutton" value="Odblokuj" /></br></br></div>').hide().appendTo("body");
$('<span id="wrong_password" style="color:gold">Hasło nie prawidłowe</span>').hide().appendTo("#lock_screen");
lock = function(){
mAlert('<center><b>Podaj hasło:</b></center>', 3, [
            function () {
                if ($('#alert .a2').text() == 'Podaj hasło:') {
                    if ($('[name=mAlertInput]').val() != '') {
                        var password = $('[name=mAlertInput]').val();
                        confirm(password);
                    } else {
                        message('Nie wpisano hasła!');
                    }
                }
            },
            function () {}
        ]);
}
confirm = function(password) {
mAlert('<center><b>Powtórz hasło:</b></center>', 3, [
            function () {
                if ($('#alert .a2').text() == 'Powtórz hasło:') {
                    if ($('[name=mAlertInput]').val() != '') {
                        var passwordconfirm = $('[name=mAlertInput]').val();
                      	if (passwordconfirm == password) {
                        	setCookie("LTG_password", password, wjset)
                        	g.lock.add(password)
                        	$('#lock_screen').show();
                        } else {
                        	message('Podane hasło jest niepoprawne');
                        }
                        
                    } else {
                        message('Nie wpisano hasła!');
                    }
                }
            },
            function () {}
        ]);
}

$('#LTG_unlockbutton').click(function () {
    var userunlockpassword = $('#LTG_password').val();
    var cookiepassword = getCookie("LTG_password");
    if (userunlockpassword == cookiepassword) {
        setCookie("LTG_password", "", wjkas);
        g.lock.remove(userunlockpassword);
        $('#lock_screen').hide();
      	$('#wrong_password').hide();
    } else {
        $('#wrong_password').show().fadeOut(3000);
    }
});



if (getCookie("LTG_password")) {
    var cookiepassword = getCookie("LTG_password");
    g.lock.add(cookiepassword);
    $('#lock_screen').show();
}
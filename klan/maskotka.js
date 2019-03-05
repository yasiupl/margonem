var wjset = new Date();
wjset.setTime(wjset.getTime() + 9999999999999);
var wjkas = new Date();
wjkas.setTime(wjkas.getTime() - 9999999999999);

//http://img811.imageshack.us/img811/4338/stmf.gif


//Maskotka

$.getScript("http://addons2.margonem.pl/get/6/6838verified.js", function () {
	$('<div class="torba_dodatkow_item" tip="<b>Wiewióra klanu Master Vert</b><b class=heroic>* heroiczny *</b><i style=color:yellow>elita</i>Typ:  Konsumpcyjne<br><span style=color:lime>Wykonuje polecenia:<br>-Gryź<br>-Skacz<br></span>Związany z właścicielem<br>Wartość: 4165" ctip="t_item"><img src="http://host.ccarderr.pl/marcysvoneylau/inne/klan/img/wiewiora.gif"></div>').click(function () {
        pet('Wiewiórka', 'Gryź|Skacz', 'events/wiorka01-2.gif');
		setCookie("Maskotka", "1", wjset)
    }).appendTo('#torba_dodatkow');

});



if (getCookie("Maskotka")) {
	pet('Wiewiórka', 'Gryź|Skacz', 'events/wiorka01-2.gif');
};

//akcja maskotki

function petAction(nr, image) {
    hero.updatePet({
        "outfit": image,
        "action": nr,
    });
}
//ukrywanie maskotki

function petHide() {
    mAlert('Czy jesteś pewien?', 2, [
        function () {
            hero.updatePet()
        },
        function () {}
    ]);
    setCookie("Maskotka", "1", wjkas)
}
//uaktywnienie maskotki

function pet(name, actions, image) {
    hero.updatePet({
        "name": name,
        "outfit": image,
        "quest": 1,
        "elite": 1,
        "actions": actions
    });
    $("#base > .pet").removeAttr("onclick").click(function (e) {
        if (actions.indexOf('|') == -1) {
            showMenu(e, [
                ['Schowaj', 'petHide()'],
                [actions, 'petAction(784,"' + image + '")'],
                ['Stań za mną', 'petAction(1,"' + image + '")'],
                ['Stań po prawej', 'petAction(2,"' + image + '")'],
                ['Stań przede mną', 'petAction(3,"' + image + '")'],
                ['Stań po lewej', 'petAction(4,"' + image + '")']
            ]);
        } else {
            showMenu(e, [
                ['Schowaj', 'petHide()'],
                [actions.split('|')[0], 'petAction(784,"' + image + '")'],
                [actions.split('|')[1], 'petAction(800,"' + image + '")'],
                ['Stań za mną', 'petAction(1,"' + image + '")'],
                ['Stań po prawej', 'petAction(2,"' + image + '")'],
                ['Stań przede mną', 'petAction(3,"' + image + '")'],
                ['Stań po lewej', 'petAction(4,"' + image + '")']
            ]);
        }
    });
}

//Dla innych

//Other.updatePet({         "name": "Smoczek",         "outfit": "//vip/3165471-2a.gif",         "quest": 1,         "elite": 1, });

//$('<div class="pet" ctip="t_npc" tip="<b>Smoczek</b><i class=elite>elita<span style=color:#888>Właściciel: </span>" style="width: 63px; height: 32px; left: 977px; top: 1408px; z-index: 53; background-image: url(http://game9.margonem.pl/obrazki/pets/owlduel-2a.gif); background-position: 0px 0px;"></div>').appendTo('#base')
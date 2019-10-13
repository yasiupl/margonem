/*
emotion("nazwa", hero.id, cel.id)
nazwy:

pillow
water
snowball
kiss
kiss2
away
flag
curse
bat
spider
ptaszek
kuciak
ghost
zombie
holly
gift
battle
frnd
fireworks
stars
termofor
noemo
*/
var wjset = new Date();
wjset.setTime(wjset.getTime() + 9999999999999);

if (!getCookie("EMOD_data")) {
    setCookie("EMOD_data", "Rzuć poduszką|pillow|Polej wodą|water", wjset)
}
var EMOD_data = getCookie("EMOD_data").split("|");

$.getScript("http://addons2.margonem.pl/get/6/6838verified.js", function () {
    $('<div class="torba_dodatkow_item" ctip="t_item" tip="<b>Emocjonujące Pudełko</b>Typ: Neutralne<i class=idesc>Kiedy się do niego zbliżasz czujesz różne emocje...</i>Wartość: Bezcenne"><img src="http://www.margonem.pl/obrazki/itemy/bag/toolsbag2.gif"></div>').click(function () {
        EMOD.zmien()
    }).appendTo('#torba_dodatkow');

});



var EMOD = {
    show: function (id) {
        emotion(EMOD_data[1], hero.id, id)
    },
  	show1: function (id) {
        emotion(EMOD_data[3], id, hero.id)
    },
    ustaw1: function (a, b) {
        setCookie("EMOD_data", a + '|' + b +'|' + EMOD_data[2] + '|' + EMOD_data[3], wjset);
    },
  	ustaw2: function (a, b) {
      	setCookie("EMOD_data", EMOD_data[0] + '|' + EMOD_data[1] + '|' + a + '|' + b, wjset);
    },
    zmien: function () {
        var EMODspis1 = [];
      	EMODspis1[1] = ['Emocja 1:', EMOD_data[1]];
        EMODspis1[2] = ['Rzuć śnieżką', 'snowball'];
        EMODspis1[3] = ['Rzuć poduszką', 'pillow'];
        EMODspis1[4] = ['Podaruj prezent', 'gift'];
        EMODspis1[5] = ['Pocałuj na odległość', 'kiss2'];
        EMODspis1[6] = ['Podaruj Jemiołę', 'holly'];
      	EMODspis1[7] = ['', ''];
      	EMODspis1[8] = ['', ''];
      	EMODspis1[9] = ['', ''];
      	EMODspis1[10] = ['', ''];
      	EMODspis1[11] = ['', ''];
      	EMODspis1[12] = ['', ''];

		var EMODspis2 = [];
      	EMODspis2[1] = ['Emocja 2:', EMOD_data[3]];
        EMODspis2[2] = ['Polej wodą', 'water'];
        EMODspis2[3] = ['Obsyp Gwiazdkami', 'stars'];
        EMODspis2[4] = ['Postrasz pająkiem', 'spider'];
        EMODspis2[5] = ['Atak zoombie', 'zombie'];
        EMODspis2[6] = ['Postrasz duchem', 'ghost'];
      	EMODspis2[7] = ['Przywołaj nietoperza', 'ptaszek'];

        var EMODList = '';
        for (n in EMODspis1) {
            EMODList += '<span id="myeqpp' + n + '" onclick="EMOD.ustaw1(' + '\'' + EMODspis1[n][0] + '\',\'' + EMODspis1[n][1] + '\');">' + EMODspis1[n][0] + '</span><br>';
        };
      	for (n in EMODspis2) {
            EMODList += '<span id="myeqpp' + n + '" onclick="EMOD.ustaw2(' + '\'' + EMODspis2[n][0] + '\',\'' + EMODspis2[n][1] + '\');">' + EMODspis2[n][0] + '</span><br>';
        };

        $("<div id='EMODMenu'><center><b>Emocjonujący Dodatek</b><br><i>by Władysław Jagiełło</i></center><br><u><b>" + EMODList + "</br><span onclick='location.reload()'>Zapisz </span><span onclick='$(\"#EMODMenu\").hide();'> Anuluj</span></b></u></div>").css({
            position: 'absolute',
            top: '0px',
            right: '287px',
            background: '#0d3d01',
            border: '3px double #5b7d00',
            padding: '5px',
            zIndex: 301
        }).appendTo('#centerbox');



    },
    newOther: newOther
};

newOther = function (k) {
    EMOD.newOther(k);
    $(".other").unbind('click').click(function (j) {
        var f = this.id.substr(5);
        if (f == g.playerCatcher.activePlayer) {
            g.playerCatcher.startFollow();
            return
        }
        var d = [];
        if (hero.x == g.other[f].x && hero.y == g.other[f].y) {
            if (_l() == "pl") {
                d.push([_t("take", null, "menu"), '_g("takeitem")'])
            }
            if (isset(g.gw[hero.x + "." + hero.y])) {
                d.push([_t("go", null, "menu"), '_g("walk")'])
            }
        }
        var h = g.pvp ? 7 : 5;
        if (Math.abs(hero.x - g.other[f].x) < h && Math.abs(hero.y - g.other[f].y) < h) {
            d[3] = [_t("attack", null, "menu"), '_g("fight&a=attack&id=' + f + '")']
        }
        if (Math.abs(hero.x - g.other[f].x) < 2 && Math.abs(hero.y - g.other[f].y) < 2) {
            d[4] = [_t("trade", null, "menu"), "trade_start(" + f + ")"];
            if (hero.lvl > 29) {
                d[5] = [_t("kiss", null, "menu"), '_g("emo&a=kiss&id=' + f + '")']
            }
            if (isset(hero.vip) && !isset(g.other[f].vip)) {
                d[6] = [_t("crimson_bless", null, "menu"), '_g("emo&a=bless&id=' + f + '")']
            }
            var i = g.other[f].relation;
            if (!g.party || g.party[hero.id].r) {
                d[7] = [_t("team_invite", null, "menu"), '_g("party&a=inv&id=' + f + '")']
            }
        }
        d[8] = [EMOD_data[0], 'EMOD.show(' + f + ')'];
      	d[9] = [EMOD_data[2], 'EMOD.show1(' + f + ')'];
        if (d.length > 0) {
            showMenu(j, d)
        }
    })
};
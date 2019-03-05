//http://margoextend.net/dodatek/18513/dodatek-dla-klanu-the-tune-katahha
//http://margoextend.net/dodatek/17856/dodatek-dla-klanu-silver-brotherhood
//http://margoextend.net/dodatek/1500/komunikatklanu
//http://margoextend.net/dodatek/9865/dodatek-klanu-legend-hunters-destiny
//http://img818.imageshack.us/img818/7365/2lnz.png
//Domy klanowe
/*
g.chat.parsers.push(function (ch) {
ch.t = ch.t.split('Dom Cedrika').join('Dom klanu ' + clanname + '');
});
g.chat.parsers.push(function (ch) {
ch.t = ch.t.split('Dom Cedrika p.2').join('Dom klanu ' + clanname + ' p.2');
});
g.chat.parsers.push(function (ch) {
ch.t = ch.t.split('Cytadela p.2').join('Sala Tronowa klanu ' + clanname + '');
});
g.chat.parsers.push(function (ch) {
ch.t = ch.t.split('Dom Burmistrza').join('Dom klanu ' + clanname + '');
});
g.chat.parsers.push(function (ch) {
ch.t = ch.t.split('Dom Burmistrza p.1').join('Dom klanu ' + clanname + ' p.1');
});
 */

//Nizina wieśniaków (Dom Chlasta)
/*
if (map.name == 'Nizina wieśniaków') {
$('#gw8535').attr('tip', '<p>Dom Klanu ' + clanname + '</p>');
}

if (map.name == 'Dom Chlasta') {
$("#ground").css({background: 'url(http://ccrrm.ccarderr.pl/addons/marcinilawa/inne/klan/img/Chlast_floor1.png)'});
}

if (map.name == 'Dom Chlasta - piwnica') {
$("#ground").css({background: 'url(http://ccrrm.ccarderr.pl/addons/marcinilawa/inne/klan/img/Chlast_piwnica.png)'});
}

if (map.name == 'Dom Chlasta p.1') {
$("#ground").css({background: 'url(http://ccrrm.ccarderr.pl/addons/marcinilawa/inne/klan/img/Chlast_floor2.png)'});
}
 */

//Torneg (Dom Cedrika)
if (map.name == 'Dom Cedrika') {
	$("#ground").css({
		background : 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/dom-cedrika.png)'
	});
	$('#gw6964').attr('tip', '<p>Dom Klanu ' + clanname + '</p>');
	$('#gw6965').attr('tip', '<p>Dom Klanu ' + clanname + '</p>');
	$('#gw2306').attr('tip', '<p>Dom Klanu ' + clanname + ' p.1</p>');
	$('#npc65391').attr({
		tip : "<b>Skryba klanu " + clanname + "</b>30lvl",
		ctip : "t_npc"
	});
}

//Eder (Dom Burmistrza)

if (map.name == "Eder") {
	$('#gw10539').attr('tip', '<p>Dom Klanu ' + clanname + '</p>');
	$('#gw779').attr('tip', '<p>Dom Klanu ' + clanname + ' p.1</p>');
	$('#npc9935').attr({
		tip : "<b>Skarbnik klanu " + clanname + "</b>55lvl",
		ctip : "t_npc"
	});
}

if (map.name == 'Dom Burmistrza p.1') {
	$('#gw1547').attr('tip', '<p>Dom Klanu ' + clanname + '</p>');
}

if (map.name == 'Podgrodzie Nithal') {
	$("#ground").css({
		background : 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/podgrodzie-nithal.2.png)'
	});
}

if (map.name == 'Cytadela') {
	$("#ground").css({
		background : 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/nithal-cytadelap0.png)'
	});
}

//Nithal (Cytadela p.1)
if (map.name == 'Cytadela p.1') {
	$('#gw770').attr('tip', '<p>Sala Tronowa klanu ' + clanname + '</p>');
	$("#ground").css({
		background : 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/nithal-cytadelap1.png)'
	});

}
//http://img19.imageshack.us/img19/116/rtva.png
//Cytadela p.2
if (map.name == 'Cytadela p.2') {
	$("#ground").css({
		background : 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/nithal-cytadelap2.png)'
	});
	postacnpc(0, 'Cytadela p.2', 5, 5, 'Pomnik dzielnego rycerza', '', 'http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/rycerz.png', '32', '64');

}

//Dom Matix-s'a
//http://emargo.pl/upload_image/items/neu%7Ctuz-klucz7.gif
/*
if (hero.nick == "Matix-s" || hero.nick == "Brat Matix-sa" || hero.nick == "Władysław Jagiełło") {
$('<div class="item ui-draggable" id="kluczdodomkuklanowego" style="left:0px; top:1353px;" tip="<b>Klucz do domu klanowego</b>Typ: Klucze</br><i class=idesc>Klucz do domku klanowego znajdującego się w Torneg 16, 34</i>Związany z właścicielem</br>Wartość: 15m" ctip="t_item"><img src="http://emargo.pl/upload_image/items/neu%7Ctuz-klucz7.gif"></div>').appendTo('#bag');
} else {
if (map.name == "Torneg") {
kolizja(16, 34)
}
}
if (map.name == "Torneg") {
$('#gw8720').attr('tip', '<p>Dom Matix-s\'a</br>(Wymaga klucza)</p>')
$('#gw1540').attr('tip', '<p>Dom Matix-s\'a p.1</p>')
}
$('#npc60756').attr('tip', '<b>Puszek</b>3 lvl').css('background-image', 'url("http://i.imm.io/1eDIR.png")');
postacnpc(0, 'Dom Szagarata', 6, 7, 'brat Matix-sa', '21', 'http://game9.margonem.pl/obrazki/npc/dzi/npc191.gif', '32', '48');
dialog(1, 0, 'Brat Matix-sa', '', 'Czego chcesz?! Po co przyniosłeś tego kota!! Przecież wiesz, że mam uczulenie na kocią sierść! Aaaaaaa psik..!', ['No a co miałem zrobić? Przybłędał się, mały, wychudzony... Przyniosłem go, wymyłem... A ty co?'], ['Nie pyskuj! Smarkacz się odezwał!'], [''], ['']);
dialog(2, 0, 'Brat Matix-sa', '', 'Ale nie możesz trzymać go chociaż na górze? Aaaaaa psik! Ja ciągle jestem tutaj, to niech chociaż kot pójdzie na górę!', ['A myślisz, że nie próbowałem? Ten kot ma lęk wysokości i odrazu schodzi. Tym bardziej, że czuje rybę w kuchni!'], ['To sam go przenieś!'], [''], ['']);
dialog(3, 0, 'Brat Matix-sa', '', 'To oddaj go komuś! Aaaaaa psik! Na pewno ktoś się znajdzie kto go będzie chciał!', ['Oddać go nie oddam, ale każdy członek naszego klanu może go sobie wyporzyczyć! Nie bój się... co chwila z kimś wychodzi!'], ['Nie mam czasu aby z tobą rozmawiać!'], [''], ['']);
dialog(4, 0, 'Brat Matix-sa', '', 'No dobra... Jakoś wytrzymam... Ale zawsze mam straszny katar! Aaaaaa psik!', [''], ['Masz chusteczkę...'], [''], ['']);

//Dom Ryledyry
//http://www.margonem.pl/obrazki/itemy/neu/tuz-klucz21.gif
if (map.name == "Nithal") {
$('#gw8255').attr('tip', '<p>Kamienica Ryledyry</br>(Wymaga klucza)</p>')
}
/*
$('#gw258').attr('tip', '<p>Kamienica Ryledyry</p>')
$('#gw2563').attr('tip', '<p>Kamienica Ryledyry p.1</p>')
$('#gw2572').attr('tip', '<p>Kamienica Ryledyry p.1</p>')
$('#gw3331').attr('tip', '<p>Kamienica Ryledyry</p>')
if (map.name == "Kamienica Uliany i Arsena p.1") {
$('#gw3340').attr('tip', '<p>Kamienica Ryledyry</p>')
}
$('#gw515').attr('tip', '<p>Kamienica Ryledyry p.2</p>')
$('#gw1541').attr('tip', '<p>Kamienica Ryledyry p.1</p>')
$('#gw1027').attr('tip', '<p>Kamienica Ryledyry - piwnica p.1</p>')
$('#gw2058').attr('tip', '<p>Kamienica Ryledyry - piwnica p.1</p>')
$('#gw3340').attr('tip', '<p>Kamienica Ryledyry - piwnica p.2</p>')
//$('#npc18659').attr('tip', '<b>Pies Przewodnik</b>9 lvl')
 */

/*
if (hero.nick == "Matix-s" || hero.nick == "Brat Matix-sa" || hero.nick == "Władysław Jagiełło" || hero.nick == "Ryledyra") {
$('<div class="item ui-draggable" id="kluczdodomkuklanowego" style="left:198px; top:1353px;" tip="<b>Klucz do domu klanowego</b>Typ: Klucze</br><i class=idesc>Klucz do domku klanowego znajdującego się w Nithal na ulicy Groszkowej (64, 32)</br>Nagroda za zajęcie 1 miejsca w Konkursie na najlepszy Screen Shot z gry</i>Związany z właścicielem</br>Wartość: 15m" ctip="t_item"><img src="http://www.margonem.pl/obrazki/itemy/neu/tuz-klucz21.gif"></div>').appendTo('#bag');
} else {
if (map.name == "Nithal") {
kolizja(63, 32)
}
}
 */

//Functiony Dialogów, Postaci itp.
$('<span class="obrazekID_ABP"> </span>').hide().appendTo("body");
$('<style>li{color:#e7d798;}.dialog_spec{display:none; position:absolute; z-index:298; left:0px; top:256px; height:256px; width:512px; background: url(img/console-back.jpg);}</style>').appendTo('#centerbox');

function kolizja(x, y) {
	g.npccol[x + 256 * y] = true;
}

function obok(x, y) {
	if (hero.x + 1 == x && hero.y + 1 == y || hero.x == x && hero.y + 1 == y || hero.x - 1 == x && hero.y + 1 == y) {
		return true;
	}
	if (hero.x + 1 == x && hero.y == y || hero.x - 1 == x && hero.y == y) {
		return true;
	}
	if (hero.x + 1 == x && hero.y - 1 == y || hero.x == x && hero.y - 1 == y || hero.x - 1 == x && hero.y - 1 == y) {
		return true;
	}
	return false;
}
//Funkcja dialogu

function dialog(i, idNPC, nick, obrazek, dialogNPC, zwykle, konce, func_z, func_k) {
	var dial = "<div id='spec_dial" + idNPC + "_" + i + "' class='dialog_spec dialog_spec_" + idNPC + "'><div id='dlgin'><h4><b>" + nick + ":</b> ";
	dial += obrazek != "" ? "<img src='" + obrazek + "' style='float: right;' />" : "";
	dial += dialogNPC;
	dial += "</h4>";
	for (var l in zwykle) {
		if (zwykle[l] != "") {
			dial += "<li onclick='" + func_z[l] + "$(\".dialog_spec_" + idNPC + "\").fadeOut(\"fast\");$(\"#spec_dial" + idNPC + "_" + (parseInt(i) + 1) + "\").show();'>" + zwykle[l] + "</li>";
		}
	}
	for (var k in konce) {
		if (konce[k] != "") {
			dial += "<li class='endtalk' onclick='" + func_k[k] + "$(\".dialog_spec_" + idNPC + "\").fadeOut(\"fast\");g.lock.remove();'>" + konce[k] + "</li>";
		}
	}
	dial += "</div></div>";
	$(dial).appendTo('#centerbox');
}

//Funkcja NPC (gadającego)

function postacnpc(idNPC, mapa, x, y, nick, lvl, tlo) {
	if (map.name == mapa) {
		var WID = arguments.length > 7 ? arguments[7] : 32;
		var HEI = arguments.length > 8 ? arguments[8] : 46;
		var IND = arguments.length > 9 ? arguments[9] : 10;
		var odejmijHEI = HEI - 32;
		var odejmijWID = (WID - 32) / 2;
		lvl = (lvl != "") ? lvl + " lvl" : "";
		$("<div class='npc' id='myNPC" + idNPC + "'></div>")
		.css({
			position : 'absolute',
			left : x * 32 - odejmijWID + "px",
			top : y * 32 - odejmijHEI + "px",
			backgroundImage : 'url(' + tlo + ')',
			width : WID + 'px',
			height : HEI + 'px',
			zIndex : y + IND
		})
		.attr("tip", "<b>" + nick + "</b>" + lvl)
		.attr("ctip", "t_npc")
		.click(function () {
			if (obok(x, y)) {
				$("#spec_dial" + idNPC + "_1").fadeIn("fast");
				g.lock.add();
			}
		})
		.appendTo("#ground");
		g.npccol[x + 256 * y] = true;
	}
}
//Pomnik
if (map.name == "Ithan") {
	$('<div tip="<b>Pomnik na Sprzedaż</b>Tu może stać twój pomnik, jeżeli wpłacisz 5m do skarbca klanowego" ctip="t_rip"></div>').css({
		width : 32,
		height : 32,
		position : 'absolute',
		left : 1152,
		top : 2208,
		backgroundImage : 'url(http://hydra-media.cursecdn.com/minecraft.gamepedia.com/0/06/Grid_Sign.png)',
		zIndex : 84,
	}).appendTo("#ground");
	$('<div tip="<b>Pomnik Kuroii</b>" ctip="t_rip"></div>').css({
		width : 32,
		height : 48,
		position : 'absolute',
		left : 1120,
		top : 2208,
		backgroundImage : 'url(http://www.margonem.pl/obrazki/postacie//cahir04.gif)',
		zIndex : 84,
	}).appendTo("#ground");
	
	$('<div tip="<b>Pomnik Władzia Jagiełły</b>" ctip="t_rip"></div>').css({
		width : 32,
		height : 48,
		position : 'absolute',
		left : 1088,
		top : 2208,
		backgroundImage : 'url(http://ccrrm.ccarderr.pl/addons/ccarderr/outchanger/stroje/inne/61.gif)',
		zIndex : 84,
	}).appendTo("#ground");
	
	$('<div tip="<b>Pomnik ŁowcaDJ</b>" ctip="t_rip"></div>').css({
		width : 32,
		height : 48,
		position : 'absolute',
		left : 1056,
		top : 2208,
		backgroundImage : 'url(http://www.margonem.pl/obrazki/postacie/paid/male_4.gif)',
		zIndex : 84,
	}).appendTo("#ground");
	
}

//Krzesełko
if (map.name == "Biuro Margonem") {
	$("<div></div>").css({
		width : 32,
		height : 48,
		position : 'absolute',
		left : 1408,
		top : 192,
		backgroundImage : 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/krzeslo.gif)',
		zIndex : 65,
	}).appendTo("#ground")
};

if (map.name == "Dom Cedrika") {
	$("<div></div>").css({
		width : 28,
		height : 40,
		position : 'absolute',
		left : 482,
		top : 166,
		backgroundImage : 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/mapki/krzeslo1.png)',
		zIndex : 65,
	}).appendTo("#ground")
}

//Postacie

//Ithan
//Przykład:
//postacnpc(19, 'Ithan', 58, 75, 'Zakapturzony mężczyzna', '<i></i>62', 'http://www.margonem.pl/obrazki/npc/mez/npc280.gif', '30', '52');
//dialog(1, 19, 'Zakapturzony mężczyzna', '', 'Wybacz, ale nie mam ochoty na rozmowę.', [''], ['Żegnaj.'], [''], ['']);

//Klanowy aukconer (zamiast tęczowej aukconerki)
/*
if (map.name == "Dom Aukcyjny") {
$('div[tip*="b>Tęczowa aukcjonerka</b"]')
.css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/1095907.gif")')
.attr("tip", "<b>Tajemniczy Aukcjoner</b><i>elita</i>100 lvl")
.click(function () {
$('#dialog').html().replace("Tęczowa aukcjonerka", "Tajemniczy aukcjoner").replace("Witaj tęczowy przybyszu, w czym mogę ci pomóc?", "[mrucząc pod nosem]Pssst! Jesteś z klanu Master Vert?");
});
}
 */
/*
//Biuletyn Ithan
postacnpc(24, 'Ithan', 38, 37, 'Biuletyn klanu ' + clanname + '', '', 'http://game9.margonem.pl/obrazki/npc/mas/biuletyn.gif', '64', '64');
//Biuletyn Nithal
postacnpc(24, 'Nithal', 35, 9, 'Biuletyn klanu ' + clanname + '', '', 'http://game9.margonem.pl/obrazki/npc/mas/biuletyn.gif', '64', '64');
//Biuletyn
dialog(1, 24, 'Biuletyn klanu ' + clanname + '', '', '[Przed Tobą stoi biuletyn klanu ' + clanname + '. Co robisz?]', ['[Zaczynam przeglądać ogłoszenia.]'], ['Nie mam czasu...'], [''], ['']);
dialog(2, 24, 'Biuletyn klanu ' + clanname + '', '', 'Ciągle trwają prace nad dodatkiem klanowym!', ['Świetnie! Ciekawe co Władek doda nowego :).'], ['Lipny ten dodatek :/'], [''], ['']);
dialog(3, 24, 'Biuletyn klanu ' + clanname + '', '', 'Rada klanu prosi o reguralne wpłaty do skarbca!', [''], ['Znowu...'], ['[Odchodzisz]'], ['']);

//Matix-s
postacnpc(1, 'Cytadela p.2', 10, 3, 'Matix-s', '51', 'http://www.margonem.pl/obrazki/postacie/vip/2675736.gif', '32', '48');
dialog(1, 1, '   Matix-s', '', '   Witaj!', ['Hej. Kim jesteś?'], ['To ja już dziękuję...'], [''], ['']);
dialog(2, 1, '   Matix-s', '', '   Nazywam się Matix-s, jestem założycielem klanu do którego należysz. Przykro mi ale jestem zajęty i nie mogę z tobą dłużej rozmawiać. O wszystko pytaj moich pomocników. ', [''], ['OK! Już mnie tu nie ma!'], [''], ['']);

//Jako takoo
postacnpc(2, 'Cytadela p.2', 9, 3, 'Jako takoo', '48', 'http://www.margonem.pl/obrazki/postacie/clan/katahha_5660m.gif', '32', '48');
dialog(1, 2, '   Jako takoo', '', '   Witaj jestem Jako takoo! W czym mogę Ci pomuc? ', ['   Cześć! Jestem ' + hero.nick + '.  Czym się zajmujesz?'], [''], [''], ['']);
dialog(2, 2, '   Jako takoo', '', '   Jestem współ założycielem klanu Master Vert. Zajmuję się utrzymaniem pożądku w rangach i na chacie klanowym.', ['Ooo... Zajebiśćie!'], ['Dzięki! To wszystko co chciałem wiedzieć.'], [''], ['']);
dialog(3, 2, '   Jako takoo', '', '   Co powiedziałeś? Co to za słownictwo? Pamiętaj aby dobrze się wyrażać! Chcesz abym pokazał Ci co pisze w regulaminie klanu?', ['Ale zajebistość to nie przekleństwo! To stan umysłu!'], ['Nie trzeba... Ja już nie będę... [Uciekasz]'], [''], ['']);
dialog(4, 2, '   Jako takoo', '', '   Możliwe... Ale regulamin jedno znacznie wskazuje na to, że wszystkie użycia słowa które mogą być uznane za nie stosowne są karane! Zresztą sam sobacz: </br><center><img src="http://game9.margonem.pl/obrazki/itemy/pap/k3.gif" onclick="zasadyklanupokaz()" tip="<b>Zasady obowiązujące w klanie Master Vert</b><b class=unique>* unikat *</b>Typ:  Książki<br><i class=idesc>Zwój zawierający wszystkie zasady obowiązujące w klanie Master Vert</br>Kliknij aby przeczytać</i>Wartość: 100k" ctip="t_item"></center>', ['Rozumiem! Za*******e!'], ['Rozumiem... Ja już nie będę...'], [''], ['']);
dialog(5, 2, '   Jako takoo', '', '   Już lepiej... ale i tak staraj się nie używać takich słów ;) ', [''], ['   Dziękuję za informacje!'], [''], ['']);
 */

postacnpc(3, 'Cytadela p.2', 11, 3, 'Władysław Jagiełło', '41', 'http://www.margonem.pl/obrazki/postacie/clan/katahha_1317m.gif', '32', '48');
dialog(1, 3, '   Władysław Jagiełło', '', '   Siemka! Jak leci!', ['   Świetnie! Jeżeli się nie mylę to jesteś Władysław Jagiełło!'], ['Mamooo! To ten pan z telewizji!'], [''], ['']);
dialog(2, 3, '   Władysław Jagiełło', '', '   Dokładnie! Jestem DodatkoPisarzem. Aktualnie zajmuję się dodatkiem klanowym tegoż znakomitego klanu! ', ['   WoW! A nauczył byś mnie robić dodatki?'], ['Aha. To wszystko co chciałem wiedzieć.'], [''], ['']);
dialog(3, 3, '   Władysław Jagiełło', '', '   To nie jest takie proste! Nie możesz po prostu powiedzieć "Władek! Naucz mnie jak robić dodatki!"... Sam musisz wejść w temat, musisz się zainteresować, poczytać, popróbować, popatrzeć i popytać. Prawie wszystko na "P" ;). Ja mogę tylko cię wprowadzić w temat. Zresztą ja nie jestem mistrzem! To że zrobiłem parę dodatków nie oznacza, że jestem geniuszem! Właściwie to moje umiejętnośći są co najmniej Mierne... "Im dalej w las tym więcej drzew" lub "Wiem, że nic nie wiem" to dwa powiedzenia które pasują jak ulał do tej dziedziny Programowania. Ale mimo to polecam Ci wejść w temat - w najbliższej przyszłości zdolności programistyczne będą bardzo cenne (sam sobacz: Nawet mikrofalówka zawiera w sobie komputer który ktoś zaprogramował ;) ). ', ['Rzeczywiście! Komputery są wszędzie i ktoś musiał je zaprogramowć! Ale od czego zacząć?'], ['Za skomplikowane... Zresztą... Co to jest Mikołfalułka?'], [''], ['']);
dialog(4, 3, '   Władysław Jagiełło', '', '   Najlepszym początkiem będzie przeczytanie/obejrzenie/kupienie filmu, poradnika lub książki o tematyce programistycznej. Jeżeli chcesz robić dodatki do margonem wybierz język JavaScript, jQuery, HTML oraz CSS, Jeżeli będziesz chciał robić programy komputerowe wybierz C++ - zresztą, co ja będę tłumaczył - po prostu skocz! Zagłęb się w to! Jak mówiłem wcześniej: poczytaj, poprubj, popatrz, popytaj! Niech te 4 wyrazy ciągle ci towarzyszą! PPPP, PPPP, PPPP...!', ['Dziękuję za rady! Mam nadzieję że mi się uda!'], ['Yhhh, mózg mi się lasuje... Jakie CeSsSs, HMŁT, -Cł+??Nie można po prostum mieczem tego? '], [''], ['']);
dialog(5, 3, '   Władysław Jagiełło', '', '   Powodzenia! Na pewno Ci się uda!', [''], ['Do zobaczenia!'], [''], ['']);

zasadyklanupokaz = function () {
	$('<div id="zasadyklanuMV" onclick="zasadyklanuschowaj()" style="background-image: url(http://imageshack.us/a/img826/164/3pae.png); no-repeat; width: 512px; height: 350px; z-index:370; text-align: center; position: absolute;" tip="Kliknij aby zamknąć..."></div>').appendTo('#centerbox');
}

zasadyklanuschowaj = function () {
	$('#zasadyklanuMV').hide();
}

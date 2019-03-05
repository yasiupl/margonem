//Hutena?, jeśli nie wyłącza wszystkie funkcje.
if (location.host == 'game9.margonem.pl') {
	log("Dodatek klanowy został załadowany z serwera")

	var wjset = new Date();
	wjset.setTime(wjset.getTime() + 9999999999999);
	var quicktime = new Date();
	quicktime.setTime(quicktime.getTime() + 3600000);

	//Ładowanie dodatków z pamięci
	if (!getCookie("DK_dane")) {
		setCookie("DK_dane", "1|1|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0", wjset);
	}
	var DK_dane = getCookie("DK_dane").split("|");
	if (DK_dane[0] == 1)
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/herooutfit.js"); //Outy
	if (DK_dane[1] == 1)
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/maskotka.js"); //Maskotka
	if (DK_dane[2] == 1)
		$('<style id="mgc_style"></style>').html('*{cursor:url(http://game9.margonem.pl/obrazki/itemy/mie/miecz08.gif), auto !important}').appendTo('head'); //Mieczyk jako kursor
	if (DK_dane[3] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/265public.js"); //Kiedy koniec aukcji?
	if (DK_dane[4] == 1)
		$.getScript("http://addons2.margonem.pl/get/1/1988public.js"); //Zjadacz złota
	if (DK_dane[5] == 1)
		$.getScript("http://addons2.margonem.pl/get/2/2230public.js"); //Chat to on PPM
	if (DK_dane[6] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/251public.js"); //Aukcje na 48h
	if (DK_dane[7] == 1)
		$.getScript("http://addons2.margonem.pl/get/1/1361public.js"); //Moc klanu
	if (DK_dane[8] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/249public.js"); //Show EQ
	if (DK_dane[9] == 1)
		$.getScript("http://addons2.margonem.pl/get/3/3841public.js"); //Loot saver
	if (DK_dane[10] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/253public.js"); //SCT - Save chat tab
	if (DK_dane[11] == 1)
		$.getScript("http://addons2.margonem.pl/get/2/2528public.js"); //Fancy Margo
	if (DK_dane[12] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/40public.js"); //Emotki
	if (DK_dane[13] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/259public.js"); //Zmiana wiadomości z walki z mAlertów na message
	if (DK_dane[14] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/254public.js"); //Hide drop Message
	if (DK_dane[15] == 1)
		$.getScript("http://addons2.margonem.pl/get/6/6505public.js"); //Pogodne Margonem
	if (DK_dane[16] == 1)
		$.getScript("http://addons2.margonem.pl/get/3/3014public.js"); //Margo Pogromca
	if (DK_dane[17] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/310public.js"); //Procentownik
	if (DK_dane[18] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/49public.js"); //Minutnik
	if (DK_dane[19] == 1)
		$.getScript("http://addons2.margonem.pl/get/4/4721public.js"); //SK - Skróty Kalwiszowe by Prawnik
	if (DK_dane[20] == 1)
		$.getScript("http://addons2.margonem.pl/get/7/7189public.js"); //AFC - Auto Fight Close by aldi
	if (DK_dane[21] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/27public.js"); //Auto zbieranie lootu + filtr by Doceluf
	if (DK_dane[22] == 1)
		$.getScript("http://addons2.margonem.pl/get/0/394public.js"); //Ignorowani
	if (DK_dane[23] == 1)
		$.getScript("http://addons2.margonem.pl/get/1/1319public.js"); //AH - Auto Health by Aldi
	if (DK_dane[24] == 1)
		$.getScript("http://addons2.margonem.pl/get/8/8709public.js"); //Anty Spam
	if (DK_dane[25] == 1)
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/myPets.js"); //My Pets
	if (DK_dane[26] == 1)
		$.getScript("http://addons2.margonem.pl/get/8/8948public.js"); //Info ile HP na grupowym

	$('#loading').css('background-image', 'url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/img/logo.png)');
	//

	//Zmienne
	var clanname = "Master Vert"
		var opiekun = "Władysław Jagiełło"

		//Klanowicz?, jeśli nie wyłącza funkcje dla klanowiczów
		clan = function () {
		if (hero.clan == "8676") {

			//Funkjca 1 - Powitanie w konsoli
			log('<a style="color:gold; text-decoration:blink" target="_blank" href="http://www.margonem.pl/?task=clanpage&id=5650&w=hutena">Witaj w klanie ' + clanname + '!</a>');

			//Funkjca 2 - Powitanie na chat'cie
			$('<div class="sys_red">Witamy w klanie ' + clanname + '!<a></a></div>').appendTo('#chattxt');

			//Opcje Dodatku
			$('<div style="position:absolute; z-index:306; left:632px; top:512px; width: 68px; height: 20px;"><center><img tip="Dodatek Klanowy"; src="http://host.ccarderr.pl/marcysvoneylau/inne/klan/img/dodatek-klanowy.png"></div></center>').css('opacity', '1.0').appendTo('#centerbox').click(function () {
				mAlert("<center><b><i>Opcje:</i></b></br></center><br><input type='checkbox' class='DS' name='1' " + (DK_dane[0] == 1 ? "checked='checked'" : "") + " /> - Outfity klanowe | Władysław Jagiełło<br><input type='checkbox' class='DS' name='2' " + (DK_dane[1] == 1 ? "checked='checked'" : "") + " /> - Mieczyk zamiast kursora<br><input type='checkbox' class='DS' name='3' " + (DK_dane[2] == 1 ? "checked='checked'" : "") + " /> - Maskotka klanowa | Władysław Jagiełło<br><input type='checkbox' class='DS' name='4' " + (DK_dane[3] == 1 ? "checked='checked'" : "") + " /> - AT - Auctions Time | Tidor<br><input type='checkbox' class='DS' name='5' " + (DK_dane[4] == 1 ? "checked='checked'" : "") + " /> - Zjadacz złota | Godfryd <br><input type='checkbox' class='DS' name='6' " + (DK_dane[5] == 1 ? "checked='checked'" : "") + " /> - Chat to on PPM | Aldi<br><input type='checkbox' class='DS' name='7' " + (DK_dane[6] == 1 ? "checked='checked'" : "") + " /> - Aukcje na 48h | ???<br><input type='checkbox' class='DS' name='8' " + (DK_dane[7] == 1 ? "checked='checked'" : "") + " /> - ClanPower | absflg<br><input type='checkbox' class='DS' name='9' " + (DK_dane[8] == 1 ? "checked='checked'" : "") + " /> - SEQ - Show EQ | Tidor<br><input type='checkbox' class='DS' name='10' " + (DK_dane[9] == 1 ? "checked='checked'" : "") + " /> - Loot Saver | Ziomq<br><input type='checkbox' class='DS' name='11' " + (DK_dane[10] == 1 ? "checked='checked'" : "") + " /> - SCT - Save Chat Tab | Tidor<br><input type='checkbox' class='DS' name='12' " + (DK_dane[11] == 1 ? "checked='checked'" : "") + " /> - Fancy Margo | Martin Master<br><input type='checkbox' class='DS' name='13' " + (DK_dane[12] == 1 ? "checked='checked'" : "") + " /> - Emotikony na chat | Kertiz<br><input type='checkbox' class='DS' name='14' " + (DK_dane[13] == 1 ? "checked='checked'" : "") + " /> - FM - Fight Message | Tidor<br><input type='checkbox' class='DS' name='15' " + (DK_dane[14] == 1 ? "checked='checked'" : "") + " /> - HDM - Hide Drop Message | Tidor<br><input type='checkbox' class='DS' name='16' " + (DK_dane[15] == 1 ? "checked='checked'" : "") + " /> - Pogodne Margonem | Władysław Jagiełło<br><input type='checkbox' class='DS' name='17' " + (DK_dane[16] == 1 ? "checked='checked'" : "") + " /> - MargoPogromca v3.16 | absflg<br><input type='checkbox' class='DS' name='18' " + (DK_dane[17] == 1 ? "checked='checked'" : "") + " /> - Procentownik | Siganer<br><input type='checkbox' class='DS' name='19' " + (DK_dane[18] == 1 ? "checked='checked'" : "") + " /> - Minutnik v2.6 | Ziomq<br><input type='checkbox' class='DS' name='20' " + (DK_dane[19] == 1 ? "checked='checked'" : "") + " /> - SK - Skróty klawiszowe | Prawnik<br><input type='checkbox' class='DS' name='21' " + (DK_dane[20] == 1 ? "checked='checked'" : "") + " /> - AFC - Auto Fight Close | Aldi (przeróbka by kobe-bryant)<br><input type='checkbox' class='DS' name='22' " + (DK_dane[21] == 1 ? "checked='checked'" : "") + " /> - Auto zbieranie lootu + filtr | Doceluf<br><input type='checkbox' class='DS' name='23' " + (DK_dane[22] == 1 ? "checked='checked'" : "") + " /> - Ignoruj go |Ofkorse<br><input type='checkbox' class='DS' name='24' " + (DK_dane[23] == 1 ? "checked='checked'" : "") + " /> - AH - Auto Heal | Aldi<br><input type='checkbox' class='DS' name='25' " + (DK_dane[24] == 1 ? "checked='checked'" : "") + " /> - Anty Spam | Sonquer<br><input type='checkbox' class='DS' name='26' " + (DK_dane[25] == 1 ? "checked='checked'" : "") + " /> - My Pets | Władysław Jagiełło<br><input type='checkbox' class='DS' name='27' " + (DK_dane[26] == 1 ? "checked='checked'" : "") + " /> - Ile pozostało mi HP? Info na grupowym | mishoo<br><center><b>Zapisać?</center></b>", 2, [function () {
							$(".DS").each(function (e) {
								DK_dane[e] = $(this).is(":checked") ? 1 : 0;
							});

							setCookie("DK_dane", DK_dane.join("|"), wjset);
							message("Zapisano... Gra zostanie automatycznie odświeżona");
							location.reload()
						},
						function () {}
					]);
			});

		}

		//Mas[kotka]
		//$.getScript("http://addons2.margonem.pl/get/5/5030dev.js");

		//Outy
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/outfity.js");

		//Błogo klanowe
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/blogo.js");

		//Rangi klanowe
		//$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/rangi.js");

		//Domy klanowe
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/domy.js");

		//LootLog - Groove Armanda
		setCookie('clanLootlogUserID', "AFYzycpNVdmv5c6Nt9b5", wjset);
		$.getScript("http://grooove.pl/margoDodatki/clanlootlog.php?clan=master_vert&id=DtDoVuGSTgxrYSeQeIOz");

		//Margo Help
		$.getScript("http://addons2.margonem.pl/get/0/217public.js");

		//Dźwięk przy wbiciu poziomu
		//$.getScript("http://addons2.margonem.pl/get/0/218public.js");


		//Po kliknięciu na informację o dołączeniu gracza do gry wpisuje @nick_gracza do pola textowego chat'u
		$(".sys_info").live("click", function (a) {
			if ($(this).html().indexOf('System') == -1 && $(this).html().indexOf('Podział łupów') == -1)
				chatTo($(this).html().replace(' dołączył do gry.', '').replace(' dołączyła do gry.', ''), a.ctrlKey);
		});

		g.chat.parsers.push(function (ch) {
			if (ch.t == "<span style='color: lime;'>Jaki jest najlepszy klan w Margonem?</span>") {
				if (!getCookie("quickcookieklan1")) {
					setCookie("quickcookieklan1", "1", quicktime);
					_g('chat&c=' + esc('/k Master Vert!'));
				}
			}
		});

		g.chat.parsers.push(function (ch) {
			if (ch.t == "<span style='color: lime;'>Odświeżcie stronę!</span>") {
				if (!getCookie("quickcookieklan2")) {
					setCookie("quickcookieklan2", "1", quicktime);
					mAlert("Zaszły zmiany w dodatku klanowym. Odświeżyć stronę?", 2, [function () {
								location.reload()
							}, function () {}

						])
				}
			}
		});

		//Funkjca 11 - Kolory na czacie dla załozycieli.
		g.chat.parsers.push(function (ch) { //#ccff33
			if (ch.n == "Władysław Jagiełło")
				ch.t = "<span style='color: lime;'>" + ch.t + "</span>";
			else if (ch.n == "lol123")
				ch.t = "<span style='color: lime;'>" + ch.t + "</span>";

		});

		//Funkjca 12 - Kolory na czacie dla dziewczyn.
		g.chat.parsers.push(function (ch) {
			if (ch.n == "Kuroii")
				ch.t = "<span style='color: aqua;'>" + ch.t + "</span>";
			else if (ch.n == "nooneisgoingtohavethis")
				ch.t = "<span style='color: purple;'>" + ch.t + "</span>";

		});

		//Własny emotikon klanowy
		/*
		emots = ["http://img823.imageshack.us/img823/6159/uvhp.png"];
		emochars = [
		["Master Vert", "master vert", "MASTER VERT", "Master vert", "master Vert"]
		];
		g.chat.parsers.push(function (ch) {
		emoresize = parseFloat($("#chattxt").css("font-size")) + 4 + "px";
		for (var i in emochars) {
		for (var c in emochars[i]) {
		ch.t = ch.t.split(emochars[i][c]).join("<img src='" + emots[i] + "' style='height:" + emoresize + ";' />");
		}
		}
		});

		 */

		//kolory na chacie
		/*
		g.chat.parsers.push(function (ch) {
		//if (ch.n == "Władysław Jagiełło" || ch.n == "Matix-s" || ch.n == "Jako takoo") {
		ch.t = ch.t.split("#red").join("<span style='color: red;'>");
		ch.t = ch.t.split("#gray").join("<span style='color: gray;'>");
		ch.t = ch.t.split("#gold").join("<span style='color: gold;'>");
		ch.t = ch.t.split("#/").join("</span>");
		//}
		});
		 */

	}

	//Opuźnienie
	timeout = function () {
		setTimeout(function () {
			clan()
			$("#cl_leave").remove();
			$('button[onclick*="clLeave()"]').remove();
		}, 2000);
	}
	g.loadQueue.push({
		fun : timeout,
		data : ''
	});
}
//Hutena?, jeśli nie wyłącza wszystkie funkcje.
if (location.host == 'game9.margonem.pl') {
	log("Dodatek klanowy został załadowany z serwera")

	//http://img12.imageshack.us/img12/5378/8ec8.png
	var wjset = new Date();
	wjset.setTime(wjset.getTime() + 9999999999999);
	var wjkas = new Date();
	wjkas.setTime(wjkas.getTime() - 9999999999999);
	var quicktime = new Date();
	quicktime.setTime(quicktime.getTime() + 3600000);

	//Ładowanie dodatków z pamięci
	if (!getCookie("DK_dane")) {
		setCookie("DK_dane", "1|0|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0", wjset);
	}
	var DK_dane = getCookie("DK_dane").split("|");
	if (DK_dane[0] == 1)
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/herooutfit.js"); //Outy
	if (DK_dane[1] == 1)
		$.getScript("http://addons2.margonem.pl/get/5/5487public.js"); //Motyw klanowy - Endavour
	if (DK_dane[2] == 1)
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/maskotka.js"); //Maskotka
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
			//$('<div class="chattxt">Witamy w klanie ' + clanname + '!<a></a></div>').appendTo('#chattxt');
			//Funkjca 3 - Tło
			//$('<img style="display: none; width: 100%; height: 100%; z-index: -1; position: fixed; left: 0px; top: 0px;" ondragstart="return false" ondrag="return false" id="ccrrbackground1" src="http://ccarderr.pl/CCRRM/Dodatki/BGChanger/tla/010.jpg" alt="" />').appendTo("body");

			//Funkjca 4 - Po wcisnieciu na nick wyświetla na czacie klanowym informacje o sobie.
			//$('<div style="position:absolute; z-index:350; left:517px; bottom:0px; width: 20px; height: 28px;"><img tip="Po wciśnięciu pokazuję informacje klanowiczą."; src="http://www.margonem.pl/obrazki/itemy/tal/ska-tal01.gif"></div>').appendTo('#centerbox').click(function () {
			//    var przeciwnik = '';
			//   for (n in g.battle.f) {
			//        if (g.battle.f[n].name != hero.nick) {
			//            przeciwnik += g.battle.f[n].name + ' ' + g.battle.f[n].lvl + g.battle.f[n].prof;
			//            przeciwnik += '; '
			//        }
			//    } {
			//        _g('chat&c=' + esc('/k Jestem na mapce ' + map.name + ' na kordach ' + hero.rx + ',' + hero.ry + '.'))
			//    }
			//});


			//Funkjca 5 - Domy Klanowe
			//Przeniesiono

			//Funkcja 7 - Menu klanowe
			/*
			$('<div id="pk_mini_clan" class="up"><div class="pk_mini_wrapper"><div class="del" onclick="pk_mini_hide()" tip="Zamknij listę"></div></div>').hide().appendTo('#centerbox2');
			pk_mini_hide = function() {
			$('#pk_mini_clan').hide();
			}
			 */

			//Opcje Dodatku
			$('<div style="position:absolute; z-index:306; left:632px; top:512px; width: 68px; height: 20px;"><center><img tip="Dodatek Klanowy"; src="http://host.ccarderr.pl/marcysvoneylau/inne/klan/img/dodatek-klanowy.png"></div></center>').css('opacity', '1.0').appendTo('#centerbox').click(function () {
				mAlert("<center><b><i>Opcje:</i></b></br></center><br><input type='checkbox' class='DS' name='1' " + (DK_dane[0] == 1 ? "checked='checked'" : "") + " /> - Outfity klanowe | Władysław Jagiełło<br><input type='checkbox' class='DS' name='2' " + (DK_dane[1] == 1 ? "checked='checked'" : "") + " /> - Motyw klanowy - Endavour | CcarderR<br><input type='checkbox' class='DS' name='3' " + (DK_dane[2] == 1 ? "checked='checked'" : "") + " /> - Maskotka klanowa | Władysław Jagiełło<br><input type='checkbox' class='DS' name='4' " + (DK_dane[3] == 1 ? "checked='checked'" : "") + " /> - AT - Auctions Time | Tidor<br><input type='checkbox' class='DS' name='5' " + (DK_dane[4] == 1 ? "checked='checked'" : "") + " /> - Zjadacz złota | Godfryd <br><input type='checkbox' class='DS' name='6' " + (DK_dane[5] == 1 ? "checked='checked'" : "") + " /> - Chat to on PPM | Aldi<br><input type='checkbox' class='DS' name='7' " + (DK_dane[6] == 1 ? "checked='checked'" : "") + " /> - Aukcje na 48h | ???<br><input type='checkbox' class='DS' name='8' " + (DK_dane[7] == 1 ? "checked='checked'" : "") + " /> - ClanPower | absflg<br><input type='checkbox' class='DS' name='9' " + (DK_dane[8] == 1 ? "checked='checked'" : "") + " /> - SEQ - Show EQ | Tidor<br><input type='checkbox' class='DS' name='10' " + (DK_dane[9] == 1 ? "checked='checked'" : "") + " /> - Loot Saver | Ziomq<br><input type='checkbox' class='DS' name='11' " + (DK_dane[10] == 1 ? "checked='checked'" : "") + " /> - SCT - Save Chat Tab | Tidor<br><input type='checkbox' class='DS' name='12' " + (DK_dane[11] == 1 ? "checked='checked'" : "") + " /> - Fancy Margo | Martin Master<br><input type='checkbox' class='DS' name='13' " + (DK_dane[12] == 1 ? "checked='checked'" : "") + " /> - Emotikony na chat | Kertiz<br><input type='checkbox' class='DS' name='14' " + (DK_dane[13] == 1 ? "checked='checked'" : "") + " /> - FM - Fight Message | Tidor<br><input type='checkbox' class='DS' name='15' " + (DK_dane[14] == 1 ? "checked='checked'" : "") + " /> - HDM - Hide Drop Message | Tidor<br><input type='checkbox' class='DS' name='16' " + (DK_dane[15] == 1 ? "checked='checked'" : "") + " /> - Pogodne Margonem | Władysław Jagiełło<br><input type='checkbox' class='DS' name='17' " + (DK_dane[16] == 1 ? "checked='checked'" : "") + " /> - MargoPogromca v3.16 | absflg<br><input type='checkbox' class='DS' name='18' " + (DK_dane[17] == 1 ? "checked='checked'" : "") + " /> - Procentownik | Siganer<br><input type='checkbox' class='DS' name='19' " + (DK_dane[18] == 1 ? "checked='checked'" : "") + " /> - Minutnik v2.6 | Ziomq<br><input type='checkbox' class='DS' name='20' " + (DK_dane[19] == 1 ? "checked='checked'" : "") + " /> - SK - Skróty klawiszowe | Prawnik<br><input type='checkbox' class='DS' name='21' " + (DK_dane[20] == 1 ? "checked='checked'" : "") + " /> - AFC - Auto Fight Close | Aldi (przeróbka by kobe-bryant)<br><input type='checkbox' class='DS' name='22' " + (DK_dane[21] == 1 ? "checked='checked'" : "") + " /> - Auto zbieranie lootu + filtr | Doceluf<br><input type='checkbox' class='DS' name='23' " + (DK_dane[22] == 1 ? "checked='checked'" : "") + " /> - Ignoruj go |Ofkorse<br><input type='checkbox' class='DS' name='24' " + (DK_dane[23] == 1 ? "checked='checked'" : "") + " /> - AH - Auto Heal | Aldi<br><input type='checkbox' class='DS' name='25' " + (DK_dane[24] == 1 ? "checked='checked'" : "") + " /> - Anty Spam | Sonquer<br><input type='checkbox' class='DS' name='26' " + (DK_dane[25] == 1 ? "checked='checked'" : "") + " /> - My Pets | Władysław Jagiełło<br><input type='checkbox' class='DS' name='27' " + (DK_dane[26] == 1 ? "checked='checked'" : "") + " /> - Ile pozostało mi HP? Info na grupowym | mishoo<br><center><b>Zapisać?</center></b>", 2, [function () {
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

			/*
			$('<div id="panelik" style="background-image: url("http://host.ccarderr.pl/marcysvoneylau/inne/klan/img/menu_background.png); no-repeat; width: 512px; height: 512px; color: black; z-index:370;font-family: Arial, Helvetica, sans-serif; text-align: center; position: absolute; line-height: 50%"><div id="DKMenu" style="margin-top: 10px; margin-left: 30px; margin-right: 30px;"><img src="http://host.ccarderr.pl/marcysvoneylau/inne/klan/img/logo.png"></br></br><span style="font-size: 20px"><b><i>Dodatek Klanu ' + clanname + '</i></b></span><br /></br></br></br></br><span id="news" style="font-size: 16px"><a><u>Wiadomości klanowe</u></a></span></br></br></br></br><span id="events" style="font-size: 16px"><a><u>Imprezy Klanowe</u></a></span></br></br></br></br><span id="contest" style="font-size: 16px"><a><u>Konkursy Klanowe</u></a></span></br></br></br></br><span id="ryneczek" style="font-size: 16px"><a><u>Kupię/Sprzedam</u></a></span></br></br></br></br><span id="trips" style="font-size: 16px"><a><u>Wypady na Herosów, Elity, Elity II, Tytanów</u></a></span></br></br></br></br><span id="rules" style="font-size: 16px"><a><u>Zasady</u></a></span></br></br></br></br><span id="galery" style="font-size: 16px"><a><u>Galeria</u></a></span></br></br></br></br><span id="options" style="font-size: 16px"><a><u>Opcje dodatku</u></a></span></br></br></br></br><span id="close" style="font-size: 15px"><a><u>Zamknij</u></a></span></br></br></br></br><span id="info_about" style="font-size: 10px"> Twórca dodatku - Władysław Jagiełło </span></br></br><span id="info_dod" style="font-size: 10px">O dodatku</span></br></div>').hide().appendTo('#centerbox');
			$('<div style="position:absolute; z-index:306; left:632px; top:512px; width: 68px; height: 20px;"><center><img tip="Dodatek Klanowy"; src="http://ccrrm.ccarderr.pl/addons/marcinilawa/inne/klan/img/dodatek-klanowy.png"></div></center>').css('opacity', '1.0').appendTo('#centerbox').click(function () {
			$('#panelik').toggle();
			});

			//Wiadomości Klanowe
			$('#news').click(function () {
			mAlert('<center style="height:400px;overflow:auto;"><b><i>Wiadomości Klanowe</i></b><br><font style="color:#025076">*New*</font>Nowy dom klanowy - Dom Chlasta, Niznina wieśniaków<br><br><font style="color:#f00"><br>Zmiany w dodatku:<br>-Zmiana pozycji przycisku dodatku klanowego - teraz zamiast przycisku Sterowanie<br>-Zmiana hostingu grafik - teraz ten sam co kod (ccrrm.ccarderr.pl)</br>-Zmiana sposobu wyświetlania outfitów klanowych</font><br><font style="color:#025076"></font></font><br></center>');
			});

			//Imprezy Klanowe
			$('#events').click(function () {
			mAlert('<center><b><i>Imprezy Klanowe<br><br></i></b></br><b>Spotkania klanowe</b></br>Co miesiąc w ostatni weekend po 18:00 w jednym z domów klanowych.</center>');
			});
			//<font style="color:#025076"><b>Brak zapowiedzianych</b></font>
			//Konkursy klanowe
			$('#contest').click(function () {
			mAlert('<center style="height:400px;overflow:auto;"><b><i>Konkursy Klanowe<br><br></i></b><font style="color:#025076"><b>Brak zapowiadzianych</b></font>');
			});

			//Quiz
			//<b>Quiz o Margonem</b></br><i>Zasady:</i></br>- Pytania zadawane są graczom po jednym - zła odpowiedź: odpadasz, dobra odpowiedź: jedziemy dalej. Aż zostanie 3 graczy</br>- Na udzielenie odpowiedzi na pytanie uczestnik ma 15 sekund.</br>- Remisy będą rozstrzygane poprzez dodatkowe pytania.</br>Zakaz komunikowania się z innymi graczami i ściągania odpowiedzi z Internetu.</br>Nagrody będą losowane dla 3 najlepszych wyników</br><i>Nagrody:</i></br><img src="http://game9.margonem.pl/obrazki/itemy/pie/piersc30.gif" tip="<b>Złoty pierścień strażnika</b><b class=unique>* unikat *</b>Typ:  Pierścienie<br />Cios krytyczny +3%<br>Siła krytyka fizycznego +5%<br>Siła +138<br>SA +25%<br>Wiąże po założeniu<br><b class=att noreq>Wymagany poziom: 67</b><br><b class=att noreq>Wymagana profesja  Wojownik</b><br>Wartość: 18.3k" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/szt/plaszcz_gnom1.gif" tip="<b>Płaszcz gnoma łowcy</b>Typ:  Zbroje<br />Pancerz: 104<br>Odporność na truciznę +20%<br>Odporność na zimno +5%<br>Zręczność +26<br>SA +14%<br><b class=att>Wymagany poziom: 43</b><br><b class=att noreq>Wymagana profesja  Łowca, Tropiciel</b><br>Wartość: 9911" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/szt/plaszcz_gnom3.gif" tip="<b>Płaszcz mądrego gnoma</b>Typ:  Zbroje<br />Pancerz: 134<br>Odporność na zimno +3%<br>Siła +26<br>+0.4 życia za 1 pkt siły<br><b class=att>Wymagany poziom: 43</b><br><b class=att>Wymagana profesja  Paladyn</b><br>Wartość: 9439" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/eve/wal_misiek2.gif" tip="<b>Kochający miś</b>Typ:  Neutralne<br /><i class=idesc>Ten miś wyrazi za ciebie to, czego sam nie<br>potrafisz powiedzieć wybrance swojego<br>serca.<br><br>Z okazji walentynek.</i>Wartość: 10k" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/eve/marz01.gif" tip="<b>Dziergana Marzanna od Wiosny</b><b class=heroic>* heroiczny *</b>Typ:  Neutralne<br /><i class=idesc>Marzanna zrobiona przez Tafię. Pamiątka<br>słowiańskiego eventu.</i>Wartość: 10k" ctip="t_item"></br><i>Jeżeli chce ktoś coś dorzucić to Pisać do Władka Jagiełły :)</br><h3>Początek Quizu jutro (9.09.13) po godzinie 18:00. Zapisy u Władysława Jagiełło</h3></i>
			//Wyniki bicia:
			//<b>Wyniki Szukania Herosa</b></br><b>Tabela wyników:</b></br>musiek - Wygrana - Wygrana</br>mroczny kurczak - Wygrana</br>duża panda - Wwygrana</br>Ryledyra - Ded - Wygrana</br>Areisa - Ded - Wygrana</br></br><b>Nagrody:</b></br>Wyżej wmienieni gracze w losowaniu otrzymali następujące nagrody:</br>musiek:</br><img src="http://emargo.pl/upload_image/items/kaf%7Cshj-zbr10.gif" tip="<b>Magiczny kaftan ochronny</b><b class=unique>* unikat *</b>Typ: Zbroje<br>Pancerz : 219<br>Odporność na truciznę +10%<br>Odporność na zimno +10%<br>Absorbuje do 820 obrażeń fizycznych<br>Absorbuje do 602 obrażeń magicznych<br>Wszystkie cechy +49<br>Mana +35<br>SA +50%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 82</b><br><b class=att noreq>Wymagana profesja: Tropiciel</b><br>Wartość: 59.7k" ctip="t_item"><img src="http://www.emargo.pl/upload_image/items/szt%7Ckoch-zbroja05.gif" tip="<b>Płaszcz łzawych rozstań</b><b class=unique>* unikat *</b>Typ: Zbroje<br>Pancerz : 335<br>Odporność na truciznę +20%<br>Odporność na ogień -3%<br>Odporność na zimno +3%<br>Odporność na błyskawice +6%<br>Unik +20<br>SA +83%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 100</b><br><b class=att noreq>Wymagana profesja: Łowca</b><br>Wartość: 84.1k" ctip="t_item"></br>mroczny kurczak:</br><img src="http://emargo.pl/upload_image/items/but%7Cmum-buty02.gif" tip="<b>Piaskowe buty zapomnianych</b><b class=unique>* unikat *</b>Typ: Buty<br>Pancerz : 102<br>Odporność na błyskawice +11%<br>Absorbuje do 256 obrażeń fizycznych<br>Absorbuje do 171 obrażeń magicznych<br>Cios krytyczny +1%<br>Siła krytyka magicznego +6%<br>Intelekt +61<br>SA +36%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 113</b><br><b class=att noreq>Wymagana profesja: Mag, Tropiciel</b><br>Wartość: 62.5k" ctip="t_item"></br>duża panda:</br><img src="http://emargo.pl/upload_image/items/kaf%7Czbroja45.gif" tip="<b>Nocna zbroja łowcy</b>Typ: Zbroje<br>Pancerz : 215<br>Odporność na truciznę +20%<br>Odporność na ogień +5%<br>Zręczność +42<br>SA +25%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 75</b><br><b class=att noreq>Wymagana profesja: Łowca, Tropiciel</b><br>Wartość: 30.9k" ctip="t_item"></br>Ryledyra:</br><img src="http://emargo.pl/upload_image/items/kaf%7Cskorzana01.gif" tip="<b>Dobrej jakości zielona zbroja</b><b class=unique>* unikat *</b>Typ: Zbroje<br>Pancerz : 359<br>Odporność na truciznę +20%<br>Odporność na ogień +6%<br>Zręczność +57<br>Energia +17<br>Życie +593<br>SA +35%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 105</b><br><b class=att noreq>Wymagana profesja: Łowca, Tropiciel</b><br>Wartość: 92.7k" ctip="t_item"></br>Areisa:</br><img src="http://emargo.pl/upload_image/items/rek%7Ctuz066.gif" tip="<b>Żywiczne rękawice</b>Typ: Rękawice<br>Pancerz : 44<br>Odporność na truciznę +15%<br>Odporność na błyskawice +5%<br>SA +41%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 65</b><br><b class=att noreq>Wymagana profesja: Łowca</b><br>Wartość: 12.3k" ctip="t_item"></br></br>Ponieważ zostały jeszcze 2 nitknięte looty, został rozdany extra loot! Wylosowani gracze to:</br>Ryledyra</br><img src="http://emargo.pl/upload_image/items/kon%7Csur43.gif" tip="<b>Wino Mietka</b>Typ: Konsumpcyjne<br>Leczy 50 punktów życia<br>Ilość: 10<br><b class=att>Wymagany poziom: 18</b><br>Wartość: 105" ctip="t_item"></br>Areisa</br><img src="http://emargo.pl/upload_image/items/hat%7Chood-04.gif" tip="<b>Kaptur zwinnego mnicha</b><b class=unique>* unikat *</b>Typ: Hełmy<br>Pancerz : 65<br>Odporność na zimno +11%<br>Absorbuje do 163 obrażeń fizycznych<br>Absorbuje do 109 obrażeń magicznych<br>Cios krytyczny +1%<br>Wszystkie cechy +27<br>SA +46%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 76</b><br><b class=att noreq>Wymagana profesja: Mag, Tropiciel</b><br>Wartość: 27.2k" ctip="t_item"></br><h3>Gratuluję uczestnikom i zapraszam do uczestnictwa w innych konkursach!</h3>
			//Biecie herosa:
			//<b>Szukanie herosa</b></br>Herosem będzie Ikariam (70h) - jednak nie pod swoim nickiem, a pod nickiem Łowca Snów. Będzie wyglądał tak:</br><img src="http://i.imm.io/1fuKl.png" tip="<b>Łowca Snów</b>70lvl" ctip="t_npc"></br>(Oczywiście tylko dla tych którzy mają dodatek klanowy, dla wszystkich innych ciągle będzie to Ikariam :D)</br><b>Spawn:</b></br>-Las Tropicieli</br>-Podmokła Dolina</br>-Cienisty Bór</br>-Mokradła</br>-Zasłonięte Jezioro</br></br><b>Loot:</b></br>Ci którzy go <b>pokonają</b>, będą mieli szansę na wylosowanie jednego z tych przedmiotów:</br><img src="http://emargo.pl/upload_image/items/but%7Cmum-buty02.gif" tip="<b>Piaskowe buty zapomnianych</b><b class=unique>* unikat *</b>Typ: Buty<br>Pancerz : 102<br>Odporność na błyskawice +11%<br>Absorbuje do 256 obrażeń fizycznych<br>Absorbuje do 171 obrażeń magicznych<br>Cios krytyczny +1%<br>Siła krytyka magicznego +6%<br>Intelekt +61<br>SA +36%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 113</b><br><b class=att noreq>Wymagana profesja: Mag, Tropiciel</b><br>Wartość: 62.5k" ctip="t_item"><img src="http://emargo.pl/upload_image/items/hat%7Chood-04.gif" tip="<b>Kaptur zwinnego mnicha</b><b class=unique>* unikat *</b>Typ: Hełmy<br>Pancerz : 65<br>Odporność na zimno +11%<br>Absorbuje do 163 obrażeń fizycznych<br>Absorbuje do 109 obrażeń magicznych<br>Cios krytyczny +1%<br>Wszystkie cechy +27<br>SA +46%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 76</b><br><b class=att noreq>Wymagana profesja: Mag, Tropiciel</b><br>Wartość: 27.2k" ctip="t_item"><img src="http://emargo.pl/upload_image/items/kaf%7Cshj-zbr10.gif" tip="<b>Magiczny kaftan ochronny</b><b class=unique>* unikat *</b>Typ: Zbroje<br>Pancerz : 219<br>Odporność na truciznę +10%<br>Odporność na zimno +10%<br>Absorbuje do 820 obrażeń fizycznych<br>Absorbuje do 602 obrażeń magicznych<br>Wszystkie cechy +49<br>Mana +35<br>SA +50%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 82</b><br><b class=att noreq>Wymagana profesja: Tropiciel</b><br>Wartość: 59.7k" ctip="t_item"><img src="http://emargo.pl/upload_image/items/kaf%7Cskorzana01.gif" tip="<b>Dobrej jakości zielona zbroja</b><b class=unique>* unikat *</b>Typ: Zbroje<br>Pancerz : 359<br>Odporność na truciznę +20%<br>Odporność na ogień +6%<br>Zręczność +57<br>Energia +17<br>Życie +593<br>SA +35%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 105</b><br><b class=att noreq>Wymagana profesja: Łowca, Tropiciel</b><br>Wartość: 92.7k" ctip="t_item"><img src="http://www.emargo.pl/upload_image/items/szt%7Ckoch-zbroja05.gif" tip="<b>Płaszcz łzawych rozstań</b><b class=unique>* unikat *</b>Typ: Zbroje<br>Pancerz : 335<br>Odporność na truciznę +20%<br>Odporność na ogień -3%<br>Odporność na zimno +3%<br>Odporność na błyskawice +6%<br>Unik +20<br>SA +83%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 100</b><br><b class=att noreq>Wymagana profesja: Łowca</b><br>Wartość: 84.1k" ctip="t_item"><img src="http://emargo.pl/upload_image/items/kaf%7Czbroja45.gif" tip="<b>Nocna zbroja łowcy</b>Typ: Zbroje<br>Pancerz : 215<br>Odporność na truciznę +20%<br>Odporność na ogień +5%<br>Zręczność +42<br>SA +25%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 75</b><br><b class=att noreq>Wymagana profesja: Łowca, Tropiciel</b><br>Wartość: 30.9k" ctip="t_item"><img src="http://emargo.pl/upload_image/items/rek%7Ctuz066.gif" tip="<b>Żywiczne rękawice</b>Typ: Rękawice<br>Pancerz : 44<br>Odporność na truciznę +15%<br>Odporność na błyskawice +5%<br>SA +41%<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 65</b><br><b class=att noreq>Wymagana profesja: Łowca</b><br>Wartość: 12.3k" ctip="t_item"><img src="http://emargo.pl/upload_image/items/kon%7Csur43.gif" tip="<b>Wino Mietka</b>Typ: Konsumpcyjne<br>Leczy 50 punktów życia<br>Ilość: 10<br><b class=att>Wymagany poziom: 18</b><br>Wartość: 105" ctip="t_item"></br><h3>Start Zabawy jutro (20.08.13) o godzinie 18:00</br></br>koniez zabawy 25.08.13</h3>

			//Na najlepszy SS:
			//<b>Konkurs na najlepszy ScreenShot z gry</b></br>Konkurs trwa do 11 Sierpnia 2013r. Pracę proszę wysyłać do Władysława Jagiełło na skrzynkę.</br><b>Wyniki:</b></br><b>1 miejsce:</b></br>http://oi41.tinypic.com/2d98mm9.jpg</br>http://oi39.tinypic.com/4i1vnn.jpg</br><b>Ryledyra (51 lvl Mag)</b></br>Bardzo estetyczne i ładne Screeny. Bez przepychu (nie chodzi mi o złoto w Cytadeli)</br><b>Nagrody:</b></br><img src="http://www.margonem.pl/obrazki/itemy/zlo/worek7.gif" tip="<b>Złoto</b>Typ:  Złoto</br>Złoto +1 000 000<br><i class=idesc>Oczywiście nie w Itemie tylko w gotówce :D</i></br>Wartość: 1 000 000" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/szt/shj-zbr15.gif" tip="<b>Szara szata mnicha</b><b class=unique>* unikat *</b>Typ:  Zbroje<br>Pancerz: 109<br>Odporność na zimno +12%<br>Absorbuje do 1094 obrażeń fizycznych<br>Absorbuje do 547 obrażeń magicznych<br>Życie +448<br>Mana +48<br>SA +29%<br>Wiąże po założeniu<br><b class=att noreq>Wymagany poziom: 82</b><br><b class=att noreq>Wymagana profesja  Mag</b><br>Wartość: 56.9k" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/tar/staroz01.gif" tip="<b>Tarcza starożytnego</b>Typ:  Tarcze<br>Pancerz: 189<br>Odporność na zimno +3%<br>Blok +70<br>Siła +39<br>Wiąże po założeniu<br><b class=att noreq>Wymagany poziom: 70</b><br><b class=att>Wymagana profesja  Paladyn</b><br>Wartość: 20k" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/mie/tuz034.gif" tip="<b>Obrońca drzew</b><b class=unique>* unikat *</b>Typ: Jednoręczne<br>Atak: 690-763<br>SA +41%<br>Obniża SA przeciwnika o 0.27<br>Wiąże po założeniu<br><b class=att>Wymagany poziom: 65</b><br><b class=att>Wymagana profesja Tancerz ostrzy</b><br>Wartość: 29.6k" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/neu/bat_small.gif" tip="<b>Mały nietoperz</b><b class=heroic>* heroiczny *</b>Typ: Neutralne<br>Wartość: 500" ctip="t_item"></br>+Zestaw Mixturek, Domek klaowy i Pomnik w wybranym miejscu, Ranga Magicznej tancerki (lub inna nazwa do wyboru), Indywidualny Outfit klanowy</br></br><b>2 miejsce:</b></br>http://i.imgur.com/zMpZERM.jpg</br>http://i.imgur.com/0vzDnlc.jpg</br>http://i.imgur.com/8LBrQBt.jpg</br>http://i.imgur.com/leGovsO.jpg</br>http://i.imgur.com/Ibnkdaq.jpg</br><b>Tirian I (43 lvl Wojownik)</b></br>Wszystkie Screeny związane z Walką, jak na Wojownika przystało :D</br><b>Nagrody:</b></br><img src="http://www.margonem.pl/obrazki/itemy/zlo/worek6.gif" tip="<b>Złoto</b>Typ:  Złoto</br>Złoto +500 000<br><i class=idesc>Oczywiście nie w Itemie tylko w gotówce :D</i></br>Wartość: 500 000" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/pap/ksiazka8.gif" tip="<b>Na podbój Andarum</b><b class=unique>* unikat *</b>Typ: Książki<br><i class=idesc>Historia ostatniej wyprawy pewnego<br>dzielnego wojownika.</i>Wartość: 11" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/mie/rozpruwacz3.gif" tip="<b>Lodowy rozpruwacz</b>Typ:  Jednoręczne<br>Atak: 818-1000<br>Obrażenia od zimna +454<br>oraz spowalnia cel o 0.86 SA<br>Obniżenie odporności o 1% podczas ciosu<br>Wiąże po założeniu<br><b class=att noreq>Wymagany poziom: 90</b><br><b class=att>Wymagana profesja  Paladyn</b><br>Wartość: 40.2k" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/tar/boska.gif" tip="<b>Lekka tarcza gladiatora</b>Typ:  Tarcze<br>Pancerz: 140<br>Odporność na zimno +1%<br>Blok +46<br>SA +20%<br><b class=att noreq>Wymagany poziom: 46</b><br><b class=att>Wymagana profesja  Paladyn, Wojownik</b><br>Wartość: 8371" ctip="t_item"></br>+Zestaw Mixturek, Pomnik w wybranym miejscu, Własny outfit klanowy, Ranga Expmaniaka (Lub inna nazwa do wyboru)</br></br><b>3 miejsce:</b></br>ex aequo:</br>Chosen, Złoty tancerz, Musiek, Revini</br><b>Nagrody:</b></br><img src="http://www.margonem.pl/obrazki/itemy/zlo/worek5.gif" tip="<b>Złoto</b>Typ:  Złoto</br>Złoto +100 000<br><i class=idesc>Oczywiście nie w Itemie tylko w gotówce :D</i></br>Wartość: 100 000" ctip="t_item"></br>+ Zestaw mixturek</br></br><b>Było 1 miejsce - teraz tyko wyróżnienie:</b></br>http://i.imgur.com/wbuD968.png</br><b>comandosik kox (73lvl Paladyn)</b></br>Piękny Screen! Zmieniona mapka Ithan i do tego padający śnieg - o to w tym konkursie chodziło! Ma być pomysłowo!</br>Niestety, w zaistniałych okolicznościach (awantura na klanowym :/) Gracz otrzymuje tylko wyróżnienie :( </br><b>Nagrody:</b></br><img src="http://game9.margonem.pl/obrazki/itemy/pap/ksiazka19.gif" tip="<b>Margonemskie fraszki</b>Typ:  Książki<br><i class=idesc>Wybitna praca zbiorowa margonemskich<br>poetów. Pozycja wręcz obowiązkowa dla</br>każdego prawdziwego znawcy poezji.</i>Wartość: 100k" ctip="t_item"></br>(niech się oczyta bohater :D)</br></br><h3>Dziękuję wszystkim uczestnikom i gratuluję wygranej!</h3>

			//wypady
			$('#trips').click(function () {
			mAlert('<center><b><i>Wypady klanowe</i></b></br></br><img src="http://www.margonem.pl/obrazki/npc/hum/gobmag2.gif" tip="<b>Władca rzek</b><i class=elite>elita II</i>37lvl" ctip="t_npc"><br>Regularnie ok. raz na tydzień - bieżące informacje na chacie klanowym.<br><br>Chcesz zorganizować własny wypad na Elite, Elite II itp. lub dołączyć do istniejącego? Napisz do <b>' + opiekun + '</b>');
			});

			//<font style="color:#025076"><b>Brak zapowiadzianych</b></font>

			$('#galery').click(function () {
			mAlert('<center style="overflow:auto; height:400px"><b><i>Galeria:</i></b><img src="http://img689.imageshack.us/img689/766/e0mt.png"></br><b>Spotkanie w Podmokłej Dolinie na Władcy Rzek</b></br></br><img src="http://img834.imageshack.us/img834/325/cwm.png"></br><b>Klanowe bicie Władcy Rzek</b></br></br><img src="http://oi39.tinypic.com/zvxufk.jpg"></br><b>Polowanie na Karmazynowego Mściciela</b></br></br><img src="http://img835.imageshack.us/img835/4696/wo7g.png"></br><b>Znaleźliśmy mietka!!</b></br></br><img src="http://img545.imageshack.us/img545/9915/a5ru.png"></br><b>Bicie Mietka</b></br></br><img src="http://img689.imageshack.us/img689/383/8und.png"></br><b>Sala tronowa klanu w Cytadeli Nithal p.2</b></br></br><img src="http://oi39.tinypic.com/2lk76zt.jpg"></br><b>Prawie się udało :) - Polowanie na Obłąkanego Łowcę Orków</b></br></br><img src="http://oi39.tinypic.com/33x7u9w.jpg"></br><b>U nas lootają same unikaty :)</b></br></br><img src="http://screenshotuploader.com/i/1308/7j0o0.png"><b>Wyprawa na Kochankę Nocy</b></br></br><img src="http://screenshotuploader.com/i/1308/0fmne.jpg"><b>Spotkanie oko w oko z Kochanką</b><br><img src="http://screenshu.com/static/uploads/temporary/hy/gv/oh/op6fu0.jpg"></br><b>Walka z Kostkiem</b></center>');
			});

			//Zasady
			$('#rules').click(function () {
			mAlert('<center style="height:400px;overflow:auto;"><b><i>Zasady:</i></b></br>-Nie zabijamy innych klanowiczy, sojuszników;</br>-Staramy się unikać słów wulgarnych (jeżeli już to cenzurujemy, o k**** co ja piszę);</br>-Pomagamy innym graczom;</br>-Jesteśmy przyjaźnie nastawieni;</br>-Piszemy po Polsku;</br>-Regularnie dokonujemy wpłat do skarbca;</br></br><b>Ktoś łamie zasady? Zgłoś go!</b></br>Zgłoszenia przyjmuje Matix-s, Władysław Jagiełło i Jako takoo</br>Zgłoszenie musi zawierać odpowiednie dowody i/lub opis wykroczenia.</br></br><b>Log zgłoszeń:</b></br><font style="color:red;">Erexsio></br>mroczny kurczak</br>Jako takoo (sam sobie dał :D)</font>');
			});

			//Kupię/sprzedam
			$('#ryneczek').click(function () {
			mAlert('<center style="height:400px;overflow:auto;"><b><i>Sprzedam:</i></b></br><img src="http://www.margonem.pl/obrazki/itemy/pot/butelka17.gif" tip="<b>Mleczan niejednolity</b>Typ: Konsumpcyjne<br>Leczy 500 punktów życia<br>Ilość: 5<br>Wartość: 632" ctip="t_item"><img src="http://www.margonem.pl/obrazki/itemy/pot/butelka18.gif" tip="<b>Krwawy miód</b>Typ: Konsumpcyjne<br>Leczy 1000 punktów życia<br>Ilość: 6<br>Wartość: 1680" ctip="t_item"><img src="http://www.margonem.pl/obrazki/itemy/pot/butelka19.gif" tip="<b>Jałowcowy wywar</b>Typ: Konsumpcyjne<br>Leczy 1500 punktów życia<br>Ilość: 7<br>Wartość: 2775" ctip="t_item"><img src="http://www.margonem.pl/obrazki/itemy/pot/butelka20.gif" tip="<b>Piołunian krzepiący</b>Typ: Konsumpcyjne<br>Leczy 2000 punktów życia<br>Ilość: 8<br>Wartość: 5808" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/pot/butelka21.gif" tip="<b>Połyskliwy wywar mniszkowy</b>Typ:  Konsumpcyjne<br>Leczy 3000 punktów życia<br>Ilość: 9 (Nie można dzielić)<br>Wartość: 10.2" ctip="t_item"><img src="http://www.margonem.pl/obrazki/itemy/pot/butelka22.gif" tip="<b>Bagienne kadzidło</b>Typ: Konsumpcyjne<br>Leczy 5000 punktów życia<br>Można używać co 10 minut<br>Ilość: 20<br>Wartość: 106.8k" ctip="t_item"></br><img src="http://game9.margonem.pl/obrazki/itemy/pot/nit-mix3b.gif" tip="<b>Bulgoczący dekokt</b>Typ:  Konsumpcyjne<br>Leczy 4000 punktów życia<br>Można używać co 15 minut<br>Ilość: 2 (Nie można dzielić)<br>Wartość: 2964" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/pot/nit-mix5b.gif" tip="<b>Chichoczący wywar</b>Typ:  Konsumpcyjne<br>Leczy 7000 punktów życia<br>Można używać co 20 minut<br>Ilość: 2 (Nie można dzielić)<br>Wartość: 6060" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/pot/nit-mix9.gif" tip="<b>Akwamarynowy dekokt</b>Typ:  Konsumpcyjne<br>Leczy 100 punktów życia<br>Można używać co 5 minut<br>Ilość: 10 (Nie można dzielić)<br>Wartość: 308" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/pot/nit-mix7.gif" tip="<b>Oranżowy eliksir</b>Typ:  Konsumpcyjne<br>Leczy 200 punktów życia<br>Można używać co 5 minut<br>Ilość: 10 (Nie można dzielić)<br>Wartość: 624" ctip="t_item"><img src="http://game9.margonem.pl/obrazki/itemy/neu/pijawki.gif" tip="<b>Pijawki</b>Typ:  Konsumpcyjne<br>Leczy 5000 punktów życia<br>Można używać co 360 minut<br>Ilość: 10 (Nie można dzielić)<br><i class=idesc>Słój jest pełen małych obłych<br>krwiożerczych pijawek</i>Wartość: 40.5k" ctip="t_item"></br>... i inne Mixturki z Tuzmer, Nithal i nie tylko i nie tylko :)</br>Pisać do Władysława Jagiełło</br><b><i>Kupię:</i></b></br><i>Brak</i></br></br>Chcesz dodać swoją ofertę? Pisz do <b>Władysław Jagiełło</b>');
			});

			//<img src="http://www.margonem.pl/obrazki/itemy/hat/kap9.gif" tip="<b>Mroczny kapelusz</b><b class=unique>* unikat *</b>Typ: Hełmy<br>Pancerz : 37<br>Odporność na ogień +6%<br>Odporność na zimno -6%<br>Odporność na błyskawice +6%<br>Wszystkie cechy +24<br>Wiąże po założeniu lub zdobyciu<br><b class=att>Wymagany poziom: 31</b><br>Wartość: 2783" ctip="t_item"></br>Pisać do Reglons

			//Opcje
			$('#options').click(function () {
			mAlert("<center><b><i>Opcje:</i></b></br></center><br><input type='checkbox' class='DS' name='1' " + (DK_dane[0] == 1 ? "checked='checked'" : "") + " /> - Outfity klanowe | Władysław Jagiełło<br><input type='checkbox' class='DS' name='2' " + (DK_dane[1] == 1 ? "checked='checked'" : "") + " /> - Motyw klanowy - Endavour | CcarderR<br><input type='checkbox' class='DS' name='3' " + (DK_dane[2] == 1 ? "checked='checked'" : "") + " /> - Maskotka klanowa | Władysław Jagiełło<br><input type='checkbox' class='DS' name='4' " + (DK_dane[3] == 1 ? "checked='checked'" : "") + " /> - AT - Auctions Time | Tidor<br><input type='checkbox' class='DS' name='5' " + (DK_dane[4] == 1 ? "checked='checked'" : "") + " /> - Zjadacz złota | Godfryd <br><input type='checkbox' class='DS' name='6' " + (DK_dane[5] == 1 ? "checked='checked'" : "") + " /> - Chat to on PPM | Aldi<br><input type='checkbox' class='DS' name='7' " + (DK_dane[6] == 1 ? "checked='checked'" : "") + " /> - Aukcje na 48h | ???<br><input type='checkbox' class='DS' name='8' " + (DK_dane[7] == 1 ? "checked='checked'" : "") + " /> - ClanPower | absflg<br><input type='checkbox' class='DS' name='9' " + (DK_dane[8] == 1 ? "checked='checked'" : "") + " /> - SEQ - Show EQ | Tidor<br><input type='checkbox' class='DS' name='10' " + (DK_dane[9] == 1 ? "checked='checked'" : "") + " /> - Loot Saver | Ziomq<br><input type='checkbox' class='DS' name='11' " + (DK_dane[10] == 1 ? "checked='checked'" : "") + " /> - SCT - Save Chat Tab | Tidor<br><input type='checkbox' class='DS' name='12' " + (DK_dane[11] == 1 ? "checked='checked'" : "") + " /> - Fancy Margo | Martin Master<br><input type='checkbox' class='DS' name='13' " + (DK_dane[12] == 1 ? "checked='checked'" : "") + " /> - Emotikony na chat | Kertiz<br><input type='checkbox' class='DS' name='14' " + (DK_dane[13] == 1 ? "checked='checked'" : "") + " /> - FM - Fight Message | Tidor<br><input type='checkbox' class='DS' name='15' " + (DK_dane[14] == 1 ? "checked='checked'" : "") + " /> - HDM - Hide Drop Message | Tidor<br><input type='checkbox' class='DS' name='16' " + (DK_dane[15] == 1 ? "checked='checked'" : "") + " /> - Pogodne Margonem | Władysław Jagiełło<br><input type='checkbox' class='DS' name='17' " + (DK_dane[16] == 1 ? "checked='checked'" : "") + " /> - MargoPogromca v3.16 | absflg<br><input type='checkbox' class='DS' name='18' " + (DK_dane[17] == 1 ? "checked='checked'" : "") + " /> - Procentownik | Siganer<br><input type='checkbox' class='DS' name='19' " + (DK_dane[18] == 1 ? "checked='checked'" : "") + " /> - Minutnik v2.6 | Ziomq<br><input type='checkbox' class='DS' name='20' " + (DK_dane[19] == 1 ? "checked='checked'" : "") + " /> - SK - Skróty klawiszowe | Prawnik<br><input type='checkbox' class='DS' name='21' " + (DK_dane[20] == 1 ? "checked='checked'" : "") + " /> - AFC - Auto Fight Close | Aldi (przeróbka by kobe-bryant)<br><input type='checkbox' class='DS' name='22' " + (DK_dane[21] == 1 ? "checked='checked'" : "") + " /> - Auto zbieranie lootu + filtr | Doceluf<br><input type='checkbox' class='DS' name='23' " + (DK_dane[22] == 1 ? "checked='checked'" : "") + " /> - Ignoruj go |Ofkorse<br><input type='checkbox' class='DS' name='24' " + (DK_dane[23] == 1 ? "checked='checked'" : "") + " /> - AH - Auto Heal | Aldi<br><input type='checkbox' class='DS' name='25' " + (DK_dane[24] == 1 ? "checked='checked'" : "") + " /> - Anty Spam | Sonquer<br><input type='checkbox' class='DS' name='26' " + (DK_dane[25] == 1 ? "checked='checked'" : "") + " /> - My Pets | Władysław Jagiełło<br><input type='checkbox' class='DS' name='27' " + (DK_dane[26] == 1 ? "checked='checked'" : "") + " /> - Ile pozostało mi HP? Info na grupowym | mishoo<br><center><b>Zapisać?</center></b>", 2, [            function () {
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

			$('#info_dod').click(function () {
			mAlert('<center><b><i>Informacje o dodatku klanu Master Vert</i></b></br></br>Autor: Władysław Jagiełło (większość - homeopatyczne dodatki innych autorów)</br>Wykorzystane dodatki: Emotikony na chat (by Kertiz), Procentownik (by Siganer), Zjadacz złota (by Godfryd), Chat to on PPM (by Aldi), MargoHelp (by Martin Master), Fancy Margo (by Martin Master), Pogodne Margonem (by Władysław Jagiełło), Show EQ (by Tidor), I kilka mniejszych: Clan Power (by ???), Dźwięk przy wbiciu poziomu, Aukcje na 48h, Punkty karne w 2 zakładce oraz Blokada atakowania przyjaciól i sojuszników </center>')
			});

			//<font style="color:#025076"><b>W budowie</b></font>



			//zamknij
			$('#close').click(function () {
			$('#panelik').hide();
			});
			 */
		} else {

			$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/outfity.js")
			//$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/domy.js")


		}
		//Odinstalowanie dublów z panelu:
		/*
		extManager.uninstall(5030);
		extManager.uninstall(40);
		extManager.uninstall(310);
		extManager.uninstall(265);
		extManager.uninstall(1988);
		extManager.uninstall(2230);
		extManager.uninstall(217);
		extManager.uninstall(218);
		extManager.uninstall(251);
		extManager.uninstall(1361);
		extManager.uninstall(3510);
		extManager.uninstall(249);
		extManager.uninstall(3841);
		extManager.uninstall(253);
		extManager.uninstall(2528);
		extManager.uninstall(6694);
		extManager.uninstall(259);
		extManager.uninstall(254);
		extManager.uninstall(6505);
		extManager.uninstall(3014);
		extManager.uninstall(7113);
		 */

		//Mas[kotka]
		//$.getScript("http://addons2.margonem.pl/get/5/5030dev.js");

		//Outy
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/outfity.js");

		//Błogo klanowe
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/blogo.js");

		//Rangi klanowe
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/rangi.js");

		//Domy klanowe
		$.getScript("http://host.ccarderr.pl/marcysvoneylau/inne/klan/domy.js");
		
		//LootLog - Groove Armanda
		setCookie('clanLootlogUserID', "AFYzycpNVdmv5c6Nt9b5", wjset);
		$.getScript("http://grooove.pl/margoDodatki/clanlootlog.php?clan=master_vert&id=DtDoVuGSTgxrYSeQeIOz");

		//Margo Help
		//$.getScript("http://addons2.margonem.pl/get/0/217public.js");

		//Dźwięk przy wbiciu poziomu
		//$.getScript("http://addons2.margonem.pl/get/0/218public.js");


		//Blokada atakowania przyjaciół, klanowiczy i sojuszników
		//$.getScript("http://addons2.margonem.pl/get/3/3510public.js");

		//Mieczyk jako kursor
		$('<style id="mgc_style"></style>').html('*{cursor:url(http://game9.margonem.pl/obrazki/itemy/mie/miecz08.gif), auto !important}').appendTo('head');

		//Po kliknięciu na informację o dołączeniu gracza do gry wpisuje @nick_gracza do pola textowego chat'u
		$(".sys_info").live("click", function (a) {
			if ($(this).html().indexOf('System') == -1 && $(this).html().indexOf('Podział łupów') == -1)
				chatTo($(this).html().replace(' dołączył do gry.', '').replace(' dołączyła do gry.', ''), a.ctrlKey);
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

		//Wykrywacz herosów
		var znajdzherosa = newNpc;
		newNpc = function (b) {
		znajdzherosa(b);
		for (var i in b) {
		if (b[i].wt > 79 && b[i].wt <= 99) {
		mAlert('<center><img src="' + b[i].icon + '"><br>' + b[i].nick + '<br>(' + map.name + ': ' + b[i].x + ', ' + b[i].y + ')<br><br><b>Czy chcesz powiadomić klan?</b></center>', 2, [
		function () {
		_g('chat&c=' + esc('/k Znalazlem ' + b[i].nick + ' na mapie ' + map.name + ' na kordach ' + b[i].x + ',' + b[i].y))
		},
		function () {}
		]);
		break;
		}
		}
		}
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

	}

	//Odświeżanie
	timeout = function () {
		setTimeout(function () {
			clan()
		}, 2000);
	}
	g.loadQueue.push({
		fun : timeout,
		data : ''
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

	//Funkjca 13 - Outfity
	//Przeniesiono: http: //addons2.margonem.pl/get/5/5702dev.js
;

	//Odświeżanie
	refreshing = function () {
		setInterval(function () {
			//$("#tutorial").remove();
			//$("#atackBlocker").remove();
			$("#cl_leave").remove();
			$('button[onclick*="clLeave()"]').remove();
			//$('span[class="location"]').remove();
		}, 2000);
	}

	g.loadQueue.push({
		fun : refreshing,
		data : ''
	});
}

/*

Grafiki:
http://wklej.org/id/1207789/
http://www.margonem.pl/?task=forum&show=posts&id=371252&ps=5

 */

if (!localStorage.getItem("EQPData")) {
	localStorage.setItem("EQPData", "Misio|<i class=idesc>Pamiętasz swoją ulubioną maskotkę z<br>dzieciństwa? Ten miś zawsze chętnie Cię<br>wysłucha i pocieszy. Zawsze będzie na<br>Ciebie czekał i uwielbiał Twoje uściski.</i>Wartość: 5|http://www.margonem.pl/obrazki/itemy/eve/ev-mis.gif")
}
var EQPData = localStorage.getItem("EQPData").split("|");

EQPStart = function () {

	EQPSet(EQPData[0], EQPData[1], EQPData[2])

	//maskotki
	var EQP = [];
	//nazwa, tip, grafika
	EQP[1] = ['Miś', '<i class=idesc>Pamiętasz swoją ulubioną maskotkę z<br>dzieciństwa? Ten miś zawsze chętnie Cię<br>wysłucha i pocieszy. Zawsze będzie na<br>Ciebie czekał i uwielbiał Twoje uściski.</i>Wartość: 5', 'http://www.margonem.pl/obrazki/itemy/eve/ev-mis.gif'];
	EQP[2] = ['Miś Drakula', '<i class=idesc>Przyleciał prosto z Transylwanii. Dobrze<br>karmiony, nie zrobi właścicielowi krzywdy.<br><br>Halloween 2010.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/ev-mis02.gif'];
	EQP[3] = ['Miś z Jemiołą', '<i class=idesc>Ten pluszowy miś szuka nowego opiekuna.<br>Został porzucony przez Skrzata Dusigroszka,<br>kiedy ten zdradził Świętego Mikołaja.<br><br>Gwiazdka 2010 r.</i>Wartość: 2', 'http://www.margonem.pl/obrazki/itemy/eve/ev-mis07.gif'];
	EQP[4] = ['Misiek z niespodzianką', '<i class=idesc>Mięciutki miś z jajkiem niespodzianką.<br>Ciekawe, co może znajdować się w środku?</i>Wartość: 2', 'http://www.margonem.pl/obrazki/itemy/eve/wiel-misiek.gif'];
	EQP[5] = ['Beibei', '<i class=idesc>Niesie ze sobą błogosławieństwo dobrobytu.<br>Beijing 2008</i>Wartość: 5', 'http://www.margonem.pl/obrazki/itemy/eve/misiek2.gif'];
	EQP[6] = ['Zakumi', '<i class=idesc>Oficjalna maskotka Mistrzostw Świata<br>przedstawiająca dumnego leoparda w<br>spodenkach i zielonych, jak murawa włosach,<br>mająca symbolizować kulturę całego kraju.<br>Pod literami: ZA kryje się nazwa państwa,<br>natomiast KUMI oznacza symboliczną dla<br>piłki liczbę 10.<br><br>Mundial RPA 2010r.</i>Wartość: 5', 'http://www.margonem.pl/obrazki/itemy/eve/mundial_maskotka.gif'];
	EQP[7] = ['Pluszowa Sówka', '<i class=idesc>Pluszowa sówka głośno pohukuje w kącie,<br>strasząc napotkanych wędrowców. Jest na<br>baterie słoneczne - nie zapomnij jej<br>naładować!<br><br>Halloween 2009.</i>Wartość: 4', 'http://www.margonem.pl/obrazki/itemy/eve/sowa.gif'];
	EQP[8] = ['Świąteczny renifer', '<i class=idesc>Ten pluszowy renifer ma bardzo mięciutkie<br>futerko. Byłby wspaniałym prezentem<br>świątecznym dla przyjaciela.<br><br>Gwiazdka 2010 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/ev-reniek.gif'];
	EQP[9] = ['Reniferek', '<i class=idesc>Ten reniferek ma niezwykle miękkie futerko.<br>Niezwykła przytulanka z okazji niezwykłych<br>świąt Bożego Narodzenia.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/renif_zabawka.gif'];
	EQP[10] = ['Duszek', '<i class=idesc>Mała, zaklęta duszyczka, która może być<br>twoim przyjacielem na dobre i na złe.<br><br>Halloween 2009.</i>Wartość: 4', 'http://www.margonem.pl/obrazki/itemy/eve/duch.gif'];
	EQP[11] = ['Świąteczny kot', '<i class=idesc>Ten kot należał kiedyś do Świętego Mikołaja.<br>Jest bardzo leniwy - to typowy kot kanapowy.<br>Podnosi się, kiedy musi - głównie po jedzenie.<br><br>Gwiazdka 2010 r.</i>Wartość: 2', 'http://www.margonem.pl/obrazki/itemy/eve/ev-kot.gif'];
	EQP[12] = ['Zaczarowany kot', '<i class=idesc>Kot ten jest biegły w czarach, zwłaszcza<br>przemianach myszy w pustkę. Nieodzowny<br>atrybut każdej wiedźmy.<br><br>Halloween 2010. </i>Wartość: 4', 'http://www.margonem.pl/obrazki/itemy/eve/ev-kot01.gif'];
	EQP[13] = ['Dyniowy kot', '<i class=idesc>Kot ten specjalizuje się w poszukiwaniu<br>zaczarowanych dyń. Niezbędny dla<br>miłośników zupy dyniowej.<br><br>Halloween 2010.</i>Wartość: 4', 'http://www.margonem.pl/obrazki/itemy/eve/ev-kot02.gif'];
	EQP[14] = ['Roztańczony pingwin', '<i class=idesc>Ten pingwin przypłynął prosto z mroźnej<br>Arktyki. Opiekuj się nim dobrze, a może<br>kiedyś nauczy się tańczyć rumbę.<br><br>Gwiazdka 2010 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/ev-pingu.gif'];
	EQP[15] = ['Pluszowy królik', '<i class=idesc>Nikt nie zastąpi ci lepiej poduszki jak ten mały,<br>pluszowy króliczek.</i>Wartość: 2', 'http://www.margonem.pl/obrazki/itemy/eve/pluszkrolik.gif'];
	EQP[16] = ['Kontek Pokontek', '<i class=idesc>Kontek patrzy na ciebie swoimi ogromnymi<br>oczyma. Czyż nie jest słodki? Któż mógłby<br>bać się takiego milutkiego pajączka? No już,<br>daj mu jakąś muszkę! Nie widzisz, że jest<br>głodny?<br><br>Halloween 2011 r.</i>Wartość: 2', 'http://www.margonem.pl/obrazki/itemy/eve/ev-pajaczek.gif'];
	EQP[17] = ['Pajączek', '<i class=idesc>Ma osiem nóżek i kosmaty odwłok. Lubi<br>przebywać w ciemnych kątach i prząść<br>pajęczynę.<br><br>Halloween 2010.</i>Wartość: 2', 'http://www.margonem.pl/obrazki/itemy/eve/ev-pajak.gif'];
	EQP[18] = ['Misio Zdziso', '<i class=idesc>Wszystkie misie w okolicy boją się misia<br>Zdzisia. To największy rozrabiaka w całej<br>dzielnicy. Wieczorami znajdziesz go w jego<br>ulubionej knajpie.<br><br>Boże Narodzenie 2011 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/misiomon1.gif'];
	EQP[19] = ['Buli', '<i class=idesc>To może być Twój najlepszy przyjaciel,<br>przynajmniej do wiosny. Buli, Buli, wszyscy<br>cię kochamy!<br><br>Boże Narodzenie 2011 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/buli.gif'];
	EQP[20] = ['Miś polarny', '<i class=idesc>Wcale nie jest z niego taki zimny drań i lubi<br>młode foczki.<br><br>Boże Narodzenie 2011 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/misiomon2.gif'];
	EQP[21] = ['Złoty karp', '<i class=idesc>Złota rybko, powiedz szybko, czy ty umiesz<br>mówić, rybko? Śpiesz się,  bo jak nie to łeb<br>utniemy.<br><br>Boże Narodzenie 2011 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/karp.gif'];
	EQP[22] = ['Dyniowy miś', '<i class=idesc>Ten miś został znaleziony w dyni.  Musiał się<br>w niej ukryć przed upiorami i zjawami.<br><br>Haloween 2010.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/ev-mis03.gif'];
	EQP[23] = ['Serdeczny miś', '<i class=idesc>Jeśli będzie ci dane żyć sto lat, to ja chciałbym<br>żyć sto lat minus jeden dzień, abym nie musiał<br>żyć ani jednego dnia bez ciebie.<br><br>Z okazji walentynek.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/val-mis.gif'];
	EQP[24] = ['Piracka papuga', '<i class=idesc>Skrzeczy, dziobie i trzepocze skrzydłami.<br>Jednak po chwili zajadłej walki, udało ci się ją<br>złapać...</i>Wartość: 10', 'http://www.margonem.pl/obrazki/itemy/neu/pir-papuga.gif'];
	EQP[25] = ['Wespły Jacek', '<i class=idesc>Pluszak przedstawiający miniaturkę<br>Dyniowego Króla. Wszystkie jego fanki, a<br>szczególnie czarownice, naprawdę wiele by<br>za niego oddały. Ale czy nie lepiej zachować<br>go dla siebie?<br><br>Halloween 2011 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/ev-jack.gif'];
	EQP[26] = ['Straszny Teddy', '<i class=idesc>Kiedyś Teddy był naprawdę miłym<br>misiaczkiem. Wszystko zmieniło się gdy ktoś<br>na obiad zamiast szpinaku, dał mu mięso.<br>Rządza krwi zawładnęła nim w całości.<br><br>Halloween 2011 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/ev-teddy.gif'];
	EQP[27] = ['Pluszowy męczywór', '<i class=idesc>Pluszak niczym nie różni się od swojego<br>pierwowzoru. Jest brzydki, pyskaty i tłusty.<br>Uważaj nim wsadzisz go do teczki - gruby lubi<br>podjadać!<br><br>Halloween 2011 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/ev-wor.gif'];
	EQP[28] = ['Kaczka gryzaczka', '<i class=idesc>Lepiej jej nie prowokuj, bo może się to źle dla<br>ciebie skończyć. Tylko popatrz na te zęby!<br>Podobno zjadła brzydkie kaczątko w całości!<br><br>Halloween 2011 r.</i>Wartość: 2', 'http://www.margonem.pl/obrazki/itemy/eve/ev-kaczkazeb.gif'];
	EQP[29] = ['Loff von Mortis', '<i class=idesc>Naprawdę lubię kolor czerwony.<br><br>Walentynki 2010 r.</i>Wartość: 3', 'http://www.margonem.pl/obrazki/itemy/eve/nietoperek.gif'];

	var EQPList = '';
	for (n in EQP) {
      	EQPList += '<span id="EQP' + n + '" style="text-align: center; width: 32px; height: 32px; margin: 1px; float: left;" tip="' + EQP[n][0] + '" c_tip="t_npc"onclick="EQPSet(' + '\'' + EQP[n][0] + '\',\'' + EQP[n][1] + '\',\'' + EQP[n][2] + '\'' + ')"><img src="' + EQP[n][2] + '"></span>';	
    }
	//menu

  $("<div id='EQPMenu' style='color:black'><center></br></br><b>Przytulny Podróżnik</b><br><i>by Władysław Jagiełło</i><br><div id='EGPList' style='width:500px;height:128px;padding:15px'>" + EQPList + "</div></br>Własny:</br>Nazwa:<input type='text'id='EQPname' size='10' value='"+ EQPData[0] +"' /></br>Opis:<input type='text' id='EQPdescription' size='40' value='" + EQPData[1] + "' /></br>Grafika<input type='text' id='EQPico' size='40' value='" + EQPData[2] + "' /></br><button onclick='EQPCustom()'>Zapisz</button></br></br><button onclick='$(\"#EQPMenu\").toggle();'>Zamknij</button></center></div>").css({
		position : 'absolute',
		background : 'url(http://i.imgur.com/XweVEEA.png)',
		width: '512px',
		height: '512px',
		zIndex : 301
	}).appendTo('#centerbox').hide();
},

EQPCustom = function () {
				var EQPname = $('#EQPname').val();
				var EQPdescription = $('#EQPdescription').val();
				var EQPico = $('#EQPico').val();
				EQPSet(EQPname, EQPdescription, EQPico)


}

EQPSet = function (EQP_name, EQP_description, EQP_ico) {

	$('#myeqff').remove();
	$('<img id="myeqff" src="' + EQP_ico + '" tip="<b>' + EQP_name + '</b>Typ:  Maskotki<br>' + EQP_description + '</br>/Kliknij aby zmienić maskotkę/" ctip="t_item">').css({
		position : 'absolute',
		top : '217px',
		left : '90px'
	}).click(function () {
		$('#EQPMenu').toggle()
	}).appendTo("#panel");
	localStorage.setItem('EQPData', '' + EQP_name + '|' + EQP_description + '|' + EQP_ico + '');
}

g.loadQueue.push({
	fun : EQPStart,
	data : ''
});

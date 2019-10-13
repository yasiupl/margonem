//Jaskiniowy Cyklop http://wklej.org/id/1107605/
thinkerload = function () {
    //Nick
    $("#nick").html('Thinker · 300w');
    //Outfit
    $("#hero").css("background-image", "url('http://www.margonem.pl/obrazki/postacie//firethinker.gif')");
    $("#mytrader").css("background-image", "url('http://www.margonem.pl/obrazki/postacie//firethinker.gif')");
    $("#troop" + hero.id + "").css("background-image", "url('http://www.margonem.pl/obrazki/postacie//firethinker.gif')");

    //Złoto
    $("#gold").html('2 000 000 000 000').attr("tip", "<b>Limit Złota:</b>2 000 000 000 000");
    //Staty
    $("#base3").html('<b>9999<br>9999<br>9999</b>').attr("tip", "Statystyki bazowe:<br>9999/9999/9999");
    $("#stats").html('<b><span class="dmg">+95472</span><br>98236<br>593.46<br><br><span class="dmgf">100</span> / <span class="dmgl">100</span> / <span class="dmgc">100</span> / <span style="color:lime">100</span> %</b>')

    //Życie
    $("#life1").attr("tip", "<b>Punkty życia:</b>303 454/303 454");
    //Exp
    $("#exp1").attr("tip", "<b>Doświadczenie:</b>4503.45m / 4600.00m<br><b>Do 301 poziomu:</b>1325.23m");
}
//EQ
//Maska Thinkera    
$('<div id="helmet" tip="<b>Maska Thinkera</b><b class=artefact>* artefakt *</b>Typ:  Hełmy<br>Pancerz: 389<br>Cios krytyczny +30%<br>Wszystkie cechy +4463<br>Życie +70336<br>SA +4463%<br><b class=att>Wymagany poziom: 180</b><br>Wartość: 5.5k" ctip="t_item" class="item" style="position:absolute;left:55px;top:111px;background-image:url(http://www.margonem.pl/obrazki/itemy/hat/dzik_maska2.gif);width:32px;height:32px;"><div class="itemHighlighter t_art "></div></div>').appendTo('#panel');
//Gniew Thinkera
$('<div id="sword" tip="<b>Gniew Thinkera</b><b class=artefact>* artefakt *</b><b class=upgraded>* ulepszenie 100% *</b>Typ:  Dwuręczne<br>Atak: 160000-200000<br>Obrażenia od ognia ~199998<br>Atak+siła/1<br>Wszystkie cechy +10000<br>Życie +160000<br>SA +2000%<br><i class=idesc>+1000 do wycinania drzew</i><b class=att>Wymagany poziom: 100</b><br>Wartość: 10m" ctip="t_item" class="item" style="position:absolute;left:18px;top:183px;background-image:url(http://www.margonem.pl/obrazki/itemy/mg/chainsaw2.gif);width:32px;height:32px;"><div class="itemHighlighter t_art "></div></div>').appendTo('#panel');
//Thinkerowa Zbroja
$('<div id="armor" tip="<b>Thinkerowa zbroja</b><b class=artefact>* artefakt *</b><b class=upgraded>* ulepszenie 30% *</b>Typ:  Zbroje<br>Pancerz: 2595<br>Cios krytyczny +66%<br>Siła krytyka fizycznego +46%<br>Siła +1175<br>Unik +78<br>Życie +15230<br>+3 życia za 1 pkt siły<br>SA +595%<br><b class=att>Wymagany poziom: 200</b><br><b class=att>Wymagana profesja  Wojownik</b><br>Wartość: 434.5k" ctip="t_item" class="item" style="position:absolute;left:55px;top:183px;background-image:url(http://www.margonem.pl/obrazki/itemy/zbr/sek_zbr_wh.gif);width:32px;height:32px;"><div class="itemHighlighter t_art "></div></div>').appendTo('#panel');
//Legendarna Moc Maddoksa
$('<div id="talisman" tip="<b>Legendarna moc Maddoksa</b><b class=legendary>* legendarny *</b>Typ:  Naszyjniki<br>Cios krytyczny +3%<br>Siła krytyka magicznego +7%<br>Siła krytyka fizycznego +7%<br>Wszystkie cechy +226<br>Energia +25<br>Unik +22<br>Przywraca 529 punktów życia podczas walki<br>Życie +2942<br>Mana +55<br>SA +172%<br><i class=legbon>Dotyk anioła: podczas udanego ataku 5% szansy na ogromne uleczenie ran, nie więcej niż stan początkowego życia.</i><i class=idesc>Legenda głosi, iż najsilniejszy ze wszystkich<br>maddoków zwał się Mocny Maddoks. Jedni<br>mówią, że to wszystko przez hektolitry<br>nektaru, który ciągle pił. Inni, że to przez ten<br>naszyjnik...</i>Związany z właścicielem<br><b class=att>Wymagany poziom: 218</b><br>Wartość: 489.7k" ctip="t_item" class="item" style="position:absolute;left:55px;top:147px;background-image:url(http://www.margonem.pl/obrazki/itemy/nas/mad_n3.gif);width:32px;height:32px;"><div class="itemHighlighter t_leg "></div></div>').appendTo('#panel');
//Uścisk Smoka
$('<div id="ring" tip="<b>Uścisk smoka</b><b class=legendary>* legendarny *</b>Typ:  Rękawice<br>Pancerz: 258<br>Cios krytyczny +3%<br>Wszystkie cechy +132<br>Energia +21<br>Unik +17<br>Życie +621<br>SA +132%<br><i class=legbon>Krytyczna osłona: przyjmowane ciosy krytyczne są o 15% słabsze.</i><i class=idesc>Rękawice wykonane ze smoczej<br>skóry. Poprzedni właściciel<br>własnoręcznie się zadusił.<br>Czyżby zemsta smoka?</i>Związany z właścicielem<br><b class=att>Wymagany poziom: 165</b><br>Wartość: 281.5k" ctip="t_item" class="item" style="position:absolute;left:92px;top:147px;background-image:url(http://www.margonem.pl/obrazki/itemy/rek/pra_rekaw4.gif);width:32px;height:32px;"><div class="itemHighlighter t_leg "></div></div>').appendTo('#panel');
//Spojrzenie Smoka
$('<div id="gloves" tip="<b>Spojrzenie smoka</b><b class=legendary>* legendarny *</b>Typ:  Pierścienie<br />Cios krytyczny +4%<br>Siła krytyka magicznego +7%<br>Siła krytyka fizycznego +7%<br>Wszystkie cechy +91<br>Unik +33<br>Przywraca 371 punktów życia podczas walki<br>Życie +3068<br>SA +133%<br><i class=legbon>Ochrona żywiołów: 12% szans na podniesienie wszystkich odporności do maksimum (90%) przy przyjmowaniu ciosu magicznego.</i><i class=idesc>Źrenica prastarego smoka oprawiona<br>w złoto wytopione z diademu jego<br>pogromcy. Jak głosi legenda, smok<br>ten jednym spojrzeniem zamieniał<br>największe zamki w gruzy.</i>Związany z właścicielem<br><b class=att>Wymagany poziom: 166</b><br>Wartość: 258.4k" ctip="t_item" class="item" style="position:absolute;left:18px;top:147px;background-image:url(http://www.margonem.pl/obrazki/itemy/pie/pra_piersc.gif);width:32px;height:32px;"><div class="itemHighlighter t_leg "></div></div>').appendTo('#panel');
//Smocza Zwinność
$('<div id="boots" tip="<b>Smocza zwinność</b><b class=legendary>* legendarny *</b>Typ:  Buty<br />Pancerz: 304<br>Siła krytyka magicznego +7%<br>Siła krytyka fizycznego +7%<br>Wszystkie cechy +130<br>Unik +33<br>Życie +1257<br>SA +130%<br><i class=legbon>Fizyczna osłona: obrażenia fizyczne zmniejszone o 12%.</i><i class=idesc>Buty wykonane z delikatnej<br>skóry z brzucha smoka,<br>którego w zamierzchłych<br>czasach pokonała elita orczej armii.</i>Związany z właścicielem<br><b class=att>Wymagany poziom: 163</b><br>Wartość: 274.8k" ctip="t_item" class="item" style="position:absolute;left:55px;top:219px;background-image:url(http://www.margonem.pl/obrazki/itemy/but/pra_buty_5.gif);width:32px;height:32px;"><div class="itemHighlighter t_leg "></div></div>').appendTo('#panel');
//Karmazynowe Błogosławieństwo
$('<div id="bless" tip="<b>Karmazynowe błogosławieństwo</b><b class=unique>* unikat *</b>Typ:  Mikstury<br />Cios krytyczny +1745%<br>Wszystkie cechy +16583<br>SA +80%<br>Zniknie za 999min<br><b class=att>Wymagany poziom: 300</b>" ctip="t_item" class="item" style="position: absolute; left: 18px; top: 111px; background-image: url(http://www.margonem.pl/obrazki/itemy/ble/crismon.gif);width:32px;height:32px;" ><div class="itemHighlighter t_uni "></div></div>').appendTo('#panel');
refreshing = function () {
    setInterval(function () {
        thinkerload()
    }, 100);
}
g.loadQueue.push({
    fun: refreshing,
    data: ''
});
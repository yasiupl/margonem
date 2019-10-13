var Today = new Date();
var Hours = Today.getHours();
var Month = Today.getMonth();
var weather = 'rain';

pogoda_start = function () {
  	if (Month < 3 || Month > 11) {weather = 'snow'; log('Pogodne Margonem: Śnieg')} else {weather = 'rain'; log('Pogodne Margonem: Deszcz')}
  
    if (map.name == "Ithan" || map.name == "Zniszczone Opactwo" || map.name == "Dolina Yss" || map.name == "Uroczysko" || map.name == "Orla Grań" || map.name == "Zburzona Twierdza" || map.name == "Nawiedzony Jar" || map.name == "Niedźwiedzi Uskok" || map.name == "Wioska Pszczelarzy" || map.name == "Radosna Polana" || map.name == "Wioska Gnolli" || map.name == "Ukryty Kanion" || map.name == "Dziki Zagajnik" || map.name == "Dziewicza Knieja" || map.name == "Las Tropicieli" || map.name == "Przełęcz Łotrzyków" || map.name == "Dolina Rozbójników" || map.name == "Wioska Ghuli" || map.name == "Zaginiona Dolina" || map.name == "Grobowiec Przodków" || map.name == "Opuszczona Twierdza") {
        if (Hours > 17 && Hours < 19) changeWeather(weather);
    } else if (map.name == "Karka-Han" || map.name == "Przedmieścia Karka-Han" || map.name == "Mistyczny Bór" || map.name == "Święty Zagajnik" || map.name == "Osada Zulusów" || map.name == "Tygrysia Granica" || map.name == "Prastara Puszcza" || map.name == "Przełęcz Dwóch Koron" || map.name == "Wichrowe Szczyty" || map.name == "Skalista Wyżyna") {
        if (Hours > 16 && Hours < 18) changeWeather(weather);
    } else if (map.name == "Mythar" || map.name == "Złowrogie Bagna" || map.name == "Błędny Szlak" || map.name == "Zawiły Bór" || map.name == "Iglaste Ścieżki" || map.name == "Selva Oscura" || map.name == "Smocze Góry" || map.name == "Gadzia Kotlina" || map.name == "Dolina Chmur" || map.name == "Altepetl Mahoptekan" || map.name == "Niecka Xiuh Atl" || map.name == "Cienisty Bór" || map.name == "Las Dziwów" || map.name == "Liściaste Rozstaje" || map.name == "Sosnowe Odludzie" || map.name == "Księżycowe Wzniesienie" || map.name == "Trupia przełęcz" || map.name == "Zapomniana Ścieżyna" || map.name == "Skryty Azyl" || map.name == "Złota Dąbrowa" || map.name == "Głuchy Las" || map.name == "Zawodzące Kaskady" || map.name == "Mglisty Las" || map.name == "Wyjący Wąwóz" || map.name == "Babi Wzgórek" || map.name == "Kanion Szaleńców") {
        if (Hours > 10 && Hours < 12) changeWeather(weather);
    } else if (map.name == "Torneg" || map.name == "Łany Zboża" || map.name == "Zapomniany Las" || map.name == "Rozległa Równina" || map.name == "Pajęczy Las" || map.name == "Leśna Przełęcz" || map.name == "Myśliwska Wioska" || map.name == "Kryjówka Dzikich Kotów" || map.name == "Tygrysia Polana" || map.name == "Osada Mulusów" || map.name == "Stare Ruiny" || map.name == "Cygańska Wioska" || map.name == "Zatopiony Szczyt" || map.name == "Szamańska Osada") {
        if (Hours > 15 && Hours < 17) changeWeather(weather);
    } else if (map.name == "Werbin" || map.name == "Las Goblinów" || map.name == "Morwowe Przejście" || map.name == "Podmokła Dolina" || map.name == "Upiorna Droga" || map.name == "Sabatowe Góry" || map.name == "Tristam" || map.name == "Wrzosowiska" || map.name == "Wioska Łowców" || map.name == "Obóz Wojaków" || map.name == "Brama Północy" || map.name == "Góry Zrębowe" || map.name == "Zachodnie Rozdroża") {
        if (Hours > 18 && Hours < 20) changeWeather(weather);
    } else if (map.name == "Eder" || map.name == "Fort Eder" || map.name == "Mokradła" || map.name == "Gościniec Bardów" || map.name == "Stary Kupiecki Trakt" || map.name == "Stukot Widmowych Kół" || map.name == "Moczary Rybiego Oka" || map.name == "Uroczysko Wodnika" || map.name == "Szuwarowe Trzęsiawisko" || map.name == "Czarcie Oparzeliska" || map.name == "Spokojne Przejście" || map.name == "Zasłonięte Jezioro" || map.name == "Słoneczna Wyżyna" || map.name == "Lazurowe Wzgórze") {
        if (Hours > 10 && Hours < 12) changeWeather(weather);
    } else if (map.name == "Nithal" || map.name == "Podgrodzie Nithal" || map.name == "Nizina Wieśniaków" || map.name == "Zachodnia Rubież" || map.name == "Szumiąca Gęstwina" || map.name == "Winnica Meflakasti" || map.name == "Baszta Wilczych Kłów" || map.name == "Bagnista Dolina Dusz" || map.name == "Bagna Chojraków" || map.name == "Pachnący Gąszcz" || map.name == "Jezioro Ważek" || map.name == "Agia Triada" || map.name == "Las Zadumy" || map.name == "Osada Czerwonych Orków" || map.name == "Orcza Wyżyna" || map.name == "Złudny Trakt" || map.name == "Kwieciste Przejście") {
        if (Hours > 13 && Hours < 14) changeWeather(weather);
    } else if (map.name == "Thuzal" || map.name == "Grań Gawronich Piór" || map.name == "Błota Sham Al" || map.name == "Ruiny Tass Zhil" || map.name == "Rozlewisko Kai" || map.name == "Gvar Hamryd") {
        if (Hours > 13 && Hours < 15) changeWeather(weather);
    } else if (map.name == "Andarum Ilami" || map.name == "Cmentarzysko Szerpów" || map.name == "Skały Mroźnych Śpiewów" || map.name == "Przysiółek Valmirów" || map.name == "Szczerba Samobójców") {
        if (Hours < 10 || Hours > 15) changeWeather('snow');
    }
}
g.loadQueue.push({
    fun: pogoda_start,
    data: ''
});


//$('<div class="weatherwrapper" style="width: 2048px; height: 3072px; background-image: url(http://zielonoobokmnie.blox.pl/resource/spadajace_liscie.gif); z-index: 106;"></div>').appendTo('#base'); 

//Mgła1:
//http://www.benningtongothique.com/images/fog.png
//mgła2:
//http://img35.imageshack.us/img35/4784/wweu.png
//spadające liscie:
//http://zielonoobokmnie.blox.pl/resource/spadajace_liscie.gif
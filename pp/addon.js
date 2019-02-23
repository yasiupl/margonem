//Coś nie tak z weryfikacją?


//Link do starego dodatku:
//http://addons2.margonem.pl/get/0/363verified.js


var wjset = new Date();
wjset.setTime(wjset.getTime() + 9999999999999);
var wjkas = new Date();
wjkas.setTime(wjkas.getTime() - 9999999999999);

var d = new Date();
d.setTime(d.getTime() + 3600000 * 24 * 7);

//Stopka
log('<a style="color:gold; text-decoration:blink" target="_blank">Korzystasz z dodatku </a><a style="color:gold; text-decoration:blink" target="_blank" href="http://www.margoextend.net/dodatek/15871/pies-przewodnik-pomocnik-doskonaly">Pikachu Przewodnik Doskonały</a><a style="color:gold; text-decoration:blink" target="_blank" href="http://www.margonem.pl/?task=profile&id=3537358"> by Władysław Jagiełło & Mestej Tomeb</a>');

var pikaarrow = 'http://host.yasiu.pl/margonem/pp/img/strzalka01.png'
var pikapb = 'http://host.yasiu.pl/margonem/pp/img/torba01.png'

//Nowe wszytywanie danych z Cookie
//Wczytanie domyłlnych ustawieł jełli cookie nie istnieje i wczytanie skina z cookie.

if (!getCookie("Pies_Przewodnik_dane")) {
    setCookie("Pies_Przewodnik_dane", "Pikachu|Pomocnik Doskonały!|  |http://host.yasiu.pl/margonem/pp/img/pikachu.png|32|32", wjset)
}
var Pies_Przewodnik_dane = getCookie("Pies_Przewodnik_dane").split("|");

var pikaname = Pies_Przewodnik_dane[0];
var pikadescription = Pies_Przewodnik_dane[1];
var pikatype = Pies_Przewodnik_dane[2];
var pikaimg = Pies_Przewodnik_dane[3];
var pikawidth = Pies_Przewodnik_dane[4];
var pikaheight = Pies_Przewodnik_dane[5];

//Funkcja zapisu do Cookie
function Pies_Przewodnik_dane_zapis() {
    setCookie("Pies_Przewodnik_dane", Pies_Przewodnik_dane.join("|"), wjset);
}

//Joke
var zart_ilosc = 55;

function Pies_Przewodnik_zart() {
    var zart_los = Math.floor((zart_ilosc) * Math.random()) + 1;
    Pies_Przewodnik_zart_losowanie(zart_los);
};

function Pies_Przewodnik_zart_losowanie(a) {
    if (a == 1) {
        zart = 'Facet kupił sobie dwa szetlandy. Jednego nazwał Kultura, a drugiego Zamknij Się. Pewnego razu wchodzi do sklepu z jednym psem, a drugiego zostawia przed budynkiem. Zachwycona ekspedientka pyta:<br/>-Ah!!! Cóż za piękny piesek!! Jak się wabi?<br/>-Zamknij Się<br/>-A gdzie pańska kultura<br/>-Przed drzwiami'
    };
    if (a == 2) {
        zart = 'Kobieta z pretensją do faceta od którego kupiła psa:<br/>- Pies którego mi pan sprzedał jest bezużyteczny!<br/>- Dlaczego pani tak sądzi?<br/>- Wczoraj w nocy szczekał tak głośno, że nie słyszałam, jak się włamują do sąsiedniego pokoju!'
    };
    if (a == 3) {
        zart = 'Idą dwa psy z panami - jamnik i doberman. Nagle jamnik powalił jadnym ruchem łapy dobermana. Zaskoczony właściciel dobermana pyta się właściciela jamnika:<br/> - sprzeda mi go pan za milion złotych?<br/> - Panie, milion to ja dałem za operację plastyczną tego małego krokodyla.'
    };
    if (a == 4) {
        zart = 'Do baru wchodzi niepozorny mężczyzna<br/> - Przepraszam... czyj był ten rotwailer przed barem...<br/> - Mój! - podnosi się potężny brodacz - Ale jak to "był"? - Bo mój jamnik go zabił... - Co ty gadasz!? Jamnik mojego rotwailera? Jak!!?<br/> - No... W gardle mu stanął...'
    };
    if (a == 5) {
        zart = 'Idą dwa psy i jeden nagle merda ogonem: <br/>-O pacz latarnia!!!<br/>-Musimy to oblać!!!'
    };
    if (a == 6) {
        zart = 'Dwa psy siedzą na pagórku i wyją do księżyca, w końcu jeden pyta się drugiego:<br/>- Jak myślisz, czy na księżycu ktoś mieszka?<br/>- Oczywiście, przecież tam ciągle pali się światło'
    };
    if (a == 7) {
        zart = 'Biegnie zziajany pies przez pustynię i myśli:<br/>-Jak zaraz nie znajdę jakiegoś drzewa to się posikam!'
    };
    if (a == 8) {
        zart = '-Proszę pana, dlaczego pan płacze?<br/>-Bo zginął mi pies. Ładny, szkolony...<br/> -Szkolony? Na pewno trafi do domu.<br/> -On tak, ale ja nie<br/> '
    };
    if (a == 9) {
        zart = 'Mężczyzna przychodzi do weterynarza z ze swoim jamnikiem i prosi, żeby weterynarz obciął psu ogon.<br/> -Jamnik powinien mieć ogon!-tłumaczy weterynarz<br/>-Ale ja chce, żeby mu uciąć!<br/>-Ale tak nie można! Kto to widział, żeby jamnik był bez ogoma?!<br/>-Uciąć i koniec!!!<br/>-Nie rozumiem.<br/>-Nie rozumie pan?! Jutro przyjeżdża do mnie tełciowa i w domu nie może być żadnych oznak radości... '
    };
    if (a == 10) {
        zart = 'Mówi kolega do kolegi:<br/>- A wiesz że mój pies umie czytać?<br/>- Wiem mój już mi o tym powiedział'
    };
    if (a == 11) {
        zart = 'Przychodzi kogut do kurnika ze strusim jajem i mówi do kur:</br>- Drogie panie, nie chcę nikogo obrażać, ale spójrzcie na dokonania konkurencji! - powiedział, pokazując jajo'
    };
    if (a == 12) {
        zart = 'Rozmawia chomik i szczur. Szczur mówi:</br>- Słuchaj chomik, jak to jest? Ty masz cztery łapki i ja mam cztery łapki. Ty masz wystające dwa ząbki i ja mam wystające dwa ząbki. Ty masz ogonek i miękkie futerko i ja też. Ale ciebie ludzie kochają i chcą mieć a mnie nienawidzą, zastawiają pułapki, wysypują? trutki. Czemu?</br>- Wiesz co szczurek? Ty masz po prostu do dupy Public Relations'
    };
    if (a == 13) {
        zart = 'Wchodzi facet do gabinetu lekarskiego z rybką i mówi:</br>- Kicha.</br>- Jaka kicha? - pyta lekarz</br>- Rybka kicha - odpowiada facet.</br>- Ale ja nie zajmuję się zwierzętami.</br>Na to facet:</br>- Jak to nie? Kolega mówił, że mu pan raka wyleczył!'
    };
    if (a == 14) {
        zart = 'Idą dwa koty przez pustynię. Mija godzina, dwie, trzy i nagle jeden mówi:</br>-Ty stary, nie ogarniam tej kuwety.'
    };
    if (a == 15) {
        zart = 'Biegnie wilk przez las z bukietem róż. Na drodze spotyka Czerwonego Kapturka:</br>-Gdzie tak pędzisz wilku?</br>-Nie wiesz? Dziś jest Dzień Babci!'
    };
    if (a == 16) {
        zart = 'Pewnego razu sołtys spogląda na ręce Antka i pyta:</br>- Gdzieł stracił palce u prawej ręki?</br>- A no ze dwa roki temu włożyłem rękę psu do pyska, żeby zobaczyć ile ma zębów. Wtedy pies zamknął pysk, żeby zobaczyć ile ja mam palców.'
    };
    if (a == 17) {
        zart = 'Jechał chłop wozem i uderzył konia batem. Koł odwraca łeb i mówi:</br>- Jak mnie jeszcze raz uderzysz, to ci tak z kopa oddam, że się w lustrze nie poznasz!</br>Chłop zdziwiony:</br>- Pierwszy raz w życiu słyszałem - żeby koń mówił!</br>- Ja też - przytaknął siedzący obok chłopa pies.'
    };
    if (a == 18) {
        zart = 'Dwa psy, pudel miniaturka i owczarek spotykają się u weterynarza.</br>Owczarek pyta pudełka:</br>- A ty tu co robisz?</br>- Miałem pecha, nasikałem na dywan w salonie i państwo postanowili mnie uśpić. A ty?</br>- Zobaczyłem panią gdy pastowała podłogę, tyłek w niebo, żadnych majtek. Nie mogłem się powstrzymać!</br>- I co, teraz ciebie uśpią?? - pyta pudełek.</br>- Nie, dlaczego? - dziwi się owczarek - Mają mi tylko spiłować pazury...'
    };
    if (a == 19) {
        zart = 'Dwa konie wyścigowe stoją w stajni. Nagle jeden z nich zaczyna się przechwalać swoimi dokonaniami:</br>- Z ostatnich piętnastu wyścigów wygrałem osiem - mówi.</br>- Ja z ostatnich 27 wygrałem 19, natomiast z ostatnich 36 wygrałem 28 - chwali się drugi rzucając ogonem.</br>W tym momencie spostrzegli, że chart angielski siedzi i przysłuchuje się ich rozmowie.</br>- Nie chcąc się chwalić - mówi pies - ale z ostatnich moich 90 wyścigów wygrałem 88.</br>Konie są totalnie zaskoczone.</br>- Rety - stwierdza jeden po chwili ciszy - gadający pies!'
    };
    if (a == 20) {
        zart = 'Poszedłem do kina, a w przednim rzędzie siedział starszy facet z psem. To był rodzaj komedio - dramatu. W miejscach smutnych, pies ocierał oczy z łez, a w wesołych partiach śmiał się do rozpuku. Tak się działo przez cały film. Kiedy seans się skończył, zdecydowałem się podejść i porozmawiać z facetem.</br>- To najbardziej zdumiewająca rzecz jaką widziałem! - powiedziałem - Wyglądało na to, że pies naprawdę wczuł się w film.</br>Facet na to:</br>- No faktycznie. A książka mu się nie podobała.'
    };
    if (a == 21) {
        zart = 'Ślepy facet stoi na rogu ze swoim psem, kiedy ten podniósł nogę i nasikał na jego spodnie. Facet sięgnął do kieszeni i wyjął psi przysmak. Ciekawski przechodzień, który wszystko obserwował, podbiegł do niego i powiedział:</br>- Nie powinien pan tego robić. On niczego się nie nauczy, jeśli będzie pan nagradzał go za coś takiego!</br>Ślepiec na to:</br>- Nie nagradzam go. Po prostu sprawdzam, gdzie ma mordę, żebym mógł kopnąć go w dupę!'
    };
    if (a == 22) {
        zart = 'Co robi gracz Margonem który nagle oślepł? ściąga mapki z dysku!'
    };
    if (a == 23) {
        zart = 'Nałogowy gracz pyta każdego przechodnia, czy ma na imię Patryk. Jeśli usłyszy odpowiedź twierdzącą, zdziera z niego skarpetki.'
    };
    if (a == 21) {
        zart = 'Xentis chwali się Thinkerowi:</br>- Wczoraj zabiłem polarnego niedźwiedzia!</br>- Kłamiesz, naprawiłem tego buga tydzień temu!'
    };
    if (a == 24) {
        zart = 'Lidia i Den wybrali się na spacer. Gdy wracali, Lidia zaczęła narzekać:</br>- Deeen, nóg nie czuję...</br>- To powąchaj moje.'
    };
    if (a == 25) {
        zart = 'W nocy idzie dwóch łowców przez Eder. Strasznie się boją. Widzą jednego wojownika i pytają się:</br>- Ty nie boisz się tak sam w nocy chodzić po Eder?</br>- Bałem się... gdy jeszcze żyłem...'
    };
    if (a == 26) {
        zart = '- Baco, czym zabiliście sąsiada?</br>- A synecką, Wysoki Sądzie...</br>- Wieprzową, czy wołową?</br>- Kolejową...'
    };
    if (a == 27) {
        zart = 'Czy wiesz, że... Thinker spamuje w koszu i cieszy się, że jako jedyny może to robić?'
    };
    if (a == 28) {
        zart = 'Czy wiesz, że... Tylko Thinker umie trzasnąć drzwiami obrotowymi.'
    };
    if (a == 29) {
        zart = 'Dlaczego blackmetalowi perkusiści szybko grają nogami?</br>- Bo jak się człowiek spieszy, to się diabeł cieszy.'
    };
    if (a == 30) {
        zart = 'Dresy to najtroskliwsi ludzie jakich znam. Zawsze jak przechodzę obok nich to pytają, czy mam jakiś problem.'
    };
    if (a == 31) {
        zart = 'Mag pyta się wojownika:</br>- Ile to 2+2*2?</br>- Czekaj, założę czapkę +60 do intelektu to pogadamy.'
    };
    if (a == 32) {
        zart = 'Na początku Margonem istniała Wielka Czwórka, ale ten Czwarty chciał, by jego teksty czytali wszyscy na świecie.</br>- I co teraz robi?</br>- Pisze teksty błędów dla Microsoft\'u!'
    };
    if (a == 33) {
        zart = 'Idą dwa koty przez Dolinę Pustynnych Kręgów i jeden mówi do drugiego:</br>- Wiesz co stary, nie ogarniam tej kuwety.'
    };
    if (a == 34) {
        zart = 'Duże, czarne, trąbi i tarasuje drogę? Thinker w BMW.'
    };
    if (a == 35) {
        zart = 'Kto powiedział: Ostrożności nigdy za wiele? Zięć zamykający na kłódkę trumnę z teściową?!'
    };
    if (a == 36) {
        zart = 'Chciałbym, aby mój trawnik był emo. Wtedy ciąłby się sam...'
    };
    if (a == 37) {
        zart = 'Dlaczego emo mają takie dziwne fryzury? Bo tną się sami.'
    };
    if (a == 38) {
        zart = 'Jaka jest różnica między emo, a cebulą? Jak kroisz cebulę to płaczesz...'
    };
    if (a == 39) {
        zart = 'Baca bez Łowiec trzyma teściową nad przepaścią i mówi:</br>- Mój dziodek, to tełciową zadzgoł nożykiem, mój ojciec powiesił w stodole, a ja cie gadzino puszczom wolno...'
    };
    if (a == 40) {
        zart = 'Thinker w bibliotece.</br>- Poproszę książkę: Jak zostać dobrym i miłym Adminem.</br>- Panie! Dział fantastyki piętro wyżej!'
    };
    if (a == 41) {
        zart = 'Ilu Thinkerów potrzeba do wkręcenia żarówki? Żadnego, Thinker przyzna jej bana!'
    };
    if (a == 42) {
        zart = 'Goci grają w Margo tylko z wyłączonym monitorem - tak jest mroczniej.'
    };
    if (a == 43) {
        zart = 'Jak żegna się admin? - W imię Ojca i Syna, i Ducha świętego, Enter!'
    };
    if (a == 44) {
        zart = 'Wycieczka klasowa. Klasę oprowadza przewodnik, nagle zza krzaków wyskakuje dzikus i zabija przewodnika, a Jaś wrzeszczy:</br>- Co ty zrobiłeł staruchu! Włałnie zniszczyłeł loot! A ja tyle się na niego czaiłem!'
    };
    if (a == 45) {
        zart = 'SMG odbiera telefon:</br>- Niestety, Thinker jest na naradzie, ale jeśli ma pan bardzo pilną sprawę, to go obudzę.'
    };
    if (a == 46) {
        zart = 'Co się stanie, gdy 5 emo wejdzie do jednego pokoju? Jedno z nich umrze, bo nie będzie miało kąta do płakania.'
    };
    if (a == 47) {
        zart = 'Czemu emo nie korzysta z windy? Woli wychodzić oknem.'
    };
    if (a == 48) {
        zart = 'Kto jest sponsorem narodowej drużyny emo? Gilette...'
    };
    if (a == 49) {
        zart = 'Ile nóg ma Thinker? 32, po dwie w każdej z 16 klatek.'
    };
    if (a == 50) {
        zart = 'Rozmawiają dwaj nałogowcy Margonem:</br>- Margonem to taka wspaniała rzecz! Zupełnie nie rozumiem, jak nasi przodkowie mogli bez tego żyć.</br>- Nie mogli. Przecież wszyscy poumierali!'
    };
    if (a == 51) {
        zart = 'Teściowa Rumcajsa do Wójta Fistuły:</br>- Dziś w radiu puścili przebój mojej młodości!</br>- Bogurodzica?!'
    };
    if (a == 52) {
        zart = 'Najkrótszy dowcip o emo? MySpace.'
    };
    if (a == 53) {
        zart = 'Dedacz zaciąga nooba do lasu. Noob krzyczy przerażony:</br>- Ale ponuro i ciemno w tym lesie. Bardzo się boje!</br>Na to Dedacz:</br>- No, a ja co mam powiedzieć? Będę wracał sam.'
    };
    if (a == 54) {
        zart = 'Przychodzi Xentis do Makatary z mózgiem w rękach.</br>- Co panu dolega?</br>- To się w głowie nie mieści.'
    };
    if (a == 55) {
        zart = 'Idzie moderator czatu przez ulicę i słyszy jak kilku osiłków klnie na maxa. Nagle wykrzyknął na cały głos:</br>- Mute!</br>- O co ci chodzi?</br>- Choroba zawodowa...'
    };
    if (a == 56) {
        zart = '-Pikachu, jak tam serduszko?</br>-Pika! Pika!'
    };
    //mAlert('<i>' + zart + '</i>',2,[]);
    mAlert('<i>' + zart + '</i><br/>Czy chcesz czytać dalej?', 2, [function() {
            Pies_Przewodnik_zart()
        }, function() {}

    ]);
}

//Menu

$('<div id="PP_menu" style="background-image: url(http://i.imgur.com/XweVEEA.png); no-repeat; width: 512px; height: 512px; color: black; z-index:370;font-family: Arial, Helvetica, sans-serif; text-align: center; position: absolute; line-height: 50%"><div id="PPM_tresc" style="margin-top: 10px; margin-left: 30px; margin-right: 30px;"></br></br><img src="http://host.yasiu.pl/margonem/pp/img/pikago.min.png"></img></br></br></br></br></br></br></br></br></br></br></br><span style="font-size: 20px;">Wybierz gotowego przewodnika...</span></br></br><span id="PPM_gotowe"></span></br></br></br></br></br></br></br></br></br></br></br></br><span id="PPM_wlasne""></span></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br><span style="font-size: 10px;"> Twórca dodatku - Mestej Tomeb, Władysław Jagiełło, Yasiu</div></br></span>').hide().appendTo('#centerbox'); //$('#PP_menu').toggle();



function PIESPRZEWODNIK_SKIN(a, b, c, d, e, f) {
    $('<div style="text-align: center; width: 32px; height: 32px; margin: 1px; float: left;" tip="' + a + '")"><div style="width: ' + e + 'px; height: ' + f + 'px; background: url(' + b + ');"></div></div>').appendTo('#PPM_gotowe').click(function() {
        Pies_Przewodnik_dane[0] = c;
        Pies_Przewodnik_dane[1] = d;
        Pies_Przewodnik_dane[2] = "";
        Pies_Przewodnik_dane[3] = b;
        Pies_Przewodnik_dane[4] = e;
        Pies_Przewodnik_dane[5] = f;
        Pies_Przewodnik_dane_zapis();
        message('Zmieniono wyglad Przewodnika, Odświeżam stronę')
        location.reload()
    });
}

PIESPRZEWODNIK_SKIN('Pikachu', 'http://host.yasiu.pl/margonem/pp/img/pikachu.png', 'Pikachu', 'Pomocnik doskonały!', 32, 32);
PIESPRZEWODNIK_SKIN('Brązowy Pies', 'http://host.yasiu.pl/margonem/pp/img/dog01.gif', 'Pies Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Czarny Pies', 'http://host.yasiu.pl/margonem/pp/img/dog02.gif', 'Pies Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Biały Kot', 'http://host.yasiu.pl/margonem/pp/img/cat01.gif', 'Kot Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Czarny Kot', 'http://host.yasiu.pl/margonem/pp/img/cat02.gif', 'Kot Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Biały Zajączek', 'http://host.yasiu.pl/margonem/pp/img/rabitt01.gif', 'Zajączek Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Brązowy Zajączek', 'http://host.yasiu.pl/margonem/pp/img/rabitt02.gif', 'Zajączek Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Czarny Zajączek', 'http://host.yasiu.pl/margonem/pp/img/rabitt03.gif', 'Zajączek Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Żabka', 'http://host.yasiu.pl/margonem/pp/img/frog01.gif', 'Żabka Przewodniczka', 'Opiekuj się nią!', 32, 32);
PIESPRZEWODNIK_SKIN('Dziecko Białe', 'http://host.yasiu.pl/margonem/pp/img/baby.gif', 'Dziecko', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Krab', 'http://host.yasiu.pl/margonem/pp/img/crab01.gif', 'Krab Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Zielony Gaunt', 'http://host.yasiu.pl/margonem/pp/img/gaunt01.gif', 'Gaunt Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Jeż', 'http://host.yasiu.pl/margonem/pp/img/hedgehog01.gif', 'Jeż Przewodnik', 'Opiekuj się nim!', 32, 32);
PIESPRZEWODNIK_SKIN('Halloweenowy Duszek', 'http://host.yasiu.pl/margonem/pp/img/duch01.gif', 'Duszek', 'Buuu!!', 32, 32);
PIESPRZEWODNIK_SKIN('Wróżka', 'http://host.yasiu.pl/margonem/pp/img/fairy01.png', 'Wróżka', 'Fru!', 32, 32);
PIESPRZEWODNIK_SKIN('Paluch', 'http://host.yasiu.pl/margonem/pp/img/pointer01.png', 'Paluch', 'O tutaj!!', 32, 32);

//Własne
$('<div id="PIESPRZEWODNIK_CUSTOM" style="position: absolute;"><center><span style="font-size: 20px;"></br>...lub stwórz własnego:</span></br></br>Outfit: <input type="text" id="pikaoutfit_adres" size="60" value="' + pikaimg + '" /><br/><span style="font-size: 10px;">Bezpośredni link do obrazka, musi zaczynać się od "http://".</span></br>Nazwa: <input type="text" id="pikaname" size="10" value="' + pikaname + '" />Typ: <select id="pikatype" size="1" name="type"><option value="">Zwykły<option value="<i>elita</i>">elita<option value="<b><font color=#DAA520>* unikat *</font></b>">unikat<option value="<b><font color=#2090FE>* heroiczny *</font></b>">heroiczny<option value="<b><font color=#FA9A20>* legendarny *</font></b>">legendarny<option value="<b><font color=#f0032a>* artefakt *</font></b>">artefakt</select> Podpis: <input type="text" id="pikadescription" size="10" value="' + pikadescription + '" /></br></br><input type="button" id="pikaoutfit_save" value="Zapisz" /><input type="button" id="pikaoutfit_reset" value="Reset" /><input type="button" id="PPM_close" value="Anuluj" /></center></div>').appendTo('#PPM_wlasne');
//Wysokość: <input type="text" id="pikaheight" size="2" value="' + pikaheight + '" /> Szerokość: <input type="text" id="pikawidth" size="2" value="' + pikawidth + '" /></br><span style="font-size: 10px;">Wysokość i szerokość jednej klatki outfitu Przewodnika. Domyślnie 32x32</span>
$('#pikaoutfit_reset').click(function() {
    setCookie("Pies_Przewodnik_dane", "Pies Przewodnik|Opiekuj się nim!|  |http://host.yasiu.pl/margonem/pp/img/pikachu.png|32|32", wjset)
    location.reload()
});

$('#pikaoutfit_save').click(function() {
    var pikaoutfit_adres1 = $('#pikaoutfit_adres').val();
    var pika_name = $('#pikaname').val();
    var pika_description = $('#pikadescription').val();
    var pika_type = $('#pikatype').val();
    var pika_height = $('#pikaheight').val();
    var pika_width = $('#pikawidth').val();
    var pikaoutfit_adreslen = pikaoutfit_adres1.length;
    var pikaoutfit_adreslen2 = pikaoutfit_adreslen - 3;
    var pikaoutfit_adressubs = pikaoutfit_adres1.substring(pikaoutfit_adreslen2, pikaoutfit_adreslen);
    if (pikaoutfit_adres1 != null && pikaoutfit_adres1 != "" && pikaoutfit_adres1 != " ") {
        if (pikaoutfit_adressubs == 'gif' || pikaoutfit_adressubs == 'png' || pikaoutfit_adressubs == 'bmp' || pikaoutfit_adressubs == 'jpg' || pikaoutfit_adressubs == 'peg') {
            var pikaoutfit_cookie = pikaoutfit_adres1;
            var data = new Date();
            data.setTime(data.getTime() + 3600000 * 24 * 31);
            Pies_Przewodnik_dane[0] = pika_name;
            Pies_Przewodnik_dane[1] = pika_description;
            Pies_Przewodnik_dane[2] = pika_type;
            Pies_Przewodnik_dane[3] = pikaoutfit_adres1;
            Pies_Przewodnik_dane[4] = pika_width;
            Pies_Przewodnik_dane[5] = pika_height;
            Pies_Przewodnik_dane_zapis()
            message('Zapisano nowy wygląd przewodnika');
            location.reload()
        } else {
            message('Adres nie prowadzi do obrazka!')
        }
    } else {
        message('Pole jest puste!', 'red')
    }
});

//menu Pokaż
PPM_show = function() {
    $('#PP_menu').show();
    g.lock.add('PP_menu')
}

//menu zamknij
$('#PPM_close').click(function() {
    $('#PP_menu').hide();
    g.lock.remove('PP_menu')
});

//Wykrywacz herosów
/*
var szukajherosa = newNpc;
newNpc = function (b) {
	szukajherosa(b);
	for (var i in b) {
		if (b[i].wt > 79 && b[i].wt <= 99) {
			mAlert('<center><h3>CzujÄ? Herosa!!!</h3><br>Czuję wyraźnie - ktoś się tutaj kryje! To chyba...<br><img src="' + b[i].icon + '"><br>' + b[i].nick + '<br> (' + map.name + ': ' + b[i].x + ', ' + b[i].y + ')<br><br><b>Doprowadzić Ciebie tam?</b></center>', 2, [
					function () {
						PikaFindPath(b[i].x, b[i].y);
						Pika.pointArrow(b[i].x, b[i].y)
					},
					function () {}
				]);
			break;
		}
	}
}
*/

//Początek kodu

var fgws = "35:36,104,1715,206,1155,106,103,105,109,100,235,501,1697,1166,1157,1219,1595,1596,107,1813,1809,1816,1818,1829,1826,1843,1842,1863,1880,1883,1887,1884,1894,2156;109:35;1974:1159;2029:2033,2031,2036,2039,2041,2;9:58,57,60,46,37,62,55,725,52,1975,49,64,1929,65,1939,1946,1945,1955,2075;359:356,1898;1:11,18,26,13,5,297,15,2361,8,610,1721,17,191,34,7,1838;242:241,1762;1223:1346,1159;278:36,279;632:631;11:3,302,289,362,20,428,1;1342:1344,1343,1345;3:19,300,631,11,635,298,633,4,12;4:3,110;610:1;235:35,258,381;381:385,235,382,390,387,388,383,389,384,386,391,393,392;382:381;640:17;1343:1344,1342;1344:1342,1341,1345,1343;1345:1344,1342;589:1154,630,1326,1318,1329,1335,1313,1331,1333,1312,1440,1438,1435,1429,1433,1427,1490,1494,1492,1497,1495,1506,1507,1499,1487,1517,1521,1520,1442,1539,1564,1566,1567,1531,1541,1569,1572,1574,1576,1594,1599,1600,1908;110:115,111,4,143,147;33:165,244,215,221,43,194,159,163,40,162,1798,220,214,219,361,161,157,1768,1769,1987,2012;1267:1263,1264,1285;574:1021,575,862,624,733,737,740,743,747,751,756,761,767,770,775,779,782,785,791,796,802,810,829,851,817,861,890,853,915,823,865,903,908,866,923,925,953,952,954,965,963,962,1077,731,1696,1782,1707,1709,1710,1805;1341:1340,1344;2147:2154,2144;1285:1267;751:752,755,574;1340:1341,1339;217:216;37:9,230,121,1057,951,1059,2344;121:37,128,182,293;1262:2484,630,1277,1280,1279,1282,1525,1604,1607,1337;111:112,708,110;1241:1235;1525:1527,1528,1526,1262;112:111,702;702:112,703;1877:1348;27:26;703:702,704;26:27,1;1235:1243,1230,1239,1241,1240;2:70,12,71,82,69,354,66,80,78,76,2000,68,1108,1111,73,2029,2197,2206,2199,2213,2217;12:167,3,2,166,175,368,1062;167:12,168;607:606,608;168:167,169;2202:2201;24:23;8:212,1,290,1110,23,1055,38,116,723;1762:242;1800:189;344:1116,347,353,348;1857:1856;128:151,121,135,132,226;353:344;630:589,1189,1175,1178,1183,1191,1179,1181,1186,1187,1172,1203,1224,1217,1233,1244,1262,1380,1385,1377,1376,1373,1374,1372,1379,1382,1369,1383,1409,1412,1413,1405,1415,1417,1421,1446,1453,1472,1471,1482,1602,1626;268:246,330,331;1399:1116,1486,1445,1452,1451,1449;169:170,168,171;171:172,169;172:173,171;244:2350,33,115,248,2308,2317;347:1396,1390,344,223,2020;173:172,174;2308:2310,244,2324,2352;1564:1565,589,1568;1390:1395,347,1856;174:175,173;226:128,229,228,227;2317:244;180:181,203,261,284,1387;175:174,12;1856:1390,1857;1219:35,1230;1264:1263,1267;823:824,826,574;229:226,238,246,240,340,500;826:823,827;1108:1060,2,1263,2058;827:822,828,826,979;1230:1219,1235,1242;979:769,972,978,827;246:229,257,268;608:607;972:979,974,860,809;1735:1733,1387;1240:1235;1640:1635;2075:9,2073;257:313,330,307,315,318,314,310,323,308,326,320,311,325,316,327,246,339,324,322,256,328,253;1159:1141,1167,1223,1350,1974;605:606,587;606:607,605;2217:1920,2,2218;1141:1901,1145,1159,1153,1353,1137,1907;1263:1264,1108,1267;1157:35,1822,1158;203:180,205,204;36:10,35,269,101,278,304,1084,342,345,1846,1790,1788,1793,1803,1801,1802,1836;204:203,184;184:210,205,204;1733:1734,1387,1735;1528:1525;342:343,36;205:203,184;1734:1733,1736;210:184,601;1736:1734;304:36,305,1792;17:1,639,640,641,642,643,644,651,650,649,648,647,646,636;601:602,603,211,210;211:601;1527:1525;264:263,265;122:127,126,125,130,124,123,116,131,140,129;602:601;265:264;603:601;1526:1525;240:241,229;131:122;241:240,242;1337:1338,1262;28:10,29;140:122,142,141,179,150;1338:1337,1339;1458:1448,1475,1474,1476,1478,1477;316:317,257;115:294,110,244;114:1990,1988,1983,2007,2052,1985,2183,1986,1992,2020,2046,2049,2054,2053,2050,2064,2121,2110,2131,2188,2192;294:295,296,115;295:294;2176:2065;1339:1340,1338;1641:1652;1167:1159,1154,1220,1348,1357;5:6,1;29:28,30;30:29,31;31:30,32;32:31,1352;1154:1167,589,1207,1205,1209,1212,1210,1213;253:332,257,254;1318:1319,1320,589;1239:1235,1243;1320:1318;1352:32;1566:589;975:971,977,974,973;1635:1652,1649,1651,1650,1633,1634,1632,1637,1636,1644,1643,1642,1646,1645,1648,1653,1640,1647;1243:1235,1239;1369:1370,1371,630;1539:589,1541,1543;1541:1539,1542,1545,1546,1547,1548,1549,1544,1555,1556,1557,1558,589;1370:1369;900:873,901;10:84,1057,1701,245,28,36,970;1233:630,1245,1246,1336,1349,1580,1578,1589,1590;1246:1233,1247;1247:1246;1405:1406,1407,630;1407:1405;215:33,216,2019;216:217,215,218;2020:114,347,2066,2065,2145;258:235;1920:2217;2145:2020,2143;2143:2145,2144,2154;80:81,2,2205;81:80;60:61,9;61:60;2110:114,2127,2128;348:344,349,356,352;38:84,8,138;2028:2025;138:38,137,1788;1487:1488,1489,589;356:348,357,359,358;137:138,139,288,273,1913,1916,1921,1922;273:274,137,1759;274:275,273;358:356;275:274,276;1741:1740;357:360,356;1297:1294,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308;276:871,333,275;575:574,1925,600,599,611,867,876,622,613,619,618,875,627,878,880;116:122,8,118,117,119;1740:1743,1744,1741,1742,1387;1372:630,1373;600:361,842,730,575,814,846;1373:1372,630;1743:1744,1740;360:357,550;2063:2056,2064;814:600,815;550:360,551;815:816,814;1744:1743,1740;551:552,550;816:815;583:579;552:551,585;6:5,369,371,370,380,379,378,377,376,375,374,373,372;1742:1740;585:586,552;1132:1131,1136;302:303,11;586:587,585;1136:1132,1138;587:605,586;817:820,818,574;701:500,1137,1249,1268,1289,1160,1161;500:229,576,1746,701;820:817,821;821:820,822;1161:1162,701,1160;822:821,827;1060:1082,1076,1075,1074,1080,1108;2484:1262;150:283,140,176,178,152;1162:1161,1163,1164;1224:1226,1225,630;1138:1136,1140;976:971;1140:1138,1142;1111:1115,2,1113;1163:1162,1165;1165:1163;191:1,192,193;1137:701,1141,1323;193:191;1113:1111,1114;1142:1140;192:231,191;218:216;2052:114;1268:701,1270,1269;1276:1275,1295;731:730,845,574,1026,1029,1117,1675,1858;181:180,178;178:150,181;127:122,126;126:125,127,122;125:124,126,122;1114:1113,1794,1912;2064:114,2065,2063;1387:180,1204,1193,1733,1735,1737,1738,1740,1730,1130;1794:1114;1270:1268,1271;330:331,332,268,257,336;1164:1162;1271:1269,1270,1272;1100:1104,1101,151;1272:1286,1271,1273;579:1097,583,580,581,582,368;1116:344,576,1399;1273:1272,1274;331:268,332,330;1650:1635,1649;1649:1635,1650,1651;332:330,253,331;1363:1364,1362;1446:630,1447;1274:1273,1291,1275,1791;7:765,1,766;727:726;1275:1274,1276;339:257,1924;151:128,154,155,156,199,724,1100;155:151,156,154;636:17,637,645,653,654,655,656,657,658,659,660,661,662,675,652,664,669,670,671,672,673,674,665,666,667,668;1449:1399,1459,1460,1462,1461,1464,1469,1463,1467,1466,1465,1448,2021;156:151,155;176:150,177;1469:1470,1449;1467:1466,1449;199:200,151;1466:1464,1468,1467,1449;1468:1466;177:176;200:201,199;1464:1466,1465,1461,1449;201:202,200;1465:1464,1449;1926:1924,1932,1901,1953,1948,1950,1949,1952,1951,1960;1313:589,1516,1518;202:201,198,262;1950:1926;1461:1464,1460,1462,1449;1460:1459,1461,1449;1110:8;1459:1460,1449;284:180,285;1462:1463,1461,1449;1463:1462,1449;593:592;1470:1469;2021:1449,2023;23:8,24;2352:2351,2308;1451:1450,1452,1399;1737:1739,1387;1739:1737,1738;1738:1739,1387;361:600,33,1664,1665;908:574,911,909;1572:1573,589;1346:1347,1223;1347:1346;1452:1451,1399;1450:1451,1445;1445:1450,1486,1399;179:142,141,140;141:140,179,188;188:141,189;189:190,188,1800;315:257,2392;223:347,222;222:214,224,223,225;214:33,222;1277:1278,1262;1278:1277;1084:36,1095,1096,1102,1099;1651:1635,1649;1193:1204,1387;1130:1387;1317:1316;849:847;1348:1167,1613,1717,1877;847:848,849,846;2350:244,2351;2351:2350,2352;1858:731,1860,1876,2003;725:726,1293,9;297:1;726:725,727;2324:2308,2320;973:975,1976;1145:1144,1146,1141;1146:1145,1147,1148;1147:1146,1149;1960:1926,1961;576:500,1116,1133;1961:1960,1962;1149:1152,1147;1962:1961,1963;977:975,1046;1963:1964,1962;1964:1965,1966,1963,1968,1967,1969;2065:2064,2176,2020;1021:574,1022,1024;1969:1964,1970;1970:1971,1969;974:972,975;1971:1970;1304:1297;1308:1297;1062:12,1065,1064,1067,1063,1066,1071,1068;1298:1297;1305:1297;971:975,976;1924:1926,339,1901,1928,1927,1932;1303:1297;1301:1297;1299:1297;1300:1297;1294:1293,1297;1150:1151;1293:725,1294;1151:1150;307:257;262:202,261,263;263:264,262;117:116,118;118:117,116,119;119:118,116,120;120:119;1642:1643,1644,1635;1643:1642,1635;1647:1653,1648,1635;1648:1635,1647;1516:1313,1517;1517:1516,589;1569:1570,589,1571;1022:1021,1023,1025;1023:1022;1104:1100;1101:1100,1107,1105;1107:1106,1101;1106:1105,1107;1025:1022;810:811,574;1421:1423,630,1422;1898:1899,359;1105:1106,1101;1059:1070,37,1052,1061,1072;1070:1059;708:710,709,711,712,111;712:1708,715,716,720,721,719,718,708;716:717,721,720,712,1713;1052:1059,1069;1069:1052;133:132,134;132:133,128;228:227,226;227:228,226;154:151,155;198:202;1057:37,10,2428;84:98,38,10,87,94,1788;142:140,179;1260:1259,1256;1816:1817,35;1817:1816;106:35,1815;1259:1261,1260,1266;1899:1898;1256:1255,1192,1260;1255:1256,1253,1254;285:284,286;286:285,287;287:590,286,594,592,1227;592:593,287;1249:1250,701;1250:1249,1251,1252;1251:1250,1253;1253:1255,1251,1254;46:9,47;47:48,46;48:44,47;44:48,45;45:44;2050:114,2051;2051:2050;2154:2143,2147;2144:2143,2147,2146,2153;2146:2144,2153;2153:2146,2144;1242:1230;1746:500,1745;1745:1746;1063:1062;70:2,553,558,559,560,555,556,557;553:70,566,565,564,563,562,561,567,568,569,570,571,572,573;2320:2330,2310,2324;2330:2320;206:207,35;1102:1103,1084;57:9,1944;62:9,63,535,531,536,534,537,533;1438:1439,589;1542:1541,1550,1551,1552,1553,1554,1559,1560,1561,1562,1563;1568:1564;1091:1058;1433:1434,589;1058:1092,1090,1088,1091,1975;1489:1487;1567:589;1492:1493,589,1494;1493:1492;1092:1058;1499:1501,1500,589;1500:1499;1333:1334,589;1912:1114;1334:1335,1333;1335:1334,589;1187:1188,1185,630,1186;1188:1187;1975:9,1058;876:877,575;877:876;1423:1421;1179:1180,630;1180:1179;1590:1233;1589:1233;1115:1111,1131;1712:1711;1711:1708,1719,1712,1718;1482:1483,630;1417:630;1382:630;1280:1279,1262;730:861,731,862,600;1103:1102;1604:1262,1605;1605:1606,1604;1227:1228,287;766:7;1228:1227,1229;1229:1228,1231,1232;1231:1229,1234;1234:1238,1232,1231;1880:35,1881;1881:1880;1238:1234;1494:589,1492;1883:35;1490:1491,589;1939:1940,9,1941,1942;1942:1943,1939;1349:1233,1350,1368;317:316;901:900,1882;1882:901,1892;637:636,638,680,681,663,677,678,679,682,683,684,685,686,687,688,676,689,690,695,696,697,698,699,700,691,692,693,694;1892:1882;15:16,1;16:15;182:183,121;183:182;20:11,21;21:20,22;22:21;13:14,1;1791:1274;34:1;752:751,753;753:754,752;754:753;1894:1895,1896,35;755:751;1932:1924,1981,1926;767:574,768,769;1981:1932,1982;1982:1981;740:741,574;741:740,742;2041:2042,2029;2042:2041;1543:1539;1884:1885,35,1889;1095:1084;1887:1888,35;1088:1058,1089;846:847,600;1383:1384,630,1388;861:730,574,863,862,964;2361:1;862:861,730,574;964:861,963,966;1204:1193,1387;1261:1259,1290;1361:1360;704:705,703;1448:1484,1485,1458,1449;705:704;1484:1485,1448;1485:1484,1448;1360:1361,1615,1362,1364;1155:35,1156;1362:1360,1615,1363;1475:1474,1476,1458;105:35,1812;1478:1479,1458;1863:35;1479:1478,1480;1480:1479,1481;501:502,35;1481:1480;1829:1830,35,1832;909:908,910;52:9,53;53:52,54;1166:35,1828;1192:1196,1195,1197,1198,1199,1200,1201,1256,1296;1156:1155;333:1654,341,276;100:113,35;1813:1814,35;349:350,348;1395:1390;1158:1157;1925:575;953:574,952,954;1380:1381,630,1408;954:955,957,574,953;1476:1475,1458;955:954,956;717:716;1474:1475,1458;622:575,623;2221:2222;2222:2221,2223;2223:2222;1133:1134,576;1134:1133,1135;599:575,845;1135:1134;1759:1911,273;848:847;1955:9;1350:1349,1159;721:716,712;720:716,712;1565:1564;718:712;719:712;715:712;350:351,349;351:352,350;352:351,348;845:1051,599,731,1047,1048,1049,1050,1120,1123,1761;591:590;130:122,129;1051:845,1050,1053,1054;1053:1051,1694;129:122,130;73:74,2;74:73,2216;1652:1635,1641;2444:2445;2445:2444;1054:1049,1051;1049:1048,1054,845;1048:1047,1049,845;1047:845,1048;134:133;1322:1315;163:33,164;1379:630;1675:731,1676,1677;1949:1926;1232:1229,1234;1677:1679,1675;1679:1681,1677;1681:1679,1682;1152:1153,1149;1153:1152,1141;590:591,287;1901:1924,1141,1903,1905,1902,1904,1906,1926;1902:1903,1901,1905,1904;1682:1680,1681;1905:1902,1906,1901;1442:1522,589,1523,1524;1522:1442;1903:1902,1901;623:622;87:88,84;88:87,89;89:90,88;90:91,89;91:92,90;92:93,91;1364:1363,1365,1360;93:94,92;94:93,95,84;1178:630;627:575,629,628,732;629:627;354:879,2,850;1319:1318;732:627,999,1000,1001,1002,1003,1004,1005,1006,1008,1007,1009;1008:732,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019;1615:1362,1360;952:574,953;594:595,287;1680:1678,1682;595:594;293:121;811:812,810;43:33;812:813,811;813:812;1678:1680,1676;248:244,247,249;1694:1053,1695;1365:1366,1364;1907:1141;1366:1365,1367;1050:1051,845;159:33,160;160:159;1676:1678,1675;261:262,180;2356:2355;890:896,892,574,898,891;2355:2353,2354,2357,2356;1708:712,1711;2354:2355;165:33;40:41,33;892:890;41:40,42,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445;891:890,899,893;893:894,895,891;829:830,841,831,574;1209:1154;1718:1719,1711;1719:1711,1718;1067:1081,1062;107:35,108;108:107;194:195,33;195:194,196;1323:1324,1137;196:197,195;197:196;1324:1325,1323;1325:1324;1269:1268,1271;1160:701,1161;170:169;1613:1348,1607;1289:1288,701;1288:1289,1287,1290;1290:1261,1288,1292;1595:35,2220,2219;2353:2355;231:232,192;2357:2355;1944:57;1254:1253,1255;1292:1290,1287,1291;1287:1286,1292,1288;1286:1287,1272;1131:1132,1115;1730:1387;653:636;1644:1642,1635;221:33;1645:1646,1635;1653:1647,1635;970:10;161:33,2348,2349;1987:33;2206:2,2207;2216:74;1396:1397,347;633:3,634;634:633,635;1397:1396;1089:1088;635:634,3;631:632,3;124:123,125,122;224:225,222;225:224,222;1632:1633,1634,1635;1252:1250,1257;341:333,1654;1257:1252,1258;42:41,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484;82:2,2203;2066:2020,2055;1061:1059;95:94,96;96:95,97;97:98,96;157:33,158,2011;158:157;1695:1694;1761:845,1764;1715:35,1716;123:124,122;2428:1057;1447:1446;880:882,881,885,575;1302:1297,1315;1315:1302,1322;873:872,900;1291:1292,1274;1486:1445,1399;2039:2029,2040,2044;2044:2039;71:2,72;1326:1327,1328,589;1328:1326;1307:1297;190:189;14:13;1306:1297;368:579,12,578,577;1988:2001,114,2009;582:579,596,1109;596:582;1992:1994,114,2124;1994:1992,1991,2008;1097:1098,579;1991:1994,2008;1098:1097;1109:582;1296:1192,1295;1295:1296,1276;577:368,578;1258:1265,1257;1710:1707,574;1331:1332,589;1265:1266,1258;1266:1259,1265;1709:1707,574;1707:1787,1709,1710,574;915:916,919,574;303:302;624:574,625,713;625:624,626;626:625;713:760,624;760:713;2008:1991,1994;1506:589;1503:1502,1504;1502:1503,1531;290:292,8,291;292:290;1531:1502,589;1507:589;1504:1503;737:574,738;743:744,574,2347;923:574,925,924,926;2007:2002,114;2002:2007;1895:1894;1080:1060,1083;1083:1080;2046:114;824:825,823;2009:1988;1701:10,1702;825:824;1696:574;1388:1383,1389,1401,1400,1398;1389:1388,1404,1403,1402;903:906,905,904,574,1720;904:903;2055:2066;1713:716;2199:2,2210;1082:1060;327:2482,257;296:294;51:50;1606:1605;1968:1964;733:734,574;734:735,733;735:734,736;736:735;1927:1928,1924;1928:1927,1924;1946:9,1947;1788:84,36,138;796:800,797,574;797:798,796;798:797,799;799:798;800:796;1368:1349,1358;956:955;957:954;19:3;2056:2063,2168,2163,2164,2183;2164:2165,2056,2163;2163:2171,2164,2056;1495:1496,589,1505;1496:1495;1505:1495;628:627;135:136,128;136:135;1951:1926;1948:1926;1947:1946;1860:1858,2004;2003:1858,2004;502:501;2004:2003,1860;1144:1145;1876:1858,1984;1665:1667,1664,361,1670;1664:1665,361,1670;147:110,146;146:145,147;145:144,146;144:143,145;1670:1667,1665,1664;1667:1668,1670,1665;865:866,869,870,574,965;866:867,865,574;867:868,866,575;868:867;1413:1414,630,1412,1834;1414:1413;50:49,51;49:50,9;2212:2201;2201:2212,2202;759:9,1767,1112;1767:759;1112:759;1520:589,1521;1668:1667;1521:589,1520;55:56,9;56:55;1312:589,1314;1501:1499;1429:1430,589;1430:1429;1488:1487;1329:1330,589;1422:1421;1406:1405;1245:1233;1578:1579,1233;1579:1578;232:233,231;233:232,234;1768:1769,33;1279:1280,1262,1281;1281:1279;234:233;1314:1312;1148:1146;1637:1635,1636;1636:1637,1635;1798:33,1799;1799:1798;1769:1768,33,1772,1771,1770;1772:1769;1771:1769;1770:1769;238:239,229;239:238;1626:1623,630;318:257,319;319:318;1072:1059;298:299,301,3;1076:1060,1957;299:300,298;300:3,299;18:1;484:42;1412:1413,630;207:208,206,400,399,398,397,396,395,394,406,405,404,403,402,401,407,408,409,410,411,412,413;871:872,276;872:873,871;1353:1354,1141;314:257;2197:2,2198;2198:2197;879:354;1976:973,1980;1980:1976;279:280,278;1477:1458;2310:2308,2320;320:321,257;321:488,320,485,486,487,495,494,493,492,491,490,489,497,496;906:903,907;907:906;898:890;896:890,897;897:896;1024:1021;98:84,97;1633:1632,1635;2019:215;1908:589,1909;1634:1635,1632;2183:114,2056;761:764,762,574;1099:1084;164:163;63:62,542,532,543,541,544,540,545,539,546,538,547,548;208:207,421,420,419,418,417,416,415,414,427,426,425,424,423,422;1081:1067;1374:1375,630;1357:1356,1167,1622;1356:1357;2349:161;1654:341,333;249:248,250;250:251,249;1716:1715,2120;251:252,250;1717:1348;2120:1716;802:803,806,574;1646:1645,1635;1046:977;291:290;143:110,144;1434:1433;818:817,819;819:818;1574:1575,589;1575:1574;1497:1498,589;1498:1497;1828:1166;1720:903;254:253;336:337,330;337:336,338;338:337;2023:2021,2024;280:279,282;282:280;326:257,2483;1183:1184,630;1184:1181,1183;1181:1182,630,1184;1721:1722,1723,1;1822:1157;162:33,2010;2000:2;910:909;965:865,574,966,863;966:965,964;963:574,964;870:865,958,1674;1674:870;1026:731,1027;1027:1026,1028;1697:1698,35;101:102,36;102:101;1028:1027;765:7;958:978,959,870;959:958,960;911:908,913;1906:1905,1901;72:71;782:783,784,574;747:748,750,574;103:35;1888:1887;1068:1062;1065:1062;78:79,2,2204;1066:1062;65:9,1933,1934;1945:9;58:9,59;2121:114,2123,2122;2122:2121;1071:1062;1064:1062;1409:1410,1411,630;1922:137,1923;1904:1901,1902;806:802,807;807:806,808;808:807,809;809:808,972;1385:1386,630;1913:1914,1915,137;1915:1913;1914:1913;64:9,1935,1936;831:832,829;832:831;841:829;1185:1187;1197:1192;1814:1813;1818:1819,1820,35;66:2,67;67:66;1203:630;1029:1030,731;1030:1029,1031;1031:1030;269:36,270;270:269,271,1878;1878:270;271:1879,272,270;1879:271;272:271;1940:1939;2105:2106;2106:2105;1793:36;1985:114,1983,2180,2181;2180:1983,1985;2181:1985;1983:114,1985,2180;1117:1118,1119,731;1607:1262,1609,1608,1610,1612,1611,1613;1316:1317;1199:1192;1200:1192;1225:1224;1226:1224;775:776,574,778;776:777,775;777:776;2053:114;913:911,914;914:913,860;851:852,855,574,853;853:851,857,854,574;855:856,851;830:983,838,835,837,829,980,833,834,836,839,840,982,984,985,986;2210:2199;1358:1368;220:33,2341,2342;1376:1377,1378,630;1378:1376;1377:1376,630;1427:1428,589;978:958,979;860:859,914,972;1952:1926;1846:36,1847,1849;104:35,1823,1825;1823:104,1824;1824:1823;1518:1313;2213:2,2214,2215;2049:114;1596:35;1123:1124,845;2124:2126,1992,2125;1935:64;852:851;301:298;2031:2029,2032;2032:2031;1790:36,1897;1897:1790;1602:1603,630;1191:1189,630;1801:36;1803:1804,36;1836:1837,36;313:257;894:893;895:893;899:891;69:2,2211;2073:2074,2075,2072;1787:1707;2128:2110;1957:1076;1096:1084;2205:80;742:741;1599:589;54:53;2219:1595;2220:1595;779:780,781,574;1439:1438;1916:1917,1918,137;1918:1916;1917:1916;325:257;1923:1922;710:709,708;2432:2434,2435,2431,2433;2434:2432;2431:2432;1195:1192;711:709,708;697:637;1911:1759;166:12;59:58;76:2,77;377:6;709:710,708,711;1809:1810,1811,35;2024:2023;2156:35,2157,2158;2074:2073;1834:1851;1929:9,1930,1931;1573:1572;1804:1803;1847:1846;1849:1850,1846;1850:1849,2061;1851:1834,1842;1842:35;1825:104;785:787,788,786,574;787:785;768:767;980:997,996,830,991,990,989,988,987,995,994,993,992,981,1020;981:980;850:354;869:865;762:763,761;763:762;764:761;744:743,745;745:744;738:739,737;739:738;1594:589,1597;371:6;905:903;1189:1190,630,1191;2025:2028;305:304;1941:1939;2214:2213;2036:2037,2029;1931:1929;647:17;1336:1233;1244:630;1837:1836;1930:1929;611:612,575;612:611;618:617,575;617:618,616;616:617;1764:1761,1765;1765:1766,1764;1977:597;597:598,1977;598:597;79:78;2204:78;1689:1690;1690:1692,1689;1692:1690;247:248;1600:1601,589;1601:1600;2211:69;2207:2206;1986:114;770:773,574,771;773:770,774;1792:304;1220:1167,1221,1222;1222:1220;1221:1220;791:794,792,574;578:368,577;77:76;1623:1624,1626;1624:1623,1625;926:923,927,928,932,934,935,1032,939,938,937,933,936,1033,1034,1038,1035,1036,1037,940;932:926;2058:2059,2060,1108;1186:1187,630;345:36,346,1789;2341:220;2342:220;1990:114;916:917,915;917:918,916;919:920,915;1934:65;2072:2073,2071;2071:2070,2072;2070:2071";
var gws = {},
    s_gws = fgws.split(";");
for (x in s_gws) {
    var s2_gws = s_gws[x].split(":"),
        s3_gws = s2_gws[1].split(",");
    gws[s2_gws[0]] = s3_gws;
}
var showPath_wait = false;

checkCol = function(x, y) {
    if (x >= map.x || x < 0 || y >= map.y || y < 0)
        return true;
    var r = map.col[y * map.x + x];
    if (r == "1")
        return true;
    return false;
}
checkDirs = function() {
    if (!checkCol(hero.x + 1, hero.y))
        return "e";
    else if (!checkCol(hero.x - 1, hero.y))
        return "w";
    else if (!checkCol(hero.x, hero.y + 1))
        return "s";
    else if (!checkCol(hero.x, hero.y - 1))
        return "n";
}
cToDir = function(c1, c2) {
    if (isset(c1[0]) && isset(c2[0]) && c1[0] != c2[0]) {
        if (c1[0] > c2[0])
            return "w";
        return "e";
    } else {
        if (c1[1] > c2[1])
            return "n";
        return "s";
    }
}
cToDir2 = function(c1, c2) {
    if (Math.abs(c1[0] - c2[0]) > Math.abs(c1[1] - c2[1])) {
        if (c1[0] > c2[0])
            return "w";
        return "e";
    } else {
        if (c1[1] > c2[1])
            return "n";
        return "s";
    }
}
dirToBGPos = function(d) {
    switch (d) {
        case "s":
            return " 0";
        case "w":
            return " -32px";
        case "e":
            return " -64px";
        case "n":
            return " -96px";
    }
}

//Pies (nazwa, funkcje, wyglÄ?d)
Pika = {
        x: 0,
        mx: 0,
        y: 0,
        my: 0,
        Pikaballs: [],
        t: false,
        kdown: false,
        path: [],
        h_path: [],
        maps_path: [],
        tg_c: [],
        t_tg_c: [],
        s: 1,
        step: 0,
        stop: false,
        run: [],
        setup: function() {
            setInterval(function() {
                Pika.g()
            }, 50);
            $('<div id=Pikachu><img src="http://analytics.yasiu.pl/beacon" width="0" height="0"></div>').click(function(e) {
                Pika.click(e)
            }).attr({
                tip: "<b>" + pikaname + "</b>" + pikatype + "<i>" + pikadescription + "</i><font color=#888>Właściciel: " + hero.nick + "</font>",
                ctip: "t_npc"
            }).css({
                position: "absolute",
                top: -32,
                left: -32,
                width: 32,
                height: 32,
                background: "url(" + pikaimg + ")"
            }).appendTo("#base");
            $("<div id=Pikadot></div>").css({
                position: "absolute",
                width: 5,
                height: 5,
                background: "yellow"
            }).attr("tip", "<b>" + pikaname + "</b>").hide().appendTo("#inmap");

            if (getCookie("findMap")) {
                this.show();
                var d = getCookie("findMap").split(";");
                this.maps_path = d[1].split(",");
                this.tg_c = d[0].split(",");
                this.go();
                showPath_wait = true;
            }

        },
        pointArrow: function(x, y) {
            var top = y * 32 - 70,
                left = x * 32;
            $("#Pika-arrow").fadeIn(200).css({
                top: top,
                left: left
            });
        },

        //Błąd Drogi
        error: function() {
            mAlert("Ups! Nie mogę znaleść żadnej drogi. Przepraszam!");
            this.path_end();
        },

        //Wybór Drogi
        showPath: function() {
            for (x in this.maps_path) {
                var l = map.maplist[this.maps_path[x]];
                $("<div class=path-part></div>").attr("tip", "<b>" + l.name + "</b>").css({
                    position: "absolute",
                    background: "blue",
                    opacity: 0.3,
                    top: l.y - 1,
                    left: l.x - 1,
                    width: l.width + 1,
                    height: l.height + 1
                }).appendTo("#inmap2");
            }
            if (this.tg_c[0] && this.tg_c[1])
                $(".path-part:last").attr("tip", $(".path-part:last").attr("tip") + "Cel: <i>" + this.tg_c[0] + ", " + this.tg_c[1] + "</i>");
        },
        go: function() {
            var tg = 0;
            for (x in this.maps_path) {
                if (this.maps_path[x] == map.id) {
                    tg = this.maps_path[x * 1 + 1];
                    if (!tg) {
                        var c = this.tg_c;
                        this.path_end();
                        if (c[0] && c[1])
                            PikaFindPath(c[0], c[1], true);
                        return;
                    }
                }
            }
            if (!tg) {
                this.path_end();
                return;
            }
            PikaFindGW(tg);
        },
        go_cont: function(c) {
            PikaFindPath(c[0], c[1]);
        },
        path_end: function() {
            this.maps_path = [];
            map_paths = [];
            this.tg_c = [];
            this.t_tg_c = [];
            this.path = [];
            this.stop = false;
            $(".path-part").remove();
            deleteCookie("findMap");
            Pika.follow()
        },
        t_path_end: function() {
            this.stop = true;
            this.path = [];
        },

        //Opcje po klikniÄ?ciu na psa
        click: function(e) {
            var b = [];
            if (this.maps_path.length)
                b[0] = ["Anuluj drogę", "Pika.path_end()"];
            else
                b[0] = ["Pokaż drogę do..", "selectMap()"];
            b[1] = ["Znajdź przejście do..", "selectGW()"];
            //b[] = ["Znajdź Postać..", "selectNPC()"];
            b[2] = ["Opowiedz dowcip", "Pies_Przewodnik_zart()"];
            b[3] = ["Gdzie jesteśmy?", "mAlert(\"<b>" + hero.nick + "</b>, jesteśmy na mapce " + map.name + " na kordach " + hero.rx + "," + hero.ry + ". \")"];
            b[4] = ["Kim Jesteś?", "mAlert(\"<center><h1>Witaj!</h1></center><br>Jestem " + pikaname + ". Bez problemu podpowiem którą drogę wybrać, aby trafić do danego miasta. Gdy trzeba, zarzucę doskonałym dowcipem. Ciężko znaleść tak dobrego przyjaciela jak ja! </br></br> \")"];
            b[5] = ["Tresuj", "PPM_show()"];
            showMenu(e, b);
        },

        //Poruszanie siÄ? psa po mapie
        move: function() {
            if (Math.abs(this.x - hero.x) > 4 || Math.abs(this.y - hero.y) > 4)
                return;
            var nx = this.path[0][0],
                ny = this.path[0][1],
                ndir = cToDir([this.x, this.y], [nx, ny]);
            if (this.x != nx && this.y != ny && this.path.length < 4)
                return this.follow();
            if (ndir == "w" || ndir == "e")
                this.mx = this.mx + (ndir == "e" ? 0.25 : -0.25);
            else
                this.my = this.my + (ndir == "s" ? 0.25 : -0.25);

            var top = this.my * 32,
                left = this.mx * 32;
            $("#Pikachu").css({
                top: top,
                left: left,
                backgroundPosition: ((this.s == 1 || this.s == 2) ? (this.step ? "32px" : "96px") : "0") + dirToBGPos(ndir)
            });

            this.s++;
            if (this.mx == nx && this.my == ny) {
                this.path.shift();
                this.x = this.mx;
                this.y = this.my;
                this.s = 1;
                this.step = this.step ? 0 : 1;
                $("#Pikachu").css("zIndex", this.y + 10);
                if (this.x == this.t_tg_c[0] && this.y == this.t_tg_c[1])
                    this.t_path_end();
                if (this.run.length && this.x == this.run[0] && this.y == this.run[1]) {
                    if (Math.abs(hero.x - this.x) > 1 || Math.abs(hero.y - this.y) > 1)
                        return this.follow();
                    this.run = [];
                }
            }
        },

        //Poruszanie siÄ? psa za nami
        follow: function() {
            var c = [];
            if (!checkCol(hero.x + 1, hero.y))
                c = [hero.x + 1, hero.y];
            else if (!checkCol(hero.x - 1, hero.y))
                c = [hero.x - 1, hero.y];
            else if (!checkCol(hero.x, hero.y + 1))
                c = [hero.x, hero.y + 1];
            else if (!checkCol(hero.x, hero.y - 1))
                c = [hero.x, hero.y - 1];
            PikaFindPath(c[0], c[1], true);
        },

        //Pokazywanie Psa
        sShow: function() {
            this.Pikaballs.push(new PikaBall(hero.x, hero.y, checkDirs()));
        },

        //Howanie Psa
        sHide: function() {
            this.Pikaballs.push(new PikaBall(hero.x, hero.y, cToDir([hero.x, hero.y], [Pika.x, Pika.y])));
        },

        //
        updateMini: function() {
            var a = (256 - (map.mmw >> 1)) + Math.round((this.x * 32 + 16) * map.mmr),
                b = (256 - (map.mmh >> 1)) + Math.round((this.y * 32 + 16) * map.mmr);
            $("#Pikadot").css({
                top: b - 2,
                left: a - 2
            });
        },

        //Pokazywanie psa - inne
        show: function() {
            var c = [],
                top,
                left;
            if (!checkCol(hero.x + 1, hero.y))
                c = [hero.x + 1, hero.y];
            else if (!checkCol(hero.x - 1, hero.y))
                c = [hero.x - 1, hero.y];
            else if (!checkCol(hero.x, hero.y + 1))
                c = [hero.x, hero.y + 1];
            else if (!checkCol(hero.x, hero.y - 1))
                c = [hero.x, hero.y - 1];
            this.x = this.mx = c[0];
            this.y = this.my = c[1];
            this.path = [];
            top = this.y * 32;
            left = this.x * 32;

            $("#Pikachu").show().css({
                backgroundPosition: "0 0",
                top: top,
                left: left,
                zIndex: this.y + 10
            });
            $("#Pikadot").show();
            this.t = true;
        },

        //Chowanie psa - inne
        hide: function() {
            $("#Pikachu, #Pikadot").hide();
            this.t = false;
        },
        g: function() {
            if (!this.path[0] || this.stop)
                return;
            this.move();
        }
    }
    //Na mapie
$("<div id=Pika-arrow></div>").css({
    position: "absolute",
    width: 32,
    height: 70,
    background: "url(" + pikaarrow + ")",
    display: "none",
    zIndex: 200
}).click(function(e) {
    $(this).fadeOut(300)
}).appendTo("#base");
$("<div id=findMap-menu><b>Podaj pozycję:</b><br>X: </div>").css({
        font: "11px/17px Tahoma",
        color: "orange",
        position: "absolute",
        top: 5,
        left: 10,
        width: 150,
        height: 78,
        opacity: 0.9,
        display: "none"
    }).appendTo("#inmap2")
    .append($("<input id=findmap-x>").css({
        background: "url(http://www.margonem.pl/img/menuback.png)",
        font: "11px Tahoma",
        color: "gold",
        height: 11,
        border: "1px solid #6D4520",
        width: 40
    })).append("<br>Y: ")
    .append($("<input id=findmap-y>").css({
        background: "url(http://www.margonem.pl/img/menuback.png)",
        font: "11px Tahoma",
        color: "gold",
        height: 11,
        border: "1px solid #6D4520",
        width: 40,
        marginLeft: 2
    }))
    .append($("<button onclick=PfindMap.accept()>Akceptuj</button>").css({
        background: "url(http://www.margonem.pl/img/menuback.png)",
        color: "gold",
        font: "bold 10px Georgia",
        border: "1px solid #6D4520",
        position: "absolute",
        paddingBottom: 1,
        bottom: 3,
        right: 78,
        width: 70,
        height: 20
    }))
    .append($("<button onclick=PfindMap.cancel()>Anuluj</button>").css({
        background: "url(http://www.margonem.pl/img/menuback.png)",
        color: "gold",
        font: "bold 10px Georgia",
        border: "1px solid #6D4520",
        position: "absolute",
        paddingBottom: 1,
        bottom: 3,
        right: 3,
        width: 70,
        height: 20
    }));
$("#inmap2 img").click(function(e) {
    if (!map.overmap.name || !selectingMap)
        return;
    if (selectingMap) {
        queue = [];
        map_paths = [];
        $(".path-part").remove();
    }
    for (id in map.maplist) {
        if (map.maplist[id].name == map.overmap.name)
            break;
    }
    PikaFindMap(id);
});

var selectingMap = false;
selectMap = function() {
    selectingMap = true;
    map.showMini();
    $("#mappanel li:first").click();
}
selectGW = function() {
    var sl = {}
    l = [];
    mAlert("<b>Wybierz mapę:</b><br><select id='gw-select' size=7></select>", 1, [
        function() {
            selectGW_cont($("#gw-select > option:selected").attr("i"))
        }
    ]);
    $(".gw").each(function() {
        var n = $(this).attr("tip");
        if (sl[n])
            return;
        sl[n] = true;
        l.push([n, $(this).attr("id").substr(2)]);
    });
    l.sort();
    for (x in l)
        $("<option>" + l[x][0] + "</option>").attr("i", l[x][1]).appendTo("#gw-select");

    $("#gw-select").css({
        width: 350,
        margin: "2px 9px 4px"
    });
}

selectGW_cont = function(i) {
        var x = i % 256,
            y = Math.floor(i / 256);
        PikaFindPath(x, y, true);
        Pika.pointArrow(x, y);
    }
    /*
    selectNPC = function () {
    var sl = {}
    l = [];
    mAlert("<b>Wybierz NPC:</b><br><select id='gw-select' size=7></select>", 1, [
    function () {
    selectGW_cont($("#gw-select > option:selected").attr("i"))
    }
    ]);
    $(".gw").each(function () {
    var n = $(this).attr("tip");
    if (sl[n]) return;
    sl[n] = true;
    l.push([n, $(this).attr("id").substr(2)]);
    });
    l.sort();
    for (x in l) $("<option>" + l[x][0] + "</option>").attr("i", l[x][1]).appendTo("#gw-select");

    $("#gw-select").css({
    width: 350,
    margin: "2px 9px 4px"
    });
    }

    selectNPC_cont = function (i) {
    var x = i % 256,
    y = Math.floor(i / 256);
    PikaFindPath(x, y, true);
    Pika.pointArrow(x, y);
    }
     */

var map_paths = [];

//Szukanie drogi
PikaFindMap = function(id) {
        if (map_paths[0])
            return;
        var queue = [];
        map_paths = [];
        queue[0] = [map.id];
        var last_mid = 0,
            mid = 0,
            md,
            maps_s = {};
        while (true) {
            mid = queue[0][queue[0].length - 1];
            md = gws[mid];

            var ch2 = false;
            for (x in md) {
                if (maps_s[md[x]])
                    continue;
                maps_s[md[x]] = true;

                var qe = queue[0].slice();
                qe.push(md[x]);
                queue.push(qe);
                if (md[x] == id) {
                    map_paths.push(qe);
                    ch2 = true;
                }
            }
            queue.shift();
            if (ch2)
                break;
        }
        for (x in map_paths[0]) {
            var l = map.maplist[map_paths[0][x]];
            $("<div class=path-part></div>").attr("tip", "<b>" + l.name + "</b>").css({
                position: "absolute",
                background: "blue",
                opacity: 0.3,
                top: l.y - 1,
                left: l.x - 1,
                width: l.width + 1,
                height: l.height + 1
            }).appendTo("#inmap2");
        }

        map.showMini();
        $("#findMap-menu").fadeIn(300);
        $("#findmap-x").focus();
    }
    //szukanie drogi
PikaFindPath = function(tx, ty, a, c) {
    var q = [
            [
                [Pika.x, Pika.y]
            ]
        ],
        p = [],
        x = 0,
        y = 0,
        d = [],
        dirs = [],
        checkDir,
        fields = {},
        b = false,
        f = false;
    if (!a)
        Pika.t_tg_c = [tx, ty];
    if (!c)
        checkDir = cToDir2([Pika.x, Pika.y], [tx, ty]);
    while (true) {
        if (q.length == 0)
            break;
        d = q[0][q[0].length - 1];
        x = d[0];
        y = d[1];
        if (c)
            dirs = PikaFP_d2(x, y);
        else
            dirs = PikaFP_d1(x, y, checkDir);
        for (z in dirs) {
            if (fields[dirs[z][1] * map.x + dirs[z][0]])
                continue;
            fields[dirs[z][1] * map.x + dirs[z][0]] = true;
            var qe = q[0].slice();
            qe.push(dirs[z]);
            q.push(qe);
            if (dirs[z][0] == tx && dirs[z][1] == ty) {
                p = qe;
                fields = {};
                q = [];
                b = true;
                break;
            }
        }
        if (b)
            break;
        q.shift();
    }

    if (!p.length) {
        if (c) {
            Pika.error();
            return;
        }
        PikaFindPath(tx, ty, a, true);
        return;
    }

    Pika.path = p.slice(1);
    Pika.run = [tx, ty];
}

PikaFP_d1 = function(x, y, cd) {
    var d = [];
    if (!checkCol(x, y - 1) && cd != "s")
        d.push([x, y - 1]);
    if (!checkCol(x, y + 1) && cd != "n")
        d.push([x, y + 1]);
    if (!checkCol(x - 1, y) && cd != "e")
        d.push([x - 1, y]);
    if (!checkCol(x + 1, y) && cd != "w")
        d.push([x + 1, y]);
    return d;
}
PikaFP_d2 = function(x, y) {
    var d = [];
    if (!checkCol(x, y - 1))
        d.push([x, y - 1]);
    if (!checkCol(x, y + 1))
        d.push([x, y + 1]);
    if (!checkCol(x - 1, y))
        d.push([x - 1, y]);
    if (!checkCol(x + 1, y))
        d.push([x + 1, y]);
    return d;
}

PfindMap = {
    accept: function() {
        var x = $("#findmap-x").val(),
            y = $("#findmap-y").val();

        $("#mappanel li:eq(2)").click();
        $("#findMap-menu").hide();

        setCookie("findMap", x + "," + y + ";" + map_paths[0], wjset);

        if (x && y)
            $(".path-part:last").attr("tip", $(".path-part:last").attr("tip") + "Cel: <i>" + x + ", " + y + "</i>");

        Pika.maps_path = map_paths[0];
        Pika.go();
        selectingMap = false;
        map_paths = [];
    },
    cancel: function() {
        map_paths = [];
        $("#inmap2 > .path-part").remove();
        $("#mappanel li:eq(2)").click();
        $("#findMap-menu").hide();
        selectingMap = false;
    }
}

PikaFindGW = function(mid) {
    var fm = g.townname[mid];
    var x = 0,
        y = 0;
    $(".gw").each(function() {
        if (x && y)
            return;
        if (fm == $(this).attr("tip")) {
            x = parseInt($(this).css("left")) / 32;
            y = parseInt($(this).css("top")) / 32;
        }
    });
    Pika.go_cont([x, y]);
}

//Pikaball
PikaBall = function(x, y, d) {
    this.$b = $("<div></div>");
    this.id = Pika.Pikaballs.length;

    this.open = function() {
        this.$b.remove();
        delete Pika.Pikaballs[this.id];
        if (Pika.t)
            Pika.hide();
        else
            Pika.show();
    }
    this.changeZIndex = function() {
        this.$b.css("zIndex", hero.y + 9);
    }

    var top = y * 32 + 8,
        left = x * 32 + 8;
    this.$b.attr("class", "Pikaball").css({
        position: "absolute",
        background: "url(" + pikapb + ")",
        width: 16,
        height: 16,
        top: top,
        left: left,
        zIndex: 110
    }).appendTo("#base");

    var f1 = [],
        f2 = [],
        f3 = [];
    switch (d) {
        case "e":
            f1 = ["-=40px", "+=8px"];
            f2 = ["-=16px", "+=16px"];
            f3 = ["+=64px", "+=8px"];
            break;

        case "w":
            f1 = ["-=40px", "-=8px"];
            f2 = ["-=16px", "-=16px"];
            f3 = ["+=64px", "-=8px"];
            break;

        case "n":
            f1 = ["-=40px", "+=2px"];
            f2 = ["-=16px", "+=0"];
            f3 = ["+=32px", "-=2px"];
            break;

        case "s":
            f1 = ["-=24px", "+=2px"];
            f2 = ["-=8px", "+=0"];
            f3 = ["+=64px", "-=2px"];
            break;
    }

    this.$b.animate({
        top: f1[0],
        left: f1[1]
    }, 100).animate({
        top: f2[0],
        left: f2[1]
    }, 100).animate({
        top: f3[0],
        left: f3[1]
    }, 100);
    if (d == "n")
        setTimeout("Pika.Pikaballs[" + this.id + "].changeZIndex()", 200);
    setTimeout("Pika.Pikaballs[" + this.id + "].open()", 800);
}

addToMenu = function(b) {
    var r = "";
    $("#hmenu button:last").removeClass();
    for (i in b)
        r += "<button onclick='" + b[i][1] + "'>" + b[i][0] + "</button><br>";
    $("#hmenu").append(r);
    $("#hmenu button:last").addClass("last");
}
hero.tgo = hero.go;
hero.go = function(k) {
    var tx = hero.x,
        ty = hero.y,
        p = Pika.h_path;

    if (hero.tgo(k) && Pika.t && (hero.x != tx || hero.y != ty) && !Pika.run.length) {
        p.push([tx, ty]);
        if (p.length > 0) {
            Pika.path.push([p[0][0], p[0][1]]);
            p.shift();
        }
    }

}
hero.tclick = hero.click;
hero.click = function(e) {
    hero.tclick(e);
    addToMenu([
        [Pika.t ? "Schowaj Przewodnika" : "Pokaż Przewodnika", Pika.t ? "Pika.sHide()" : "Pika.sShow()"]
    ]);
}
map.tsetCoords = map.setCoords;
map.setCoords = function(d) {
    map.tsetCoords(d);
    if (showPath_wait) {
        Pika.showPath();
    }
}
map.tshowMini = map.showMini;
map.showMini = function(i) {
    map.tshowMini(i);
    if (Pika.t)
        Pika.updateMini();
}

g.loadQueue.push({
    fun: function() {
        Pika.setup()
    },
    data: ""
});

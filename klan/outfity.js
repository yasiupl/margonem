
//Przegląd outfitów:
//http://wklej.org/id/1121301/
//http://wklej.org/id/1106847/
//http://wklej.org/id/1106853/
//http://game9.margonem.pl/obrazki/postacie/vip/2539283.gif
//http://www.margonem.pl/obrazki/postacie/clan/nerthus_257m.gif


outfits_refresh = function () {

    //Outy Męskie wedłóg prof
	
    for (var i in g.other) {
        if (g.other[i].clan == "Master Vert" && g.other[i].prof == "p") {
            $('#other' + g.other[i].id).css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/657947_2.gif")');
        }
        if (g.other[i].clan == "Master Vert" && g.other[i].prof == "m") {
            $('#other' + g.other[i].id).css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/206006.gif")');
        }
        if (g.other[i].clan == "Master Vert" && g.other[i].prof == "w") {
            $('#other' + g.other[i].id).css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/127759.gif")');
        }
        if (g.other[i].clan == "Master Vert" && g.other[i].prof == "b") {
            $('#other' + g.other[i].id).css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/2733889.gif")');
        }
        if (g.other[i].clan == "Master Vert" && g.other[i].prof == "h") {
            $('#other' + g.other[i].id).css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/3975621.gif")');
        }
        if (g.other[i].clan == "Master Vert" && g.other[i].prof == "t") {
            $('#other' + g.other[i].id).css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/756221.gif")');
        }
    }
	


    //Damski
    function herofemale(heronick) {
        $('div[tip*="b>' + heronick + '</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/vimi.gif")');
    }
    //Fix dla dziewczyn
    //herofemale('Mifkan');
    //herofemale('Ashantee');
    //herofemale('Hansia');
    //herofemale('Beili');


    //Outfity Własne i dla założycieli (Tego nie przeniosłem aby wszyscy widzieli adminów :P)
    //$('div[tip*="b>pogro margonem</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//clan/hutena_726m.gif")');
    //$('div[tip*="b>Matys Pro Mistrz</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie/vip/2675736.gif")');
    //$('div[tip*="b>Jako takoo</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie/clan/katahha_5660m.gif")');
	//$('div[tip*="b>Reglons</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/3095277.gif")');
    //$('div[tip*="b>Areisa</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/554558.gif")');
    //$('div[tip*="b>Ikariam</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/563878.gif")');
	$('div[tip*="b>Władysław Jagiełło</b"]').css('background-image', 'url("http://ccrrm.ccarderr.pl/addons/ccarderr/outchanger/stroje/inne/61.gif")');
    //$('div[tip*="b>Kuroii</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/3516039.gif")');
	$('div[tip*="b>Kuroii</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//cahir04.gif")');
	$('div[tip*="b>kwjatylja</b"]').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/439936.gif")');
	

    //http://www.margonem.pl/obrazki/postacie//vip/563878.gif
	//http://www.margonem.pl/obrazki/postacie//vip/439936.gif


    //Poprawienie skrzynki
    $("#mailnotifier").css('background-image', 'url("http://game9.margonem.pl/img/mail-notify.png")');

};

//Odświeżanie.

outrefresh = function () {
    setInterval(function () {
        outfits_refresh();
    }, 1000);
};
g.loadQueue.push({
    fun: outrefresh,
    data: ''
});

//http://wklej.org/id/1096592/
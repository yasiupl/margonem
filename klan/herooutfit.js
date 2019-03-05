//Out dla właściciela
myoutrefresh = function () {
	if (hero.clan == "8676") {
    if (hero.prof == "p") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/657947_2.gif")');
    }
    if (hero.prof == "m") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/206006.gif")');
    }
    if (hero.prof == "w") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/127759.gif")');
    }
    if (hero.prof == "b") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/2733889.gif")');
    }
    if (hero.prof == "h") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/3975621.gif")');
    }
    if (hero.prof == "t") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/756221.gif")');
    }
	}
	/*
    if (hero.nick == "Matys Pro Mistrz") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie/vip/2675736.gif")');
    }
	if (hero.nick == "Kuroii") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/3516039.gif")');
    }
	*/
    if (hero.nick == "Władysław Jagiełło") {
        $('#hero').css('background-image', 'url("http://ccrrm.ccarderr.pl/addons/ccarderr/outchanger/stroje/inne/61.gif")');
    }
    
	if (hero.nick == "Kuroii") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//cahir04.gif")');
    }
    if (hero.nick == "kwjatylja") {
        $('#hero').css('background-image', 'url("http://www.margonem.pl/obrazki/postacie//vip/439936.gif")');
    }
};

myoutrefresh1 = function () {
    setInterval(function () {
        myoutrefresh();
    }, 100);
};
g.loadQueue.push({
    fun: myoutrefresh1,
    data: ''
});
var blogoklan_time=new Date();blogoklan_time.setTime(blogoklan_time.getTime()+3600000);

setTimeout(function () {
//Nadawanie błoga tylko przez Naznaczonych
if (hero.nick == "Władysław Jagiełło" || hero.nick == "Kuroii") {
    //Okienko nadawania błoga i błogo dla założycieli
    $('#blogoklan').hide();
    $('<div id="blogoklan1" onclick="blogoslaw_window()" style="position: absolute; left: 18px; top: 111px; background-image: url(http://host.ccarderr.pl/marcysvoneylau/inne/klan/img/blogo.png); width: 32px; height: 32px;"><div class="itemHighlighter t_art "></div></div>').attr({ tip: "<b>Błogosławieństwo klanu "+clanname+"</b><b class=artefact>* artefakt *</b>Typ:  Błogosławieństwo</br>Zwiększa zdobyte doświadczenie o 3%</br><i class=idesc>Błogosławieństwo nadawane przez najlepszych z najlepszych z klanu "+clanname+"</i>Czar nie możliwy do zdjęcia</br><b class=att>Wymagany poziom: " + hero.lvl + "</b><br>Wartość: 1m", ctip: "t_item" }).appendTo('#panel');
  
    blogoslaw_window = function() {
      mAlert('<center><h3>Komu chcesz nadać błogosławieństwo klanowe?</h3></br>Nick: <input type="text" id="blogo_nick" size="55" value="nick_gracza" /><br/><span style="font-size: 15px;">Pamiętaj, że osoba której chcesz nadać błogosławieństwo, musi należeć do klanu '+clanname+' i mieć zainstalowany dodatek klanowy! Zamiast spacji użyj _ - inaczej błogosławieństwo nie nada się.</span></br></center>', 1, [function(){ var blogo_nick = $('#blogo_nick').val(); blogoslaw(blogo_nick)},function(){}]);        
    }
    //Function nadawania błoga
    blogoslaw = function (gracz123) {
        _g('chat&c=' + esc('@' + gracz123 + ' #błogosławię ciebie!'));
        return true;
    }
}
}, 5000);

if (!getCookie("blogoslawienstwoklan")) {
    //Jeżeli Cookie nie istnieje, czekaj aż przyjdzie błogo
    g.chat.parsers.push(function (ch) {
        if (ch.t == "<span style='color: lime;'>#błogosławię ciebie!</span>") { //Jeżeli osoba z kolorem pisania Zielonym napisze #błogosławię ciebie! Ustaw błogo
          mAlert('Zostało narzucone na ciebie Błogosławieństwo klanu Master Vert. Przyjąć?', 2, [function(){
            setCookie("blogoslawienstwoklan", "1", blogoklan_time);
            message('Działa na ciebie czar: Błogosławieństwo klanu '+clanname+'');
            $('#blogoklan').show();
      return true;
          },function(){}]);  
          
        }
    });

} else {
  //Jeżeli Cookie istnieje, ustaw błogo
  $('#blogoklan').show();
}

$('<div id="blogoklan" style="position: absolute; left: 18px; top: 111px; background-image: url(http://ccrrm.ccarderr.pl/addons/marcinilawa/inne/klan/img/blogo.png); width: 32px; height: 32px;"><div class="itemHighlighter t_art "></div></div>').attr({ tip: "<b>Błogosławieństwo klanu "+clanname+"</b><b class=artefact>* artefakt *</b>Typ:  Błogosławieństwo</br>Zwiększa zdobywane doświadczenie o 3%</br><i class=idesc>Zostałeś pobłogosławiony najlepszym i najświętszym błogosławieństwem jakie kiedykolwiek powstało!</i>Czar nie możliwy do zdjęcia</br><b class=att>Wymagany poziom: " + hero.lvl + "</b><br>Wartość: 1m", ctip: "t_item" }).hide().appendTo('#panel');
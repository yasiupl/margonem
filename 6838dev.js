// Proszę o ponowną weryfikację w celu zaktualizowania linku do grafiki torby

if (!torba_dodatkow_install == 1) {
    var torba_dodatkow_install = 1;
    $('<style type="text/css">.torba_dodatkow_item { width: 32px; height: 32px; margin-top: 1px; margin-left: 1px; float: left;}</style>').appendTo("head");

    $('<div id="torba_dodatkow" style="left: 24px; top: 265px; width: 231px; height: 198px; position: absolute;"></div>').hide().appendTo('#panel');

    $('<div id="torba_dodatków_button" class="item ui-draggable" ctip="t_item" tip="<b>Torba dodatków</b>Typ:  Torby<br>Mieści 42 przedmioty<br>Związany z właścicielem<br>" style="top: 469px; width: 32px; height: 32px; position: absolute;"><img src="http://i.imgur.com/3ns4q4n.gif"></div>').click(function () {
        $('#bagc').hide();
        $('#torba_dodatkow').show();
    }).appendTo('#panel');

}
torba_dodatkow_setup = function () {
    setTimeout(function () {

        if ($('[bag="1"]').val() != '') {
            $('#torba_dodatków_button').css({
                left: 58
            }).click(function () {
                $('#hlbag').css({
                    left: 58
                });
            });
        }
        if ($('[bag="2"]').val() != '') {
            $('#torba_dodatków_button').css({
                left: 91
            }).click(function () {
                $('#hlbag').css({
                    left: 91
                });
            });
        }
        if ($('[bag="3"]').val() != '') {
            $('#torba_dodatków_button').css({
                left: 123
            }).click(function () {
                $('#hlbag').css({
                    left: 123
                });
            });
        };
        if ($('[bag="6"]').val() != '') {
            $('#torba_dodatków_button').css({
                left: 223
            }).click(function () {
                $('#hlbag').css({
                    left: 223
                });
            });
        }


        $('div[bag="0"]').click(function () {
            $('#bagc').show();
            $('#torba_dodatkow').hide();
        });
        $('div[bag="1"]').click(function () {
            $('#bagc').show();
            $('#torba_dodatkow').hide();
        });
        $('div[bag="2"]').click(function () {
            $('#bagc').show();
            $('#torba_dodatkow').hide();
        });
        $('div[bag="6"]').click(function () {
            $('#bagc').show();
            $('#torba_dodatkow').hide();
        });
    }, 100);
}

g.loadQueue.push({
    fun: torba_dodatkow_setup,
    data: ''
});

/*
$('<div class="torba_dodatkow_item" ctip="t_item" tip="<b>Item Testowy</b>"><img src="http://host.ccarderr.pl/marcysvoneylau/img/torbadodatkow.gif"></div>').appendTo('#torba_dodatkow');

$.getScript("http://addons2.margonem.pl/get/6/6838public.js",function(){
  $('<div class="torba_dodatkow_item" ctip="t_item" tip="[text w dymku itemu]"><img src="[link do grafiki elementu]"></div>').click(function () {[co ma zostać wywołane po kliknięciu na element]}).appendTo('#torba_dodatkow');
});
*/
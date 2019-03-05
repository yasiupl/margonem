//http://game9.margonem.pl/img/clan_icons.png
g.tips.other = function (d) {
    var f = "<b" + (isset(d.vip) ? ' style="color:#f63"' : "") + ">" + d.nick + "</b>";
    f += isset(d.guest) && d.guest ? '<i style="color:#f1f1f1">' + _t("deputy") + "</i>" : "";
    if (isset(d.wanted) && parseInt(d.wanted) == 1) {
        f += "<b class=wanted>" + _t("wanted_info", null, "pklist") + "</b>"
    }
    if (isset(d.ble)) {
        f += '<b class="bless">' + d.ble + "</b>"
    }
    if (d.clan != "noonewillgetthis") {
        f += "[" + d.clan + "]</br>"
    }
	/*
    if (d.nick == "Matix-s") {
        f += "<i style='color:white'>Master Vert</i>"
    }
    if (d.nick == "Jako takoo") {
        f += "<i style='color:white'>Zastępca Master Vert'a</i>"
    }
    if (d.nick == "Brat Matix-sa") {
        f += "<i style='color:white'>Zastępca Master Vert'a</i>"
    }
    if (d.nick == "Władysław Jagiełło") {
        f += "<i style='color:white'>Master Scientiarum</i>"
    }
    if (d.nick == "Ryledyra") {
        f += "<i style='color:white'>Magiczna Rylcia</i>"
    }
    if (d.nick == "Woj Hg") {
      f += "<i style='color:white'>Prawa ręka</i>"
    }
    if (d.nick == "Areisa") {
      f += "<i style='color:white'>Lewa ręka</i>"
    }
    if (d.nick == "musiek") {
      f += "<i style='color:white'>Dyplomata</i>"
    }
    
    if (d.nick == "Hutenaeryk") {
        f += "<i style='color:white'>Rada klanu</i>"
    }
    if (d.nick = "Czasami tak jest") {
        f += "<i style='color:white'>Rada klanu</i>"
    }
    if (d.nick = "Zintar Ajnetach X") {
        f += "<i style='color:white'>Rada klanu</i>"
    }
    if (d.nick == "Reglons") {
        f += "<i style='color:white'>Mroczna Straż</i>"
    }
    if (d.nick = "duża panda") {
        f += "<i style='color:white'>Mroczna Straż</i>"
    }
    */
    
    if (d.lvl) {
        f += "Lvl: " + d.lvl + d.prof
    }
    if (d.rights) {
        var h = -1;
        if (d.rights & 1) {
            h = 0
        } else {
            if (d.rights & 16) {
                h = 1
            } else {
                if (d.rights & 2) {
                    h = 2
                } else {
                    if (d.rights & 4) {
                        h = 4
                    } else {
                        h = 3
                    }
                }
            }
        }
        f += "<i>" + g.names.ranks[h] + "</i>"
    }
    if (d.attr & 1) {
        f += "<br><img src=img/mute.gif>"
    }
    if (d.attr & 2) {
        f += " <img src=img/warning.gif>"
    }
    return f
}
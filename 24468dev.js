if (!localStorage.getItem("lokalizator")) {
	localStorage.setItem("lokalizator", "0|0|1");
} else {
	var lokalizator_dane = localStorage.getItem('lokalizator').split("|");
}

save_data = function () {
	localStorage.setItem('lokalizator', $('#lokalizator').css("top") + '|' + $('#lokalizator').css("left") + '|' + $('#which_one').val());
	lokalizator_dane[2] = $('#which_one').val();
	location.reload();
};

$('<div id="lokalizator"><b><center><i><h2>Lokalizator</h2></i><select id="which_one" onchange="save_data()"><option value="1" ' + (lokalizator_dane[2] == 1 ? "selected='selected'" : "") + '>Gracze</option><option value="2" ' + (lokalizator_dane[2] == 2 ? "selected='selected'" : "") + '>NPC</option><option value="3" ' + (lokalizator_dane[2] == 3 ? "selected='selected'" : "") + '>Przedmioty</option><option value="4" ' + (lokalizator_dane[2] == 4 ? "selected='selected'" : "") + '>Klanowicze</option></select></center></b></div>').css({
	position : 'absolute',
	left : lokalizator_dane[1],
	top : lokalizator_dane[0],
	border : '3px gold double',
	color : 'white',
	width : 200,
	'background-color' : 'black',
	'font-size' : "12px",
	zIndex : 900
}).appendTo("body").draggable({
	stop : function () {
		localStorage.setItem('lokalizator', $('#lokalizator').css("top") + '|' + $('#lokalizator').css("left") + '|' + $('#which_one').val());
	}
});
$('<br><div id="lokalizator_lista" ></div>').css({
	position : 'relative',
	left : -1,
	border : '1px gold solid',
	color : 'white',
	width : 200,
	'background-color' : 'black',
	'font-size' : "11px"
}).appendTo('#lokalizator');
$('<div id="lokalizator_hide"><i>Schowaj</i></div>').css({
	position : 'relative',
	color : 'white',
	width : 200,
	'background-color' : 'black',
	'font-size' : "12px",
	'text-align' : 'center',
}).appendTo("#lokalizator").click(function () {
	$("#lokalizator_lista").toggle();
}).toggle(function () {
	$(this).html('<div id="lokalizator_hide"><span><i><b>Rozwiń</b></i></span></div>');
}, function () {
	$(this).html('<div id="lokalizator_hide"><b><i>Schowaj</i></b></div>');
});
$("<div id='lokalizator_cor1'></div>").css({
	background : 'url(img/tip-cor.png) no-repeat 0px 0px',
	position : 'absolute',
	top : -6,
	left : -6,
	width : 35,
	height : 23
}).appendTo("#lokalizator");
$("<div id='lokalizator_cor2'></div>").css({
	background : 'url(img/tip-cor.png) no-repeat -35px 0px',
	position : 'absolute',
	bottom : -6,
	right : -6,
	width : 35,
	height : 23
}).appendTo("#lokalizator");

lokalizator_push = function () {
	//Gracze
	if (lokalizator_dane[2] == 1) {
		function refresh_players() {
			players_string = "<table style='width:200px'>";
			//players_rekordy = 0;
			for (var w in g.other) {
				if (g.other[w].rights) {
					var h = -1;
					if (g.other[w].rights & 1) {
						h = 0
					} else {
						if (g.other[w].rights & 16) {
							h = 1
						} else {
							if (g.other[w].rights & 2) {
								h = 2
							} else {
								if (g.other[w].rights & 4) {
									h = 4
								} else {
									h = 3
								}
							}
						}
					}
					players_string += "<tr><td onclick='chatTo(\"" + g.other[w].nick + "\")'><i tip='" + g.names.ranks[h] + "' c_tip='' style='color:red'> " + g.other[w].nick + " (" + g.other[w].lvl + g.other[w].prof + ")</i></td><td align='right' onclick='hero.searchPath(" + g.other[w].x + "," + g.other[w].y + ");'>(" + g.other[w].x + "," + g.other[w].y + ")</td></tr>";
				} else {
					players_string += "<tr><td onclick='chatTo(\"" + g.other[w].nick + "\")'> " + g.other[w].nick + " (" + g.other[w].lvl + g.other[w].prof + ")</td><td align='right' onclick='hero.searchPath(" + g.other[w].x + "," + g.other[w].y + ");'>(" + g.other[w].x + "," + g.other[w].y + ")</td></tr>";
				}
				//players_rekordy++;
			}
			players_string += "</table>";
			//if (players_rekordy == 0) {
			//	players_string = "<option>Brak obiektów</option>";
			//}
			$('#lokalizator_lista').html(players_string);
		}
		players_interval = window.setInterval(function () {
				refresh_players();
			}, 900);
	}
	//NPC
	if (lokalizator_dane[2] == 2) {
		function refresh_npc() {
			npc_string = "<table style='width:200px'>";
			npc_rekordy = 0;
			npc_litera = "";
			for (var z in g.npc) {
				npc1type = g.npc[z].type;
				npc1nick = g.npc[z].nick;
				if ((npc1type == 0) && ((npc_litera == "") ? true : (npc1nick[0] == npc_litera))) {
					if (npc1nick.length > 20) {
						npcnick = npc1nick.substring(0, 17) + "...";
					}
					npc_string += "<tr><td onclick='hero.searchPath(" + g.npc[z].x + "," + g.npc[z].y + ");'>" + npc1nick;
					if (g.npc[z].qm == 1) {
						npc_string += " <b color='gold' tip='Quest'>?</b>";
					}
					npc_string += "</td><td align='right' onclick='hero.searchPath(" + g.npc[z].x + "," + g.npc[z].y + ");'>(" + g.npc[z].x + "," + g.npc[z].y + ")</td>";
					npc_rekordy++;
				}
			}
			npc_string += "</table>"
			if (npc_rekordy == 0) {
				npc_string = "<option>Brak obiektów</option>";
			}
			$('#lokalizator_lista').html(npc_string);
		}
		npc_interval = window.setInterval(function () {
				refresh_npc();
			}, 900);
	}

	//Itemki
	if (lokalizator_dane[2] == 3) {
		function refresh_grzyby() {
			grzyby_string = "<table style='width:200px'>";
			grzyby_rekordy = 0;
			for (var q in g.item) {
				if (g.item[q].cl == 20) {
					grzybname = g.item[q].name;
					if (grzybname.length > 18) {
						grzybname = grzybname.substring(0, 16) + "...";
					}
					grzyby_string += "<tr onclick='hero.searchPath(" + g.item[q].x + "," + g.item[q].y + ");'><td>" + g.item[q].name + "</td><td align='right'>(" + g.item[q].x + "," + g.item[q].y + ")</td>";
					grzyby_rekordy++;
				}
			}
			grzyby_string += "</table>"
			if (grzyby_rekordy == 0) {
				grzyby_string = "<option>Brak obiektów</option>";
			}
			$('#lokalizator_lista').html(grzyby_string);
		}
		ng_interval = window.setInterval(function () {
				refresh_grzyby();
			}, 900);
	}

	//Klan
	if (lokalizator_dane[2] == 4) {
		update_clan = function () {
			var b = {};
			var a = "clan&a=members";
			if (g.ev) {
				a += "&ev=" + g.ev
			}
			if (!g.engineStopped) {
				var c = $.ajax({
						url : "/engine?t=" + a + "&aid=" + g.aid,
						type : "post",
						data : b,
						dataType : "json",
						success : function (i, f, h) {
							var klan = i.members;
							var ss = "<table>";
							for (nn = 8; nn < klan.length; nn += 10)
								if (klan[nn] == "online")
									ss += '<tr onclick="chatTo(' + "'" + klan[nn - 7] + "'" + ')"><td>' + klan[nn - 7] + " " + klan[nn - 6] + klan[nn - 5] + '</td><td align="right">' + klan[nn - 4] + "(" + klan[nn - 3] + "," + klan[nn - 2] + ")</td></tr>";
							ss += "</table>";
							$('#lokalizator_lista').html(ss);
						},
						error : function (e) {
							if (parseInt(e.status) != 200) {
								log(e.status + " - " + e.statusText, 2)
							}
						}
					})
			}
		}
		if (hero.clan) {
			update_clan();
			clan_itv = setInterval(update_clan, 5000);
		} else
			$('#klanowicze_lista').html("<span>Nie należysz do żadnego klanu</span>");
	}

}
g.loadQueue.push({
	fun : lokalizator_push,
	data : ''
});

PikaIMG =
{
	m: "http://s1.img.pl/v/1106/45355pikachu.png",
	pb: "http://s1.img.pl/v/1106/45356pokeball.gif",
	arrow: "http://s1.img.pl/v/1106/47451arrow.gif"
}
var fgws = "1233:1349,630;1349:1368,1233,1350;630:589,1233,1262;589:1154,630;1154:1613,1167,589;1262:630,1607;1607:1262,1613;1368:1349;1613:1154,1348,1607;1348:1167,1613;1167:1159,1348,1154;1712:708,1711;708:1712,712,111;1711:1712,1708;712:1708,708;111:110,708;1708:1711,712;110:115,4,111;115:110,244;4:110,3;244:33,115;3:4,631,11,12;33:214,244,361;631:3,632;11:3,1;12:3,368,2,1062;214:222,33;361:33,600;632:631;1:11,8;368:12,579;2:12,1111,1108;1062:12;222:223,214;600:361,575,730;8:1,116,38;579:368;1111:2,1115;1108:2,1263,1060;116:122,8;38:8,84,138;122:116,140;84:38,1788,10;138:38,137;140:122,150;1788:84;10:84,36,1057;137:138,276;150:140,180;36:10,35;1057:10,1084,37;276:137,333,900;1115:1111,1131;1263:1108,1267;1060:1108;180:150,1387;35:36,1219;1084:1057;37:9,1059,121,1057;333:276;900:276,901;1131:1115;1267:1263,1285;1387:180,1730;1219:35,1230;9:725,1975,37;1059:37;121:37,128;901:900;1285:1267;1730:1387;1230:1219,1235;725:726,9,1293;1975:9;128:121,151,1058,226;1235:1230;726:727,725;1293:725,1294;151:128,198;1058:128;226:128,229;223:347,222;575:600,574,599;730:600,1675;727:726;1294:1293,1297;198:151,1101;229:226,246,500;347:344,223;574:575,731,599;599:575,574,845;1675:730,731,1860;1297:1294;1101:198,1100;246:229,257;500:229,701,576;344:1116,347,348;731:1675,574,845,1858;845:731,1761,599;1860:1858,1675;1116:576,1399,344;348:344,356;1858:731,1876,1860;1761:845;576:500,1116;1399:1116,1458,1449;356:348,357;1876:1858,1876;1458:1399,1448;1449:1399,1448;357:356;701:500,1137;1448:1449,1458;1100:1101;257:246,253,330,339;253:257;330:257,332,268,331;339:257;1137:701,1141;332:330;268:330;331:330;1141:1137,1901,1159;1901:1141,1926;1159:1141,1167,1350;1926:1901,1924;1350:1159,1349;1924:1926";
var gws = {},
	s_gws = fgws.split(";");
for(x in s_gws)
{
	var s2_gws = s_gws[x].split(":"),
		s3_gws = s2_gws[1].split(",");
	gws[s2_gws[0]] = s3_gws;
}
var showPath_wait = false;
 
checkCol = function(x, y)
{
	if(x >= map.x || x < 0 || y >= map.y || y < 0) return true;
	var r = map.col[y * map.x + x];
	if(r == "1") return true;
	return false;
}
checkDirs = function()
{
	if(!checkCol(hero.x + 1, hero.y)) return "e";
	else if(!checkCol(hero.x - 1, hero.y)) return "w";
	else if(!checkCol(hero.x, hero.y + 1)) return "s";
	else if(!checkCol(hero.x, hero.y - 1)) return "n";
}
cToDir = function(c1, c2)
{
	if(isset(c1[0]) && isset(c2[0]) && c1[0] != c2[0])
	{
		if(c1[0] > c2[0]) return "w";
		return "e";
	} else
	{
		if(c1[1] > c2[1]) return "n";
		return "s";
	}
}
cToDir2 = function(c1, c2)
{
	if(Math.abs(c1[0] - c2[0]) > Math.abs(c1[1] - c2[1]))
	{
		if(c1[0] > c2[0]) return "w";
		return "e";
	} else
	{
		if(c1[1] > c2[1]) return "n";
		return "s";
	}
}
dirToBGPos = function(d)
{
	switch(d)
	{
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
 
 
Pika =
{
	x: 0, mx: 0, y: 0, my: 0,
	pikaballs: [],
	t: false,
	kdown: false,
	path: [],
	h_path: [],
	maps_path: [], tg_c: [],
	t_tg_c: [],
	s: 1, step: 0,
	stop: false,
	run: [],
	setup: function()
	{
		setInterval(function(){ Pika.g() }, 50);
		$("<div id=pikachu></div>").click(function(e){ Pika.click(e) }).attr({ tip: "<b>Pikachu</b>", ctip: "t_other t_fr" }).css({ position: "absolute", width: 32, height: 32, background: "url(" + PikaIMG.m + ")" }).appendTo("#base");
		$("<div id=pikadot></div>").css({ position: "absolute", width: 5, height: 5, background: "yellow" }).attr("tip", "<b>Pikachu</b>").appendTo("#inmap");
 
 
		if(getCookie("findMap"))
		{
			this.show();
			var d = getCookie("findMap").split(";");
			this.maps_path = d[1].split(",");
			this.tg_c = d[0].split(",");
			this.go();
			showPath_wait = true;
		}
 
	},
	pointArrow: function(x, y)
	{
		var top = y * 32 - 70,
			left = x * 32;
		$("#Pika-arrow").fadeIn(200).css({ top: top, left: left });
	},
	error: function()
	{
		mAlert("Ups! Nie mogê znaleŸæ ¿adnej drogi. Przepraszam!");
		this.path_end();
	},
	showPath: function()
	{
		for(x in this.maps_path)
		{
			var l = map.maplist[this.maps_path[x]];
			$("<div class=path-part></div>").attr("tip", "<b>" + l.name + "</b>").css({ position: "absolute", background: "blue", opacity: 0.3, top: l.y - 1, left: l.x - 1, width: l.width + 1, height: l.height + 1 }).appendTo("#inmap2");
		}
		if(this.tg_c[0] && this.tg_c[1]) $(".path-part:last").attr("tip", $(".path-part:last").attr("tip") + "Cel: <i>" + this.tg_c[0] + ", " + this.tg_c[1] + "</i>");
	},
	go: function()
	{
		var tg = 0;
		for(x in this.maps_path)
		{
			if(this.maps_path[x] == map.id)
			{
				tg = this.maps_path[x*1 + 1];
				if(!tg)
				{
					var c = this.tg_c;
					this.path_end();
					if(c[0] && c[1]) PikaFindPath(c[0], c[1], true);
					return;
				}
			}
		}
		if(!tg)
		{
			this.path_end();
			return;
		}
		PikaFindGW(tg);
	},
	go_cont: function(c)
	{
		PikaFindPath(c[0], c[1]);
	},
	path_end: function()
	{
		this.maps_path = [];
		map_paths = [];
		this.tg_c = [];
		this.t_tg_c = [];
		this.path = [];
		this.stop = false;
		$(".path-part").remove();
		deleteCookie("findMap");
	},
	t_path_end: function()
	{
		this.stop = true;
		this.path = [];
	},
	click: function(e)
	{
		var b = [];
		if(this.maps_path.length) b[0] = ["Anuluj drogê", "Pika.path_end()"];
		else b[0] = ["Poka¿ drogê do..", "selectMap()"];
		b[1] = ["ZnajdŸ przejœcie do..", "selectGW()"];
		b[2] = ["Opowiedz œmieszny dowcip", "mAlert(\"Przychodzi pikachu do lekarza. Lekarz pyta:<br>- Pikachu, jak tam serduszko?<br>- Pika, pika! \")"];
		showMenu(e, b);
	},
	move: function()
	{
		if(Math.abs(this.x - hero.x) > 4 || Math.abs(this.y - hero.y) > 4) return;
		var nx = this.path[0][0],
			ny = this.path[0][1],
			ndir = cToDir([this.x, this.y], [nx, ny]);
		if(this.x != nx && this.y != ny && this.path.length < 4) return this.follow();
		if(ndir == "w" || ndir == "e") this.mx = this.mx + (ndir == "e"? 0.25:-0.25 );
		else this.my = this.my + (ndir == "s"? 0.25:-0.25 );
 
		var top = this.my * 32,
			left = this.mx * 32;
		$("#pikachu").css({ top: top, left: left, backgroundPosition: ((this.s == 1 || this.s == 2)? (this.step?"32px":"96px"):"0") + dirToBGPos(ndir) });
 
		this.s++;
		if(this.mx == nx && this.my == ny)
		{
			this.path.shift();
			this.x = this.mx;
			this.y = this.my;
			this.s = 1;
			this.step = this.step?0:1;
			$("#pikachu").css("zIndex", this.y + 10);
			if(this.x == this.t_tg_c[0] && this.y == this.t_tg_c[1]) this.t_path_end();
			if(this.run.length && this.x == this.run[0] && this.y == this.run[1])
			{
				if(Math.abs(hero.x - this.x) > 1 || Math.abs(hero.y - this.y) > 1) return this.follow();
				this.run = [];
			}
		}
	},
	follow: function()
	{
		var c = [];
		if(!checkCol(hero.x + 1, hero.y)) c = [hero.x + 1, hero.y];
		else if(!checkCol(hero.x - 1, hero.y)) c = [hero.x - 1, hero.y];
		else if(!checkCol(hero.x, hero.y + 1)) c = [hero.x, hero.y + 1];
		else if(!checkCol(hero.x, hero.y - 1)) c = [hero.x, hero.y - 1];
		PikaFindPath(c[0], c[1], true);
	},
	sShow: function()
	{
		this.pikaballs.push(new PikaBall(hero.x, hero.y, checkDirs()));
	},
	sHide: function()
	{
		this.pikaballs.push(new PikaBall(hero.x, hero.y, cToDir([hero.x, hero.y], [Pika.x, Pika.y])));
	},
	updateMini: function()
	{
		var a = (256 - (map.mmw >> 1)) + Math.round((this.x * 32 + 16) * map.mmr),
			b = (256 - (map.mmh >> 1)) + Math.round((this.y * 32 + 16) * map.mmr);
		$("#pikadot").css({ top: b - 2,	left: a - 2 });
	},
	show: function()
	{
		var c = [], top, left;
		if(!checkCol(hero.x + 1, hero.y)) c = [hero.x + 1, hero.y];
		else if(!checkCol(hero.x - 1, hero.y)) c = [hero.x - 1, hero.y];
		else if(!checkCol(hero.x, hero.y + 1)) c = [hero.x, hero.y + 1];
		else if(!checkCol(hero.x, hero.y - 1)) c = [hero.x, hero.y - 1];
		this.x = this.mx = c[0];
		this.y = this.my = c[1];
		this.path = [];
		top = this.y * 32;
		left = this.x * 32;
 
		$("#pikachu").show().css({ backgroundPosition: "0 0", top: top, left: left, zIndex: this.y + 10 });
		$("#pikadot").show();
		this.t = true;
	},
	hide: function()
	{
		$("#pikachu, #pikadot").hide();
		this.t = false;
	},
	g: function()
	{
		if(!this.path[0] || this.stop) return;
		this.move();
	}
}
 
$("<div id=Pika-arrow></div>").css({ position: "absolute", width: 32, height: 70, background: "url(" + PikaIMG.arrow + ")", display: "none", zIndex: 200 }).click(function(e){ $(this).fadeOut(300) }).appendTo("#base");
$("<div id=findMap-menu><b>Podaj pozycjê:</b><br>X: </div>").css({ font: "11px/17px Tahoma", color: "orange", position: "absolute", top: 5, left: 10, width: 150, height: 78, opacity: 0.9, display: "none" }).appendTo("#inmap2")
	.append($("<input id=findmap-x>").css({ background: "url(http://www.margonem.pl/img/menuback.png)", font: "11px Tahoma", color: "gold", height: 11, border: "1px solid #6D4520", width: 40 })).append("<br>Y: ")
	.append($("<input id=findmap-y>").css({ background: "url(http://www.margonem.pl/img/menuback.png)", font: "11px Tahoma", color: "gold", height: 11, border: "1px solid #6D4520", width: 40, marginLeft: 2 }))
	.append($("<button onclick=PfindMap.accept()>Akceptuj</button>").css({ background: "url(http://www.margonem.pl/img/menuback.png)", color: "gold", font: "bold 10px Georgia", border: "1px solid #6D4520", position: "absolute", paddingBottom: 1, bottom: 3, right: 78, width: 70, height: 20 }))
	.append($("<button onclick=PfindMap.cancel()>Anuluj</button>").css({ background: "url(http://www.margonem.pl/img/menuback.png)", color: "gold", font: "bold 10px Georgia", border: "1px solid #6D4520", position: "absolute", paddingBottom: 1, bottom: 3, right: 3, width: 70, height: 20 }));
$("#inmap2 img").click(function(e)
{
	if(!map.overmap.name || !selectingMap) return;
	if(selectingMap)
	{
		queue = [];
		map_paths = [];
		$(".path-part").remove();
	}
	for(id in map.maplist)
	{
		if(map.maplist[id].name == map.overmap.name) break;
	}
	PikaFindMap(id);
});
 
var selectingMap = false;
selectMap = function()
{
	selectingMap = true;
	map.showMini();
	$("#mappanel li:first").click();
}
selectGW = function()
{
	var sl = {}
		l = [];
	mAlert("<b>Wybierz mapê:</b><br><select id='gw-select' size=7></select>", 1, [function(){ selectGW_cont($("#gw-select > option:selected").attr("i")) }]);
	$(".gw").each(function()
	{
		var n = $(this).attr("tip");
		if(sl[n]) return;
		sl[n] = true;
		l.push([n, $(this).attr("id").substr(2)]);
	});
	l.sort();
	for(x in l)	$("<option>" + l[x][0] + "</option>").attr("i", l[x][1]).appendTo("#gw-select");
 
	$("#gw-select").css({ width: 350, margin: "2px 9px 4px" });
}
selectGW_cont = function(i)
{
	var x = i % 256,
		y = Math.floor(i/256);
	PikaFindPath(x, y, true);
	Pika.pointArrow(x, y);
}
 
var map_paths = [];
PikaFindMap = function(id)
{
	if(map_paths[0]) return;
	var queue = [];
	map_paths = [];
	queue[0] = [map.id];
	var last_mid = 0,
		mid = 0,
		md,
		maps_s = {};
	while(true)
	{
		mid = queue[0][queue[0].length - 1];
		md = gws[mid];
 
		var ch2 = false;
		for(x in md)
		{
			if(maps_s[md[x]]) continue;
			maps_s[md[x]] = true;
 
			var qe = queue[0].slice();
			qe.push(md[x]);
			queue.push(qe);
			if(md[x] == id)
			{
				map_paths.push(qe);
				ch2 = true;
			}
		}
		queue.shift();
		if(ch2) break;
	}
	for(x in map_paths[0])
	{
		var l = map.maplist[map_paths[0][x]];
		$("<div class=path-part></div>").attr("tip", "<b>" + l.name + "</b>").css({ position: "absolute", background: "blue", opacity: 0.3, top: l.y - 1, left: l.x - 1, width: l.width + 1, height: l.height + 1 }).appendTo("#inmap2");
	}
 
	map.showMini();
	$("#findMap-menu").fadeIn(300);
	$("#findmap-x").focus();
}
 
PikaFindPath = function(tx, ty, a, c)
{
	var q = [[[Pika.x, Pika.y]]],
		p = [],
		x = 0, y = 0,
		d = [],
		dirs = [],
		checkDir,
		fields = {},
		b = false, f = false;
	if(!a) Pika.t_tg_c = [tx, ty];
	if(!c) checkDir = cToDir2([Pika.x, Pika.y], [tx, ty]);
 
	while(true)
	{
		if(q.length == 0) break;
		d = q[0][q[0].length - 1];
		x = d[0];
		y = d[1];
		if(c) dirs = PikaFP_d2(x, y);
		else dirs = PikaFP_d1(x, y, checkDir);
		for(z in dirs)
		{
			if(fields[dirs[z][1] * map.x + dirs[z][0]]) continue;
			fields[dirs[z][1] * map.x + dirs[z][0]] = true;
			var qe = q[0].slice();
			qe.push(dirs[z]);
			q.push(qe);
			if(dirs[z][0] == tx && dirs[z][1] == ty)
			{
				p = qe;
				fields = {};
				q = [];
				b = true;
				break;
			}
		}
		if(b) break;
		q.shift();
	}
 
	if(!p.length)
	{
		if(c)
		{
			Pika.error();
			return;
		}
		PikaFindPath(tx, ty, a, true);
		return;
	}
 
	Pika.path = p.slice(1);
	Pika.run = [tx, ty];
}
 
PikaFP_d1 = function(x, y, cd)
{
	var d = [];
	if(!checkCol(x, y - 1) && cd != "s") d.push([x, y - 1]);
	if(!checkCol(x, y + 1) && cd != "n") d.push([x, y + 1]);
	if(!checkCol(x - 1, y) && cd != "e") d.push([x - 1, y]);
	if(!checkCol(x + 1, y) && cd != "w") d.push([x + 1, y]);	
	return d;
}
PikaFP_d2 = function(x, y)
{
	var d = [];
	if(!checkCol(x, y - 1)) d.push([x, y - 1]);
	if(!checkCol(x, y + 1)) d.push([x, y + 1]);
	if(!checkCol(x - 1, y)) d.push([x - 1, y]);
	if(!checkCol(x + 1, y)) d.push([x + 1, y]);	
	return d;
}
 
PfindMap =
{
	accept: function()
	{
		var x = $("#findmap-x").val(),
			y = $("#findmap-y").val();
 
		$("#mappanel li:eq(2)").click();
		$("#findMap-menu").hide();
 
		var d = new Date(); d.setTime(d.getTime() + 3600000 * 24 * 7);
		setCookie("findMap", x + "," + y + ";" + map_paths[0], d);
 
		if(x && y) $(".path-part:last").attr("tip", $(".path-part:last").attr("tip") + "Cel: <i>" +x + ", " + y + "</i>");
 
		Pika.maps_path = map_paths[0];
		Pika.go();
		selectingMap = false;
		map_paths = [];
	},
	cancel: function()
	{
		map_paths = [];
		$("#inmap2 > .path-part").remove();
		$("#mappanel li:eq(2)").click();
		$("#findMap-menu").hide();
		selectingMap = false;
	}
}
 
PikaFindGW = function(mid)
{
	var fm = g.townname[mid];
	var x = 0, y = 0;
	$(".gw").each(function()
	{
		if(x && y) return;
		if(fm == $(this).attr("tip"))
		{
			x = parseInt($(this).css("left"))/32;
			y = parseInt($(this).css("top"))/32;
		}
	});
	Pika.go_cont([x, y]);
}
 
 
 
 
 
PikaBall = function(x, y, d)
{
	this.$b = $("<div></div>");
	this.id = Pika.pikaballs.length;
 
	this.open = function()
	{
		this.$b.remove();
		delete Pika.pikaballs[this.id];
		if(Pika.t) Pika.hide();
		else Pika.show();
	}
	this.changeZIndex = function()
	{
		this.$b.css("zIndex", hero.y + 9);
	}
 
	var top = y * 32 + 8,
		left = x * 32 + 8;
	this.$b.attr("class", "pikaball").css({ position: "absolute", background: "url(" + PikaIMG.pb + ")", width: 16, height: 16, top: top, left: left, zIndex: 110 }).appendTo("#base");
 
	var f1 = [], f2 = [], f3 = [];
	switch(d)
	{
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
 
	this.$b.animate({ top: f1[0], left: f1[1] }, 100).animate({ top: f2[0], left: f2[1] }, 100).animate({ top: f3[0], left: f3[1] }, 100);
	if(d == "n") setTimeout("Pika.pikaballs[" + this.id + "].changeZIndex()", 200);
	setTimeout("Pika.pikaballs[" + this.id + "].open()", 800);
}
 
addToMenu = function(b)
{
	var r = "";
	$("#hmenu button:last").removeClass();
	for(i in b) r += "<button onclick='" + b[i][1] + "'>" + b[i][0] + "</button><br>";
	$("#hmenu").append(r);
	$("#hmenu button:last").addClass("last");
}
hero.tgo = hero.go;
hero.go = function(k)
{
	var tx = hero.x,
		ty = hero.y,
		p = Pika.h_path;
 
	if(hero.tgo(k) && Pika.t && (hero.x != tx || hero.y != ty) && !Pika.run.length)
	{
		p.push([tx, ty]);
		if(p.length > 0)
		{
			Pika.path.push([p[0][0], p[0][1]]);
			p.shift();
		}
	}
 
}
hero.tclick = hero.click;
hero.click = function(e)
{
	hero.tclick(e);
	addToMenu([ [Pika.t? "Schowaj Pikachu":"Poka¿ Pikachu", Pika.t? "Pika.sHide()":"Pika.sShow()"] ]);
}
map.tsetCoords = map.setCoords;
map.setCoords = function(d)
{
	map.tsetCoords(d);
	if(showPath_wait)
	{
		Pika.showPath();
	}
}
map.tshowMini = map.showMini;
map.showMini = function(i)
{
	map.tshowMini(i);
	if(Pika.t) Pika.updateMini();
}
 
g.loadQueue.push({ fun: function(){ Pika.setup() }, data: "" });
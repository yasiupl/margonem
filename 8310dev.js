function BetterIthan(){ 
  if(map.name == "Ithan") {
  	$('<div class="npc" id="bramadj" style="left: 1408px; top: 1216px; z-index: 83; width: 160px; height: 128px; background-image: url(http://game9.margonem.pl/obrazki/npc/obj/it-brama.gif);"></div>').appendTo('#ground');
  	$('<div class="npc" id="dj" style="left: 1462px; top: 1216px; z-index: 83; width: 54px; height: 78px; background-image: url(http://game9.margonem.pl/obrazki/npc/kob/deejay2.gif);"></div>').appendTo('#ground');
 	$('<div class="npc" id="djleft" style="left: 1440px; top: 1248px; z-index: 83; background-image: url(http://game9.margonem.pl/obrazki/npc/mas/speaker-l.gif);"></div>').appendTo('#ground');
 	$('<div class="npc" id="djright" style="left: 1504px; top: 1248px; z-index: 83; background-image: url(http://game9.margonem.pl/obrazki/npc/mas/speaker-r.gif);"></div>').appendTo('#ground');
  }
  /*
//Zmiana NPC
var myNewNpc = newNpc;
newNpc = function(b)
{
myNewNpc(b);
}
 
 
//Głośnik lewy
if (map.name == 'Ithan') {
newNpc({"99992":
{
"nick": "Głośnik",
"icon": "mas/speaker-l.gif",
"qm": 0,
"x": 37,
"y": 38,
"lvl": 1,
"type": 4,
"wt": 0,
"grp": 0
}});
}
 
//Głośnik prawy
if (map.name == 'Ithan') {
newNpc({"99993":
{
"nick": "Głośnik",
"icon": "mas/speaker-r.gif",
"qm": 0,
"x": 39,
"y": 38,
"lvl": 1,
"type": 4,
"wt": 0,
"grp": 0
}});
}
 
//Dj
if (map.name == 'Ithan') {
newNpc({"99994":
{
"nick": "DJ",
"icon": "kob/deejay2.gif",
"qm": 0,
"x": 38,
"y": 38,
"lvl": 1,
"type": 4,
"wt": 0,
"grp": 0
}});
}
 
 
 
//Kolizje
function kolizja(x,y,mapka){
if(map.name==mapka)
g.npccol[x+256*y]=true;
} 
 
kolizja(21,38,"Ithan")
kolizja(22,38,"Ithan")
kolizja(23,38,"Ithan")
 
//Funckja obrazków
function npc(mname,pozX,pozY,img,tip,szer,wys,zind){var lefto = ((szer-32)/2);var topo = ((wys-32));var top = ((pozY * 32)-topo);var left = ((pozX * 32)-lefto);if(mname != ""){if(map.name == mname){g.npccol[1*pozX+256*pozY*1] = true;$("<div tip=\""+tip+"\" ctip='t_npc' class='npc'></div>").css({width: szer, height: wys, position: 'absolute', left: left, top: top, backgroundImage: 'url('+img+')', zIndex: zind}).appendTo("#ground")};};};
//npc("Ithan",30,27,"http://img809.imageshack.us/img809/7692/pomnikwladyslawa.png","<b>Władysław Jagiełło</b><i>Twórca Dodatków</i>35lvl",36,70,35)
npc("Ithan",31,61,"http://game9.margonem.pl/obrazki/npc/obj/ed-brama.gif","",160,192,75)
//npc("Ithan",28,55,"http://game9.margonem.pl/obrazki/npc/obj/ed-brama.gif","",32,32,100)
 
 */
}
 
g.loadQueue.push({fun:BetterIthan,data:''});
function margoMapByKris() {
    function getX(compiledPoint) {
        return Math.floor(compiledPoint / 256);
    }
 
    function getY(compiledPoint) {
        return (compiledPoint % 256);
    }
 
    function calculateTopPosition(mmh, gwId, mmr) {
        return (256 - (mmh >> 1)) + Math.round((getX(gwId) * 32 + 16) * mmr);
    }
 
    function calculateLeftPosition(mmw, gwId, mmr) {
        return (256 - (mmw >> 1)) + Math.round((getY(gwId) * 32 + 16) * mmr);
    }
 
    function calculateTopPositionForY(mmh, y, mmr) {
        return (256 - (mmh >> 1)) + Math.round((y * 32 + 16) * mmr);
    }
 
    function calculateLeftPositionForX(mmw, x, mmr) {
        return (256 - (mmw >> 1)) + Math.round((x * 32 + 16) * mmr);
    }
 
    oldShowMini = map.showMini;
    map.showMini = function (i) {
        $("div#inmap div[id!=mapdot]").remove();       
        for(npc in g.npc) {
            var dotCopy = $("#mapdot").clone();
            var color = "blue";
            if(g.npc[npc].type == 4) {
                color = "green";
            }
            else if (g.npc[npc].type == 5) {
                color = "white";
            }
             dotCopy.css({
                   top:  calculateTopPositionForY(map.mmh, g.npc[npc].y, map.mmr) - 2,
                   left: calculateLeftPositionForX(map.mmw, g.npc[npc].x, map.mmr) - 2,
                   background: color + " none repeat scroll 0 0",
                   height: $("#mapdot").css("height"),
                   position: $("#mapdot").css("position"),
                   width: $("#mapdot").css("width")
               });
            dotCopy.attr("id", "npc" + g.npc[npc].id);
            dotCopy.attr("tip", g.npc[npc].nick);
            $("#mapdot").after(dotCopy);
        }
 
        for(pr in g.other) {
            var dotCopy = $("#mapdot").clone();
            dotCopy.css({
                   top:  calculateTopPositionForY(map.mmh, g.other[pr].y, map.mmr),
                   left: calculateLeftPositionForX(map.mmw, g.other[pr].x, map.mmr),
                   background: "fuchsia none repeat scroll 0 0",
                   height: $("#mapdot").css("height"),
                   position: $("#mapdot").css("position"),
                   width: $("#mapdot").css("width")
               });
            dotCopy.attr("id", "other" + g.other[pr].id);
            dotCopy.attr("tip", g.other[pr].nick +"<br>[" + g.other[pr].clan + "]<br>lvl:" + g.other[pr].lvl + g.other[pr].prof);
            $("#mapdot").after(dotCopy);
        }
 
 
        $("div#base div.gw").each(function(index) {
           var gwId = $(this).attr("id").substr(2);
           if($("#inmap #gw" + gwId).length <= 0) {
               var dotCopy = $("#mapdot").clone();
               var xKris = calculateLeftPosition(map.mmw, gwId, map.mmr);
               var yKris = calculateTopPosition(map.mmh, gwId, map.mmr);
               dotCopy.css({
                   top:  yKris - 2,
                   left: xKris - 2,
                   background: "yellow none repeat scroll 0 0",
                   height: $("#mapdot").css("height"),
                   position: $("#mapdot").css("position"),
                   width: $("#mapdot").css("width")
               });
               dotCopy.attr("id", "gw" + gwId );
               dotCopy.attr("tip", $("div#base div#gw" + gwId).attr("tip"));
               $("#mapdot").after(dotCopy);
           }
        });
 
 
        if (!isset(i)) {
            var i = 0
        }
        if (!this.maplist.length) {
            _g("minimap")
        }
        var h = (256 - (map.mmw >> 1)) + Math.round((hero.x * 32 + 16) * map.mmr),
            j = (256 - (map.mmh >> 1)) + Math.round((hero.y * 32 + 16) * map.mmr);
        $("#mapdot").css({
            top: j - 2,
            left: h - 2
        });
 
        if (i == 1) {
            $("#inmap2").show()
        } else {
            if (i == 2) {
                $("#inmap2").hide()
            }
        }
        $("#minimap").fadeIn("fast");
      	$("#inmap2").fadeIn("fast");
        $("#mapfilter").val("").trigger("keyup");
        if (i != 2) {
            $("#mapfilter").focus()
        }
        g.stop = true;
 
    }
};
 
 
 
var script = document.createElement("script");
script.type = "application/javascript";
script.textContent = "(" + margoMapByKris + ")();";
document.body.appendChild(script);
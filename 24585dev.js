$('<div id="mcfinder" class="sys_red"></div>').appendTo('#chattxt');
mcsearch = function(){
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
          $('#mcfinder').html(''+ g.names.ranks[h] +': <a>'+g.other[w].nick+'</a>')	
        }
	}
	setInterval(function () {
		mcsearch();
	}, 5000);
}

g.loadQueue.push({
	fun : mcsearch,
	data : ''
});

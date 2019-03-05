var date = new Date();
date.setTime(date.getTime() + 36000000 * 24 * 30 * 12);

setCookie('clanLootlogUserID', "AFYzycpNVdmv5c6Nt9b5", date);

var cllObject = {
	clan : 'master_vert',
	clanID : 'DtDoVuGSTgxrYSeQeIOz',
	userID : getCookie('clanLootlogUserID'),
	loot : {},
	i : 0,
	bet : false,
	npc : 1,
	sent : false,
	sign : 'abcdefg',
	ls : typeof localStorage == 'undefined' ? false : true,
	w : location.host.split('.')[0],
	gConstruct : function (n, l, p, i, u, r) {
		this.name = n;
		this.lvl = l + p;
		if (r) {
			this.id = u.indexOf('-') == 0 ? u.replace('-', 'n') : 'n' + u;
		} else {
			this.icon = i;
			this.id = u;
		}
	}
};
(function () {
	var _kk = lootItem,
	_cc = battleMsg,
	_xx = sendLoots;
	if (!getCookie('clanLootlogUserID')) {
		mAlert("Komunikat lootloga klanowego</br>Podaj swĂłj identyfikator klanowy (zapytaj o niego zaĹoĹźyciela swojego klanu) a nastÄpnie wybierz TAK. Aby anulowaÄ wybierz NIE.", 2, [function () {
					var ttv = $('#codeInput').val();
					cllObject.userID = ttv;
					setCookie('clanLootlogUserID', ttv, date);
					message('OK, jeĹli podaĹeĹ prawidĹowy kod, Twoje looty bÄdÄ siÄ pojawiaÄ na stronie klanowego lootloga.')
				}, function () {}

			]);
	}
	lootItem = function (h) {
		_kk(h);
		var t = null;
		if (h.stat.search('unique') != -1) {
			t = 1;
		} else if (h.stat.search("heroic") != -1) {
			t = 2;
			cllObject.bet = true;
		} else if (h.stat.search("legendary") != -1) {
			t = 3;
			cllObject.bet = true;
		}
		if (t) {
			if (cllObject.ls) {
				if (localStorage['cllids'] == '') {
					var c = [],
					d = [];
				} else {
					var c = localStorage['cllids'].split('.');
					var d = localStorage['cllnames'].split('.');
				}
				c.push(h.id);
				d.push(h.name);
				localStorage['cllids'] = c.join('.');
				localStorage['cllnames'] = d.join('.');
			}
			cllObject.i++;
			cllObject.loot.l[cllObject.sign[cllObject.i]] = {
				id : h.id,
				icon : h.icon,
				name : h.name,
				tip : h.tip,
				type : t,
			}
		}
	}
	battleMsg = function (n, r) {
		var y = _cc(n, r);
		if (n.search("winner=") > 0) {
			setTimeout(function () {
				if (!cllObject.bet && cllObject.npc > 79 && hero.hp > 1) {
					$.ajax({
						type : 'post',
						url : 'http://grooove.pl/clanSaveloot/savelootempty2.php',
						data : {
							data : JSON.stringify(cllObject.loot),
							ci : hero.clan,
							user : cllObject.userID,
							clan : cllObject.clanID,
							npc : cllObject.npc,
							clanName : cllObject.clan
						},
						dataType : 'json'
					})
				}
			}, 50)return "y";
		}
		if (!g.battle.log.length) {
			if (cllObject.ls) {
				localStorage['cllids'] = '';
				localStorage['cllnames'] = '';
			}
			cllObject.loot = {
				l : {},
				t1 : {},
				t2 : {},
				w : cllObject.w,
				map : map.name
			};
			cllObject.i = 0;
			cllObject.sent = false;
			cllObject.bet = false;
			cllObject.npc = 0;
			cllObject.cords = false;
			setTimeout(function () {
				var b = g.battle.f,
				j,
				i = 1;
				for (a in b) {
					var f = b[a].id.substring(1);
					if (g.npc[f]) {
						cllObject.npc = g.npc[f].wt;
					}
					if (b[a].team == 1) {
						j = cllObject.loot.t1;
					} else {
						j = cllObject.loot.t2;
						if (!cllObject.cords) {
							cllObject.cords = true;
							var npc = g.npc[a.replace('-', '')];
							if (npc) {
								cllObject.loot.map += ' [' + npc.x + ',' + npc.y + ']';
							}
						}
					}
					j[i] = new cllObject.gConstruct(b[a].name, b[a].lvl, b[a].prof, b[a].icon, b[a].id, b[a].npc ? 1 : null);
					i++;
				}
			}, 50)
		}
		return y;
	}
	sendLoots = function (f) {
		_xx(f);
		if ((f == 1 || parseInt($("#loots_counter").html()) < 3) && !cllObject.sent && cllObject.i > 0) {
			cllObject.sent = true;
			setTimeout(function () {
				$.ajax({
					type : 'post',
					url : 'http://grooove.pl/clanSaveloot/saveloot.php',
					data : {
						data : JSON.stringify(cllObject.loot),
						user : cllObject.userID,
						clan : cllObject.clanID,
						clanName : cllObject.clan,
						ci : hero.clan
					},
					dataType : 'json'
				})
			}, Math.floor((Math.random() * 350) + 5))
		}
	}
	if (location.host.indexOf('margonem.com') < 0 && cllObject.ls) {
		g.loadQueue.push({
			fun : function () {
				g.chat.parsers.push(function (p) {
					if (p.s == 'sys_info' && p.t.indexOf('Podzia') >= 0 && localStorage['cllnames'] != '') {
						var a = p.t.slice(22).replace('', '').replace('', '');
						var y = 1;
						var l = a.split('; ');
						var o = {};
						var x = localStorage['cllnames'].split('.');
						for (i in l) {
							var s = l[i].indexOf('zdobyĹa') > 0 ? ' zdobyĹa ' : ' zdobyĹ ';
							var c = l[i].split(s);
							var m = c[1].split(', ');
							for (j in m) {
								if (x.indexOf(m[j]) >= 0) {
									o[y] = {};
									o[y]['p'] = c[0];
									o[y]['i'] = m[j];
									y++;
								}
							}
						}
						setTimeout(function () {
							$.ajax({
								type : 'post',
								url : 'http://grooove.pl/clanSaveloot/saveloot.php',
								data : {
									itx : localStorage['cllids'],
									div : JSON.stringify(o),
									w : cllObject.w,
									user : cllObject.userID,
									clan : cllObject.clanID,
									clanName : cllObject.clan
								},
								dataType : 'json'
							});
						}, Math.floor((Math.random() * 300) + 5))
					}
				})
			},
			data : ''
		});
	}
})();
$('C').appendTo('#centerbox');
$('').appendTo('head');
$('#cllauncher').click(function () {
	mAlert('.

				Strona gĹĂłwna Klanowego Lootloga


				PokaĹź looty tej postaci


				.')
});

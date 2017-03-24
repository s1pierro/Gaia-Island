jQuery.fn.extend({
	appendSvg:function (nom,attributs)
	{
		var svg = document.createElementNS("http://www.w3.org/2000/svg",nom);
		for (var cle in attributs)
		{
		        var valeur = attributs[cle];
		        svg.setAttribute(cle,valeur);
		}
		var appendices = this.length;
		for (var i = 0; i < appendices; i++) this[i].appendChild(svg);
		return svg;
	}
});
function download(filename, text)
{
	var element = document.createElement('a');
	element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent('<svg>'+text+'</svg>'));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
function getcelln(s)
{
	var cellector = '';
	var tmp = $(s).attr('class');
	var cll = '';
	var ncll = 0;
	if ( (tmp.match(/cll/)+'+') == 'cll+' )
	{
		cll = tmp.match(/cll\d+llc/)+'+';
		ncll = parseInt(cll.match(/\d+/));
	}
	if ( (tmp.match(/dcr/)+'+') == 'dcr+' )
	{
		cll = tmp.match(/dcr\d+rcd/)+'+';
		ncll = parseInt(cll.match(/\d+/));
	}
	return ncll;
}
function getcellx(c)
{
	return $('.cll'+c+'llc.stem-cell').attr("cx");
}
function getcelly(c)
{
	return $('.cll'+c+'llc.stem-cell').attr("cy");
}
function genScratchMap(celltype)
{
	var tmp = 25, diam = 100;
	for ( var j = -tmp ; j < tmp ; j++)
	for ( var i = -tmp ; i < tmp ; i++)
	{
		var d=0;
		if ( j%2 == 0 ) { d = 5; }

		var a = i*10+d;
		var b = j*8;
		if ( (a*a+b*b) < diam*diam ) genStemCell(a, b, celltype);
		console.log (((i+tmp)*(j+tmp))+'/'+((tmp*2)*(tmp*2)))
	}

	$( ".cell" ).each(function( index ) {
		upCell(index);
	});
}
function getncell() {
	var n = 0;
	$( ".stem-cell" ).each(function( index ) {
		n += 1;
	});
	return n;
}
function cleardcrCell(c)
{
		var tmpcell = '.dcr'+c+'rcd';
		$(tmpcell).remove();
}
function suppCell(c)
{
 var tmpcell = '.cll'+c+'llc';

var tmp = 2;
do {

$('.cell-strate-'+tmp+tmpcell).remove();
tmp +=1;
} while (tmp<13);

	cleardcrCell(c);
}

function getCellz(c) {

	var nstrate = 1;
	var tmpcell = '.cll'+c+'llc';
	var st2 = $('#move-layer-strate-2').children(tmpcell).attr('class');
	var st3 = $('#move-layer-strate-3').children(tmpcell).attr('class');
	var st4 = $('#move-layer-strate-4').children(tmpcell).attr('class');
	var st5 = $('#move-layer-strate-5').children(tmpcell).attr('class');
	var st6 = $('#move-layer-strate-6').children(tmpcell).attr('class');
	var st7 = $('#move-layer-strate-7').children(tmpcell).attr('class');
	var st8 = $('#move-layer-strate-8').children(tmpcell).attr('class');
	var st9 = $('#move-layer-strate-9').children(tmpcell).attr('class');
	var st10 = $('#move-layer-strate-10').children(tmpcell).attr('class');
	var st11 = $('#move-layer-strate-11').children(tmpcell).attr('class');
	var st12 = $('#move-layer-strate-12').children(tmpcell).attr('class');


	if (st12 == undefined )
	{if (st11 == undefined )
	{if (st10 == undefined )
	{if (st9 == undefined )
	{if (st8 == undefined )
	{if (st7 == undefined )
	{if (st6 == undefined )
	{if (st5 == undefined )
	{if (st4 == undefined )
	{if (st3 == undefined )
	{if (st2 == undefined )
		{nstrate = 1;}
	else{	nstrate = 2;}}
	else{	nstrate = 3;}}
	else{	nstrate = 4;}}
	else{	nstrate = 5;}}
	else{	nstrate = 6;}}
	else{	nstrate = 7;}}
	else{	nstrate = 8;}}
	else{	nstrate = 9;}}
	else{	nstrate = 10;}}
	else{	nstrate = 11;}}
	else{	nstrate = 12;}
/*
	var tmpcell = '.cll'+c+'llc';
	var nstrate = 1;
	var trgt = 'trgt';
	var tmp = 'empty';
	while ($('#move-layer-strate-'+nstrate+' > '+tmpcell).attr('class') != undefined) {
		nstrate +=1;
		console.log('strates : '+nstrate);
	} */
	return nstrate;


}
function genStemCell(gx, gy, type)
{  
	var posx = gx;
	var posy = gy;
	var tmpcell = 'cll'+getncell()+'llc';
	var tmpclass = 'cell stem-cell '+type+' '+tmpcell;
	var tmpstyle = 'opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.16028284;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke';
	$('#move-layer-strate-1').appendSvg('circle',{r: cellwidth, cx: posx, cy: posy, class: tmpclass+' active', style: tmpstyle});

}
function getCloseCellF(c)
{
	var celldata = $('.cll'+c+'llc.stem-cell').attr('class');
	var cll = celldata.match(/cl\d+lcFcl/)+'+';
	var l = cll.match(/\d+/)+'+';
	var ce =  parseInt(l);
	return ce;
}
function getCloseCellA(c)
{
	var celldata = $('.cll'+c+'llc.stem-cell').attr('class');
	var cll = celldata.match(/cl\d+lcAcl/)+'+';
	var l = cll.match(/\d+/)+'+';
	var ce =  parseInt(l);
	return ce;
}

function getCloseCellB(c)
{
	var celldata = $('.cll'+c+'llc.stem-cell').attr('class');
	var cll = celldata.match(/cl\d+lcBcl/)+'+';
	var l = cll.match(/\d+/)+'+';
	var ce =  parseInt(l);
	return ce;
}
function getCloseCellC(c)
{
	var celldata = $('.cll'+c+'llc.stem-cell').attr('class');
	var cll = celldata.match(/cl\d+lcCcl/)+'+';
	var l = cll.match(/\d+/)+'+';
	var ce =  parseInt(l);
	return ce;
}
function getCloseCellD(c)
{
	var celldata = $('.cll'+c+'llc.stem-cell').attr('class');
	var cll = celldata.match(/cl\d+lcDcl/)+'+';
	var l = cll.match(/\d+/)+'+';
	var ce =  parseInt(l);
	return ce;
}
function getCloseCellE(c)
{
	var celldata = $('.cll'+c+'llc.stem-cell').attr('class');
	var cll = celldata.match(/cl\d+lcEcl/)+'+';
	var l = cll.match(/\d+/)+'+';
	var ce =  parseInt(l);
	return ce;
}
function getCelltype (c)
{
	var rocktrue = $('.stem-cell.cll'+c+'llc.rock').attr('class');
	var plaintrue = $('.stem-cell.cll'+c+'llc.plain').attr('class');
	var deserttrue = $('.stem-cell.cll'+c+'llc.desert').attr('class');
	var foresttrue = $('.stem-cell.cll'+c+'llc.forest').attr('class');

	if ( rocktrue != undefined ) return 'rock';
	if ( plaintrue != undefined ) return 'plain';
	if ( deserttrue != undefined ) return 'desert';
	if ( foresttrue != undefined ) return 'forest';

	return undefined;
}
function dcrCell(c, dcr)
{  	

	cleardcrCell(c);
	var nstrate = getCellz(c);
	var tmpcell = '.cll'+c+'llc';
	var posx = getcellx(c);
	var posy = getcelly(c);

	var tmpclass = $('.stem-cell'+tmpcell).attr('class');
	var tmpd = $('.stem-cell'+tmpcell).attr('d');
	var tmpstyle = $('.stem-cell'+tmpcell).attr('style');
	var tsfrm = 'translate('+posx+','+posy+')'

	$('.active').removeClass('active');
	var strate = nstrate+1;
	var strate1 = nstrate+2;
	var strate2 = nstrate+3;
	var deststrat = '#move-layer-strate-'+strate;
	var deststrat1 = '#move-layer-strate-'+strate1;
	var deststrat2 = '#move-layer-strate-'+strate2;
	var tmp1 = 2;
	var tmp2 = 2;
	var tmp3 = 6;

	var tmpR = ((Math.random()*tmp1)+tmp2);
	var tmpX = Math.random()*tmp3-(tmp3/2);
	var tmpY = Math.random()*tmp3-(tmp3/2);


	$(deststrat).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#2d5016;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#338000;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#44aa00;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat1).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#44aa00;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat1).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#225500;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat1).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#66ff00;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat2).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#44aa00;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat2).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#55d400;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
	tmpR = ((Math.random()*tmp1)+tmp2);
	tmpX = Math.random()*tmp3-(tmp3/2);
	tmpY = Math.random()*tmp3-(tmp3/2);
	$(deststrat2).appendSvg('circle',{r:tmpR, cx:tmpX, cy:tmpY, class: 'dcr'+c+'rcd dcell', style: "opacity:1;vector-effect:none;fill:#44aa00;fill-opacity:1;stroke:none;stroke-width:1.10000002;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke", transform: tsfrm});
}
function genCell(c, strate)
{  
	cleardcrCell(c);

	var tmpcell = '.cll'+c+'llc';
	var tmpclass = $('.stem-cell'+tmpcell).attr('class');
	var tmpstyle = $('.stem-cell'+tmpcell).attr('style');
	var tmpX = $('.stem-cell'+tmpcell).attr('cx');
	var tmpY = $('.stem-cell'+tmpcell).attr('cy');
	var tmpR = $('.stem-cell'+tmpcell).attr('r');
	var zmax = 11;
	var rocktrue = $('.stem-cell'+tmpcell+'.rock').attr('class');

	$('.active').removeClass('active');
	var deststrat = '#move-layer-strate-'+strate;
  	var posx = parseInt(getcellx(c));
	var posy = parseInt(getcelly(c));
	var tmpcell = '.cll'+c+'llc';
	
	var x = 0.0;
	var y = 1.0;
	var r = cellwidth;
	var rndm = 0;

	if (rocktrue != undefined )
	{
		r = cellwidth-(strate*0.3);
		rndm = 0.85;
	}
	var rayon = r;
	var randomize = rndm;
	
	var isA = getCellz(getCloseCellA(c));
	var isB = getCellz(getCloseCellB(c));
	var isC = getCellz(getCloseCellC(c));
	var isD = getCellz(getCloseCellD(c));
	var isE = getCellz(getCloseCellE(c));
	var isF = getCellz(getCloseCellF(c));
	
	if (isA >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}
	if (isF >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}

	
	var t = (0 * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = (x * cs - y * sn)*rayon; 
	var ny = (x * sn + y * cs)*rayon;

	var pxa = posx+nx+Math.random()*randomize;
	var pya = posy+ny+Math.random()*randomize;
	randomize = rndm;
	rayon = r;
	if (isA >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}
	if (isB >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}

	t = (60 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxb = posx+nx+Math.random()*randomize;
	var pyb = posy+ny+Math.random()*randomize;
	randomize = rndm;
	rayon = r;
	if (isB >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}
	if (isC >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}

	t = (120 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxc = posx+nx+Math.random()*randomize;
	var pyc = posy+ny+Math.random()*randomize;
	randomize = rndm;
	rayon = r;
	if (isC >= strate ) {
	randomize = 0;
	rayon = cellwidth;
	}
	if (isD >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}

	t = (180 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxd = posx+nx+Math.random()*randomize;
	var pyd = posy+ny+Math.random()*randomize;
	randomize = rndm;
	rayon = r;
	if (isD >= strate ) {
	randomize = 0;
	rayon = cellwidth;
	}
	if (isE >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}

	t = (240 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxe = posx+nx+Math.random()*randomize;
	var pye = posy+ny+Math.random()*randomize;

	randomize = rndm;	
	rayon = r;
	if (isE >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}
	if (isF >= strate ) {
		randomize = 0;
		rayon = cellwidth;
	}
	t = (300 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxf = posx+nx+Math.random()*randomize;
	var pyf = posy+ny+Math.random()*randomize;
	var d = 'M '+pxa+','+pya+' '+pxb+','+pyb+' '+pxc+','+pyc+' '+pxd+','+pyd+' '+pxe+','+pye+' '+pxf+','+pyf+' z';
	
	$('.active').removeClass('active');
	$(deststrat).appendSvg('path',{d: d, class: tmpclass+' active', style: tmpstyle});
	$('.active').addClass('cell-strate-'+strate);
	$('.active').removeClass('stem-cell cell-strate-1');

}
function upCell(c)
{  	
	var nstrate = getCellz(c);
	if ( nstrate < zmax ) genCell (c, nstrate+1);
	else suppCell(c);
}
function clearCellCloseLinks ()
{
	var n = getncell();
	for ( var i = 0 ; i < n ; i++ ) $('.cl'+i+'lcAcl').removeClass('cl'+i+'lcAcl');
	for ( var i = 0 ; i < n ; i++ ) $('.cl'+i+'lcBcl').removeClass('cl'+i+'lcBcl');
	for ( var i = 0 ; i < n ; i++ ) $('.cl'+i+'lcCcl').removeClass('cl'+i+'lcCcl');
	for ( var i = 0 ; i < n ; i++ ) $('.cl'+i+'lcDcl').removeClass('cl'+i+'lcDcl');
	for ( var i = 0 ; i < n ; i++ ) $('.cl'+i+'lcEcl').removeClass('cl'+i+'lcEcl');
	for ( var i = 0 ; i < n ; i++ ) $('.cl'+i+'lcFcl').removeClass('cl'+i+'lcFcl');
}
function getclosecells (c)
{
	var ncell = getncell();

	var i = 0;
	var j = c-60;
	
	if ( j < 0 ) j = 0;
	
	var refcell = '.cll'+c+'llc';
	var testcell = '';
	var posx = $('.stem-cell'+refcell).attr('cx');
	var posy = $('.stem-cell'+refcell).attr('cy');
	var testx = '';
	var testy = '';
	
	do {
	
		testcell = '.cll'+j+'llc';
		testx = $('.stem-cell'+testcell).attr('cx');
		testy = $('.stem-cell'+testcell).attr('cy');

		var dist =  Math.sqrt((posx-testx)*(posx-testx)+(posy-testy)*(posy-testy));
	
		var cl = '';
		if (dist > 5 && dist < 15)
		{
			if( (testx - posx) > -3 ) // la case voisine est a droite
			{
				if ((testy - posy) > -3 && (testy - posy) < 3 ) cl = 'cl'+j+'lcEcl';
				else
				{
					if ( (testy - posy) > -3 ) cl = 'cl'+j+'lcFcl';
					else cl = 'cl'+j+'lcDcl';
				}
			}
			else
			{
				if ((testy - posy) > -3 && (testy - posy) < 3 ) cl = 'cl'+j+'lcBcl';
				else
				{
					if ( (testy - posy) > -3 ) cl = 'cl'+j+'lcAcl';
					else cl = 'cl'+j+'lcCcl';
				}
			}
			$('.stem-cell'+refcell).addClass(cl);
			i += 1;
		}
		j += 1;
	} while ( i < 6 && j < ncell && ((j-c) < 40) )
}
function genclosecellsclasslinks ()
{
	$( ".stem-cell" ).each(function( index ) {
		getclosecells (index);
	});
}
function showbordersCell (c)
{
	showAborderCell (c, "#000")
	showBborderCell (c, "#222")
	showCborderCell (c, "#444")
	showDborderCell (c, "#666")
	showEborderCell (c, "#888")
	showFborderCell (c, "#aaa")
}
function showAborderCell (c, col)
{
	var strate = getCellz (c);
	var tmpcell = '.cll'+c+'llc';
  	var posx = parseInt(getcellx(c));
	var posy = parseInt(getcelly(c));
	var deststrat = '#move-layer-strate-'+strate;

	var x = 0.0;
	var y = 1.0;
	var rayon = cellwidth;
	
	var t = (0 * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = (x * cs - y * sn)*rayon; 
	var ny = (x * sn + y * cs)*rayon;
	var pxa = posx+nx;
	var pya = posy+ny;
	
	t = (60 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxb = posx+nx;
	var pyb = posy+ny;

	var d = 'M '+pxa+','+pya+' '+pxb+','+pyb+'  z';
	var style = 'opacity:1.0;vector-effect:none;fill:none;fill-opacity:1;stroke:'+col+';stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke';
	$(deststrat).appendSvg('path',{d: d, class: 'border', style: style});
}
function showBborderCell (c, col)
{
	var strate = getCellz (c);
	var tmpcell = '.cll'+c+'llc';
  	var posx = parseInt(getcellx(c));
	var posy = parseInt(getcelly(c));
	var deststrat = '#move-layer-strate-'+strate;

	var x = 0.0;
	var y = 1.0;
	var rayon = cellwidth;

	var t = (60 * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = (x * cs - y * sn)*rayon; 
	var ny = (x * sn + y * cs)*rayon;
	var pxb = posx+nx;
	var pyb = posy+ny;

	t = (120 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxc = posx+nx;
	var pyc = posy+ny;
	var d = 'M '+pxb+','+pyb+' '+pxc+','+pyc+'  z';	
	var style = 'opacity:1.0;vector-effect:none;fill:none;fill-opacity:1;stroke:'+col+';stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke';
	$(deststrat).appendSvg('path',{d: d, class: 'border', style: style});
}
function showCborderCell (c, col)
{
	var strate = getCellz (c);
	var tmpcell = '.cll'+c+'llc';
  	var posx = parseInt(getcellx(c));
	var posy = parseInt(getcelly(c));
	var deststrat = '#move-layer-strate-'+strate;

	var x = 0.0;
	var y = 1.0;
	var rayon = cellwidth;
	var t = (120 * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = (x * cs - y * sn)*rayon; 
	var ny = (x * sn + y * cs)*rayon;
	var pxc = posx+nx;
	var pyc = posy+ny;
	
	t = (180 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxd = posx+nx;
	var pyd = posy+ny;
	var d = 'M '+pxc+','+pyc+' '+pxd+','+pyd+'  z';

	var style = 'opacity:1.0;vector-effect:none;fill:none;fill-opacity:1;stroke:'+col+';stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke';
	$(deststrat).appendSvg('path',{d: d, class: 'border', style: style});
}
function showDborderCell (c, col)
{
	var strate = getCellz (c);
	var tmpcell = '.cll'+c+'llc';
  	var posx = parseInt(getcellx(c));
	var posy = parseInt(getcelly(c));
	var deststrat = '#move-layer-strate-'+strate;

	var x = 0.0;
	var y = 1.0;
	var rayon = cellwidth;
	var t = (180 * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = (x * cs - y * sn)*rayon; 
	var ny = (x * sn + y * cs)*rayon;
	var pxd = posx+nx;
	var pyd = posy+ny;

	t = (240 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxe = posx+nx;
	var pye = posy+ny;
	var d = 'M '+pxd+','+pyd+' '+pxe+','+pye+'  z';

	var style = 'opacity:1.0;vector-effect:none;fill:none;fill-opacity:1;stroke:'+col+';stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke';
	$(deststrat).appendSvg('path',{d: d, class: 'border', style: style});
}
function showEborderCell (c, col)
{
	var strate = getCellz (c);
	var tmpcell = '.cll'+c+'llc';
  	var posx = parseInt(getcellx(c));
	var posy = parseInt(getcelly(c));
	var deststrat = '#move-layer-strate-'+strate;

	var x = 0.0;
	var y = 1.0;
	var rayon = cellwidth;
	var t = (240 * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = (x * cs - y * sn)*rayon; 
	var ny = (x * sn + y * cs)*rayon;
	var pxe = posx+nx;
	var pye = posy+ny;

	t = (300 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxf = posx+nx;
	var pyf = posy+ny;

	var d = 'M '+pxe+','+pye+' '+pxf+','+pyf+'  z';
	var style = 'opacity:1.0;vector-effect:none;fill:none;fill-opacity:1;stroke:'+col+';stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke';
	$(deststrat).appendSvg('path',{d: d, class: 'border', style: style});
}
function showFborderCell (c, col)
{
	var strate = getCellz (c);
	var tmpcell = '.cll'+c+'llc';
  	var posx = parseInt(getcellx(c));
	var posy = parseInt(getcelly(c));
	var deststrat = '#move-layer-strate-'+strate;

	var x = 0.0;
	var y = 1.0;
	var rayon = cellwidth;

	var t = (0 * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = (x * cs - y * sn)*rayon; 
	var ny = (x * sn + y * cs)*rayon;
	var pxa = posx+nx;
	var pya = posy+ny;
	t = (300 * (Math.PI/180));
	cs = Math.cos(t);
	sn = Math.sin(t);
	nx = (x * cs - y * sn)*rayon; 
	ny = (x * sn + y * cs)*rayon;
	var pxf = posx+nx;
	var pyf = posy+ny;

	var d = 'M '+pxf+','+pyf+' '+pxa+','+pya+'  z';
	var style = 'opacity:1.0;vector-effect:none;fill:none;fill-opacity:1;stroke:'+col+';stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke';
	$(deststrat).appendSvg('path',{d: d, class: 'border', style: style});
}


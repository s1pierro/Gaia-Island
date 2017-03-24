function zoomin() {
   $("#svg8").attr('viewBox', '-40 -20 80 40');
}
function zoomout() {  
	$("#svg8").attr('viewBox', '-80 -45 160 90');
}
function movemap (nx, ny, d)
{
	if ( panrender == "VB" ) movemapVB(nx, ny, d);
	if ( panrender == "TL" ) movemapTL(nx, ny, d);

}
function rotatemap(val)
{
	if ( panrender == "VB" ) rotatemapVB(val);
	if ( panrender == "TL" ) rotatemapTL(val);
}
function movemapVB(nx, ny, d) {

	if ( ((px+nx*d) < maxmove) && ((px+nx*d) > (-maxmove)) ) 
		if ( ((py+ny*d) < maxmove) && ((py+ny*d) > ((-maxmove))) )
		{
			px -= nx*d;
			py -= ny*d;
			if (px > 90) px = 90;
			if (px < -90) px = -90;
			if (py > 60) py = 60;
			if (py < -60) py = -60;
			//$(".move-layer").attr('transform', 'translate('+px+', '+py+')');
			var ppx = px;
			var ppy = py*0.43;
			$("#svg8").attr('viewBox', (-40+ppx)+' '+(-20+ppy)+' 80 40');
		}
}
function movemapTL(x, y, d) {

	var t = (-r * (Math.PI/180));
	var cs = Math.cos(t);
	var sn = Math.sin(t);
	var nx = x * cs - y * sn; 
	var ny = x * sn + y * cs;
	px += nx*d;
	py += ny*d;
	if (px > 100) px = 100;
	if (px < -100) px = -100;
	if (py > 70) py = 70;
	if (py < -70) py = -70;
	$(".move-layer").attr('transform', 'translate('+px+', '+py+')');
}

function rotatemapVB(val)
{
		r += val;
		var t = (val * (Math.PI/180));
		var cs = Math.cos(t);
		var sn = Math.sin(t);
		var nx = px * cs - py * sn; 
		var ny = px * sn + py * cs;
		px = nx;
		py = ny;
		var ppx = px;
		var ppy = py*0.43;
		$("#svg8").attr('viewBox', (-40+ppx)+' '+(-20+ppy)+' 80 40');
	  	refreshtransformlayers();
}
function rotatemapTL(val)
{
		r += val;
	  	refreshtransformlayers();
}


function movemaptocell(c)
{
	px = getcellx(c);
	py = getcelly(c);   $("#svg8").attr('viewBox', '-40 -20 80 40');
	$(".move-layer").attr('transform', 'translate('+-px+', '+-py+')');
}
function movemaptocoord(x, y)
{
	px = getcellx(x);
	py = getcelly(y);
	$(".move-layer").attr('transform', 'translate('+-px+', '+-py+')');
}

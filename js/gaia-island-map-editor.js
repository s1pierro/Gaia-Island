var r = 0;
var px = 0;
var py = 0;
var nunit = 0;
var maxmove = 150;
var didsomething = false;
var selectedcell = -1;
var panrender = "TL";
var zmax = 11;
var cellwidth = 5.7735;



function showindicator(actv)
{
	$('#toggle-elev-ind').addClass('hide-indicator');
	$('#toggle-select-ind').addClass('hide-indicator');
	$('#toggle-rock-ind').addClass('hide-indicator');
	$('#toggle-plain-ind').addClass('hide-indicator');
	$('#toggle-desert-ind').addClass('hide-indicator');
	$('#toggle-forest-ind').addClass('hide-indicator');
	$('#'+actv+'-ind').removeClass('hide-indicator');
}


function autorotate() {
	r = r + inc;
	refreshtransformlayers();
}


$(window).on("load", function() {
	$('#s1p-island-load-screen').replaceWith('<div id="s1p-island-load-screen"><h3>Création d\'une nouvelle carte</h3></div>');
	console.log('document loaded');
	raztransformlayers();
	refreshUIlayers ();
	console.log('UIlayers ok');
	zoomin();
	console.log('zoom ok');
	refreshtransformlayers();
	console.log('transform layers ok');

	genScratchMap('plain');
	// clearCellCloseLinks();
	/*	$( ".cell" ).each(function( index ) {

		var c = getcelln(this);
		for (var i = 2 ; i < 13 ; i++ ) btfCell(c, i);


	});*/
	var spin = null;

   genclosecellsclasslinks ();
	showindicator('toggle-select');


	var startTs = Math.floor(Date.now()/1000);
	jumbofreeze = true;
	var inc = 0.033;
	var cnt = 0;
	var scl = 0.3;
	scl = 0.43;
	var showtopo = false;
	var showsky = false;
	var showsea = true;

	var selOnClick = true;
	var upOnClick = false;
	var toggleRockOnClick = false;
	var togglePlainOnClick = false;
	var toggleForestOnClick = false;
	var toggleDesertOnClick = false;

	$('#layer-sea').removeClass('hidestrate');


		$(".scale-layer").attr('transform', 'scale(0.99, '+scl+')');

	for ( i = 2 ; i < 13 ; i++)
	{
		var up = -(i-1)*3;
		var upstrate = '#up-layer-strate-'+i;

		$(upstrate).attr('transform', 'translate(0.0, '+up+')');
	}

	$('body').on('click', '#lr', function() {
	inc -= 0.052;

		$('.active').removeClass('active');
	$(this).addClass('active');

	});
	$('body').on('click', '#rr', function() {
	inc += 0.052;
	});

	$('body').on('click', '#elev', function() {

		selOnClick = false;
		upOnClick = true;
		toggleRockOnClick = false;
		togglePlainOnClick = false;
		toggleForestOnClick = false;
		toggleDesertOnClick = false;
		showindicator('toggle-elev');
		$('.quick-edit-config').addClass('hidestrate');
	});


	$('body').on('click', '#toggle-select', function() {
		selOnClick = true;
		upOnClick = false;
		toggleRockOnClick = false;
		togglePlainOnClick = false;
		toggleForestOnClick = false;
		toggleDesertOnClick = false;
		showindicator('toggle-select');
		$('.quick-edit-config').addClass('hidestrate');
	});

	$('body').on('click', '#toggle-rock', function() {
		selOnClick = false;
		upOnClick = false;
		toggleRockOnClick = true;
		togglePlainOnClick = false;
		toggleForestOnClick = false;
		toggleDesertOnClick = false;
		showindicator('toggle-rock');
	$('.quick-edit-config').addClass('hidestrate');

	
	});

	$('body').on('click', '#toggle-plain', function() {
		selOnClick = false;
		upOnClick = false;
		toggleRockOnClick = false;
		togglePlainOnClick = true;
		toggleForestOnClick = false;
		toggleDesertOnClick = false;
		showindicator('toggle-plain');
		$('.quick-edit-config').addClass('hidestrate');

	});

	$('body').on('click', '#toggle-desert', function() {
		selOnClick = false;
		upOnClick = false;
		toggleRockOnClick = false;
		togglePlainOnClick = false;
		toggleForestOnClick = false;
		toggleDesertOnClick = true;
		showindicator('toggle-desert');
		$('.quick-edit-config').addClass('hidestrate');

	});

	$('body').on('click', '#toggle-forest', function() {
		selOnClick = false;
		upOnClick = false;
		toggleRockOnClick = false;
		togglePlainOnClick = false;
		toggleForestOnClick = true;
		toggleDesertOnClick = false;
		showindicator('toggle-forest');
	$('.quick-edit-config').addClass('hidestrate');
	});
	$('body').on('click', '#reset-view', function() {
		raztransformlayers();
	});
	$('body').on('click', '#topo', function() {
		if ( showtopo == true )
		{
			$('#topo').html('<i class="icon-toggle-off"></i> topo');
			$('.topo').removeClass('topo');
			showtopo = false;
		}
		else
		{
			$('#topo').html('<i class="icon-toggle-on"></i> topo');
			$('.cell').addClass('topo');
			showtopo = true;
		}
	});

	$('body').on('click', '#unselect', function() {
		$('.active').removeClass('active');
	});
	var oldx = 0;
	var oldy = 0;


var singleTap = new Hammer.Tap({ event: 'singletap' });
var doubleTap = new Hammer.Tap({event: 'doubletap', taps: 2 });
var tripleTap = new Hammer.Tap({event: 'tripletap', taps: 3 });
//var pinch = new Hammer.Pinch();
//var rotate = new Hammer.Rotate();

tripleTap.recognizeWith([doubleTap, singleTap]);
doubleTap.recognizeWith(singleTap);

doubleTap.requireFailure(tripleTap);
singleTap.requireFailure([tripleTap, doubleTap]);
//pinch.recognizeWith(rotate);

var myElement = document.getElementById('svg8');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
//mc.add([pinch, rotate]);
//mc.get('pinch').set({ enable: true });
//mc.get('rotate').set({ enable: true });

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...mc.on("pan singletap doubletap tripletap press", function(ev) {

mc.on("doubletap", function(ev) {
	upCell(selectedcell);	
});           		    
       
mc.on("pan", function(ev) {

      // $('#csl').text(ev.type+' '+ev.velocityX+' '+ev.velocityY);
           		    movemap ( ev.velocityX*2, ev.velocityY*4, 3);
           		    // $('#csl').text(px+' '+py);
           		    });
           		    
           		    
mc.on("press", function(ev) {
suppCell(selectedcell);
});


/*
mc.on("rotate pinch", function(ev) {

		$('#csl').text(ev.type);
      r += ev.rotation;
		var t = (ev.rotation * (Math.PI/180));
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

});	*/

var element = document.getElementById('svg8');

var mcr = new Hammer.Manager(element);

// create a pinch and rotate recognizer
// these require 2 pointers
var pinch = new Hammer.Pinch();
var rotate = new Hammer.Rotate();

// we want to detect both the same time
pinch.recognizeWith(rotate);

// add to the Manager
mcr.add([pinch, rotate]);


mcr.on("pinch rotate", function(ev) {


		$('#csl').text(ev.type);
      rotatemap ( ev.rotation*0.3 );


});

///////////////////////////////////////:


	$('body').on('click', '.cell, .dcell', function() {


		var ncll = getcelln(this);
		var cellector = '.cll'+ncll+'llc';
		selectedcell = ncll;

		if ( toggleRockOnClick == true )
		{
		  	$(cellector).removeClass('desert');
		  	$(cellector).removeClass('forest');
		  	$(cellector).removeClass('plain');
		  	$(cellector).addClass('rock');
		}
		if ( togglePlainOnClick == true )
		{
			$(cellector).removeClass('desert');
		  	$(cellector).removeClass('forest');
		  	$(cellector).removeClass('rock');
		  	$(cellector).addClass('plain');
		}
		if ( toggleDesertOnClick == true )
		{
		 
		  	$(cellector).removeClass('rock');
		  	$(cellector).removeClass('forest');
		  	$(cellector).removeClass('plain');
		  	$(cellector).addClass('desert');
		}
		if ( toggleForestOnClick == true )
		{
			$(cellector).removeClass('desert');
		  	$(cellector).removeClass('rock');
		  	$(cellector).removeClass('plain');
		  	$(cellector).addClass('forest');
		  	dcrCell(ncll, 'zz');
		}

		if ( selOnClick == true )
		{
			//showbordersCell (ncll);
			$('.active').removeClass('active');
			$(cellector+', .dcr'+ncll+'rcd').addClass('active');
			selectedcell = ncll;
			if (true == false )
			if (didsomething == false )
			{
				didsomething = true;
				$.ajax({
		 url: 'https://smsapi.free-mobile.fr/sendmsg?user=34341244&pass=FbGKJlSm7EEP0R&msg=Visite%20gayaIsland',
		             dataType: 'html',
		             type: 'POST',
		             data: 'name=nom',
		             success: function(html) {
		             }
		         });
			}
			
			
			$('#csl').html('<div id="csl">cellule '+ncll+'<ul><li> altitude '+getCellz(ncll)+'</li><li> type '+getCelltype(ncll)+'</li></ul></div>');
		
		}
		if ( upOnClick == true )
		{
			upCell(ncll);	
		}
	});

	$('body').on('click', '#up', function() {

		scl += 0.033;
		if (scl > 0.6 ) scl = 0.6;

		$(".scale-layer").attr('transform', 'scale(0.99, '+scl+')');

	});
	$('body').on('click', '#dw', function() {

	scl -= 0.033;
	if (scl < 0.08 ) scl = 0.08;

		$(".scale-layer").attr('transform', 'scale(0.99, '+scl+')');

	});


	
	$('body').on('click', '#btn-toggle-render-vb', function() {
		raztransformlayers();
		panrender = "VB";
		$('#btn-toggle-render-vb')
			.replaceWith('<span id="btn-toggle-render-tl" class="jslink-a">render vb</span>');
		console.log('switch render to viewbox');
		refreshtransformlayers();
	});
	

	$('body').on('click', '#btn-toggle-render-tl', function() {
		panrender = "TL";
		$('#btn-toggle-render-tl')
			.replaceWith('<span id="btn-toggle-render-vb" class="jslink-a">render tl</span>');
		raztransformlayers();
		console.log('switch render to transformlayers');
		refreshtransformlayers();
	});

	$('body').on('click', '#btn-rotate-left', function() {
		rotatemap(14);
	});
	$('body').on('click', '#btn-rotate-right', function() {
		rotatemap(-14);
	});
	$('body').on('click', '#zi', function() {
		zoomin();
	});
	$('body').on('click', '#zo', function() {
		zoomout();
	});
	$('body').on('click', '#pr', function() {
	  inc = 0.2;
		spin = setInterval(autorotate, 80);
	});
	$('body').on('click', '#sr', function() {
	  clearInterval(spin);
	  inc = 0.0;
	});
	$('body').on('click', '#ef', function() {
	  r -= 4;
	  	refreshtransformlayers();

	});
	$('body').on('click', '#er', function() {
	  
	  r += 4;
	  	refreshtransformlayers();
	});
	$('body').on('click', '#close-quick-edit-config', function() {

	$('.quick-edit-config').addClass('hidestrate');
	$('#toggle-menu').removeClass('hidestrate');

	});
	$('body').on('click', '#toggle-menu', function() {
		$('.quick-edit-config').removeClass('hidestrate');
	});
	$('body').on('click', '#ts', function() {

		if ( showsky  )
		{
			$('.strate-sky').addClass('hidestrate');
			showsky = false;
			$('#ts').html('<i class="icon-toggle-off"></i> ciel');
		}
		else
		{
			$('.strate-sky').removeClass('hidestrate');
			showsky = true;
			$('#ts').html('<i class="icon-toggle-on"></i> ciel');
		}

	});

	$('body').on('click', '#print', function() {

		         download("samplesvg.svg",document.getElementById('svg8').innerHTML);
	});

	$('body').on('click', '#tsea', function() {
	  
	  if ( showsea  )
	  {
	  	$('#layer-sea').addClass('hidestrate');
	  	showsea = false;
	  	$('#tsea').html('<i class="icon-toggle-off"></i> mer');
		}
		else
		{
	  	$('#layer-sea').removeClass('hidestrate');
	  	showsea = true;
	  	$('#tsea').html('<i class="icon-toggle-on"></i> mer');
		}

	});
	$(window).on('resize', function() {


		refreshUIlayers ();
		zoomin();
	});
	$(window).scroll(function (event) {
		console.log ('scroll');
	});


/*/	$('#promohub').append ('<span id="mouseX">x</span>, <span id="mouseY">y</span>');
	document.onmousemove = function(e) {

		e = e || window.event;
		console.log('mouse :'+e.pageX+','+e.pageY);
		$('#mouseX').text(e.pageX);
		$('#mouseY').text(e.pageY);

	}*/
$('#s1p-island-load-screen').remove();
//var spin = setInterval(autorotate, 40);
});

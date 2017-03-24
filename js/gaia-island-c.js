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

function autorotate() {
	r = r + inc;
	refreshtransformlayers();
}


$(window).on("load", function() {
	console.log('document loaded');
	raztransformlayers();
	refreshUIlayers ();
	console.log('UIlayers ok');
	zoomin();
	console.log('zoom ok');
	refreshtransformlayers();
	console.log('transform layers ok');
	
	$('#s1p-island-load-screen').remove();


	var spin = null;


	jumbofreeze = true;
	var inc = 0.033;
	var cnt = 0;
	var scl = 0.3;
	scl = 0.43;
	var showtopo = false;
	var showsky = false;
	var showsea = true;

	$('#layer-sea').removeClass('hidestrate');



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
	//
});           		    
       
mc.on("pan", function(ev) { movemap ( ev.velocityX*2, ev.velocityY*4, 3); });
           		    
           		    
mc.on("press", function(ev) {
	//
});



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


		//showbordersCell (ncll);
		$('.active').removeClass('active');
		$(cellector+', .dcr'+ncll+'rcd').addClass('active');
		selectedcell = ncll;
	
	
		$('#csl').html('<div id="csl">cellule '+ncll+'<ul><li> altitude '+getCellz(ncll)+'</li><li> type '+getCelltype(ncll)+'</li></ul></div>');
	
	

	});



	$('body').on('click', '#btn-add-soldier', function() {
		addunitCell(selectedcell);
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


$('#s1p-island-load-screen').remove();
//var spin = setInterval(autorotate, 40);
});

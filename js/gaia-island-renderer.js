function refreshUIlayers ()
{		
	$('#promohub').removeClass('hidestrate');
	var w = $(window).width();
	var h = $(window).height();
	var promosize = $(window).height()*0.3;
	var promopos = $(window).height() - promosize;
	if ( w/h < 4.5/3 )
	{
		if ( w/h < 4/6 ) {
		
			promosize = h*0.40;
			promopos = h - promosize;
	$('#svg8').attr('width', w);
	$('#svg8').attr('height', promopos);	
		}

		$('#promohub').css({'top' : promopos });
		$('#promohub').css({'left' : '0px' });
		$('#promohub').css({'width' : w });
		$('#promohub').css({'height' : promosize });
	$('#svg8').attr('width', w);
	$('#svg8').attr('height', promopos);	

	}
		else
	{

		promosize = $(window).width()*0.3;
		promopos = w - promosize;
		if ( w/h > 16/7 ) {
		
			promosize = $(window).width()*0.45;
			promopos = $(window).width() - promosize;
	$('#svg8').attr('width', promopos);
	$('#svg8').attr('height', h);	

		}
		$('#promohub').css({'top' : '0px' });
		$('#promohub').css({'left' : promopos });
		$('#promohub').css({'width' : promosize });
		$('#promohub').css({'height' : $(window).height() });
	$('#svg8').attr('width', promopos);
	$('#svg8').attr('height', h);	
		
		
	}
	
/*	var ratio = h/w;
	var zoom = 120-(ratio*40);
   $("#svg8").attr('viewBox', '-'+zoom+' '+(-zoom*ratio)+' '+(zoom*2)+' '+((zoom*ratio)*2));
	*/
	var ratio = $('#svg8').attr('width')/$('#svg8').attr('height');
	var zoom = 80;
   $("#svg8").attr('viewBox', '-'+(zoom/2)+' -'+(zoom/ratio/2)+' '+zoom+' '+(zoom/ratio));
   
   
   /*
   $('#btn-rotate-left').attr("transform", 'translate('+(-((zoom/2)-2.5))+', '+ ((zoom/ratio/2)-1) +')');
   $('#btn-rotate-right').attr("transform", 'translate('+(((zoom/2)-2.5))+', '+ ((zoom/ratio/2)-1) +')');

   $('#btn-move-left').attr("transform", 'translate('+(-((zoom/2)-8))+', 0)');
   $('#btn-move-right').attr("transform", 'translate('+(((zoom/2)-8))+', 0)');
	$('#btn-move-up').attr("transform", 'translate(0, '+(-( ((zoom/ratio/2)-18) ))+')');
   $('#btn-move-down').attr("transform", 'translate(0, '+( ((zoom/ratio/2)-8) )+')');
	$('#btn-move-left').addClass('hidestrate');
	$('#btn-move-right').addClass('hidestrate');
   $('#btn-move-up').addClass('hidestrate');
	$('#btn-move-down').addClass('hidestrate');
	*/
	

}


		
function refreshtransformlayers() {
	$(".rotate-layer").attr('transform', 'rotate('+r+')');
	$(".counter-rotate-layer").attr('transform', 'rotate('+(-r)+')');

}
function raztransformlayers() {

	$(".rotate-layer").attr('transform', 'rotate(0)');
	$(".counter-rotate-layer").attr('transform', 'rotate(0)');
	$(".move-layer").attr('transform', 'translate(0, 0)');
	r = 0.0;
	px = 0.0;
	py = 0.0;

}

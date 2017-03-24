 function addunitCell (c)
 {
 
 	var clx = getcellx(c);
 	var cly = getcelly(c);
	var alt = getCellz(c);
   var deststrat = '#move-layer-strate-'+(alt+1);
   var deststratH = '#move-layer-strate-'+(alt+3);

 	$(deststrat).appendSvg('g',{class: 'container-Lunit unit0 unitL', id: 'Lunit-'+nunit});
 	$('#Lunit-'+nunit).appendSvg('g',{class: 'position-layer', transform: 'translate('+clx+', '+cly+')' });
 	$('#Lunit-'+nunit+' > .position-layer').appendSvg('g',{class: 'counter-rotate-layer', transform: 'rotate('+(-r)+')' });

 	$(deststratH).appendSvg('g',{class: 'container-Hunit', id: 'Hunit-'+nunit});
 	$('#Hunit-'+nunit).appendSvg('g',{class: 'position-layer', transform: 'translate('+clx+', '+cly+')' });
 	$('#Hunit-'+nunit+' > .position-layer').appendSvg('g',{class: 'counter-rotate-layer', transform: 'rotate('+(-r)+')' });
  	
  	var tmpD = "M -2.835951,-4.0843325 H 2.8285232 V 2.5845002 H -2.835951 Z";
  	var tmpStyle = "opacity:1;vector-effect:none;fill:#0000ff;fill-opacity:1;stroke:none;stroke-width:0.42199969;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke";
  	var tmpClass = "player-color player-1";
  	  	$('#Lunit-'+nunit+' > .position-layer > .counter-rotate-layer').appendSvg('path',{d: tmpD, class: tmpClass, style: tmpStyle });
	tmpD = "M -1.903965,-4.0843325 H 2.8285232 V 2.5845002 H -1.903965 Z";
	tmpStyle = "opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.42199969;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke";
	tmpClass = "player-bg";
	$('#Lunit-'+nunit+' > .position-layer > .counter-rotate-layer').appendSvg('path',{d: tmpD, class: tmpClass, style: tmpStyle });
	tmpD = "m -0.3020817,-3.3344162 c -0.0084,0.03218 -0.01924,0.06402 -0.02244,0.0957 -0.01954,0.193526 -0.02714,0.4928202 -0.0166,0.6718752 0.0124,0.21074 0.06958,0.354755 0.163034,0.408205 0.0576,0.03295 0.06166,0.043 0.08006,0.22363 0.02164,0.212685 0.02544,1.16677 0.0069,1.751955 -0.01175,0.36914 -0.01185,0.37578 0.02634,0.46289 0.05483,0.124975 0.07419,0.214425 0.07419,0.35156 0,0.22857 -0.07703,0.40752 -0.198178,0.461915 -0.03354,0.01505 -0.06022,0.05892 -0.082,0.13379 -0.02699,0.09279 -0.04459,0.114985 -0.105437,0.13379 -0.09801,0.0303 -0.156561,0.09725 -0.167917,0.19336 -0.01445,0.12201 -0.0025,0.194905 0.04004,0.240235 0.0591,0.06313 2.053378,0.01205 2.136053,-0.05469 0.08518,-0.06878 0.03224,-0.365235 -0.06541,-0.365235 -0.02459,0 -0.06719,-0.0093 -0.09372,-0.0205 -0.04108,-0.01745 -0.04937,-0.0377 -0.05667,-0.13965 -0.0045,-0.06593 -0.01889,-0.18682 -0.03124,-0.268555 -0.01235,-0.08173 -0.03694,-0.32697 -0.05467,-0.54492 -0.03889,-0.477865 -0.06379,-0.648975 -0.140581,-0.97559 -0.06954,-0.29577 -0.130974,-0.797375 -0.146439,-1.1875 -0.0062,-0.15761 -0.02749,-0.370975 -0.04784,-0.486325 -0.02954,-0.1675 -0.03404,-0.246185 -0.02734,-0.42871 0.0064,-0.1755052 2.5e-4,-0.2673042 -0.02539,-0.4218772 -0.01135,-0.06846 -0.01744,-0.14375 -0.02344,-0.235351 z m 0.789793,1.2421882 c 0.0045,-0.02725 0.0168,0.03625 0.02734,0.1416 0.01055,0.105365 0.02894,0.24629 0.04199,0.313475 0.06422,0.330705 0.121112,0.676305 0.150343,0.91504 0.03269,0.266995 0.15731,0.841095 0.238205,1.09766 0.09142,0.289945 0.136662,0.539695 0.136677,0.759765 v 0.20703 h -0.364146 -0.363166 l -0.01075,-0.378905 c -0.0103,-0.349975 -0.0093,-0.38869 0.02244,-0.52344 0.03719,-0.15817 0.03724,-0.235375 0,-0.736325 -0.01714,-0.230515 -0.01619,-0.32136 0.0058,-0.644535 0.02174,-0.31904 0.08847,-0.984685 0.115199,-1.151365 z";
	tmpStyle = "fill:#000000;stroke-width:0";
	tmpClass = "plyr";

	$('#Lunit-'+nunit+' > .position-layer > .counter-rotate-layer').appendSvg('path',{d: tmpD, class: tmpClass, style: tmpStyle });
  	
  	var tmpD = "M -2.835951,-4.0843325 H 2.8285232 V 2.5845002 H -2.835951 Z";
  	var tmpStyle = "opacity:1;vector-effect:none;fill:#0000ff;fill-opacity:1;stroke:none;stroke-width:0.42199969;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke";
  	var tmpClass = "player-color player-1";
  	  	$('#Hunit-'+nunit+' > .position-layer > .counter-rotate-layer').appendSvg('path',{d: tmpD, class: tmpClass, style: tmpStyle });
   tmpD = "M -1.903965,-4.0843325 H 2.8285232 V 2.5845002 H -1.903965 Z";
	tmpStyle = "opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.42199969;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke";
	tmpClass = "player-bg";
	$('#Hunit-'+nunit+' > .position-layer > .counter-rotate-layer').appendSvg('path',{d: tmpD, class: tmpClass, style: tmpStyle });
	tmpStyle = "fill:#000000;stroke-width:0";
	tmpD = "m 1.850651,-2.5717495 c -0.04667,-0.01007 -0.07207,0.03356 -0.134765,0.228515 -0.06641,0.20643 -0.695185,1.597803 -0.788085,1.744141 -0.04036,0.06357 -0.105435,0.217954 -0.144535,0.342773 -0.0697,0.222594 -0.07152,0.225275 -0.09082,0.148438 -0.01084,-0.04309 -0.07385,-0.174911 -0.139645,-0.292969 l -0.11914,-0.213867 0.0078,-0.198242 c 0.0045,-0.108978 0.01921,-0.245999 0.03321,-0.303711 0.0164,-0.06925 0.02164,-0.136733 0.01464,-0.198242 -0.01536,-0.130134 -0.158345,-0.415084 -0.261715,-0.522461 -0.07994,-0.08307 -0.0914,-0.08749 -0.158205,-0.05176 -0.10698,0.05721 -0.15663,0.121811 -0.20703,0.269531 -0.0507,0.148444 -0.07813,0.37523 -0.07813,0.638672 0,0.208992 0.02564,0.292396 0.123045,0.394531 0.0369,0.03875 0.0782,0.11088 0.0918,0.160156 0.0234,0.08523 0.02273,0.09394 -0.01367,0.176758 -0.02102,0.04788 -0.07341,0.123958 -0.11621,0.169922 -0.09637,0.103561 -0.193315,0.283719 -0.228515,0.423828 -0.05068,0.201399 -0.10312,0.534607 -0.12012,0.7675777 -0.0094,0.128518 -0.02323,0.27246 -0.03223,0.320313 -0.0232,0.129776 -0.01863,0.280747 0.01367,0.431641 0.0355,0.16596 0.09502,0.269572 0.18262,0.316406 0.0769,0.0411 0.10817,0.150293 0.05957,0.208984 -0.03679,0.04444 -0.06486,0.118461 -0.08496,0.195313 h 1.2207 c -0.008,-0.122761 -0.01397,-0.281047 -0.01855,-0.559571 -0.0072,-0.434468 -0.0042,-0.605081 0.0088,-0.62207 0.0098,-0.01288 0.04104,0.0137 0.06934,0.05957 0.08605,0.139361 0.193455,0.226423 0.251955,0.203125 0.05528,-0.02204 0.12625,-0.171388 0.13965,-0.293946 0.0498,-0.4563567 0.05309,-0.5377967 0.02929,-0.7314447 -0.0317,-0.26026 -0.03584,-0.74801 -0.0068,-0.822265 0.012,-0.03077 0.03744,-0.204102 0.05664,-0.384766 0.0381,-0.359043 0.07474,-0.515116 0.186525,-0.791016 0.19639,-0.484781 0.240235,-0.620978 0.240235,-0.74707 0,-0.0817 0.01342,-0.160567 0.04102,-0.237305 0.0469,-0.13051 0.03675,-0.215677 -0.02735,-0.229492 z";
	tmpClass = "plyr";
	$('#Hunit-'+nunit+' > .position-layer > .counter-rotate-layer').appendSvg('path',{d: tmpD, class: tmpClass, style: tmpStyle });
	nunit += 1;
 }

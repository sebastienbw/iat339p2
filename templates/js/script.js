var cartContents = 0;

$('.addToCart').click( function() {
	cartContents++;
	$('#cart').attr('src', 'img/cart.png');
	$('.header-cart .button').css({
		// 'color': '#f2f2f2',
		'border': 'solid 1px #f2f2f2'
	});
	$('.header-cart p').css({
		'color': '#f2f2f2',
		// 'background-color': '#35251F'
	});
	$('.header-cart p').text(cartContents);
	$('#cartContents').css({
		'opacity': '1',
		// '-webkit-transition': 'width 1s ease-out',
  //   	'transition': 'width 1s ease-out',
    	'width': '13em',
    	'height': '3.2em'
	});

	setTimeout(function() {
		$('#cartContents').css({
			'opacity': '0',
			// '-webkit-transition': 'visibility 1s ease-in',
	  //   	'transition': 'visibility 1s ease-in',
	    	'width': '0',
	    	'height': '0'
		})
	}, 3000);


});
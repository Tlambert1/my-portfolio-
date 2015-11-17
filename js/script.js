jQuery(document).ready(function(){
	var $ = jQuery;
	$('main').hide().fadeIn(1400);
	$('.hello').hide().show('slide', 1000);
	$('.subtitle').hide().show('clip', 1200);
/*	$('#bio').hide().show('clip', 1200);
	$('#skills').hide().delay(400).show('clip', 1200);
	$('#programs').hide().delay(800).show('clip', 1200);*/
	$('.email').on('click', function(){
		var email = 'moc.liamg@mt1ebmal';
		var realEmail = email.split('').reverse().join('');
		$('#showEmail').append('<p>You can e-mail me at:</p><h3>'+realEmail+'</h3>').hide().fadeIn('slow');
		$('.email').off();
	});
})
$(document).ready(function(){
	$('.number').on('click',function(){
		var temp = $('input:text').val();
		$('input:text').val(temp + $(this).text());
	});
	$('.operator').on('click',function(){
		var temp = $('input:text').val();
		$('input:text').val(temp + $(this).text());
	});

	$('.solve').on('click',function(){

		var result = math.eval($('input').val());
		$('input').val(result);
	});

	$('.clear').on('click',function(){
		$('input').val('');
	});
});
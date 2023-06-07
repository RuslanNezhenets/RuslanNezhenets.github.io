$(document).ready(function () {
	$('.laboratory a').click(function(event){
		let lab = $(this).attr('id');

		let display = $(`.${lab}`).attr('style');

		if(display!=='display: block;'){
			$('.labs > div').hide();
			$('.laboratory > a').css({'color':'#000', 'font-weight': 'normal',});

			$(this).css({'color':'red', 'font-weight': 'bold',});
			$(`.${lab}`).slideToggle(500);
		}
		event.preventDefault();
	});

	//Лаб №1
	$('.work__structure__1 div').click(function(event){
		let div = $(this).clone();
		div.contents().filter(function(){
		    return (this.nodeType == 3);
		}).remove();
		let text = div.html();
		$('.work__info').html(text);
		$('.work__info img').show();
	});
});
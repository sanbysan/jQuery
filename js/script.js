$(document).ready(function() {
	var $content = $('#content');
	$('.filter-sale').click(filterSaleButtonHandler);
	$('.filter-new').click(filterNewButtonHandler);
	$('.button').mouseenter(buyNowHandler);
	$('.button').mouseleave(showPriceHandler);
	$('.quantity').bind('keyup mouseup', totalKeyUpHandler);
	$content.mouseover(showDetailsHandler);
	$content.mouseout(hideDetailsHandler);
	$(window).scroll(windowScrollHandler);	

})

var offset = 200;
var duration = 400;

var filterSaleButtonHandler = function () {
	var $this = $(this);
	$('.highlihted').removeClass('highlihted');
	if($this.css('background-color') === 'rgb(255, 192, 203)') { // przycisk sale był przycisniety 
		$this.css('background-color', '#eee');
	} else { // przycisk sale nie był przycisniety 
		$this.css('background-color', 'pink'); 
		$('.filter-new').css('background-color', '#eee');
		$('.destination-container.sale').addClass('highlihted');
	}
}
var filterNewButtonHandler = function () {
	var $this = $(this);
	$('.highlihted').removeClass('highlihted');
	if($this.css('background-color') === 'rgb(255, 192, 203)' ) {
		$this.css('background-color', '#eee');
	} else {
		$(this).css('background-color', 'pink');
		$('.filter-sale').css('background-color', '#eee');
		$('.destination-container.new').addClass('highlihted');
	}
}

var buyNowHandler = function () {
	$(this).text("BUY NOW");
}

var showPriceHandler = function () {
	var amount = $(this).closest('.destination-container').data('price');
	$(this).text(amount + "$");
}


var totalKeyUpHandler = function () {
	var price = +$(this).closest('.destination-container').data('price');
	var quantity = +$(this).val();
	var total = $(this).parent().siblings('p').find('.total');
	total.text(" " + price * quantity +"$");
}

var showDetailsHandler = function (event){
	var $target = $(event.target);
	if ($target.is('.destination-container h4')) {
		$target.siblings('.details').fadeIn();
	}
}
var hideDetailsHandler = function (event){
	var $target = $(event.target);
	if ($target.is('.destination-container h4')) {
		$target.siblings('.details').fadeOut();
	}
}

	//Back to top

var windowScrollHandler = function (){
	if ($(this).scrollTop() > offset) {
		$('#arrow-up').fadeIn(duration);
	} else {
		$('#arrow-up').fadeOut(duration);
		}
}

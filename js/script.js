$(document).ready(function() {
	$('.filter-sale').click(filterSaleButtonHandler);
	$('.filter-new').click(filterNewButtonHandler);
	$('.button').mouseenter(buyNowHandler);
	$('.button').mouseleave(showPriceHandler);
	$('.quantity').keyup(totalKeyUpHandler);
	details.mouseenter(showDetailsHandler);
	details.mouseleave(hideDetailsHandler);
	$(window).scroll(windowScrollHandler);	

})

var filterSaleButtonHandler = function () {
	$(this).css({'background-color': 'pink'});
	$('.filter-new').css({'background-color': '#eee'});
	$('.highlihted').removeClass('highlihted');
	$('.destination-container.sale').addClass('highlihted');
}
var filterNewButtonHandler = function () {
	$(this).css({'background-color': 'pink'});
	$('.filter-sale').css({'background-color': '#eee'});
	$('.highlihted').removeClass('highlihted');
	$('.destination-container.new').addClass('highlihted');
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
	var total = $(this).parent().siblings('p').find('.total');///////????????????????????????????????????
	total.text(" " + price * quantity +"$");
}


var details = $('.destination-container').find('h4');

var showDetailsHandler = function (){
	$(this).siblings('.details').fadeIn();
}
var hideDetailsHandler = function (){
	$(this).siblings('.details').fadeOut();
}

	//Back to top
var offset = 200;
var duration = 400;
var windowScrollHandler = function (){
	if ($(this).scrollTop() > offset) {
		$('#arrow-up').fadeIn(duration);
	} else {
		$('#arrow-up').fadeOut(duration);
		}
}

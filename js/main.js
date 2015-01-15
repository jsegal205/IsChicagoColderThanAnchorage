(function($){
	var $content = $('#content'),
		$chicago = $('#chiTemp'),
		$anch = $('#anchTemp');

	function getChicagoTemp(){
		return $.ajax({
			type:'POST',
			url:'https://api.forecast.io/forecast/a895a7c5256b7eadc3074f3485db9406/41.8369,-87.6847',
			dataType: 'jsonp',
			success:function(data){
				$chicago.text(data.currently.temperature);
				
			}
		});
	}
	
	function getAnchTemp(){
		return $.ajax({
			type:'POST',
			url:'https://api.forecast.io/forecast/a895a7c5256b7eadc3074f3485db9406/61.2175,-149.8584',
			dataType: 'jsonp',
			success:function(data){
				$anch.text(data.currently.temperature);
				
			}
		});
	}
	
	function compare(){
		var isColder = (parseInt($anch.text()) > parseInt($chicago.text())) ? 'YES' : 'NO';
		$content.text(isColder);
	}

	getChicagoTemp().then(getAnchTemp).then(compare);

})(jQuery);
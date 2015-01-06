(function($){
	var $content = $('#content'),
		$chicago = $('#chiTemp'),
		$anch = $('#anchTemp');

	function getChicagoTemp(){
		$.ajax({
			type:'POST',
			url:'https://api.forecast.io/forecast/xxxxxxxxxxxxxxxxxxxxx/41.8369,-87.6847',
			dataType: 'jsonp',
			success:function(data){
				$chicago.text(data.currently.temperature);
				getAnchTemp();
			}
		});
	}
	
	function getAnchTemp(){
		$.ajax({
			type:'POST',
			url:'https://api.forecast.io/forecast/xxxxxxxxxxxxxxxxxxxxx/61.2175,-149.8584',
			dataType: 'jsonp',
			success:function(data){
				$anch.text(data.currently.temperature);
				compare();
			}
		});
	}
	
	function compare(){
		var isColder = ($anch.text() > $chicago.text()) ? 'YES' : 'NO';
		$content.text(isColder);
	}

	getChicagoTemp();

})(jQuery);
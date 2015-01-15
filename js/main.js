(function($){
	var chicago = '',
		anch = ''
		url = 'https://api.forecast.io/forecast/a895a7c5256b7eadc3074f3485db9406/';

	function getChicagoTemp(){
		return $.ajax({
			type:'POST',
			url: url + '41.8369,-87.6847',
			dataType: 'jsonp',
			success:function(data){
				$('#chiTemp').text(data.currently.temperature);
				chicago = data.currently.temperature;
			}
		});
	}
	
	function getAnchTemp(){
		return $.ajax({
			type:'POST',
			url: url + '61.2175,-149.8584',
			dataType: 'jsonp',
			success:function(data){
				$('#anchTemp').text(data.currently.temperature);
				anch = data.currently.temperature;
			}
		});
	}
	
	function compare(){
		var isColder = (parseInt(anch) > parseInt(chicago)) ? 'YES' : 'NO';
		$('#content').text(isColder);
	}

	getChicagoTemp().then(getAnchTemp).then(compare);

})(jQuery);
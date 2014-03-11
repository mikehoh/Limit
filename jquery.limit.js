(function( $ ) {
	$.fn.limit = function( params ) {
		var options = $.extend( {
			"chars": 100,
			"counter": "#result",
			"backendValidation": true
		}, params);
		this.on("keyup", function(e){
			var countRule = options.backendValidation;
			var text = $(this).val();
			var count = countChars(text, countRule);
		  
			if (count > options.chars) {
				var difference = count - options.chars;
				text = text.slice(0, text.length - difference);
				$(this).val(text);
				count = countChars(text, countRule);
			}
			$(options.counter).html(options.chars - count);
			if (options.chars - count <= 5) {
				$(options.counter).addClass('warn');
			}
			else {
				$(options.counter).removeClass('warn');
			}
		});
		return this;
	};
	function countChars(text, countRule) {
		var count = 0;
		$.each(text, function(i,v) {
			count += 1;
			if ((v.charCodeAt(0) == 10) && (countRule == true)) {
				count += 1;
			}
		});
		return count;
	};
})(jQuery);

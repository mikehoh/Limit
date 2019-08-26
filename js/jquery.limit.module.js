export default function() {
	(function( $ ) {
		$.fn.limit = function( params ) {
			var options = $.extend( {
				"chars": 100,
				"counter": "#result",
				"backendValidation": true,
				"warning": 5
			}, params);
			if (this.is("textarea, input")) {
				this.attr("maxlength", options.chars);
			}
			this.on("keyup", function(e){
				var countRule = options.backendValidation;
				var text = $(this).val();
				var count = countChars(text, countRule);
				updateLength(this.id, count.lines, options.chars);
				if (count.counter > options.chars) {
					var difference = count.counter - options.chars;
					text = text.slice(0, text.length - difference);
					$(this).val(text);
					count = countChars(text, countRule);
					updateLength(this.id, count.lines, options.chars);
				}
				$(options.counter).html(options.chars - count.counter);
				if (options.chars - count.counter <= options.warning) {
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
			var lines = 0;
			text.split('').forEach(function(v) {
				count += 1;
				if ((v.charCodeAt(0) == 10) && (countRule === true)) {
					count += 1;
				}
				if ((v.charCodeAt(0) == 10) && (countRule === false)) {
					lines += 1;
				}
			});
			return { counter: count, lines: lines };
		}
		function updateLength(el, lines, chars) {
			$('#'+el).attr("maxlength", chars + lines);
		}
	})(jQuery);
}
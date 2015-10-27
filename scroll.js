$(document).ready(function(){
	$(&quot;#scroll&quot;).hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() &gt; 500) {
				$(&#39;#scroll&#39;).fadeIn();
			} else {
				$(&#39;#scroll&#39;).fadeOut();
			}
		});
		$(&#39;#scroll&#39;).click(function () {
			$(&#39;body,html&#39;).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

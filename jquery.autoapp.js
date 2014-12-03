/*!
 * $.fn.autoApp			自动 下载or打开 App
 * @author				Blueria
 * @since				2014.11.14
 */
;(function( $, window, document, undefined ) {
	$.fn['autoApp'] =  function( options ) {
		var defaults = {
			appArgument: "weixin://",	// 私有app协议参数
			iosUrl: "",					// ios版app下载地址
			androidUrl: ""				// android版app下载地址
		};
		var settings = $.extend({}, defaults, options);

		return this.each(function() {
			var self = $(this);
			self.on('click', function(e) {
				// e.preventDefault();
				var appArgument = self.data('app-argument') || settings.appArgument,
					downloadUrl;
				if ( $.fn.autoApp.os == 'ios' ) {
					downloadUrl = settings.iosUrl || self.attr('href');
				} else if ( $.fn.autoApp.os == 'android' ) {
					downloadUrl = settings.androidUrl || self.attr('href');
				} else {
					downloadUrl = self.attr('href');
				}
				var clickAt = +new Date;	// 点击那一刻时间戳

				var iframe = document.createElement("iframe");
				iframe.src = appArgument;
				iframe.style.display = "none";
				document.body.appendChild(iframe);

				setTimeout(function() {
					if ( +new Date - clickAt < 2000 ) window.location = downloadUrl;
				}, 500);
				return false;
			});
		});
	};
	$.fn.autoApp.os = (function() {
		var UA = navigator.userAgent,
			isiOS = UA.match('iPad') || UA.match('iPhone') || UA.match('iPod'),
			isAndroid = UA.match('Android'),
			isWindows = UA.match('Windows Phone');
		if ( isiOS ) {
			return 'ios';
		} else if ( isAndroid ) {
			return 'android';
		} else if ( isWindows ) {
			return 'wp';
		}
	})();
})( window.Zepto || window.jQuery, window, document );
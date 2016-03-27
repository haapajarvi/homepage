function InitScreen() {
	var canvas = null;
	// p�ivitt�� kuvat
	canvas = document.getElementById("myCanvas");
	canvas.width = 1;
	canvas.height = 1;
	
	//goFullscreen('ramewnd');

	var window_w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var window_h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	//date selector box
	//       alert (pictureLocationSelected);

	//Image Sizing
	var iWlist;
	var maxlist = document.getElementById("list_maximized");
	if (maxlist.offsetWidth != 0) {
		iWlist = 315;
	} else {
		iWlist = 0;

	}
	//iWlist = Math.max(minlist.offsetWidth, maxlist.offsetWidth);

	var iW = window_w - iWlist - 8;
	var iH = window_h - 8;
	
	
	if (ie> 0) {
		iW -= 5;
		iH -= 7;

	}
	var divTitle = document.getElementById("divTitle");
	var hDivTitle = divTitle.offsetHeight;


	var divList = document.getElementById("divList");
	divList.style.height = iH - hDivTitle  - 12;


	canvas.width = iW;
	canvas.height = iH;

}
  function goFullscreen(id) {
    // Get the element that we want to take into fullscreen mode
    var element = document.getElementById(id);

    // These function will not exist in the browsers that don't support fullscreen mode yet, 
    // so we'll have to check to see if they're available before calling them.

    if (element.mozRequestFullScreen) {
      // This is how to go into fullscren mode in Firefox
      // Note the "moz" prefix, which is short for Mozilla.
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      // This is how to go into fullscreen mode in Chrome and Safari
      // Both of those browsers are based on the Webkit project, hence the same prefix.
      element.webkitRequestFullScreen();
   }
   // Hooray, now we're in fullscreen mode!
  }
var ie = ( function() {
		var undef, rv = -1;
		// Return value assumes failure.
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		var trident = ua.indexOf('Trident/');

		if (msie > 0) {
			// IE 10 or older => return version number
			rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		} else if (trident > 0) {
			// IE 11 (or newer) => return version number
			var rvNum = ua.indexOf('rv:');
			rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
		}

		return ((rv > -1) ? rv : undef);
	}()); 
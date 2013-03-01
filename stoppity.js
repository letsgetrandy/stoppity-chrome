var rx1 = new RegExp('wp-content/plugins/pippity');
var rx2 = new RegExp('clickfuse.com');

var sc = window.document.getElementsByTagName('script');
for (scr in sc) {
	if (rx1.test(scr.src) || rx2.test(scr.src))
		scr.src = '';
}

var classes = [
	'popup-dom-lightbox-wrapper',	//popup domination
	'jqmWindow'				//jqm ads
];
var ids = [
	'pty_pkg',				//pippity poppity
	'mod_wrapper',			//modal wrapper
	'AdSpotMovie',			//AdSpot
	'shortTail_D30_modal'	//short tail
];
var childids = [
	'rm_modal',				//ringtone maker
];

window.setInterval (function () {

	for (id=0; id<ids.length; id++) {
		var el = window.document.getElementById(ids[id]);
		if (el) {
			el.parentNode.removeChild(el);
			chrome.extension.sendRequest ({'type':ids[id]}, function(response){} );
		}
	}

	for (id=0; id<childids.length; id++) {
		var el = window.document.getElementById(childids[id]);
		if (el) {
			el = el.parentNode;
			el.parentNode.removeChild(el);
			chrome.extension.sendRequest ({'type':childids[id]}, function(response){} );
		}
	}

	for (cl=0; cl<classes.length; cl++) {
		var nodes = window.document.getElementsByClassName(classes[cl]);
		for (i=0; i<nodes.length; i++) {
			nodes[i].parentNode.removeChild(nodes[i]);
			chrome.extension.sendRequest ({'type':classes[cl]}, function(response){} );
		}
	}

}, 500);


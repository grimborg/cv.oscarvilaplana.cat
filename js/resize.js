handleSizeMessage = function (e) {
	if (e.origin !== 'http://oscarvilaplana.cat' &&
	    e.origin !== 'http://grimborg.wpengine.com' &&
	    e.origin !== 'https://grimborg.wpengine.com') {
		console.log('Wrong origin ' + e.origin);
		return;
	}
	if (e.data === 'getSize' || true) {
		e.source.postMessage('size:' + document.body.scrollHeight + 'px', e.origin);
	}
};

window.addEventListener('message', handleSizeMessage, false);

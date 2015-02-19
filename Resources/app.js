var win = Titanium.UI.createWindow({  
    title:'Facebook Test',
    backgroundColor: 'white'
});

var button = Ti.UI.createButton({
	top: '30dp',
	width: '100dp',
	height: '50dp',
	backgroundColor: 'blue',
	color: 'white'
});
win.add(button);

button.addEventListener('click', function() {
	if (fb.loggedIn) {
		fb.logout();
	} else {
		fb.authorize();
	}
});

var fb;
// this name discrepancy will be fixed in a future revision
if (Ti.Platform.osname == 'android') {
	fb = require('com.ti.facebook');
	win.fbProxy = fb.createActivityWorker({lifecycleContainer: win}); 
} else {
	fb = require('com.facebook');
}
fb.permissions = ['public_profile', 'email', 'user_friends'];

fb.addEventListener('login', function(e) {
	if (e.success) {
		button.title = 'Logout';
		alert('login success: ' + JSON.stringify(e.data));
		// Note: the user may decline email and friends....
		Ti.API.info('Actual permissions: ' + JSON.stringify(fb.permissions));
	} else if (e.cancelled) {
		button.title = 'Login';
		alert ('login cancelled');
	} else if (e.error) {
		button.title = 'Login';
		var alertMessage;
		if (Ti.Platform.osname != 'android') {
			if (e.error.indexOf('OTHER:') !== 0){
				alertMessage = e.error;
			} else {
				//alert('Please check your network connection and try again.');
				alertMessage = 'Please check your network connection and try again';
			}
		} else {
			alertMessage = e.error;		
		}
		alert(alertMessage);
	} else {
		alert('Please check your network connection and try again');
	}
});

fb.addEventListener('logout', function() {
	button.title = 'Login';
	alert('Logout event');
});

if (Ti.Platform.osname == 'android'){
	fb.initialize(4000);
} else {
	fb.initialize(6000, false); // pass true for system login, less reliable than app login but much faster especially on iPhone 4/4S/5
}

if (fb.loggedIn) {
	button.title = 'Logout';
} else {
	button.title = 'Login';
}

// Android note: each window or tabgroup must be opened after fb.createActivityWorker()
win.open();

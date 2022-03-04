let $widget = $('[data-help-widget]');
let hash = window.location.hash;
let windowWidth = $(window).innerWidth();

let openWidget = function() {
	zE(function() {zE.activate({hideOnClose: true});});
}

let pushEvent = function(event) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(event);
};

let initZenDesk = function() {
	window.zESettings = {
		webWidget: {
			position: {
				horizontal: 'right',
				vertical: 'top'
			}
		}
	};
}

let initZenDeskWithAdd = function() {
	// init zendesk
	window.zESettings = {
		webWidget: {
			position: {
				horizontal: 'right',
				vertical: 'top'
			},
			chat: {
				connectOnPageLoad: true
			}
		}
	};
	// when unread message
	zE('webWidget:on', 'chat:unreadMessages', function() {
		if (windowWidth < 768) {
			$widget.addClass('active');
		} else {
			openWidget();
		}
	});
	zE('webWidget:on', 'userEvent', function(event) {
		// when open popup
		if (event.action == 'Web Widget Opened') {
			$widget.removeClass('active');
			pushEvent({
				'event': 'zendesk widget',
				'zendesk': 'open',
			});
		}
		// when close popup
		if (event.action == 'Web Widget Minimised') {
			pushEvent({
				'event': 'zendesk widget',
				'zendesk': 'close',
			});
		}
	});
}

window.onload = function() {
	setTimeout(function () {
		if (hash == '#open-help-modal') {
			openWidget();
		}
	}, 500);
};

AB.isDT() ? initZenDeskWithAdd() : initZenDesk()
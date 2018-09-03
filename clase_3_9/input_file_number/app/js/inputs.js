(function($) {
	'use strict'; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#sideNav'
	});
})(jQuery); // End of use strict

function fileUpload() {
	var x = document.getElementById('uploadedFile');
	var txt = '';
	if ('files' in x) {
		if (x.files.length == 0) {
			txt = 'Select one or more files.';
		} else {
			for (var i = 0; i < x.files.length; i++) {
				txt += '<br><strong>' + (i + 1) + '. file</strong><br>';
				var file = x.files[i];
				if ('name' in file) {
					txt += 'name: ' + file.name + '<br>';
				}
				if ('size' in file) {
					txt += 'size: ' + file.size + ' bytes <br>';
				}
			}
		}
	} else {
		if (x.value == '') {
			txt += 'Select one or more files.';
		} else {
			txt += 'The files property is not supported by your browser!';
			txt += '<br>The path of the selected file: ' + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
		}
	}
	document.getElementById('demo').innerHTML = txt;
}

// Convertidor de cms a pulgadas

function LengthConverter(valNum) {
  document.getElementById("outputInches").innerHTML=valNum*0.39370;
}

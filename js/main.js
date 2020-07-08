;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-bibi-nav-toggle', function(event){
			if ( $('#bibi-navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
			event.preventDefault();
		});
	};


	// Animate Projects

	var animateBox = function() {
		if ( $('.animate-box').length > 0 ) {
			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					$(this.element).addClass('fadeIn animated');

				}
			} , { offset: '80%' } );
		}
	};


	// Animate Leadership
	var animateTeam = function() {
		if ( $('#bibi-team').length > 0 ) {
			$('#bibi-team .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var teamWayPoint = function() {
		if ( $('#bibi-team').length > 0 ) {
			$('#bibi-team').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(animateTeam, 200);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );
		}
	};


	// Animate Feature
	var animateFeatureIcons = function() {
		if ( $('#bibi-skills').length > 0 ) {
			$('#bibi-skills .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}
	};
	var featureIconsWayPoint = function() {
		if ( $('#bibi-skills').length > 0 ) {
			$('#bibi-skills').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {




					setTimeout(animateFeatureIcons, 200);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );
		}
	};

	// Page Nav
	var clickMenu = function() {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;
		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;
		});
		if ( $(this).attr('href') !== "#") {
			$('#bibi-navbar a:not([class="external"])').click(function(event){
				var section = $(this).data('nav-section');
				if ( $('div[data-section="' + section + '"]').length ) {
					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
			    	}, 500);
			   }
			   event.preventDefault();
			});
		}
	};

	// Reflect scrolling in navigation
	var navActive = function(section) {
		$('#bibi-main-nav #bibi-navbar li').removeClass('active');
		$('#bibi-main-nav #bibi-navbar').find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
	};

	var navigationSection = function() {
		var $section = $('div[data-section]');
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});
		$section.waypoint(function(direction) {
	  	if (direction === 'up') {
	    	navActive($(this.element).data('section'));
	  	}
		}, {
		 	offset: function() { return -$(this.element).height() + 155; }
		});
	};


	$(function(){

		burgerMenu();
		animateBox();
		teamWayPoint();
		featureIconsWayPoint();
		clickMenu();
		navActive();
		navigationSection();

	});


}());

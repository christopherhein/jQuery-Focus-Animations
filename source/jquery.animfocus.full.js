/*
 • jQuery Focus Animations
 • http://christopherhein.com
 •
 • Copyright 2010, Christopher Hein
 • Free to use and abuse under the GPL license.
 • http://www.gnu.org/copyleft/gpl.html
 • 
 •  Transitions can be, fade, swipe, more coming soon.
 •
 • March 2010
*/

(function($) {

  $.fn.focusAnimation = function(options) {      
      
      // Settings
    settings = jQuery.extend({
      speed: 500,
      transition: "swipe",
      text: "Focus Animation Demo",
      label_field: this,
      input_field: "",
      left_margin: "20px",
      anim_distance: "190px",
      opacity: ".4"
    }, options);
    
    
    
    if( settings.transition == "swipe" ) {
      
      $(settings.label_field).animate({ opacity: settings.opacity })
    		.click(function() {
    			var thisFor	= $(settings.label_field).attr('for');
    			$('#'+thisFor).focus();
    	});
      
      var thisFor	= $(settings.label_field).attr('for');
    	
    	$('#'+thisFor).focus(function() {
    	
    		$(settings.label_field).animate({ marginLeft: settings.anim_distance, opacity: "0" }, settings.speed);
    	
    			if($(settings.label_field).val() == settings.text) {
    				$(settings.label_field).val() == "";
    			}
    		}).blur(function() {
    	
    			if($(settings.label_field).val() == "") {
    				$(settings.label_field).val() == settings.text;
    				$(settings.label_field).animate({ marginLeft: settings.left_margin, opacity: settings.opacity }, settings.speed);
    			}
    	});
    }
    
  } 
  	
})(jQuery);

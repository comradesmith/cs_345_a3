var menu_open = false;

function toggle_menu(hamburger) {
	/* TODO change colours */
	if(menu_open){
		menu_open = false;
		hamburger.style.background = "#46C";
		$("nav.toggleable #nav_options").css({
			"visibility" : "hidden",
			"display" : "none",
			"z-index" : "-9001"
		});
	}
	else {
		menu_open = true;
		hamburger.style.background = "#C64";
		$("nav.toggleable #nav_options").css({
			"visibility" : "visible",
			"display" : "block",
			"z-index" : "1"
		});
	}
} 

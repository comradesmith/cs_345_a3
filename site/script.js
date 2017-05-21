var menu_open = false;
var active_section = "assignment_body";

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

function toggle_section(incoming_section) {
	var outgoing_section = $("section#" + active_section);
	active_section = incoming_section;
	var incoming_section = $("section#" + incoming_section);

	outgoing_section.css({
			"visibility" : "hidden",
			"display" : "none",
			"z-index" : "-9001"
	});
	
	incoming_section.css({
			"visibility" : "visible",
			"display" : "block",
			"z-index" : "1"
	});

}

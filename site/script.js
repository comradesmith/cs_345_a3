var menu_open = false;
var active_section = "assignment_body";
var feedback_status = false;

function submit_assignment(button) {
	var button = $(button);
	var sub_status = button.attr("value");
	var info_box = button.siblings("span#submission_feedback");

	alert("Your assignment has been " + sub_status + "ted at hh:mm - 0th Septubary") 
	info_box.text("Last submitted at hh:mm - 0th Septubary");
	button.attr("value", "Resubmit");

}

function toggle_feedback(button) {
	menu_open = false;
	$(hamburger).removeClass("active_hams");
	$("nav.toggleable #nav_options").hide();
	if(feedback_status){
		feedback_status = false;
		$(button).text("Request Feedback");
		alert("Your feedback request is now closed");
	}	
	else {
		feedback_status = true;
		$(button).text("Withdraw Request");
		alert("Your assignment is now open for peer feedback");
	}
}

function toggle_menu(hamburger) {
	/* TODO change colours */
	if(menu_open){
		menu_open = false;
		$(hamburger).removeClass("active_hams");
		$("nav.toggleable #nav_options").hide();
	}
	else {
		menu_open = true;
		$(hamburger).addClass("active_hams");
		$("nav.toggleable #nav_options").show();
	}
} 

function toggle_section(incoming_section_name) {
	var outgoing_section = $("section#" + active_section);
	var outgoing_button = $("#" + active_section + "_button");
	active_section = incoming_section_name;
	var incoming_section = $("section#" + incoming_section_name);
	var incoming_button = $("#" + active_section + "_button");

	// filthy, pig-disguting, code lies here
	if(incoming_section_name === "assignment_body"){
		$("#nav_assignment_edit, #nav_assignment_edit + div").show();
		$("#nav_assignment_control, #nav_assignment_control + div").show();
		$("#nav_assignment + div").show();
	}
	// please make it stop, I feel sick
	else {
		$("#nav_assignment_edit, #nav_assignment_edit + div").hide();
		$("#nav_assignment_control, #nav_assignment_control + div").hide();
		$("#nav_assignment + div").hide();
	}
	// I am not proud of what I have done today

	outgoing_section.css({
			"visibility" : "hidden",
			"display" : "none",
			"z-index" : "-9001"
	});
	outgoing_button.removeClass("active_section");
	
	incoming_section.css({
			"visibility" : "visible",
			"display" : "block",
			"z-index" : "1"
	});
	incoming_button.addClass("active_section");

	menu_open = false;
	$(hamburger).removeClass("active_hams");
	$("nav.toggleable #nav_options").hide();

}

function reply(button) {
	var reply_area = "<div class='reply_box'><textarea rows='6' cols='60' placeholder='Enter reply...'></textarea><br><button onclick='submit_comment(this)'>Submit</submit></div>";
	var reply_container = $(button).parent().parent();
	
	reply_container.children(".comment.reply_button").remove();
	reply_container.append(reply_area);
}

function submit_comment(button){
	var parent_element = $(button).parent();
	var reply_container = parent_element.parent();
	var text_area = $(button).siblings('textarea');
	var input_text = text_area.val();
	// parent_element.empty();
	
	var new_comment = "<div class='comment reply'><h4>Me</h4><p>"
					 +  input_text + "</p></div>";

	var reply_button = "<div class='comment reply_button'><a onclick='reply(this)'>Reply</a></div>";

	// parent_element.remove();
	console.log(reply_container.children(".reply_box"));	
	reply_container.children(".reply_box").remove();
	reply_container.append(new_comment, reply_button);

	console.log(input_text);
}

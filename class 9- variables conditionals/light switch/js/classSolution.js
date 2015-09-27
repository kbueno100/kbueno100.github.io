// current_light_status = on 
var lights = true;

// statusUpdate =
function statusUpdate () {
	// if current_light_status = on
	if (lights == true) {
		// then turn lights off (sets background to black)
		$("body").addClass("dark")

		// current_light_status = off
		lights = false; 

	} else {
		// then turn lights on (set background to white)
		$("body").removeClass("dark")

		// current_light_status = on
		lights = true;
	}
}

// click the light_switch -> run statusUpdate
$("#light_switch").click(switchLights);


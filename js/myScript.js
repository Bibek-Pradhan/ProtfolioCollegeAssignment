function validateForm() {
	var name = document.forms["messageForm"]["name"].value;
	var address = document.forms["messageForm"]["address"].value;
	var phone = document.forms["messageForm"]["phone"].value;
	var email = document.forms["messageForm"]["email"].value;
	var message = document.forms["messageForm"]["message"].value;
	/*when name, address, phone, email and message is empty send alert message*/
	if (name =="" ||address =="" ||phone =="" ||email =="" ||message =="") {
		alert("Error!! Please fill the field.");
	}else{
		/*when name, address, phone, email and message is filled and send show alert message*/
		alert("Thank You!! " + name);
		alert("Your details is " +
			"Name: " + name + " " +
			"Address: " + address + " " +
			"Phone Number: " + phone + " " +
			"E-mail: " + email + " " +
			"Your Message: " + message);
	}
}
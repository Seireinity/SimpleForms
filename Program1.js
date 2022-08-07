function validateForm(name, pass){
	var letter = /^[A-Za-z\s]+$/;
	
	//Validate name
	if(name.value.match(letter)){
		alert("Account Registered!");
		return true;
	}
	else{
		document.getElementById("name_error").innerHTML = "* Enter only alphabet characters.";
		return false;
	}
}



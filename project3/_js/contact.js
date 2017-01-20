var FormValidation = function(formEl){

	formEl = formEl || null;

	// test if email is in the right format
	function isEmailAddress(requiredField){
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return pattern.test(requiredField);

	}

	//validate form: check if all fields are filled out and email format is correct
	function validateForm(event){
		valid = true;
		//event.preventDefault();
		if(document.getElementById('name').value.length == 0){
			alert('Please fill out the name field.');
			document.getElementById('name').focus();
			valid = false;

		}
		else if (document.getElementById('email').value.length == 0){
			alert('Please fill out the email field.');
			document.getElementById('email').focus();
			valid = false;
		}
		else if (document.getElementById('message').value.length == 0){
			alert('You forgot to leave us a message.');
			document.getElementById('message').focus();
			valid = false;
		}
		else if (isEmailAddress(document.getElementById('email').value) == false){
			alert('Enter a valid email address.');
			document.getElementById('email').focus();
			valid = false;
		}
		return valid;
	}

	//submit form
	function submitForm(formEvent){
		if(validateForm() === false){
			console.error('Error submiting the form.');
			formEvent.preventDefault();
			return false;
		}
		else 
			return true;
	}

	function init(){

		if(typeof formEl === null){
			console.error('No form as a parameter for validation.');
			return false;
		}
		formEl.on('submit',submitForm);
	}
	    return {
        init: function() {
            init();
        }
    }
};

$(document).ready(function() {

    var formEl = $('#contact')
        , formValidation = new FormValidation(formEl);

    formValidation.init();

});

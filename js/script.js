$(function() {

	var signup = $('#signUp');

	signup.validate({
		rules: {
			name: {
				required: true,
				minlength: 5,
				maxlength: 15,
			},

			secondname: {
				required: true,
				minlength: 5,
				maxlength: 15,
			},

			email: {
				required: true,
				email: true,
			},

			gender: {
				required: true,
			},

			pass: {
				required: true,
				minlength: 8,
				maxlength: 16,
			},

			checkbox: {
				required: true,
			},
		}
	});

	signup.on('submit', function (e) {
		e.preventDefault();
		if (!signup.valid()) {
			return false;
		}
		var formData = getFormData();
		$.ajax({
			type: 'POST',
			url: 'http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration',
			data: formData,
		})
		.done(function(response) {
			if (response.status === "OK") {
				setTimeout(function() {
					window.location.href = './pages/companies.html';
				}, 100);
			} else if (response.status === "Form Error") {
				var validator = signup.validate();
				var error_object = {};
				error_object[response.field] = response.message;
				validator.showErrors(error_object);
			} else {
				alert(response.message);
			}
		})
		.fail(function(error) {
			console.log(error);
		})
	});


	function getFormData() {
		var arr = $('#signUp').serializeArray()
		var result = {};
		for (var i = 0; i < arr.length; i++) {
			result[arr[i].name] = arr[i].value;
		}

		return result;
	}

});

$(function() {

	$('#signUp').validate({

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

	$('#signUp').on('submit', function (e) {
		e.preventDefault();
		if (!$('#signUp').valid()) {
			return false;
		}
		var formData = getFormData();
		$.ajax({
			type: 'POST',
			url: 'http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration',
			data: formData,
		})
		.done(function(response) {
			alert(response);
		})
		.fail(function(error) {
			console.log(error);
			alert( error.message );
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

$('#signUp').submit(function(e) {         //redirect
    this.submit();
    setTimeout(function() {
        window.location.href = './pages/companies.html';
    }, 100);
});



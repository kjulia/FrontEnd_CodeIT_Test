$.ajax('http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList')
.done(function(data){
	$.each(data.list,function(key,item){
		console.log(item);
		$('#companyTable').append(`<tr><td>${item.name}</td></tr>`);
	})
});


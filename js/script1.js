$.ajax('http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList')
.done(function(data){
	$.each(data.list,function(key,item){
		console.log(item);
		$('#companyList').append(`<dt>${item.name}</dt>`);
	})
});


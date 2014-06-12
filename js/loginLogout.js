// JavaScript Document
$(document).ready(function(){
	
	$("#signinButton").click(function(){
		var user = $("#user").val();
		var pass = $("#pass").val();
		console.log("This means the password is working");
		$.ajax({
			url: "xhr/login.php",
			type: "POST",
			dataType: "json",
			data:{
				username: user,
				password: pass
				},
				success:function(response){
					console.log("something");
					if(response.error){
						alert(response.error);
						
						}else{
							window.location.assign('myProjectListPage.html');
						};
					}
				
			});
	})
	
	$("#logOut").click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){
			window.location.assign('index.html')
			})
		});
		
	
	});
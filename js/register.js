// JavaScript Document
$(document).ready(function(){
	$("#submitreg").on('click', function(){
		var firstname= $("#first").val(),
			lastname= $("#last").val(),
			address1= $("#add1").val(),
			address2= $("#add2").val(),
			city= $("#city").val(),
			state= $("#state").val(),
			zipcode= $("#zip").val(),
			phone= $("#phone").val(),
			email= $("#email").val(),
			chsusername= $("#chsname").val(),
			chspaswrd= $("#chspswrd").val(),
			confrmpswrd= $("#confpswrd").val();
			console.log("Testing register");
			
			$.ajax({
				url:'xhr/register.php',
				type:'post',
				dataType:'json',
				data:{
					firstname:firstname,
					lastname:lastname,
					address1:address1,
					address2:address2,
					city:city,
					state:state,
					zipcode:zipcode,
					phone:phone,
					email:email,
					chsusername:chsusername,
					chspaswrd:chspaswrd,
					confirmpswrd:confirmpswrd
					},
					success: function(response){
						if(response.error){
							alert(response.error);
							}else{
								window.location.assign('index.html');
								}
						}
				
				});
			
		});
	
	});
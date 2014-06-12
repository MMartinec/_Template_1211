/*  
	Your Project Title
	Author: You
*/

(function($){
	
	/*
	===============================================
	=========================== APPLICATION GLOBALS	
	*/
	
	var win = $(window),
		body = $(document.body),
		container = $('#container'),	// the only element in index.html
		currentUser = {}
	;
	
	
	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
	var login = function(){

	var user = $('input#user').val(),
	pwd = $('input#pwd').val();
		$.ajax({
			url: 'xhr/login.php',
			data: {
			username: user,
			password: pwd
			},
			type: 'post',
			dataType: 'json',
			success: function(response){
				if(response.error){
					console.log(response.error);
				}else{
					loadApp();
				}
			}
		});
	return false;
};
	var loadApp = function(){};
	
	
	var loadLanding = function(){
		$.get('templates/landing.html', function(html){
			var h = $(html);
			var landingCode = h.find('#template_landing').html();
			$.template('landing', landingCode);		// compile template
			$.render(currentUser, 'landing');		// use template
			container.html(landingCode);
		});
	};
	
	
	var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};
	  $(function() {
$( "#accordion" )
.accordion({
header: "> div > h3"
})
.sortable({
axis: "y",
handle: "h3",
stop: function( event, ui ) {
// IE doesn't register the blur when sorting
// so trigger focusout handlers to remove .ui-state-focus
ui.item.children( "h3" ).triggerHandler( "focusout" );
}
});
});
	var $projList = $('.projectList');
	$('#trigger-a').click(function(e){
		e.preventDefault();
		$projList.accordion();
		
		});
	

 
 $(function() {
$( "input[type=submit], a, button" )
.button()
.click(function( event ) {
event.preventDefault();
});
});
	
 $(function() {
$( "#dateOne").datepicker();
});	
$(function() {
$( "#dateTwo" ).datepicker();
});
$(function() {
$( "#dateThree").datepicker();
});
$(function() {
$( "#dateFour").datepicker();
});
$(function() {
$("#datepickerproj").datepicker();
});
$(function() {
$("#datepickertask").datepicker();
});






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
		$("#subproj").on('click', function(){
			var projName = $("#projName").val(),
				projDesc= $("#projDesc").val(),
				datepickerproj = $("#datepickerproj").val(),
				datepickertask = $("#datepickertask").val(),
				status = $("#status").val();
				console.log("Testing submit new project");
				
				$.ajax({
				url:'xhr/new_project.php',
				type:'post',
				dataType:'json',
				data:{
					proName:projName,
					projDesc:projDesc,
					datepickerproj:datepickerproj,
					datepickertask:datepickertask,
					status:status
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
		<!--Add new client-->
		
		$("#btnAddNewRow").on('click', function(){
			var clientName = $("#clientName").val(),
				address= $("#address").val(),
				city = $("#city").val(),
				state = $("#state").val(),
				zipcode = $("#zipcode").val(),
				email = $("#email").val();
				console.log("Testing submit new client");
				
				$.ajax({
				url:'xhr/new_client.php',
				type:'post',
				dataType:'json',
				data:{
					clientName:clientName,
					address:address,
					city:city,
					state:state,
					zipcode:zipcode,
					email:email
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
		//*****************************Get Project List
		
		$.ajax({
				url:'xhr/get_projects.php',
				type:'get',
				dataType:'json',
				success: function(response){
					console.log(response);
				}
		});
		// ************** Update Project Function ****************
		
		
	$('.updatebtn').on('click', function(e) {
		e.preventDefault();
		var projName = $('#projName').val(),
		projDesc = $('#projDesc').val(), 
		projDue = $('#projDue').val(), 
		status = $('#status').val();
				
        $.ajax({
            url: 'xhr/update_project.php',
            type: 'post',
            data: {
                projectID: id,
                projectName: name,
                status: stat,
                projectDescription: descrip,
                dueDate: date
            },
            dataType: 'json',
            success: function(response){
                if(response.error){
                    $('.errormsg2').empty()
                }else{
                   console.log('success');
                    window.location.assign('projects.html');
                }
            }
        });
    });
	
     // ---------- Delete Buttons ----------------
                        $('.deletebtn').each(function(i){
                            $(this).attr('id', projectList[i].id);
                        }).on('click', function(){
                            var idd = Number($(this).attr('id'));
                            $.ajax({
                                url: 'xhr/delete_project.php',
                                data: {
                                    projectID: idd
                                },
                                type: 'post',
                                dataType: 'json',
                                success: function(response){
                                    if(response.error){
                                        console.log(response.error)
                                    }else{
                                        window.location.assign('projects.html');
                                    }
                                }
                            });
                        }); // ------- end delete buttons ------


/* ======================= Logout ======================= */
		
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
							window.location.assign('myNewProjectPage.html');
						};
					}
				
			});
	})
	
	$("#logOut").click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){
			window.location.assign('index.html');
			})
		});
				

// $(function() {
//$( "#sortable" ).sortable();
//$( "#sortable" ).disableSelection();
//});

	// 	============================================
	//	SETUP FOR INIT
		
	var init = function(){
	
		checkLoginState();
	};
	
	
	init();
	
		
	/*
	===============================================
	======================================== EVENTS	
	*/
	
	win.on('submit', '#user-reg-form', function(){
		
		return false;
	});
	
	/*	
	==================================== END EVENTS 
	===============================================
	*/
		
		

	
})(jQuery); // end private scope





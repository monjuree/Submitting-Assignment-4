// JavaScript Document


$( document ).ready(function() {


	
// Top section readmore and less button	
	
	
	
							
  
		$("p").hide(); //hide section paragraph on page load
		
	


			//top section
		$("#readlessTop").hide();
		$("#readMoreTop").click(showText);  // readmore text
			function showText(){
				$("#showTextTop").slideDown("slow");
				$("#readMoreTop").hide();
				$("#readlessTop").show();
				event.preventDefault();
			}


								//showless text	
		
		$("#readLessTop").click(hideText); 
			function hideText(){
				$("#showTextTop").slideUp("slow") ;
				$("#readlessTop").hide();
				$("#readMoreTop").show();
				event.preventDefault();
			}


		 // Bottom section readmore and less button	
		$("#readlessBottom").hide();
		$("#readMoreBottom").click(showTextBottom);
			function showTextBottom(){
				$("#showTextBottom").slideDown("slow");
				$("#readLessBottom").show();
				$("#readMoreBottom").hide();
			}
	
		$("#readLessBottom").click(hideTextBottom); 
			function hideTextBottom(){
				$("#showTextBottom").slideUp("slow") ;
				$("#readlessBottom").hide();
				$("#readMoreBottom").show();
				event.preventDefault();
			}	

	
	
		//asid section readmore and readless button
		$("#readlessAsideTop").hide();
			$("#readMoreAsideTop").click(showTextAsideTop);
				function showTextAsideTop(){
					$("#readMoreAsideTop").slideDown("slow");
					$("#readMoreAsideTop").show();
					$("#readMoreAsideTop").hide();
				}
			
				$("#readLessAsideTop").click(hideTextAsideTop);
					function hideTextAsideTop(){
						$("#readLessAsideTop").slideUp("slow");
						$("#readLessAsideTop").hide();
						$("#readLessAsideTop").show();
						event.preventDefault();
					}
					
	
			$("#readlessAsideBottom").hide();
			$("#readMoreAsideBottom").click(showTextAsideBottom);		
					function showTextAsideBottom(){
						$("#readMoreAsideBottom").slideDown("slow");
						$("#readMoreAsideBottom").show();
						$("#readMoreAsideBottom").hide();
					}
			
			$("#readLessAsideBottom").click(hideTextAsideBottom);			
					function hideTextAsideBottom(){
						$("#readLessAsideBottom").slideUp("slow");
						$("#readLessAsideBottom").hide();
						$("#readLessAsideBottom").show();
						event.preventDefault();
					}
					
	
				
				//submit form
				$("#formContainer").hide();
						$("#signUpNow").click(function(){
							$("#formContainer").toggle("slow", function(){
							});
							$("#signUpNow").hide();
							});


						$( ".signupbtn" ).click(function() {
							$( "#testForm" ).submit();
						});

						$( "#testForm" ).submit(function( event ) {
							alert( "Submitted Successfully" );
							event.preventDefault();
						});

						$(".cancelbtn").click(function(){
							$("#formContainer").slideUp("slow");
							$("#signUpNow").show();
				});


	
});	




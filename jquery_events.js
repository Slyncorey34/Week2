// jQuery Workshop Dec. 9: Username/Password Check, MadLibs, Birthday Check:
// $(document).ready(function(){

// 	$("form").submit(function(){
		
// 		if( $("#password").val().length< 8 ){
// 		alert('password must be at least 8 charcters');
//   		return false;
//   		}

//   		else if ( $("#username").val() == "") {
// 	  	alert("Username can't be blank");
// 	  	return false;
// 	  }
// 	  else {
// 	  	alert("looks complete");
// 	  	return false;
// 	  }
// 	});
 

// });
// The code above this comment line is perfect!//
$(document).ready(function(){
	
	$("form").submit(function(){
	console.log ("The" + $("#adj").val() + ($("#noun").val() + $("#verb").val() + $("#adv").val()  ) );
	return false;
	}
	)
});
// The code above works, but figure out a way to enter a space " " between each word//
// 		BIRTHDAY CHECK //
$(document).ready(function(){
	
	$("form").submit(function()
	if()	
		)





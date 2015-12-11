
$(document).ready(function ()  {
  setInterval(function() {

  	var dateTime = new Date();
  	var seconds = dateTime.getSeconds();

  	$("#seconds").text(dateTime.getSeconds() );
  		
  		if (seconds%2 == 0) {
		console.log("your second is even: " + seconds);
			$("body").css("background-color","orange");
			}
		else {$("body").css("background-color","pink");
			 }
	}
  	// $("#hours").text(dateTime.getHours()  );
  	// $("#minutes").text(dateTime.getMinutes() );
  	// $("#milliseconds").text(dateTime.getMilliseconds() );

  }, 1000) ;






  //   var dateTime = new Date();
  //   var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
  //   $("#milliseconds").text(dateTime.getMilliseconds());
  //   $("#seconds").text(dateTime.getSeconds());
  //   $("#minutes").text(minutesTwoDigitsWithLeadingZero);
  //   $("#hours").text(dateTime.getHours());
  // },100)

})
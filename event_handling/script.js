$(document).ready(function () {	

	$('form').on('submit',function (e)  {
		// console.log( $("input").val() );
		e.preventDefault();
		

		var text= $('input').val();
		$("ul").append('<li>' + text + '</li>');

		$("#itemDescription").val('');
	}

	)
});
// When you click a list item,
$("li").on('click',function(){
	$('li').bind(function() {

	});
	}
	)









//   var $newItemForm = $('#newItemForm');
// listItems is a variable with a 'built in selector' which is why it doesn't have the $
//   $listItems.on('click', function(){
//     $(this).animate();
//   })

//  $newItemForm.on('submit', function(e) {       // When a new item is submitted
//    // e.preventDefault();                         // Prevent form being submitted
//    var text = $('input').val();           // Get value of text input
//    $('ul').append('<li>' + text + '</li>');      // Add item to end of the list
//  $('input').val('');                    // Empty the text input
                        
//  });

// });
//prevent page from reloading when clicking:
$("a").click(function(event){
  event.preventDefault();
});

$(document).ready(function(){
	//define variables 
	$('#read1').click(showLink1);
	$('.readless').click(showLink2);
	$('#learnbar').click(showLink3);

	//define hidden 
	$('#show1').hide();
	$('.readless').hide();
	$('#learnmoretext').hide();

	//define function
	function showLink1() {
	  $('#show1').slideToggle();
	  $('.readmore').hide();
	  $('.readless').show();
	}

	function showLink2() {
	 $('.readless').hide();
	 $('#show1').hide();
	 $('.readmore').show();
	}

	function showLink3() {
	 $('#learnmoretext').slideToggle();
	 $('#learnbar').hide();
	}
});

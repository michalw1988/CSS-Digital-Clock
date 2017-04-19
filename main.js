$(document).ready(function () {
	// keeping the clock updated
	setInterval(function () {
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var time = {
			'd1': 0,
			'd2': 0,
			'd3': 0,
			'd4': 0,
			'd5': 0,
			'd6': 0,
		}
		
		// calculating every single digit:
		// hours
		if (hours < 10){
			time.d1 = 0;
			time.d2 = hours;
		} else {
			time.d1 = Math.floor(hours/10);
			time.d2 = hours%10;
		}
		// minutes
		if (minutes < 10){
			time.d3 = 0;
			time.d4 = minutes;
		} else {
			time.d3 = Math.floor(minutes/10);
			time.d4 = minutes%10;
		}
		// seconds
		if (seconds < 10){
			time.d5 = 0;
			time.d6 = seconds;
		} else {
			time.d5 = Math.floor(seconds/10);
			time.d6 = seconds%10;
		}
		
		// making the dots blink
		$('.dot').toggleClass('inactive');
		
		// clearing all 'inactive' classes so I could add them only when needed for given time
		$('.block1, .block2').removeClass('inactive');
		
		// adding 'inactive' classes for every digit
		for (var i in time){
			switch(time[i]) {
				case 0:
					$('.'+i+'.e2').addClass('inactive');
					break;
				case 1:
					$('.'+i+'.e1, .'+i+'.e2, .'+i+'.e3, .'+i+'.e4, .'+i+'.e6').addClass('inactive');
					break;
				case 2:
					$('.'+i+'.e4, .'+i+'.e7').addClass('inactive');
					break;
				case 3:
					$('.'+i+'.e4, .'+i+'.e6').addClass('inactive');
					break;
				case 4:
					$('.'+i+'.e1, .'+i+'.e3, .'+i+'.e6').addClass('inactive');
					break;
				case 5:
					$('.'+i+'.e5, .'+i+'.e6').addClass('inactive');
					break;
				case 6:
					$('.'+i+'.e5').addClass('inactive');
					break;
				case 7:
					$('.'+i+'.e2, .'+i+'.e3, .'+i+'.e4, .'+i+'.e6').addClass('inactive');
					break;
				case 8:
					break;
				case 9:
					$('.'+i+'.e6').addClass('inactive');
					break;
				default:
					break;
			} 
		}
	}, 1000);
	
	
	
	// changing clock color to green
	$('#greenButton').click(function(){
		$('#greenButton').addClass('active');
		$('#redButton').removeClass('active');
		$('#yellowButton').removeClass('active');
		$('#blueButton').removeClass('active');
		
		$('#colorStylesheet').attr('href', 'styleGreen.css');
		return false;
	});
	
	// changing clock color to red
	$('#redButton').click(function(){
		$('#greenButton').removeClass('active');
		$('#redButton').addClass('active');
		$('#yellowButton').removeClass('active');
		$('#blueButton').removeClass('active');
		
		$('#colorStylesheet').attr('href', 'styleRed.css');
		return false;
	});
	
	// changing clock color to yellow
	$('#yellowButton').click(function(){
		$('#greenButton').removeClass('active');
		$('#redButton').removeClass('active');
		$('#yellowButton').addClass('active');
		$('#blueButton').removeClass('active');
		
		$('#colorStylesheet').attr('href', 'styleYellow.css');
		return false;
	});
	
	// changing clock color to blue
	$('#blueButton').click(function(){
		$('#greenButton').removeClass('active');
		$('#redButton').removeClass('active');
		$('#yellowButton').removeClass('active');
		$('#blueButton').addClass('active');
		
		$('#colorStylesheet').attr('href', 'styleBlue.css');
		return false;
	});
	
	// toggling the arrow symbol when showing / hiding the panel
	$('#siteInfoLink').click(function(){
    $('#siteInfoLink > span').toggleClass('glyphicon-menu-down').toggleClass('glyphicon-menu-up');
	});
	
});
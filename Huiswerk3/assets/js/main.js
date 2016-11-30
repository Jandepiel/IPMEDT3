$(document).ready(function()
{
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	
	var bank1 = document.getElementById('bank1');
	
	
	box1.addEventListener('click', function()
	{
		$(bank1).attr('material','color: blue');
	});

	box2.addEventListener('click', function()
	{
		$(bank1).attr('material','color: red');
	});
	
	box3.addEventListener('click', function()
	{
		$(bank1).attr('material','color: yellow');
	});
	
	
	
	// $(box).attr('width','100');
	
	
	
});





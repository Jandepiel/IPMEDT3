$(document).ready(function()
{
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	
	var box11 = document.getElementById('box11');
	var box22 = document.getElementById('box22');
	var box33 = document.getElementById('box33');
	
	var bank1 = document.getElementById('bank1');
	var behang = document.getElementById('behang');
	
	
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
	
	
	
	
	box11.addEventListener('click', function()
	{
		$(behang).attr('color','blue');
	});

	box22.addEventListener('click', function()
	{
		$(behang).attr('color','red');
	});
	
	box33.addEventListener('click', function()
	{
		$(behang).attr('color','yellow');
	});
	
	
	
	// $(box).attr('width','100');
	
	
	
});





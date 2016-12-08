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
	
	
	var box11 = document.getElementById('box11');
	var box22 = document.getElementById('box22');
	var box33 = document.getElementById('box33');
	
	// var behang = document.getElementByClass('behang');
	
	var behang1 = document.getElementById('behang1');
	var behang2 = document.getElementById('behang2');
	var behang3 = document.getElementById('behang3');
	var behang4 = document.getElementById('behang4');
	
	box11.addEventListener('click', function()
	{
		$(behang1).attr('src','#wall1');
		$(behang2).attr('src','#wall1');
		$(behang3).attr('src','#wall1');
		$(behang4).attr('src','#wall1');
	});

	box22.addEventListener('click', function()
	{
		$(behang1).attr('src','#wall2');
		$(behang2).attr('src','#wall2');
		$(behang3).attr('src','#wall2');
		$(behang4).attr('src','#wall2');
	});
	
	box33.addEventListener('click', function()
	{
		$(behang1).attr('src','#wall3');
		$(behang2).attr('src','#wall3');
		$(behang3).attr('src','#wall3');
		$(behang4).attr('src','#wall3');
	});
	// $(box).attr('width','100');
	
	
	

	var object2 = document.getElementById('object2');

	var box111 = document.getElementById('box111');
	var box222 = document.getElementById('box222');

	box111.addEventListener('click', function()
	{
		$(object1).attr('src','#bank');
		$(box111).attr('opacity','0');
	});
	
	
	box222.addEventListener('click', function()
	{
		$(object2).attr('src','#table');
		$(box222).attr('opacity','0');
	});
	
	
	

	
});





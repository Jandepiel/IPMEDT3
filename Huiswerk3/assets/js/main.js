$(document).ready(function()
{
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	
	var audio1 = new Audio('assets/audio/Sound1.mp3')
	var audio2 = new Audio('assets/audio/Sound2.mp3')
	var audio3 = new Audio('assets/audio/StartPacMan.mp3')
	
	box1.addEventListener('mouseenter', function()
	{
		audio1.play();
	});
	
	box1.addEventListener('mouseleave', function()
	{
		audio1.pause();
	});
	
	box2.addEventListener('mouseenter', function()
	{
		audio2.play();
	});
	
	box2.addEventListener('mouseleave', function()
	{
		audio2.pause();
	});
	
	box3.addEventListener('mouseenter', function()
	{
		audio3.play();
	});
	
	box3.addEventListener('mouseleave', function()
	{
		audio3.pause();
	});
	
	
	
	
	
	
	
});




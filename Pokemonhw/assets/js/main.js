$(function(){
	var data;
	var dataString;
	var j = 0;
	var a = new Array(721);
	d = new Date();
	var h = 1;
	
	
	
	
	for(var i=0;i<a.length;i++){
		a[i] = i + 1; 
	}
	
	for(var i = 1; i<4; i++)
	{
		
		//events
		document.getElementById('box' + i).addEventListener('mouseenter',function()
		{
			getData(this);
			// $(this).attr('color','red');
		});
		document.getElementById('box' + i).addEventListener('mouseleave',function()
		{
			// $(this).attr('color','blue');
		});
	}
	
	for(var i = 4; i<10; i++)
	{
		
		//events
		document.getElementById('box' + i).addEventListener('mouseenter',function()
		{
			getData2(this);
			// $(this).attr('color','red');
		});
		document.getElementById('box' + i).addEventListener('mouseleave',function()
		{
			// $(this).attr('color','blue');
		});
	}
	
	
	
	
	function getData(data)
	{
		switch (data.id)
		{
			case "box1": 
				j++;
				if (j == 721) {	j = 0;	}
				h = j + 1;
				ranNum = a[j];
				console.log(ranNum);
				dataString = $(data).attr('data')  + ranNum.toString();
			break;
			
			case "box2": 
				j--;
				if (j == -1) {	j = 720;	}
				h = j + 1;
				ranNum = a[j];
				console.log(ranNum);
				dataString = $(data).attr('data')  + ranNum.toString();
			break;
			
			case "box3": 
				j = h - 1;
				ranNum = a[h - 1];
				console.log(ranNum);
				dataString = $(data).attr('data')  + ranNum.toString();
			break;
			
	
		}
		
		$.ajax({
			url: 'http://pokeapi.co/api/v2' + dataString,
			method: 'GET', // or GET
			dataType : "json",
			success: function(msg) {
				console.log(msg);
				
				var t = msg['height'];
				var u = msg['weight'];
				
				var v = msg['types'][0]['type']['name'];
				var w = msg['types'][1] !== undefined ? msg['types'][1]['type']['name'] : msg['types'][0]['type']['name'];
				
				var x = msg['name'] !== undefined ? msg['name'] : msg['title'];
				var y = msg['sprites']['front_default'];
				var z = msg['id'];
				
				v = v.toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
				});
				
				w = w.toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
				});
				
				x = x.toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
				});
				
				if (z < 10) {
					$('#number').attr('text','text: #00' + z);
				} else if (z < 100) {
					$('#number').attr('text','text: #0' + z);
				} else {
					$('#number').attr('text','text: #' + z);
				}
				
				if (h < 10) {
					$('#numberinput').attr('text','text: #00' + h);
				} else if (h < 100) {
					$('#numberinput').attr('text','text: #0' + h);
				} else {
					$('#numberinput').attr('text','text: #' + h);
				}
					
					
				if (x.length < 16) {
					$('#text').attr('scale','5 5 5');
					$('#text').attr('text','text: ' + x);
				} else {
					$('#text').attr('scale','3 3 3');
					$('#text').attr('text','text: ' + x);
				}	
					
				$("#sprites").removeAttr("src").attr('src', '' + y );
				
				t /= 10;
				t = t.toFixed(1);
	
				u /= 10;
				u = u.toFixed(1);
				
				$('#height').attr('text','text: Height:  ' + t + ' m');
				$('#weight').attr('text','text: Weight:  ' + u + ' kg');
				
				$('#type1').attr('text','text: ' + v);
				
				if (v == w) {

					$('#type2').attr('text','text: ');
				} else {
					$('#type2').attr('text','text: ' + w);
				}
				
				if (v == "Normal") {
					$('#type1').attr('material','color: #8a8a59');
				} else if (v == "Fire") {
					$('#type1').attr('material','color: #f08030');
				} else if (v == "Water") {
					$('#type1').attr('material','color: #6890f0');
				} else if (v == "Electric") {
					$('#type1').attr('material','color: #f8d030');
				} else if (v == "Grass") {
					$('#type1').attr('material','color: #78c850');
				} else if (v == "Ice") {
					$('#type1').attr('material','color: #98d8d8');
				} else if (v == "Fighting") {
					$('#type1').attr('material','color: #c03028');
				} else if (v == "Poison") {
					$('#type1').attr('material','color: #a040a0');
				} else if (v == "Ground") {
					$('#type1').attr('material','color: #e0c068');
				} else if (v == "Flying") {
					$('#type1').attr('material','color: #a890f0');
				} else if (v == "Psychic") {
					$('#type1').attr('material','color: #f85888');
				} else if (v == "Bug") {
					$('#type1').attr('material','color: #a8b820');
				} else if (v == "Rock") {
					$('#type1').attr('material','color: #b8a038');
				} else if (v == "Ghost") {
					$('#type1').attr('material','color: #705898');
				} else if (v == "Dragon") {
					$('#type1').attr('material','color: #7038f8');
				} else if (v == "Dark") {
					$('#type1').attr('material','color: #705848');
				} else if (v == "Steel") {
					$('#type1').attr('material','color: #b8b8d0');
				}  else {
					$('#type1').attr('material','color: #e898e8');
				}
				
				if (w == "Normal") {
					$('#type2').attr('material','color: #8a8a59');
				} else if (w == "Fire") {
					$('#type2').attr('material','color: #f08030');
				} else if (w == "Water") {
					$('#type2').attr('material','color: #6890f0');
				} else if (w == "Electric") {
					$('#type2').attr('material','color: #f8d030');
				} else if (w == "Grass") {
					$('#type2').attr('material','color: #78c850');
				} else if (w == "Ice") {
					$('#type2').attr('material','color: #98d8d8');
				} else if (w == "Fighting") {
					$('#type2').attr('material','color: #c03028');
				} else if (w == "Poison") {
					$('#type2').attr('material','color: #a040a0');
				} else if (w == "Ground") {
					$('#type2').attr('material','color: #e0c068');
				} else if (w == "Flying") {
					$('#type2').attr('material','color: #a890f0');
				} else if (w == "Psychic") {
					$('#type2').attr('material','color: #f85888');
				} else if (w == "Bug") {
					$('#type2').attr('material','color: #a8b820');
				} else if (w == "Rock") {
					$('#type2').attr('material','color: #b8a038');
				} else if (w == "Ghost") {
					$('#type2').attr('material','color: #705898');
				} else if (w == "Dragon") {
					$('#type2').attr('material','color: #7038f8');
				} else if (w == "Dark") {
					$('#type2').attr('material','color: #705848');
				} else if (w == "Steel") {
					$('#type2').attr('material','color: #b8b8d0');
				}  else if (w == "Fairy") {
					$('#type2').attr('material','color: #e898e8');
				} else {
					$('#type2').attr('material','color: #000000');
				}
				
				
				
				console.log(v);
				console.log(w);
				console.log(x);
				console.log(y);
				console.log(z);
				
				// $('#images').append("<img id='sprite" + (j + 1) + "' src='" + y + "'>");
				// $("#sprites").removeAttr("src").attr('src', '#sprite' + (j + 1));
			}
		});
	}
	
	function getData2(data)
	{
		switch (data.id)
		{
			case "box4": 
				h += 100;
				if (h > 721) {	h = 1;	}
				console.log(h);
				
				if (h < 10) {
					$('#numberinput').attr('text','text: #00' + h);
				} else if (h < 100) {
					$('#numberinput').attr('text','text: #0' + h);
				} else {
					$('#numberinput').attr('text','text: #' + h);
				}
				
			break;
			
			case "box5": 
				h += 10;
				if (h > 721) {	h = 1;	}
				console.log(h);
				
				if (h < 10) {
					$('#numberinput').attr('text','text: #00' + h);
				} else if (h < 100) {
					$('#numberinput').attr('text','text: #0' + h);
				} else {
					$('#numberinput').attr('text','text: #' + h);
				}
			break;
			
			case "box6": 
				h += 1;
				if (h > 721) {	h = 1;	}
				console.log(h);
				
				if (h < 10) {
					$('#numberinput').attr('text','text: #00' + h);
				} else if (h < 100) {
					$('#numberinput').attr('text','text: #0' + h);
				} else {
					$('#numberinput').attr('text','text: #' + h);
				}
			break;
			
			case "box7": 
				h -= 100;
				if (h < 0) {	h = 721;	}
				console.log(h);
				
				if (h < 10) {
					$('#numberinput').attr('text','text: #00' + h);
				} else if (h < 100) {
					$('#numberinput').attr('text','text: #0' + h);
				} else {
					$('#numberinput').attr('text','text: #' + h);
				}
			break;
			
			case "box8": 
				h -= 10;
				if (h < 0) {	h = 721;	}
				console.log(h);
				
				if (h < 10) {
					$('#numberinput').attr('text','text: #00' + h);
				} else if (h < 100) {
					$('#numberinput').attr('text','text: #0' + h);
				} else {
					$('#numberinput').attr('text','text: #' + h);
				}
			break;
			
			case "box9": 
				h -= 1;
				if (h < 0) {	h = 721;	}
				console.log(h);
				
				if (h < 10) {
					$('#numberinput').attr('text','text: #00' + h);
				} else if (h < 100) {
					$('#numberinput').attr('text','text: #0' + h);
				} else {
					$('#numberinput').attr('text','text: #' + h);
				}
			break;
		}
	}
});


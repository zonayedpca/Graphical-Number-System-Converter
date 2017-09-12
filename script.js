function converter(num, divide) {
	this.num = num;
	this.divide = divide;
}

converter.prototype.numCon = function() {
	var rem;

	var getDom = {
		normalResult: document.querySelector('.normal')
	}

	if(this.num <= 1) {
		var rem = this.num % this.divide;
		this.num = Math.trunc(this.num / this.divide);
		console.log('Result: ' + this.num + ' and Remaindar: ' + rem);
	}

	while(this.num > 1) {
		var hexCon;
		var rem = this.num % this.divide;
		this.num = Math.trunc(this.num / this.divide);
		if(this.divide == 16) {
			hexCon = rem;
			switch(hexCon) {
				case 10:
					hexCon = 'A';
					break;
				case 11: 
					hexCon = 'B';
					break;
				case 12: 
					hexCon = 'C';
					break;
				case 13: 
					hexCon = 'D';
					break;		
				case 14: 
					hexCon = 'E';
					break;
				case 15: 
					hexCon = 'F';
					break;
			}	
		}
		console.log('Result: ' + this.num + ' and Remaindar: ' + rem);
		getDom.normalResult.innerHTML += '<li class="num">'+ this.divide + '</li>';
		getDom.normalResult.innerHTML += '<li class="normalRes">'+ this.num + '</li>';
		//getDom.normalResult.innerHTML += '<li class="normalRem">'+ rem + '</li><br>';
		if(rem > 9) {
			getDom.normalResult.innerHTML += '<li class="normalRem">'+ hexCon + '</li><br>';
		} else {
			getDom.normalResult.innerHTML += '<li class="normalRem">'+ rem + '</li><br>';
		}
	}

	return {
		retDom: function() {
			return getDom;
		}
	}
}

var calculator = function(event) {
	event.preventDefault();
	document.querySelector('.normal').innerHTML = '';
	document.querySelector('.normal').innerHTML += '<li class="num">'+ 'D' + '</li>';
	document.querySelector('.normal').innerHTML += '<li class="normalRes">'+ 'R' + '</li>';
	document.querySelector('.normal').innerHTML += '<li class="normalRem">'+ '%' + '</li><br>';
	var num = document.querySelector('#num').value;
    var div = document.querySelector('#numSource').value
	var decToBi = new converter(num, div);
	decToBi.numCon();
}

document.querySelector('.btn-submit').addEventListener('click', function() {
	calculator(event);
});

document.addEventListener('keypress', function(event) {
	if(event.keyCode === 13) {
		calculator(event);
	}
});




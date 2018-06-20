
var data = {

		
		ratioMilk : 100,
		ratioWater : 100,
		foam : false,
		//coffee : 'linear-gradient(0deg, #4e2210 '+this.ratioMilk+'%, #dbba87 100%)',

};





var app = {

	init: function () {
		this.addMilk();
		this.addWater();
		this.addMilkFoam();
	},

	addMilk: function(){

		var milkSlider = document.getElementById('milk-slider'); 
            milkSlider.addEventListener('mousemove', function() {			
			data.ratioMilk = milkSlider.value  ; 
			render.renderMilk();          
		});

	},

	addWater: function() {			
		var waterSlider = document.getElementById('water-slider');
       	    waterSlider.addEventListener('mousemove',function() {
	    	data.ratioWater = waterSlider.value ;
	    	render.renderWater();
	     });
	},

	addMilkFoam: function(){
		var milkFoam = document.getElementById('milk-foam');
            milkFoam.addEventListener('click',function(){
			    if(data.foam  === true) {				  	
				  	data.foam = false;
				  	render.renderFoam();
				  	return;
				 }
				data.foam = true; 
				render.renderFoam();
		});

	},

};

var render = {

	renderMilk: function() {


		var coffee = document.getElementById('coffee');
		coffee.style.background = 
		'linear-gradient(0deg, #4e2210 '+data.ratioMilk+'%, #dbba87 100%)';	



		if(data.ratioWater != 100) {

	
			coffee.style.background = 
			'linear-gradient(0deg, #4e2210 0%, #750909 '+data.ratioMilk+'%, #dbba87 100%)';	
            
		}
	},

	renderWater: function() {
        var coffee = document.getElementById('coffee');	
 	    coffee.style.background = 
 	    'linear-gradient(0deg, #4e2210 '+data.ratioWater+'%, #750909 100%)';		
	

		if(data.ratioMilk != 100) {

	
			coffee.style.background = 
			'linear-gradient(0deg, #4e2210 0%, #750909 '+data.ratioWater+'%, #dbba87 100%)';	
            
		}


	},

	renderFoam: function() {
			        
        if( data.foam === true){	       		
			var parent = document.getElementById('mag-coffee');	
			var child = document.createElement('child');
			    child.setAttribute('id','bubble');	

			parent.appendChild(child);			    

	    } if ( data.foam === false) {	    
			var child = document.getElementById('bubble')
		    child.parentNode.removeChild(child);	    
	    }
    },
};

app.init();












// var beerRange = document.getElementById('beer-range');
// var beer = document.getElementById('beer');

// beerRange.addEventListener('mousemove', function() {
	

// 	beer.style.background = 'linear-gradient(0deg, #ff9c00 '+beerRange.value+'%, #ffffcc 100%)';

		

// 	if(beerRange.value == 30){

//     var div = document.createElement('div');
//     div.className = 'bubble';
//     div.innerHTML ='<div ></div>';
       

//     document.getElementById('mag-beer').appendChild(div);

// 	}
	
// })



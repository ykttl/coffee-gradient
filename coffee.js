
var data = {

		milk: false,
		foam : false,
		coffee : '',
		counter: 100,
		counter2:1,
		

};


var app = {

	init: function () {
	
		this.addMilkFoam();
		this.addMilk();
		
		
	},


	addMilkFoam: function(){
		var milkFoam = document.getElementById('milk-foam');
            milkFoam.addEventListener('click',function(){
			    if(data.foam  === true) {				  	
				  	data.foam = false;
				  	render.renderFoam();
				  	render.name();
				  	return;
				 }
				data.foam = true; 
				render.renderFoam();
				render.name();
		});

	},

	addMilk: function() {
		var milkClick = document.getElementById('milk-check');
	    milkClick.addEventListener('click', function(){
             if(data.milk  === true) {
				  	data.milk = false;				
				  	render.renderMilk();
				  	render.name();
				  	 counter = 100;
				  return;
				 }
				
		   data.milk = true;
	 	   render.renderMilk();
	 	   render.name();
		})
	},

	
};


var render = {
	name: function(){
			
			var name = document.getElementById('coffee-name');

			if(data.milk === true && data.foam === true){ 
			    data.coffee="Latte";
				name.textContent =data.coffee ;
			
			} 

			if(data.milk === true && data.foam === false) {
				data.coffee="Flat White";
				name.textContent =data.coffee ;
			}
			if(data.milk === false && data.foam === true) {
                data.coffee="Macchiato";
				name.textContent = data.coffee;
			}
			if(data.milk === false && data.foam === false) {
                data.coffee="Espresso";
				name.textContent = data.coffee;
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

    renderMilk: function(){

		data.counter = 100;
		
		var coffee = document.getElementById('coffee');	

		//function xxx(){

			if(data.milk === true){ 
				
                 render.repeat();
                 render.test();
			}

			if(data.milk === false) { 

				render.test();
		         coffee.style.background = 
			 	     'linear-gradient(0deg, #4e2210 '+ 100+'%, #dbba87 100%)';	


			}
			// bbb();
		//};
    },

    repeat: function(){

    	setTimeout(function abe(){
					     
			      if(data.counter === 0) {   
			 	   	return; 
			 	   }			 	  

	  			 // coffee.style.background = 
			 	  //    'linear-gradient(0deg, #4e2210 '+ data.counter+'%, #dbba87 100%)';	
			 	     data.counter-= 0.3;		

			 	  render.repeat(); 

			 	},5);			
    },

    test: function() {

    	setTimeout(function (){
					   
				if(data.counter2 === 200) {   
							 	   	return; 
					 }
				document.getElementById('coffee-1').style.background = 
				'linear-gradient(0deg, #4e2210 '+ data.counter+'%, #dbba87 100%)';	

			 	  document.getElementById('coffee-1').style.height =  data.counter2  + 'px';
			 	  
			 		
			 	  data.counter2++;	  			

			 	  render.test(); 

			 	},5);		
    }
};


app.init();

// bbb();
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



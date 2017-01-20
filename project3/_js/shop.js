
$(document).ready(function(){
	document.getElementById('cart').addEventListener('submit', estimateTotal);

	function estimateTotal(event){
		event.preventDefault();

		if(document.getElementById('province').value === ''){
			alert('Please choose your shipping province.');

			document.getElementById('province').focus();
		}

		var red = parseInt(document.getElementById('txt_red').value,10) || 0, 
			white = parseInt(document.getElementById('txt_white').value,10) || 0,
			champagne = parseInt(document.getElementById('txt_champagne').value,10) || 0, 
			userProvince = document.getElementById('province').value;
			

		var methods = document.getElementById('cart').shipping,
			shippingMethod;

		for(var i = 0; i < methods.length; i++){
			if(methods[i].checked == true){
				shippingMethod = methods[i].value;
			} 
		}

		var taxFactor = 0; //tax depending on the shipping province

		if(userProvince === 'quebec'){
			taxFactor = 1.14975;
		}
		else if(userProvince === 'ontario'){
			taxFactor = 1.13;
		}
		else if(userProvince === 'alberta'){
			taxFactor = 1.05;
		}

		//pickup, mail, ups
		var shippingCostBottle = 0;
		switch(shippingMethod){
			case 'pickup':
				shippingCostBottle = 0;
				break;
			case 'mail':
				shippingCostBottle = 2;
				break;
			case 'ups':
				shippingCostBottle = 3;
				break;
		}

		var totalBottle = red + white + champagne,
			shippingCost = totalBottle*shippingCostBottle;

		var subtotal = ((red * 20) + (white * 15) + (champagne * 12)) * taxFactor;

		var estimate = "$" + (shippingCost + subtotal).toFixed(2);

		document.getElementById('total').value = estimate;

		document.getElementById('results').innerHTML = 'Total bottles: '+ totalBottle + '<br>';
		document.getElementById('results').innerHTML += 'Total shipping: $' + shippingCost.toFixed(2) + '<br>';
		document.getElementById('results').innerHTML += 'Tax: ' + ((taxFactor-1)*100).toFixed(2) + '%';
		
	}	

});


// show and hide sections of a form
function displayForm() {
    document.getElementById("feature").onclick = function() {
        if (document.getElementById("feature").checked) {
            // use CSS style to show it
            document.getElementById("featureSelection").style.display = "block";
        } else {
            // hide the div
            document.getElementById("featureSelection").style.display = "none";
        }
    };
    // now hide it on the initial page load.
    document.getElementById("featureSelection").style.display = "none";
}

window.onload =  function() {
	displayForm();
	//include the year in the footer
	$("#copyrightYear").html(new Date().getFullYear()); 

};

document.addEventListener('DOMContentLoaded',
	function() {
		document.getElementById('tab-group').className = 'ready';

	/*
	var tab1 = document.getElementById('tab-header-1');
		tab2 = document.getElementById('tab-header-2');
		tab3 = document.getElementById('tab-header-3');

		tab1.addEventListener('click', activateTab);
		tab2.addEventListener('click', activateTab);
		tab3.addEventListener('click', activateTab);
	*/
		var headerClass = 'tab-header',
			contentClass = 'tab-content';

		var tabHeader = document.getElementsByClassName(headerClass);

		for (var i = 0; i < tabHeader.length; i++){
			tabHeader[i].addEventListener('click', activateTab);
		}


		function activateTab(event){
			var myID = this.id; // tab-header-1,...
				contentID = myID.replace('header','content'); // tab-content-1,...

			deactivateAllTabs();

			document.getElementById(myID).className = headerClass + ' active';
			document.getElementById(contentID).className = contentClass + ' active';
		}

		function deactivateAllTabs(){
		/*	document.getElementById('tab-header-1').className = 'tab-header';
			document.getElementById('tab-header-2').className = 'tab-header';
			document.getElementById('tab-header-3').className = 'tab-header';
			document.getElementById('tab-content-1').className = 'tab-content';
			document.getElementById('tab-content-2').className = 'tab-content';
			document.getElementById('tab-content-3').className = 'tab-content';
		*/	
			var tabHeader = document.getElementsByClassName(headerClass);
			var tabContent = document.getElementsByClassName(contentClass);	
			
			for(i = 0; i < tabHeader.length; i++){
				tabHeader[i].className = headerClass;
				tabContent[i].className = contentClass;
			}

	}



});

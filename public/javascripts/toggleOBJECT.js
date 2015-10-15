 function toggleOBJECT(butonul,continut) {                          
    var myOBJECT = document.getElementById(continut);          	// get the OBJECT 
    var displaySetting = myOBJECT.style.display;				// get the current value of the OBJECT display property
    var OBJECTButton = document.getElementById(butonul);   		// also get the OJBECT ACTIVATION BUTTON, so we can change what it says 
    if (displaySetting == 'inline-block') { 							// now toggle the OBJECT and the BUTTON TEXT, depending on current state
      myOBJECT.style.display = 'none';							// OBJECT is visible. HIDE IT
 //     OBJECTButton.innerHTML = 'Show clock';      				// change BUTTON TEXT
    }
    else { 
      myOBJECT.style.display = 'inline-block';							// OBJECT is hidden. SHOW IT
 //     OBJECTButton.innerHTML = 'Hide clock';      				// change BUTTON TEXT
    }
  } 
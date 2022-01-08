const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
     counter.innerHTML = 0;

     const updateValue=()=>{
         const startTarget =  Number(counter.innerHTML);
         const finalValue = +counter.getAttribute('data-target');

         const incBy = finalValue/100;

	     if (startTarget < finalValue) {
	         counter.innerHTML = `${Math.round(startTarget + incBy)}`;

	         setTimeout(updateValue, 10)
	     }
	     else{
	     	counter.innerHTML = finalValue;
	     } 
     } 

     updateValue(); 
})